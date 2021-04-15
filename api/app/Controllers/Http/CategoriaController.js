'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Categoria = use("App/Models/Categoria")
const SubNivelUno = use("App/Models/SubNivelUno")
const SubNivelDos = use("App/Models/SubNivelDo")
const SubNivelTres = use("App/Models/SubNivelTre")
/**
 * Resourceful controller for interacting with categorias
 */
class CategoriaController {
  /**
   * Show a list of all categorias.
   * GET categorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ response, auth }) {
    const user = (await auth.getUser()).toJSON()
    let form = {
      categoria: [],
      subniveluno: [],
      subniveldos: [],
      subniveltres: []
    }
    form.categoria = (await Categoria.query().where('proveedor_id', user.id).fetch()).toJSON()
    form.subniveluno = (await SubNivelUno.query().where('proveedor_id', user.id).fetch()).toJSON()
    form.subniveldos = (await SubNivelDos.query().where('proveedor_id', user.id).fetch()).toJSON()
    form.subniveltres = (await SubNivelTres.query().where('proveedor_id', user.id).fetch()).toJSON()
    response.send(form)
  }

  async indexNoLogueado ({ response, params }) {
    let id = params.proveedor_id
    let form = {
      categoria: [],
      subniveluno: [],
      subniveldos: [],
      subniveltres: []
    }
    form.categoria = (await Categoria.query().where('proveedor_id', Number(id)).fetch()).toJSON()
    form.subniveluno = (await SubNivelUno.query().where('proveedor_id', Number(id)).fetch()).toJSON()
    form.subniveldos = (await SubNivelDos.query().where('proveedor_id', Number(id)).fetch()).toJSON()
    form.subniveltres = (await SubNivelTres.query().where('proveedor_id', Number(id)).fetch()).toJSON()
    response.send(form)
  }

  /**
   * Render a form to be used for creating a new categoria.
   * GET categorias/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new categoria.
   * POST categorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single categoria.
   * GET categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing categoria.
   * GET categorias/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update categoria details.
   * PUT or PATCH categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a categoria with id.
   * DELETE categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CategoriaController
