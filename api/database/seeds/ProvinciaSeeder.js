'use strict'

/*
|--------------------------------------------------------------------------
| ProvinciaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Provincia = use("App/Models/Provincia")
const ProvinciasData = [
  {
    id: 28,
    nombre: 'Madrid'
  },
  {
    id: 33,
    nombre: 'Asturias'
  }
]

class ProvinciaSeeder {
  async run () {
    for (let i of ProvinciasData) {
      let cat = await Provincia.findBy('id', i.id)
      if (!cat) {
        await Provincia.create(i)
      }
    }
    console.log('Finished Provincias')
  }
}

module.exports = ProvinciaSeeder
