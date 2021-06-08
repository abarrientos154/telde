'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Helpers = use('Helpers')
const mkdirp = use('mkdirp')
const Producto = use('App/Models/Producto')
const Flow = use('App/Models/Flow')
const Compras = use('App/Models/ComprasProducto')
const Pedido = use('App/Models/Compra')
const Comentario = use('App/Models/Comentario')
const Monedero = use('App/Models/Monedero')
const fs = require('fs')
const { validate } = use("Validator")
var randomize = require('randomatic')
const moment = require("moment")
/**
 * Resourceful controller for interacting with productos
 */
class ProductoController {

  async productosByProveedorId ({ response, params }) {
    let filter = (await Producto.query().where({ proveedor_id: params.proveedor_id}).with('datos_proveedor').with('categoria_info').fetch()).toJSON()
    let productos = filter.filter(v => !v.disable)
    let enviar = productos.map(v => {
      let entro = false
      if (v.oferta) {
        var diferencia =  moment().diff(v.ofertaDate, 'days')
        entro = true
      }
      return {
        ...v,
        oferta: entro ? (diferencia < 0 ? false : true) : null
      }
    })
    response.send(enviar)
  }

  async productosVendidos ({ response, params, auth }) {
    let user = await auth.getUser()
    let productos = (await Compras.query().where({ proveedor_id: String(user._id) }).with('producto').orderBy('created_at', 'desc').fetch()).toJSON()
    response.send(productos)
  }
  /**
   * Show a list of all productos.
   * GET productos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ response, auth }) {
    let user = await auth.getUser()
    let filter = (await Producto.query().where({ proveedor_id: user._id.toString()}).with('datos_proveedor').with('categoria_info').fetch()).toJSON()
    let productos = filter.filter(v => !v.disable)
    let enviar = productos.map(v => {
      let entro = false
      if (v.oferta) {
        var diferencia =  moment().diff(v.ofertaDate, 'days')
        entro = true
      }
      return {
        ...v,
        oferta: entro ? (diferencia < 0 ? false : true) : null
        //categoria: categoria.nombre
      }
    })
    response.send(enviar)
  }

  async allProductos ({ response, auth }) {
    let filter = (await Producto.query().where({}).with('datos_proveedor').fetch()).toJSON()
    let productos = filter.filter(v => !v.disable && v.datos_proveedor.status === 2 && v.datos_proveedor.enable)
    let enviar = productos.map(v => {
      let entro = false
      if (v.oferta) {
        var diferencia =  moment().diff(v.ofertaDate, 'days')
        entro = true
      }
      return {
        ...v,
        oferta: entro ? (diferencia < 0 ? false : true) : null
        //categoria: categoria.nombre
      }
    })
    response.send(enviar)
  }

  async todo ({ response, auth }) {
    let filter = (await Producto.query().where({}).with('datos_proveedor').fetch()).toJSON()
    response.send(filter)
  }

  /**
   * Render a form to be used for creating a new producto.
   * GET productos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new producto.
   * POST productos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    let user = await auth.getUser()
    var dat = request.only(['dat'])
    dat = JSON.parse(dat.dat)
    const validation = await validate(dat, Producto.fieldValidationRules())
    if (validation.fails()) {
      response.unprocessableEntity(validation.messages())
    } else {
      let images = []
      if (dat.cantidadFiles > 0) {
        for (let i = 0; i < dat.cantidadFiles; i++) {
          let codeFile = randomize('Aa0', 30)
          const profilePic = request.file('files' + i, {
            types: ['image']
          })
          if (Helpers.appRoot('storage/uploads/productos')) {
            await profilePic.move(Helpers.appRoot('storage/uploads/productos'), {
              name: codeFile,
              overwrite: true
            })
          } else {
            mkdirp.sync(`${__dirname}/storage/Excel`)
          }
          if (!profilePic.moved()) {
            return profilePic.error()
          } else {
            images.push(codeFile)
          }
        }
      }
      delete dat.cantidadFiles
      dat.images = images
      dat.proveedor_id = user._id.toString()
      dat.rating = 0
      let guardar = await Producto.create(dat)
      const profilePic2 = request.file('perfil', {})
      if (Helpers.appRoot('storage/uploads/productos')) {
        await profilePic2.move(Helpers.appRoot('storage/uploads/productos'), {
          name: guardar._id.toString(),
          overwrite: true
        })
      } else {
        mkdirp.sync(`${__dirname}/storage/Excel`)
      }
      if (!profilePic2.moved()) {
        return profilePic2.error()
      }
      response.send(guardar)
    }
  }

  async comprarTransferencia ({ request, response, auth }) {
    const user = (await auth.getUser()).toJSON()
    let codeFile = randomize('Aa0', 30)
    var dat = request.only(['dat'])
    dat = JSON.parse(dat.dat)
    var carrito = dat.carrito
    var metodoPago = dat.pago
    const profilePic = request.file('files', {
      types: ['image'],
      size: '20mb'
    })
    if (Helpers.appRoot('storage/uploads/comprobantes')) {
      await profilePic.move(Helpers.appRoot('storage/uploads/comprobantes'), {
        name: codeFile,
        overwrite: true
      })
    } else {
      mkdirp.sync(`${__dirname}/storage/Excel`)
    }
    const data = { name: profilePic.fileName }
    if (!profilePic.moved()) {
      return profilePic.error()
    } else {
      for (let i = 0; i < carrito.length; i++) {
        var item = {
          producto: carrito[i]._id,
          comprador: user._id,
          tienda: carrito[i].proveedor_id,
          metodo_pago: metodoPago,
          comprobante: data.name,
          cantidad: carrito[i].cantidad_compra
        }
        var compra = await Compras.create(item)
        var cantidad = await Producto.query().where({_id: carrito[i]._id}).update({cantidad: carrito[i].cantidad})
        if (carrito[i].cantidad === 0) {
          var disable = await Producto.query().where({_id: carrito[i]._id}).update({disable: true})
        }
      }
    }
    response.send(true)
  }

  async comprarProductos ({ request, response }) {
    var data = request.all().dat
    var productos = request.all().carrito
    data.productos_total = productos.length
    data.status = 'En Local'
    var compra = await Pedido.create(data)
    var moneda = {
      tienda_id: compra.tienda_id,
      pedido_id: compra._id,
      type: 1,
      monto: compra.totalValor
    }
    var crearMoneda = await Monedero.create(moneda)
    for (let i = 0; i < productos.length; i++) {
      var dat = productos[i]
      dat.pedido_id = compra._id
      dat.producto_id = dat._id
      delete dat._id
      delete dat.cantidad
      var producto = await Compras.create(dat)
      var cantidad = await Producto.query().where({_id: productos[i]._id}).update({cantidad: productos[i].cantidad})
      if (productos[i].cantidad === 0) {
        var disable = await Producto.query().where({_id: productos[i]._id}).update({disable: true})
      }
    }
    response.send(true)
  }
  async reportes ({ params, response, auth }) {
    const user = (await auth.getUser()).toJSON()
    var data
    if (params.type == 1){
      data = (await Pedido.query().where({cliente_id: user._id}).with('productos').with('tienda').fetch()).toJSON()
      response.send(data.map(v => {
        return {
          ...v,
          tienda: v.tienda ? v.tienda.nombre : '',
          created_at: moment(v.created_at).format('DD-MM-YYYY')
        }
      }))
    } else {
      data = (await Pedido.query().where({tienda_id: user._id}).with('productos').with('cliente').fetch()).toJSON()
      response.send(data.map(v => {
        return {
          ...v,
          cliente: v.cliente ? v.cliente.name + ' ' + v.cliente.lastName : '',
          created_at: moment(v.created_at).format('DD-MM-YYYY')
        }
      }))
    }
  }

  async updateCompra ({ params, request, response }) {
    var stu = request.all().status
    const pedido =  await Pedido.query().where('_id', params.id_pedido).first()
    pedido.status = stu
    pedido.save()
    response.send(pedido)
  }

  async calificarTienda ({ request, response }) {
    var data = request.all()
    var comentario = await Comentario.create(data)
    response.send(comentario)
  }

  async comentariosTienda ({ response, auth }) {
    const user = (await auth.getUser()).toJSON()
    var data = (await Comentario.query().where({tienda_id: user._id}).with(['cliente', 'pedido']).fetch()).toJSON()
    response.send(data.map(v => {
      return {
        ...v,
        fecha_pedido: moment(v.pedido.created_at).format('DD-MM-YYYY')
      }
    }))
  }

  /**
   * Display a single producto.
   * GET productos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    response.send(await Producto.find(params.id))
  }

  /**
   * Render a form to update an existing producto.
   * GET productos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update producto details.
   * PUT or PATCH productos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let body = request.only(Producto.fillable())
    await Producto.query().where('_id', params.id).update(body)
    response.send(body)
  }

  /**
   * Delete a producto with id.
   * DELETE productos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let prod = await Producto.find(params.id)
    prod.delete()
    response.send(prod)
  }
}

module.exports = ProductoController
