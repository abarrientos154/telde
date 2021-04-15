'use strict'

/*
|--------------------------------------------------------------------------
| SubNivelTreSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const NivelTres = use("App/Models/SubNivelTre")
const data = [
  {
    id: 1,
    subniveldos_id: 1,
    nombre: 'Colales',
    proveedor_id: 4
  },
  {
    id: 2,
    subniveldos_id: 1,
    nombre: 'Pantaletas',
    proveedor_id: 4
  },
  {
    id: 3,
    subniveldos_id: 1,
    nombre: 'Control',
    proveedor_id: 4
  },
  {
    id: 4,
    subniveldos_id: 1,
    nombre: 'Culotte',
    proveedor_id: 4
  },
  {
    id: 5,
    subniveldos_id: 1,
    nombre: 'Pack',
    proveedor_id: 4
  },
  {
    id: 6,
    subniveldos_id: 1,
    nombre: 'Sin Costura',
    proveedor_id: 4
  },
  {
    id: 7,
    subniveldos_id: 1,
    nombre: 'Maternal',
    proveedor_id: 4
  },
  {
    id: 8,
    subniveldos_id: 1,
    nombre: 'Encaje',
    proveedor_id: 4
  },
  {
    id: 9,
    subniveldos_id: 2,
    nombre: 'Con Mangas',
    proveedor_id: 4
  },
  {
    id: 10,
    subniveldos_id: 2,
    nombre: 'Sin Mangas',
    proveedor_id: 4
  },
  {
    id: 11,
    subniveldos_id: 2,
    nombre: 'Moldelante',
    proveedor_id: 4
  },
  {
    id: 12,
    subniveldos_id: 3,
    nombre: 'Dos Piezas',
    proveedor_id: 4
  },
  {
    id: 13,
    subniveldos_id: 3,
    nombre: 'BabyDoll',
    proveedor_id: 4
  },
  {
    id: 14,
    subniveldos_id: 3,
    nombre: 'Batas',
    proveedor_id: 4
  },
  {
    id: 15,
    subniveldos_id: 3,
    nombre: 'Pantunflas',
    proveedor_id: 4
  },
  {
    id: 16,
    subniveldos_id: 3,
    nombre: 'Camisolas',
    proveedor_id: 4
  },
  {
    id: 17,
    subniveldos_id: 4,
    nombre: 'Push Up',
    proveedor_id: 4
  },
  {
    id: 18,
    subniveldos_id: 4,
    nombre: 'Enncaje',
    proveedor_id: 4
  },
  {
    id: 19,
    subniveldos_id: 4,
    nombre: 'Brallette',
    proveedor_id: 4
  },
  {
    id: 20,
    subniveldos_id: 4,
    nombre: 'Deportivos',
    proveedor_id: 4
  },
  {
    id: 21,
    subniveldos_id: 4,
    nombre: 'Maternales',
    proveedor_id: 4
  },
  {
    id: 22,
    subniveldos_id: 4,
    nombre: 'Soft',
    proveedor_id: 4
  },
  {
    id: 23,
    subniveldos_id: 4,
    nombre: 'Natural',
    proveedor_id: 4
  },
  {
    id: 24,
    subniveldos_id: 4,
    nombre: 'Pack',
    proveedor_id: 4
  },
  {
    id: 25,
    subniveldos_id: 4,
    nombre: 'Sin DEmarcación',
    proveedor_id: 4
  },
  {
    id: 26,
    subniveldos_id: 4,
    nombre: 'Sin Arco',
    proveedor_id: 4
  },
  {
    id: 27,
    subniveldos_id: 4,
    nombre: 'Strapless',
    proveedor_id: 4
  },
  {
    id: 28,
    subniveldos_id: 4,
    nombre: 'Control',
    proveedor_id: 4
  },
  {
    id: 29,
    subniveldos_id: 4,
    nombre: 'Barconet',
    proveedor_id: 4
  },
  {
    id: 30,
    subniveldos_id: 5,
    nombre: 'Calzones',
    proveedor_id: 4
  },
  {
    id: 31,
    subniveldos_id: 5,
    nombre: 'Sostenes',
    proveedor_id: 4
  },
  {
    id: 32,
    subniveldos_id: 5,
    nombre: 'Petos',
    proveedor_id: 4
  },
  {
    id: 33,
    subniveldos_id: 5,
    nombre: 'Calzas',
    proveedor_id: 4
  },
  {
    id: 34,
    subniveldos_id: 5,
    nombre: 'Poleras',
    proveedor_id: 4
  },
  {
    id: 35,
    subniveldos_id: 5,
    nombre: 'Polerones',
    proveedor_id: 4
  },
  {
    id: 36,
    subniveldos_id: 6,
    nombre: 'Blusas',
    proveedor_id: 4
  },
  {
    id: 37,
    subniveldos_id: 6,
    nombre: 'Poleras',
    proveedor_id: 4
  },
  {
    id: 38,
    subniveldos_id: 6,
    nombre: 'Calcetines',
    proveedor_id: 4
  },
  {
    id: 39,
    subniveldos_id: 6,
    nombre: 'Pantys',
    proveedor_id: 4
  },
  {
    id: 40,
    subniveldos_id: 79,
    nombre: 'Manga Corta',
    proveedor_id: 16
  },
  {
    id: 41,
    subniveldos_id: 79,
    nombre: 'Manga Larga',
    proveedor_id: 16
  },
  {
    id: 42,
    subniveldos_id: 97,
    nombre: 'Manga Corta',
    proveedor_id: 16
  },
  {
    id: 43,
    subniveldos_id: 97,
    nombre: 'Manga Larga',
    proveedor_id: 16
  },
  {
    id: 44,
    subniveldos_id: 99,
    nombre: 'Manga Corta',
    proveedor_id: 16
  },
  {
    id: 45,
    subniveldos_id: 99,
    nombre: 'Manga Larga',
    proveedor_id: 16
  },
  {
    id: 46,
    subniveldos_id: 100,
    nombre: 'Algodón',
    proveedor_id: 16
  },
  {
    id: 47,
    subniveldos_id: 100,
    nombre: 'Microfibra',
    proveedor_id: 16
  },
  {
    id: 48,
    subniveldos_id: 101,
    nombre: 'Algodón',
    proveedor_id: 16
  },
  {
    id: 49,
    subniveldos_id: 101,
    nombre: 'Microfibra',
    proveedor_id: 16
  }
]

class SubNivelTreSeeder {
  async run () {
    for (let i of data) {
      let cat = await NivelTres.findBy('id', i.id)
      if (!cat) {
        await NivelTres.create(i)
      }
      else {
        cat.id = i.id
        cat.subniveldos_id = i.subniveldos_id
        cat.nombre = i.nombre
        cat.proveedor_id = i.proveedor_id
        await cat.save()
      }
    }
    console.log('Finished Nivel Tres Categorias')
  }
}

module.exports = SubNivelTreSeeder
