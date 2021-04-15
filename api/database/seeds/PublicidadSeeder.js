'use strict'

/*
|--------------------------------------------------------------------------
| PublicidadSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Publicidad = use("App/Models/Publicidad")

const publicidadData = [
  {
    tipo: 'publicidad1',
    posicion: '1.1',
    enable: true,
    nuevo: true,
    fileName: 'nopublicidad.jpg',
    ruta: ''
  },
  {
    tipo: 'publicidad1',
    posicion: '1.2',
    enable: true,
    nuevo: true,
    fileName: 'nopublicidad.jpg',
    ruta: ''
  },
  {
    tipo: 'publicidad2',
    posicion: '2.1',
    enable: true,
    nuevo: true,
    fileName: 'nopublicidad.jpg',
    ruta: ''
  },
  {
    tipo: 'publicidad2',
    posicion: '2.2',
    enable: true,
    nuevo: true,
    fileName: 'nopublicidad.jpg',
    ruta: ''
  }
]

class PublicidadSeeder {
  async run () {
    for (let i of publicidadData) {
      let publicidad = await Publicidad.findBy('posicion', i.posicion)
      if (!publicidad) {
        await Publicidad.create(i)
      }
      else {
        publicidad.tipo = i.tipo
        publicidad.posicion = i.posicion
        publicidad.enable = i.enable
        publicidad.fileName = i.fileName
        publicidad.ruta = i.ruta
        await publicidad.save()
      }
    }
    console.log('Finished Publicidad')
  }
}

module.exports = PublicidadSeeder
