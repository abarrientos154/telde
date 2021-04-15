'use strict'
const Publicidad = use("App/Models/Publicidad")
const Helpers = use('Helpers')
var randomize = require('randomatic')
const fs = require('fs')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with publicidads
 */
class PublicidadController {
  /**
   * Show a list of all publicidads.
   * GET publicidads
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let datos = (await Publicidad.query().where({}).fetch()).toJSON()
    response.send(datos)
  }

  /**
   * Render a form to be used for creating a new publicidad.
   * GET publicidads/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response }) {
    let codeFile = randomize('Aa0', 30)
    var dat = request.only(['dat'])
    dat = JSON.parse(dat.dat)
    const profilePic = request.file('files', {
      types: ['image'],
      size: '20mb'
    })
    if (Helpers.appRoot('storage/uploads/publicidades')) {
      await profilePic.move(Helpers.appRoot('storage/uploads/publicidades'), {
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
      dat.fileName = data.name
    }
    let guardar = await Publicidad.create(dat)
    response.send(guardar)
  }

  /**
   * Create/save a new publicidad.
   * POST publicidads
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single publicidad.
   * GET publicidads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing publicidad.
   * GET publicidads/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  async publicidadEnable({ params, request, response }) {
    let dat = request.all()
    let respuesta = false
    let activos = (await Publicidad.query().where({enable: true, tipo: dat.tipo}).fetch()).toJSON()
    if (dat.enable) {
      if (activos.length < 6) {
        let enable = await Publicidad.query().where('_id', params.id).update({enable: dat.enable})
        respuesta = true
      }
    } else {
      if (activos.length > 1) {
        let disable = await Publicidad.query().where('_id', params.id).update({enable: dat.enable})
        respuesta = true
      }
    }
    response.send(respuesta)
  }

  /**
   * Update publicidad details.
   * PUT or PATCH publicidads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    var dat = request.only(['dat'])
    dat = JSON.parse(dat.dat)
    if (dat.buscar_file) {
      let codeFile = randomize('Aa0', 30)
      const profilePic = request.file('files', {
        types: ['image'],
        size: '20mb'
      })
      if (Helpers.appRoot('storage/uploads/publicidades')) {
        await profilePic.move(Helpers.appRoot('storage/uploads/publicidades'), {
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
        dat.fileName = data.name
        delete dat.buscar_file
      }
    } else { }
    let modificar = await Publicidad.query().where('_id', params.id).update(dat)
    response.send(modificar)
  }

  /**
   * Delete a publicidad with id.
   * DELETE publicidads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let publicidad = await Publicidad.find(params.id)
    fs.unlink(`storage/uploads/publicidades/${publicidad.fileName}`, (err) => {
      if (err) throw err;
      console.log(`${publicidad.fileName} Eliminado por el Administrador`);
    });
    await publicidad.delete()
    response.send(publicidad)
  }
}

module.exports = PublicidadController
