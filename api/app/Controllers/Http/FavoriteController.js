'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Favorite = use("App/Models/Favorite")
/**
 * Resourceful controller for interacting with favorites
 */
class FavoriteController {
  /**
   * Show a list of all favorites.
   * GET favorites
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ response, auth }) {
    const userL = (await auth.getUser()).toJSON()
    let misFavoritos = (await Favorite.query().where({cliente_id: userL._id.toString()}).with('info_tienda').fetch()).toJSON()
    response.send(misFavoritos)
  }

  /**
   * Render a form to be used for creating a new favorite.
   * GET favorites/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new favorite.
   * POST favorites
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ response, params, auth }) {
    const userL = (await auth.getUser()).toJSON()
    await Favorite.create({
      proveedor_id: params.proveedor_id,
      cliente_id: userL._id.toString()
    })
    response.send(true)
  }

  /**
   * Display a single favorite.
   * GET favorites/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, auth }) {
    const userL = (await auth.getUser()).toJSON()
    let favorito = await Favorite.query().where({
      proveedor_id: params.proveedor_id, cliente_id: userL._id.toString()
    }).first()
    response.send(favorito ? true : false)

  }

  /**
   * Render a form to update an existing favorite.
   * GET favorites/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update favorite details.
   * PUT or PATCH favorites/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a favorite with id.
   * DELETE favorites/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, response }) {
    const userL = (await auth.getUser()).toJSON()
    let favorito = await Favorite.query().where({
      proveedor_id: params.proveedor_id, cliente_id: userL._id.toString()
    }).delete()
    response.send(false)
  }
}

module.exports = FavoriteController
