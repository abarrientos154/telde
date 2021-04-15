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
  {
    id: 1,
    email: 'novedadesantho@lodelaferia.cl',
    password: 'novedadesantho.2021',
    nombreEmpresa: 'Novedades Antho',
    rut: '',
    direccionFisica: '',
    metodoPago: [],
    telefono: '',
    delivery: false,
    perfilEstatico: false,
    regiones: false,
    perfil: false,
    status: 1,
    dias: [],
    roles: [3],
    images: []
  },
  {
    id: 2,
    email: 'maosaysen@lodelaferia.cl',
    password: 'maosaysen.2021',
    nombreEmpresa: 'Maos Aysen',
    rut: '',
    direccionFisica: '',
    metodoPago: [],
    telefono: '',
    delivery: false,
    regiones: false,
    perfil: false,
    perfilEstatico: true,
    status: 1,
    dias: [],
    roles: [3],
    images: []
  },
  {
    id: 3,
    email: 'lafresquita@lodelaferia.cl',
    password: 'lafresquita.2021',
    nombreEmpresa: 'La Fresquita',
    rut: '',
    direccionFisica: '',
    metodoPago: [],
    telefono: '',
    delivery: false,
    regiones: false,
    perfil: false,
    status: 1,
    dias: [],
    roles: [3],
    images: [],
    perfilEstatico: true
  },
  {
    id: 4,
    email: 'rincondelanonita@lodelaferia.cl',
    password: 'rincondelanonita.2021',
    nombreEmpresa: 'Rincón De La Nonita',
    rut: '',
    direccionFisica: '',
    metodoPago: [],
    telefono: '',
    delivery: false,
    regiones: false,
    perfil: false,
    status: 1,
    dias: [],
    roles: [3],
    images: [],
    perfilEstatico: false
  },
  {
    id: 5,
    email: 'artesaniasaitue@lodelaferia.cl',
    password: 'artesaniasaitue.2021',
    nombreEmpresa: 'Artesanias Aitue',
    rut: '',
    direccionFisica: '',
    metodoPago: [],
    telefono: '',
    delivery: false,
    regiones: false,
    perfil: false,
    status: 1,
    dias: [],
    roles: [3],
    images: [],
    perfilEstatico: true
  },
  {
    id: 6,
    email: 'crismar@lodelaferia.cl',
    password: 'crismar.2021',
    nombreEmpresa: 'Crismar',
    rut: '',
    direccionFisica: '',
    metodoPago: [],
    telefono: '',
    delivery: false,
    regiones: false,
    perfil: false,
    status: 1,
    dias: [],
    roles: [3],
    images: [],
    perfilEstatico: false
  },
  {
    id: 7,
    email: 'casadelosartesanosm@lodelaferia.cl',
    password: 'casadelosartesanosm.2021',
    nombreEmpresa: 'Casa de los Artesanos',
    rut: '',
    direccionFisica: '',
    metodoPago: [],
    telefono: '',
    delivery: false,
    regiones: false,
    perfil: false,
    status: 1,
    dias: [],
    roles: [3],
    images: [],
    perfilEstatico: false
  },
  {
    id: 8,
    email: 'manosaustrales@lodelaferia.cl',
    password: 'manosaustrales.2021',
    nombreEmpresa: 'Manos Australes',
    rut: '',
    direccionFisica: '',
    metodoPago: [],
    telefono: '',
    delivery: false,
    regiones: false,
    perfil: false,
    status: 1,
    dias: [],
    roles: [3],
    images: [],
    perfilEstatico: false
  },
  {
    id: 9,
    email: 'miloyventto@lodelaferia.cl',
    password: 'miloyventto.2021',
    nombreEmpresa: 'Milo Y Ventto',
    rut: '',
    direccionFisica: '',
    metodoPago: [],
    telefono: '',
    delivery: false,
    regiones: false,
    perfil: false,
    status: 1,
    dias: [],
    roles: [3],
    images: [],
    perfilEstatico: false
  },
  {
    id: 10,
    email: 'manosdehadas@lodelaferia.cl',
    password: 'manosdehadas.2021',
    nombreEmpresa: 'Manos De Hadas',
    rut: '',
    direccionFisica: '',
    metodoPago: [],
    telefono: '',
    delivery: false,
    regiones: false,
    perfil: false,
    status: 1,
    dias: [],
    roles: [3],
    images: [],
    perfilEstatico: true
  },
  {
    id: 11,
    email: 'marihogartienda@lodelaferia.cl',
    password: 'marihogartienda.2021',
    nombreEmpresa: 'Mari Hogar Tienda',
    rut: '',
    direccionFisica: '',
    metodoPago: [],
    telefono: '',
    delivery: false,
    regiones: false,
    perfil: false,
    status: 1,
    dias: [],
    roles: [3],
    images: [],
    perfilEstatico: false
  },
  {
    id: 12,
    email: 'casadelosartesanosc@lodelaferia.cl',
    password: 'casadelosartesanosc.2021',
    nombreEmpresa: 'Casa De Los Artesanos',
    rut: '',
    direccionFisica: '',
    metodoPago: [],
    telefono: '',
    delivery: false,
    regiones: false,
    perfil: false,
    status: 1,
    dias: [],
    roles: [3],
    images: [],
    perfilEstatico: false
  },
  {
    id: 13,
    email: 'rincontresb@lodelaferia.cl',
    password: 'rincontresb.2021',
    nombreEmpresa: 'Rincon Tres B',
    rut: ' ',
    direccionFisica: '',
    metodoPago: [],
    telefono: '',
    delivery: false,
    regiones: false,
    perfil: false,
    status: 1,
    dias: [],
    roles: [3],
    images: [],
    perfilEstatico: true
  },
  {
    id: 14,
    email: 'chacatoys@lodelaferia.cl',
    password: 'chacatoys.2021',
    nombreEmpresa: 'Chaca Toys',
    rut: ' ',
    direccionFisica: '',
    metodoPago: [],
    telefono: '',
    delivery: false,
    regiones: false,
    perfil: false,
    status: 1,
    dias: [],
    roles: [3],
    images: [],
    perfilEstatico: true
  },
  {
    id: 15,
    email: 'vanidosas@lodelaferia.cl',
    password: 'vanidosas.2021',
    nombreEmpresa: 'Vanidosas',
    rut: '',
    direccionFisica: '',
    metodoPago: [],
    telefono: '',
    delivery: false,
    regiones: false,
    perfil: false,
    status: 1,
    dias: [],
    roles: [3],
    images: [],
    perfilEstatico: true
  },
  {
    id: 16,
    email: 'intrepidos@lodelaferia.cl',
    password: 'intrepidos.2021',
    nombreEmpresa: 'Intrepidos',
    rut: '',
    direccionFisica: '',
    metodoPago: [],
    telefono: '',
    delivery: false,
    regiones: false,
    perfil: false,
    status: 1,
    dias: [],
    roles: [3],
    images: [],
    perfilEstatico: false
  }
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
