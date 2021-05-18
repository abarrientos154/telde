'use strict'

/*
|--------------------------------------------------------------------------
| ProveedorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use("App/Models/User")
const userData = [
  /* {
    id: 1,
    email: 'tienda@telde.com',
    password: 'telde.2021',
    nombre: 'Tienda Nova Telde',
    descripcion: '',
    cif: '',
    ciudad: '',
    direccion: '',
    codigo_postal: '',
    delivery: false,
    status: 1,
    metodo_pago: [],
    dias: [],
    roles: [3],
    images: []
  } */
]


class ProveedorSeeder {
  async run () {
    for (let i of userData) {
      let user = await User.findBy('id', i.id)
      if (!user) {
        await User.create(i)
      }
      else {
        user.id = i.id
        user.email = i.email
        user.password = i.password
        user.nombreEmpresa = i.nombreEmpresa
        user.rut = i.rut
        user.direccionFisica = i.direccionFisica
        user.telefono = i.telefono
        user.delivery = i.delivery
        user.regiones = i.regiones
        user.perfil = user.perfil ? user.perfil : i.perfil,
        user.perfilEstatico = i.perfilEstatico
        user.roles = i.roles
        user.images = i.images
        await user.save()
      }
    }
    console.log('Finished User')
  }
}

module.exports = ProveedorSeeder
