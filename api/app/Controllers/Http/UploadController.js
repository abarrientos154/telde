'use strict'

const Helpers = use('Helpers')
const mkdirp = use('mkdirp')
const User = use("App/Models/User")
const Producto = use("App/Models/Producto")
const { validate } = use("Validator")
const fs = require('fs')
const { request } = require('http')
var randomize = require('randomatic');


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with uploads
 */
class UploadController {
  async tiendaFiles ({ params, response }) {
    let dir = params.file
    response.download(Helpers.appRoot('storage/uploads/proveedor_images') + `/${dir}`)
  }

  async productoFiles ({ params, response }) {
    let dir = params.file
    response.download(Helpers.appRoot('storage/uploads/productos') + `/${dir}`)
  }

  async subirImgProducto ({ response, params, request }) {
    let codeFile = randomize('Aa0', 30)
    var profilePic = request.file('files', {
    })
    if (profilePic) {
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
        let producto = await Producto.find(params.producto_id)
        if (producto.images) {
          producto.images.push(codeFile)
        } else {
          producto.images = []
          producto.images.push(codeFile)
        }
        await producto.save()
        response.send(producto)
      }
    }
  }

  async eliminarImgProducto ({ params, response }) {
    const dir = params.file
    await fs.unlinkSync(Helpers.appRoot(`storage/uploads/productos/${dir}`))
    let producto = await Producto.find(params.producto_id)
    let i = producto.images.indexOf(dir)
    producto.images.splice(i, 1)
    await producto.save()
    response.send(producto)
  }

  async perfilImg ({ params, response, auth }) {
    let dir = params.file
    response.download(Helpers.appRoot('storage/uploads/perfil') + `/${dir}`)
  }

  async getFilePublicidad ({ params, response, request }) {
    let dir = params.file
    response.download(Helpers.appRoot('storage/uploads/publicidades') + `/${dir}`)
  }

  async subirPerfil ({ request, response, params, auth }) {
    let user = await auth.getUser()
    let id = params.id
    var status
    var profilePic = request.file('perfil', {
    })
    if (profilePic) {
      if (Helpers.appRoot('storage/uploads/perfil')) {
        if (user.roles[0] !== 1) {
          status = await User.query().where({_id: id}).update({status: 2})
        } else {
          status = await User.query().where({_id: id}).update({status: 1})
        }
        await profilePic.move(Helpers.appRoot('storage/uploads/perfil'), {
          name: id,
          overwrite: true
        })
      } else {
        mkdirp.sync(`${__dirname}/storage/Excel`)
      }

      if (!profilePic.moved()) {
        return profilePic.error()
      } else {
        user = await User.query().where({_id: id}).update({perfil: true, perfilEstatico: false})
        response.send(user)
      }
    }
  }
  async subirPortada ({ request, response, params, auth }) {
    let user = await auth.getUser()
    let id = params.id
    var status
    var profilePic = request.file('portada', {
    })
    if (profilePic) {
      if (Helpers.appRoot('storage/uploads/perfil')) {
        if (user.roles[0] !== 1) {
          status = await User.query().where({_id: id}).update({status: 2})
        } else {
          status = await User.query().where({_id: id}).update({status: 1})
        }
        await profilePic.move(Helpers.appRoot('storage/uploads/perfil'), {
          name: 'portada' + id,
          overwrite: true
        })
      } else {
        mkdirp.sync(`${__dirname}/storage/Excel`)
      }

      if (!profilePic.moved()) {
        return profilePic.error()
      } else {
        user = await User.query().where({_id: id}).update({portada: true})
        response.send(user)
      }
    }
  }
  async subirImgTienda ({ request, response, params }) {
    let codeFile = randomize('Aa0', 30)
    let user = params.id
    var profilePic = request.file('files', {
    })
    if (profilePic) {
      if (Helpers.appRoot('storage/uploads/proveedor_images')) {
        await profilePic.move(Helpers.appRoot('storage/uploads/proveedor_images'), {
          name: codeFile,
          overwrite: true
        })
      } else {
        mkdirp.sync(`${__dirname}/storage/Excel`)
      }

      if (!profilePic.moved()) {
        return profilePic.error()
      } else {
        let proveedor = await User.find(user)
        if (proveedor.images) {
          proveedor.images.push(codeFile)
        } else {
          proveedor.images = []
          proveedor.images.push(codeFile)
        }
        await proveedor.save()
        response.send(proveedor)
      }
    }
  }
  async eliminarImgTienda ({ params, response, auth }) {
    const dir = params.file
    await fs.unlinkSync(Helpers.appRoot(`storage/uploads/proveedor_images/${dir}`))
    let user = await auth.getUser()
    let provider = await User.find(user._id)
    let i = provider.images.indexOf(dir)
    provider.images.splice(i, 1)
    await provider.save()
    response.send(provider)
  }
}

module.exports = UploadController
