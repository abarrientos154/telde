'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Monedero = use('App/Models/Monedero')
const Compras = use('App/Models/Compra')
const moment = require("moment")

/**
 * Resourceful controller for interacting with monederos
 */
class MonederoController {
  /**
   * Show a list of all monederos.
   * GET monederos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, auth }) {
    let user = await auth.getUser()
    let egresos = (await Monedero.query().where({ tienda_id: user._id, type: 2}).orderBy('created_at', 'desc').fetch()).toJSON()
    response.send(egresos.map(v => {
      return {
        ...v,
        updated_at: moment(v.updated_at).format('DD-MM-YYYY')
      }
    }))
  }

  async indexAdmin ({ request, response, auth }) {
    let egresos = (await Monedero.query().where({ type: 2}).orderBy('created_at', 'desc').fetch()).toJSON()
    response.send(egresos.map(v => {
      return {
        ...v,
        updated_at: moment(v.updated_at).format('DD-MM-YYYY')
      }
    }))
  }

  /**
   * Render a form to be used for creating a new monedero.
   * GET monederos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, auth }) {
    let user = await auth.getUser()
    var monto = request.all().monto
    var moneda = {
      tienda_id: user._id,
      type: 2,
      status: 'Pendiente',
      monto: monto
    }
    var crearMoneda = await Monedero.create(moneda)
    response.send(true)
  }

  async crearEstadistica ({ request, response, auth }) {
    let user = await auth.getUser()
    let data = request.all()
    var fecha = data.fecha
    let ventas = (await Compras.query().where({ tienda_id: String(user._id)}).fetch()).toJSON()
    let todas = []
    var respuesta = [['Genre', 'Ventas', { role: 'annotation' }]]
    if (data.type === 'Anual') {
      todas = ventas.filter(v => moment(v.created_at).year() == fecha)
      for (let i = 1; i < 13; i++) {
        var arr = todas.filter(v => (moment(v.created_at).month() + 1) == i)
        var num = 0
        for (let j = 0; j < arr.length; j++) {
          num += arr[j].totalValor
        }
        var nuevo = [String(i), num, '']
        respuesta.push(nuevo)
      }
    } else if (data.type === 'Mensual') {
      if (fecha < 10)
      fecha = '0' + fecha
      todas = ventas.filter(v => moment(v.created_at).format('YYYY/MM') == moment().format('YYYY') + '/' + fecha)
      var num = 0
      for (let j = 0; j < todas.length; j++) {
        num += todas[j].totalValor
      }
      var nuevo = [String(1), num, '']
      respuesta.push(nuevo)
    } else {
      todas = ventas.filter(v => {
        if (moment(v.created_at).format('YYYY/MM/DD') >= fecha.from && moment(v.created_at).format('YYYY/MM/DD') <= fecha.to) {
          return v
        }
      })
      var dd = moment(fecha.from).dayOfYear() - 1
      for (let i = 1; i < 8; i++) {
        var arr = todas.filter(v => (moment(v.created_at).dayOfYear()) == dd + i)
        var num = 0
        for (let j = 0; j < arr.length; j++) {
          num += arr[j].totalValor
        }
        var name = moment().dayOfYear(dd+i)
        var nuevo = [String(moment(name).date()), num, '']
        respuesta.push(nuevo)
      }

    }
    response.send(respuesta)
  }

  /**
   * Create/save a new monedero.
   * POST monederos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single monedero.
   * GET monederos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async showSaldo ({ response, auth }) {
    let user = await auth.getUser()
    let ingresos = (await Monedero.query().where({ tienda_id: user._id.toString(), type: 1}).fetch()).toJSON()
    let egresos = (await Monedero.query().where({ tienda_id: user._id, type: 2}).fetch()).toJSON()
    var total = 0
    if (ingresos.length) {
      ingresos.forEach(v => {
        total += v.monto
      })
    }
    if (egresos.length) {
      egresos.forEach(v => {
        total -= v.monto
      })
    }
    response.send(total)
  }

  /**
   * Render a form to update an existing monedero.
   * GET monederos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update monedero details.
   * PUT or PATCH monederos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let aprobar = await Monedero.query().where({_id: params.id}).update({status: 'Aprobado'})
    response.send(aprobar)
  }

  /**
   * Delete a monedero with id.
   * DELETE monederos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = MonederoController
