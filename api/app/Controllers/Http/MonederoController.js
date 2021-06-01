'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Monedero = use('App/Models/Monedero')
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
    let egresos = (await Monedero.query().where({ tienda_id: user._id, type: 2}).fetch()).toJSON()
    response.send(egresos.map(v => {
      return {
        ...v,
        created_at: moment(v.created_at).format('DD-MM-YYYY'),
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
