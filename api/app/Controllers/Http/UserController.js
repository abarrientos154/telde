"use strict";

const Helpers = use('Helpers')
const path = require('path')
const mkdirp = use('mkdirp')
const fs = require('fs')
var randomize = require('randomatic');
const moment = require("moment")
const User = use("App/Models/User")
const Direccion = use('App/Models/Direccione')
const Provincia = use('App/Models/Provincia')
const Ciudad = use('App/Models/Ciudad')
const Role = use("App/Models/Role")
const Comentario = use('App/Models/Comentario')
const Payment = use('App/Models/Payment')
const Email = use("App/Functions/Email")
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
    var vencimiento = moment().add(Number(body.costoM), 'month').format('YYYY-MM-DD')
    let existe = (await Payment.findBy('tienda_id', params.tienda_id))
    if (existe) {
      if (existe.status === 1) {
        var a = moment(existe.fecha_vence)
        var b = moment()
        var restante = a.diff(b, 'days')
        vencimiento = moment(vencimiento).add(restante, 'days').format('YYYY-MM-DD')
      }
      let nuevo = await Payment.query().where({tienda_id: params.tienda_id}).update({costoM: body.cantM, cantMeses: body.costoM, fecha_vence: vencimiento, status: 1})
    } else {
      await Payment.create({ tienda_id: params.tienda_id, costoM: body.cantM, cantMeses: body.costoM, fecha_vence: vencimiento, status: 1 })
    }
    await User.query().where('_id', params.tienda_id).update({ status: 2 })
    let user = (await User.find(params.tienda_id)).toJSON()
    response.send(user)
  }

  async redirpay ({ auth, response, params, request, view }) {
    let body = request.get()
    View.global('ruta', function () {
      return `/api/procesar_pago/${body.user_id}/${body.cantMeses}/${body.costoM}/${body.type}/${body.op}`
    })
    return view.render('redirpay')
  }

  async logueoSinContrasena ({ auth, response, params, request }) {
    let body = request.only(['user_id'])
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
    totalPagar = totalPagar + '00'
    var url1, url2
    url1 = body.type === 'mobile' ? 'https://app.telde.com/pay_stripe' : 'https://teldeweb.eichechile.com/#/login'
    url2 = body.type === 'mobile' ? 'https://app.telde.com/pay_stripe_cancel' : 'https://teldeweb.eichechile.com/#/login'
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
      success_url: `${url1}?user_id=${params.tienda_id}&cantM=${body.cantM}&costoM=${body.costoM}&type=${body.type}&op=${body.op}`,
      cancel_url: url2,
    })
    response.send({ id: session.id })
  }

  async editarP ({ request, response, auth }) {
    const userL = (await auth.getUser()).toJSON()
    let body = request.only(User.fillableProveedor)
    let user = await User.query().where('_id', userL._id.toString()).update(body)
    response.send(user)
  }

  async editarC ({ request, response, auth }) {
    const userL = (await auth.getUser()).toJSON()
    let body = request.only(User.fillableCliente)
    let user = await User.query().where('_id', userL._id.toString()).update(body)
    response.send(user)
  }

  async register ({ request, response }) {
    let dat = request.only(['dat'])
    let dir = request.only(['dir'])
    dat = JSON.parse(dat.dat)
    dir = JSON.parse(dir.dir)
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

      dir.user_id = user._id
      dir.provincia_id = dir.provincia.id
      dir.ciudad_id = dir.ciudad._id
      delete dir.provincia
      delete dir.ciudad
      const direccion = await Direccion.create(dir)

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
      console.log(user)
      let mail = await Email.sendMail(user.email, 'Nuevo Contrato', `
          <center>
            <img src="https://app.slimedeal.com/logo.png" alt="logo" />
          </center>
          <h2 style="text-align:center">
            El usuario  te ha agregado a formar parte de un contrato.
          </h2>
          <div style="text-align:center">
            Ingrese al link https://app.slimedeal.com/
          </div>
          `)
          // ${user.name} ${user.lastName}
      console.log(mail)
      response.send(user)
    }
  }
  async prueba ({ request, response }) {

      let mail = await Email.sendMail('maeep154@gmail.com', 'Registro exitoso', `
          <center>
            <img src="https://app.novatelde.com/nopublicidad.jpg" alt="logo" />
          </center>

          `)
          // ${user.name} ${user.lastName}
    //  console.log(mail)
   /*   <h2 style="text-align:center">
            El usuario  te ha agregado a formar parte de un contrato.
          </h2>
          <div style="text-align:center">
            Ingrese al link https://app.slimedeal.com/
          </div> */
          return true
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
    let data
    if (user.roles[0] === 2) {
      data = (await User.with('direccionC.ciudad').with('direccionC.provincia').find(user._id)).toJSON()
      data.direccionC = data.direccionC.map(v => {
        return {
          ...v,
          ciudad_name: v.ciudad.nombre
        }
      })
    } else {
      data = await User.query().where({_id: user._id}).first()
    }
    response.send(data)
  }

  async userById({ params, response, auth }) {
    const user = await User.query().where({_id: params.id}).first()
    var cal = (await Comentario.query().where({tienda_id: params.id}).fetch()).toJSON()
    var total = 0
    if (cal.length) {
      cal.forEach(v => {
        total += v.rating
      })
      user.calificacion = (total / cal.length)
    } else {
      user.calificacion = total
    }
    let membresia = (await Payment.query().where({tienda_id: params.id}).first())
    var a = moment(membresia.fecha_vence)
    var b = moment()
    var restante = a.diff(b, 'days')
    if (membresia.fecha_vence === moment().format('YYYY-MM-DD')) {
      membresia.status = 2
      membresia.save()
      await User.query().where({_id: params.id}).update({status: 1})
      user.status = 1
    } else if (restante < 11) {
      user.vence = restante + 1
    }
    response.send(user)
  }

  async userEnable({ params, request, response }) {
    let dat = request.all()
    let modificar = await User.query().where('_id', params.id).update({enable: dat.enable})
    response.send(modificar)
  }

  async proveedores ({ request, response, auth }) {
    const user = (await auth.getUser()).toJSON()
    if (user.roles[0] === 1) {
      let todos = (await User.query().where({roles: [3]}).with('membresia').fetch()).toJSON()
      response.send(todos)
    } else {
      let direccion = (await Direccion.query().where({user_id: user._id, principal: true }).first()).toJSON()
      let emprendedores = (await User.query().where({roles: [3], status: 2, enable: true, ciudad_id: direccion.ciudad_id}).fetch()).toJSON()
      response.send(emprendedores)
    }
  }

  async proveeUbi ({ request, response, params }) {
    let emprendedores = (await User.query().where({roles: [3], status: 2, enable: true}).fetch()).toJSON()
    let formatEmprendedores = emprendedores.map(v => {
      return {
        ...v,
        ciudad_id: v.ciudad._id
      }
    })
    let filtrado = formatEmprendedores.filter(v => v.ciudad_id === params.id)
    response.send(filtrado)
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
    if (user.status && user.status === 2) {
      let membresia = (await Payment.query().where({tienda_id: String(user._id)}).first())
      if (membresia.fecha_vence === moment().format('YYYY-MM-DD')) {
        membresia.status = 2
        membresia.save()
        await User.query().where('_id', user._id).update({status: 1})
        user.status = 1
      }
    }
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

  async nuevaDireccion ({ request, response, auth }) {
    const user = (await auth.getUser()).toJSON()
    let data = request.only(Direccion.fillable)
    if (data.principal) {
      let modificar = await Direccion.query().where({user_id: user._id}).update({principal: false})
    }
    let nuevo = {
      user_id: user._id,
      provincia_id: data.provincia.id,
      ciudad_id: data.ciudad._id,
      direccion:  data.direccion,
      principal: data.principal
    }
    const crear = await Direccion.create(nuevo)
    response.send(crear)
  }

  async editarDireccion ({ request, response, params, auth }) {
    const user = (await auth.getUser()).toJSON()
    let data = request.only(Direccion.fillable)
    if (data.principal) {
      let modificar = await Direccion.query().where({user_id: user._id}).update({principal: false})
    }
    let nuevo = {
      provincia_id: data.provincia.id,
      ciudad_id: data.ciudad._id,
      direccion:  data.direccion,
      principal: data.principal
    }
    let editar = await Direccion.query().where({_id: params.id}).update(nuevo)
    response.send(editar)
  }

  async eliminarDireccion ({ request, response, params }) {
    let direccion = await Direccion.find(params.id)
    direccion.delete()
    response.send(direccion)
  }

  async provincias ({ request, response, params }) {
    let provincias = await Provincia.all()
    response.send(provincias)
  }

  async ciudades ({ request, response, params }) {
    let ciudades = (await Ciudad.query().where({provinciaid: Number(params.id)}).fetch()).toJSON()
    response.send(ciudades)
  }

  async recuperacion({ request, response, params }) {
    if (((await User.where({email: params.email}).fetch()).toJSON()).length) {
      let codigo = randomize('Aa0', 30)
      await User.query().where({email: params.email}).update({codigoRecuperacion: codigo})
      let mail = await Email.sendMail(params.email, 'Recuperacion de Correo', `
          <center>
            <img src="https://app.novatelde.com/logo_inicio.png" alt="logo" />
          </center>
          <h2 style="text-align:center">
            Haz solicitado restablecer tu contraseña
          </h2>
          <div style="text-align:center">
            Ingrese al link https://app.novatelde.com/#/recuperacion/${codigo} para restablecer su contraseña
          </div>
          `)
        console.log(mail)
        response.send(mail)
    } else {
      response.unprocessableEntity([{
        message: 'Correo no registrado en el sistema!',
        error: true
      }])
    }
  }

  async recuperacionapp ({ request, response, params }) {
    if (((await User.where({email: params.email}).fetch()).toJSON()).length) {
      let codigo = randomize('Aa0', 30)
      await User.query().where({email: params.email}).update({codigoRecuperacion: codigo})
      let mail = await Email.sendMail(params.email, 'Recuperacion de Correo', `
          <center>
            <img src="https://app.novatelde.com/logo_inicio.png" alt="logo" />
          </center>
          <h2 style="text-align:center">
            Haz solicitado restablecer tu contraseña
          </h2>
          <div style="text-align:center">
            Ingrese al link https://app.telde.com/recuperacion?codigo=${codigo} para restablecer su contraseña
          </div>
          `)
        console.log(mail)
        response.send(mail)
    } else {
      response.unprocessableEntity([{
        message: 'Correo no registrado en el sistema!',
        error: true
      }])
    }
  }

  async actualizarPass({ request, response, params }) {
    let user = await User.findBy('codigoRecuperacion', params.code)
    let data = request.only(['password'])
    user.password = data.password
    user.codigoRecuperacion = null
    await user.save()
    response.send(user)
  }

}

module.exports = UserController;
