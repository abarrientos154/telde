'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Monedero = use('App/Models/Monedero')

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
  async index ({ request, response, view }) {
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
  async create ({ request, response, view }) {
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
  async showSaldo ({ params, request, response, auth }) {
    let user = await auth.getUser()
    let ingresos = (await Monedero.query().where({ tienda_id: user._id.toString(), type: 1}).fetch()).toJSON()
    var total = 0
    if (ingresos.length) {
      ingresos.forEach(v => {
        total += v.monto
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
