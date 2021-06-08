"use strict";

const Helpers = use('Helpers')
const mkdirp = use('mkdirp')
const fs = require('fs')
var randomize = require('randomatic');
const Flow = require('flowcl-node-api-client')
const User = use("App/Models/User")
const flowData = use("App/Models/FlowDatum")
const Role = use("App/Models/Role")
const Floww = use("App/Models/Flow")
const Data = use("App/Models/FlowDatum")
const Comentario = use('App/Models/Comentario')
const Payment = use('App/Models/Payment')
const { validate } = use("Validator")
const Env = use('Env')
const Stripe = require('stripe')
const stripe = Stripe('sk_test_51IjMPfDgF1IR0ee1pWdYfdLbYxeKd1PfdFVbmNiMV5XaW3znB4xzHm2KTCXloNNwwOvMqmByVLAetqnNlnNvYI7q009uyimwQy')
const View = use('View')
const apiUrl = Env.get('API_URL')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */
class UserController {

  async aprobarPagoStripe ({ request, response, params }) {
    let body = request.only(['cantM', 'costoM'])
    console.log(body, 'body aprobando pago')
    await User.query().where('_id', params.tienda_id).update({ status: 2 })
    await Payment.create({ tienda_id: params.tienda_id, costoM: body.costoM, cantMeses: body.cantM, status: 1 })
    let user = (await User.find(params.tienda_id)).toJSON()
    console.log(user, 'user create')
    response.send(user)
  }

  async redirpay ({ auth, response, params, request, view }) {
    let body = request.get()
    console.log(body, 'soy un body testStripe')
    View.global('ruta', function () {
      return `/api/procesar_pago/${body.user_id}/${body.cantMeses}/${body.costoM}`
    })
    return view.render('redirpay')
  }

  async logueoSinContrasena ({ auth, response, params, request }) {
    let body = request.only(['user_id'])
    console.log(body, 'bodyy')
    let user = await User.find(body.user_id)
    let tokeng = await auth.generate(user)

    let token = { ...tokeng, ...user }
    let isUser = false
    token.roles = user.roles.map(roleMap => {
      if (roleMap === 3) {
        isUser = true
      }
      return roleMap
    })
    let userRoles = await Role.whereIn('id', token.roles).fetch()
    let permissions = userRoles.toJSON()
    token.permissions = []
    permissions.forEach(element => {
      element.permissions.forEach(element2 => {
        token.permissions.push(element2)
      })
    })

    token.full_name = user.full_name
    token.last_name = user.last_name
    token._id = user._id
    token.enable = user.enable
    token.email = user.email
    token.verify = user.verify
    let data = {}
    data.TELDE_SESSION_INFO = token
    return data

  }

  async index({ params, response, auth }) {
    const user = await User.all()
    response.send(user)
  }

  async procesarPago ({ request, params, view, response }) {
    let body = params
    let totalPagar = parseFloat(body.cantM) * parseFloat(body.costoM)
    console.log(body.cantM, body.costoM, 'soy un body')
    totalPagar = totalPagar + '00'
    console.log(totalPagar, 'total')
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Membresia',
            },
            unit_amount: totalPagar,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `https://app.telde.com/pay_stripe?user_id=${params.tienda_id}&cantM=${body.cantM}&costoM=${body.costoM}`,
      cancel_url: `https://app.telde.com/pay_stripe_cancel`,
    })
    response.send({ id: session.id })
  }

  async editarP ({ request, response, auth }) {
    const userL = (await auth.getUser()).toJSON()
    let body = request.only(User.fillableProveedor)
    let id = request.only('_id')
    if (userL.roles[0] !== 1) {
      /* body.status = 2 */
      let user = await User.query().where('_id', userL._id.toString()).update(body)
      response.send(user)
    } else {
      body.status = 1
      let prov = await User.query().where({_id: id._id}).update(body)
      response.send(prov)
    }
  }

  async register ({ request, response }) {
    let dat = request.only(['dat'])
    dat = JSON.parse(dat.dat)
    const validation = await validate(dat, User.fieldValidationRules())
    if (validation.fails()) {
      response.unprocessableEntity(validation.messages())
    } else if (((await User.where({email: dat.email}).fetch()).toJSON()).length) {
      response.unprocessableEntity([{
        message: 'Correo ya registrado en el sistema!'
      }])
    } else {
      let body = dat
      body.roles = [2]
      const user = await User.create(body)

      const profilePic = request.file('perfil', {
      })
      if (Helpers.appRoot('storage/uploads/perfil')) {
        await profilePic.move(Helpers.appRoot('storage/uploads/perfil'), {
          name: user._id.toString(),
          overwrite: true
        })
      } else {
        mkdirp.sync(`${__dirname}/storage/Excel`)
      }
      if (!profilePic.moved()) {
        return profilePic.error()
      }

      response.send(user)
    }
  }

  async edit ({ request, response }) {
    let dat = request.only(['dat'])
    dat = JSON.parse(dat.dat)
    const validation = await validate(dat, User.fieldValidationRules())
    if (validation.fails()) {
      response.unprocessableEntity(validation.messages())
    } else {
      let body = dat
      body.roles = [2]
      const user = await User.create(body)

      const profilePic = request.file('perfil', {
      })
      if (Helpers.appRoot('storage/uploads/perfil')) {
        await profilePic.move(Helpers.appRoot('storage/uploads/perfil'), {
          name: user._id.toString(),
          overwrite: true
        })
      } else {
        mkdirp.sync(`${__dirname}/storage/Excel`)
      }
      if (!profilePic.moved()) {
        return profilePic.error()
      }

      response.send(user)
    }
  }

  async registerTienda ({ request, response }) {
    let dat = request.only(['dat'])
    dat = JSON.parse(dat.dat)
    if (((await User.where({email: dat.email}).fetch()).toJSON()).length) {
      response.unprocessableEntity([{
        message: 'Correo ya registrado en el sistema!'
      }])
    } else {
      let images = []
      if (dat.cantidadFiles > 0) {
        for (let i = 0; i < dat.cantidadFiles; i++) {
          let codeFile = randomize('Aa0', 30)
          const profilePic1 = request.file('files' + i, {
            types: ['image']
          })
          if (Helpers.appRoot('storage/uploads/proveedor_images')) {
            await profilePic1.move(Helpers.appRoot('storage/uploads/proveedor_images'), {
              name: codeFile,
              overwrite: true
            })
          } else {
            mkdirp.sync(`${__dirname}/storage/Excel`)
          }
          if (!profilePic1.moved()) {
            return profilePic1.error()
          } else {
            images.push(codeFile)
          }
        }
      }
      delete dat.cantidadFiles
      dat.images = images
      let body = dat
      body.roles = [3]
      body.status = 1
      const user = await User.create(body)

      const profilePic = request.file('perfil', {
      })
      if (Helpers.appRoot('storage/uploads/perfil')) {
        await profilePic.move(Helpers.appRoot('storage/uploads/perfil'), {
          name: user._id.toString(),
          overwrite: true
        })
      } else {
        mkdirp.sync(`${__dirname}/storage/Excel`)
      }
      if (!profilePic.moved()) {
        return profilePic.error()
      }

      const profilePic2 = request.file('portada', {
      })
      if (Helpers.appRoot('storage/uploads/perfil')) {
        await profilePic2.move(Helpers.appRoot('storage/uploads/perfil'), {
          name: 'portada' + user._id.toString(),
          overwrite: true
        })
      } else {
        mkdirp.sync(`${__dirname}/storage/Excel`)
      }

      if (!profilePic2.moved()) {
        return profilePic2.error()
      }

      response.send(user)
    }
  }

  async validateEmail({ request, response, params }) {
    if (((await User.where({email: params.email}).fetch()).toJSON()).length) {
      response.unprocessableEntity([{
        message: 'Correo ya registrado en el sistema!',
        error: true
      }])
    } else {
      response.send({error: false})
    }
  }

  async userInfo({ request, response, auth }) {
    const user = (await auth.getUser()).toJSON()
    response.send(user)
  }

  async userById({ params, response, auth }) {
    const user = await User.query().where({_id: params.id}).first()
    var cal = (await Comentario.query().where({tienda_id: params.id}).fetch()).toJSON()
    var total = 0
    cal.forEach(v => {
      total += v.rating
    })
    user.calificacion = (total / cal.length)
    response.send(user)
  }

  async userEnable({ params, request, response }) {
    let dat = request.all()
    let modificar = await User.query().where('_id', params.id).update({enable: dat.enable})
    response.send(modificar)
  }

  async proveedores ({ request, response, auth }) {
    let emprendedores = (await User.query().where({roles: [3], status: 2, enable: true}).fetch()).toJSON()
    response.send(emprendedores)
  }

  async clientes ({ request, response, auth }) {
    let emprendedores = (await User.query().where({roles: [2]}).fetch()).toJSON()
    response.send(emprendedores)
  }

  async proveedorStatus({ params, request, response }) {
    let dat = request.all()
    let enable = await User.query().where({_id: params.id}).update({status: dat.status})
    response.send(enable)
  }
  async login({ auth, request }) {
    const { email, password } = request.all();
    let token = await auth.attempt(email, password)
    const user = (await User.findBy('email', email)).toJSON()
    let isUser = false
    token.roles = user.roles.map(roleMap => {
      if (roleMap === 3) {
        isUser = true
      }
      return roleMap
    })
    let userRoles = await Role.whereIn('id', token.roles).fetch()
    let permissions = userRoles.toJSON()
    token.permissions = []
    permissions.forEach(element => {
      element.permissions.forEach(element2 => {
        token.permissions.push(element2)
      })
    })

    token._id = user._id
    token.enable = user.enable
    token.status = user.status
    token.email = user.email
    token.verify = user.verify
    let data = {}
    data.TELDE_SESSION_INFO = token
    return data
  }

}

module.exports = UserController;
