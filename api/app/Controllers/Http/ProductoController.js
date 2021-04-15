'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Helpers = use('Helpers')
const mkdirp = use('mkdirp')
const Producto = use('App/Models/Producto')
const Flow = use('App/Models/Flow')
const Compras = use('App/Models/Compra')
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
    let productos = filter.filter(v => !v.disable && v.datos_proveedor.status === 1)
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
      let guardar = await Producto.create(dat)
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

  async comprarProductos ({ request, response, auth }) {
    const user = (await auth.getUser()).toJSON()
    var carrito = request.all().carrito
    var metodoPago = request.all().pago
    for (let i = 0; i < carrito.length; i++) {
      var dat = {
        producto: carrito[i]._id,
        comprador: user._id,
        tienda: carrito[i].proveedor_id,
        metodo_pago: metodoPago,
        cantidad: carrito[i].cantidad_compra
      }
      var compra = await Compras.create(dat)
      var cantidad = await Producto.query().where({_id: carrito[i]._id}).update({cantidad: carrito[i].cantidad})
      if (carrito[i].cantidad === 0) {
        var disable = await Producto.query().where({_id: carrito[i]._id}).update({disable: true})
      }
    }
    if (!request.all().token === true) {
      await Flow.query().where({token: request.all().token}).update({status: 1})
    }
    response.send(true)
  }
  async reportes ({ params, response, auth }) {
    const user = (await auth.getUser()).toJSON()
    var type = params.type
    var data
    if (type == 1){
      data = (await Compras.query().where({comprador: user._id}).with('productos').fetch()).toJSON()
    } else {
      data = (await Compras.query().where({tienda: user._id}).with('productos').fetch()).toJSON()
    }
    response.send(data.map(v => {
      return {
        ...v.productos,
        cantidad: v.cantidad,
        created_at: v.created_at
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
