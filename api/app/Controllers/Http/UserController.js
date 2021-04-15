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
const { validate } = use("Validator")
const Env = use('Env')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */
class UserController {

  async editarP ({ request, response, auth }) {
    const userL = (await auth.getUser()).toJSON()
    let body = request.only(User.fillableProveedor)
    let id = request.only('_id')
    if (userL.roles[0] !== 1) {
      body.status = 2
      let user = await User.query().where('_id', userL._id.toString()).update(body)
      response.send(user)
    } else {
      body.status = 1
      let prov = await User.query().where({_id: id._id}).update(body)
      response.send(prov)
    }
  }

  async register({ request, response }) {
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
    response.send(user)
  }

  async proveedores ({ request, response, auth }) {
    let emprendedores = (await User.query().where({roles: [3]}).fetch()).toJSON()
    response.send(emprendedores)
  }

  async proveedorStatus({ params, request, response }) {
    let dat = request.all()
    let enable = await User.query().where({_id: params.id}).update({status: dat.status})
    response.send(enable)
  }
  async flowConfigData({ request, response, params }) {
    let flowDat = await flowData.query().where({tienda_id: params.id}).first()
    response.send(flowDat)
  }
  async flowConfig({ params, request, response }) {
    let dat = request.all()
    let id = dat.tienda_id
    let exist = await flowData.findBy('tienda_id', id)
    if (exist) {
      let update = await flowData.query().where({tienda_id: id}).update(dat)
    } else {
      const crear = await flowData.create(dat)
    }
    let tienda = await User.find(id)
    if (!tienda.metodoPago.find(v => v === '3')) {
      tienda.metodoPago.push('3')
    }
    let user = await User.query().where({_id: id}).update({metodoPago: tienda.metodoPago})
    response.send(true)
  }
  async flow({ request, response }) {
    let dat = request.all()
    var tienda = await Data.findBy('tienda_id', dat.tienda_id) 
    var config = {
       apiKey: tienda.apiKey,
       secretKey: tienda.secretKey,
       apiURL: Env.get('FLOW_APIURL'),
       baseURL: Env.get('FLOW_BASEURL')
    }
    const params = {
        commerceOrder: Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
        subject: 'Pago de prueba',
        currency: 'CLP',
        amount: dat.amount,
        email: dat.email,
        paymentMethod: 9,
        urlConfirmation: config.baseURL + '/php/respuesta_flow.php',
        urlReturn: config.baseURL + '/php/respuesta_flow.php',
      }
    //console.log(params,config)
    const serviceName = 'payment/create'
    try {
        //console.log(Flow)
        // Instancia la clase FlowApi
        const flowApi = new Flow.default(config)
        // Ejecuta el servicio
        var respon = await flowApi.send(serviceName, params, 'POST')
        // Prepara url para redireccionar el browser del pagador
        var redirect = respon.url + '?token=' + respon.token
        console.log(`location: ${redirect}`)
        response.send({redirect, token:respon.token})
      } catch (error) {
        console.log(error)
        response.unprocessableEntity(error.message)
      }
  }
  async store_flow ({request, response}) {
    let dat = request.all()
    Floww.create(dat)
  }
  async flowResponse ({params, response}) {
    
    let dat = params.token
    const paramss = {
       token: dat
      }
    const infoLocal = (await Floww.query().where({token: dat}).fetch()).toJSON()
    var tienda = await Data.findBy('tienda_id', infoLocal[0].tienda_id)
    var config = {
        apiKey: tienda.apiKey,
       secretKey: tienda.secretKey,
       apiURL: Env.get('FLOW_APIURL'),
       baseURL: Env.get('FLOW_BASEURL')
    }
    const serviceName = 'payment/getStatus'
    console.log(dat,'floww')
    try {
        //console.log(Flow)
        // Instancia la clase FlowApi
        const flowApi = new Flow.default(config)
        // Ejecuta el servicio
        var respon = await flowApi.send(serviceName, paramss, 'get')
        // Prepara url para redireccionar el browser del pagador
        //var redirect = respon.url + '?token=' + respon.token
        console.log(`location: ${respon}`)
        const infoLocal = (await Floww.query().where({token: dat}).fetch()).toJSON()
        response.send({flow:respon , localData: infoLocal[0]})
      } catch (error) {
        console.log(error)
        response.unprocessableEntity(error.message)
      }
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

    token.full_name = user.full_name
    token.last_name = user.last_name
    token.enable = user.enable
    token.email = user.email
    token.verify = user.verify
    let data = {}
    data.FLAAG_SESSION_INFO = token
    return data
  }

}

module.exports = UserController;
