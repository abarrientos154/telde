'use strict'

/*
|--------------------------------------------------------------------------
| SubNivelDoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const NivelDos = use("App/Models/SubNivelDo")
const data = [
  {
    id: 1,
    subniveluno_id: 157,
    nombre: 'Calzones',
    proveedor_id: 4
  },
  {
    id: 2,
    subniveluno_id: 157,
    nombre: 'Camisetas',
    proveedor_id: 4
  },
  {
    id: 3,
    subniveluno_id: 157,
    nombre: 'Pijamas',
    proveedor_id: 4
  },
  {
    id: 4,
    subniveluno_id: 157,
    nombre: 'Sostenes',
    proveedor_id: 4
  },
  {
    id: 5,
    subniveluno_id: 157,
    nombre: 'Deportivos',
    proveedor_id: 4
  },
  {
    id: 6,
    subniveluno_id: 157,
    nombre: 'Otros',
    proveedor_id: 4
  },
  {
    id: 7,
    subniveluno_id: 158,
    nombre: 'Camisetas',
    proveedor_id: 4
  },
  {
    id: 8,
    subniveluno_id: 158,
    nombre: 'Calzoncillos',
    proveedor_id: 4
  },
  {
    id: 9,
    subniveluno_id: 158,
    nombre: 'Boxers',
    proveedor_id: 4
  },
  {
    id: 10,
    subniveluno_id: 158,
    nombre: 'Calcetines',
    proveedor_id: 4
  },
  {
    id: 11,
    subniveluno_id: 158,
    nombre: 'Packs',
    proveedor_id: 4
  },
  {
    id: 7,
    subniveluno_id: 159,
    nombre: 'Camisetas',
    proveedor_id: 4
  },
  {
    id: 8,
    subniveluno_id: 159,
    nombre: 'Calzoncillos',
    proveedor_id: 4
  },
  {
    id: 9,
    subniveluno_id: 159,
    nombre: 'Boxers',
    proveedor_id: 4
  },
  {
    id: 10,
    subniveluno_id: 159,
    nombre: 'Calcetines',
    proveedor_id: 4
  },
  {
    id: 11,
    subniveluno_id: 176,
    nombre: 'Chocolates',
    proveedor_id: 4
  },
  {
    id: 12,
    subniveluno_id: 176,
    nombre: 'Turrones',
    proveedor_id: 4
  },
  {
    id: 13,
    subniveluno_id: 176,
    nombre: 'Galletas',
    proveedor_id: 4
  },
  {
    id: 14,
    subniveluno_id: 176,
    nombre: 'Caramelos',
    proveedor_id: 4
  },
  {
    id: 15,
    subniveluno_id: 176,
    nombre: 'Estuches',
    proveedor_id: 4
  },
  {
    id: 16,
    subniveluno_id: 179,
    nombre: 'Boinas',
    proveedor_id: 5
  },
  {
    id: 17,
    subniveluno_id: 179,
    nombre: 'Cenefas',
    proveedor_id: 5
  },
  {
    id: 18,
    subniveluno_id: 179,
    nombre: 'Chomba',
    proveedor_id: 5
  },
  {
    id: 19,
    subniveluno_id: 179,
    nombre: 'Poncho',
    proveedor_id: 5
  },
  {
    id: 20,
    subniveluno_id: 180,
    nombre: 'Canastos',
    proveedor_id: 5
  },
  {
    id: 21,
    subniveluno_id: 181,
    nombre: 'Llaveros',
    proveedor_id: 5
  },
  {
    id: 22,
    subniveluno_id: 181,
    nombre: 'Canastitos',
    proveedor_id: 5
  },
  {
    id: 23,
    subniveluno_id: 181,
    nombre: 'Joyero',
    proveedor_id: 5
  },
  {
    id: 24,
    subniveluno_id: 182,
    nombre: 'Llaveros',
    proveedor_id: 5
  },
  {
    id: 25,
    subniveluno_id: 182,
    nombre: 'Billetera',
    proveedor_id: 5
  },
  {
    id: 26,
    subniveluno_id: 182,
    nombre: 'Monedero',
    proveedor_id: 5
  },
  {
    id: 27,
    subniveluno_id: 183,
    nombre: 'Pantalones',
    proveedor_id: 5
  },
  {
    id: 28,
    subniveluno_id: 183,
    nombre: 'Cortinas',
    proveedor_id: 5
  },
  {
    id: 29,
    subniveluno_id: 183,
    nombre: 'Polerones',
    proveedor_id: 5
  },
  {
    id: 30,
    subniveluno_id: 184,
    nombre: 'Trajes',
    proveedor_id: 5
  },
  {
    id: 31,
    subniveluno_id: 184,
    nombre: 'Cortinas',
    proveedor_id: 5
  },
  {
    id: 32,
    subniveluno_id: 184,
    nombre: 'Fundas',
    proveedor_id: 5
  },
  {
    id: 33,
    subniveluno_id: 184,
    nombre: 'Cojines',
    proveedor_id: 5
  },
  {
    id: 34,
    subniveluno_id: 184,
    nombre: 'Cenefas',
    proveedor_id: 5
  },
  {
    id: 35,
    subniveluno_id: 185,
    nombre: 'Otros',
    proveedor_id: 5
  },
  {
    id: 36,
    subniveluno_id: 186,
    nombre: 'Audifonos',
    proveedor_id: 6
  },
  {
    id: 37,
    subniveluno_id: 186,
    nombre: 'Cargadores',
    proveedor_id: 6
  },
  {
    id: 38,
    subniveluno_id: 186,
    nombre: 'Cable USB',
    proveedor_id: 6
  },
  {
    id: 39,
    subniveluno_id: 186,
    nombre: 'Cable Auxiliar',
    proveedor_id: 6
  },
  {
    id: 40,
    subniveluno_id: 186,
    nombre: 'Soportes',
    proveedor_id: 6
  },
  {
    id: 41,
    subniveluno_id: 188,
    nombre: 'Americana',
    proveedor_id: 6
  },
  {
    id: 42,
    subniveluno_id: 188,
    nombre: 'Nueva',
    proveedor_id: 6
  },
  {
    id: 43,
    subniveluno_id: 189,
    nombre: 'Americana',
    proveedor_id: 6
  },
  {
    id: 44,
    subniveluno_id: 189,
    nombre: 'Nueva',
    proveedor_id: 6
  },
  {
    id: 45,
    subniveluno_id: 190,
    nombre: 'Americana',
    proveedor_id: 6
  },
  {
    id: 46,
    subniveluno_id: 190,
    nombre: 'Nueva',
    proveedor_id: 6
  },
  {
    id: 47,
    subniveluno_id: 231,
    nombre: 'Modelo Artesanal',
    proveedor_id: 7
  },
  {
    id: 48,
    subniveluno_id: 231,
    nombre: 'Modelo Hobby',
    proveedor_id: 7
  },
  {
    id: 49,
    subniveluno_id: 232,
    nombre: 'Modelo Pedal',
    proveedor_id: 7
  },
  {
    id: 50,
    subniveluno_id: 232,
    nombre: 'Modelo Pedal y Eléctrica',
    proveedor_id: 7
  },
  {
    id: 51,
    subniveluno_id: 233,
    nombre: 'Escarmenadora',
    proveedor_id: 7
  },
  {
    id: 52,
    subniveluno_id: 233,
    nombre: 'Ovilladora',
    proveedor_id: 7
  },
  {
    id: 53,
    subniveluno_id: 233,
    nombre: 'Lavadora de Tómbola',
    proveedor_id: 7
  },
  {
    id: 54,
    subniveluno_id: 234,
    nombre: 'Ovilladora y Madejadora',
    proveedor_id: 7
  },
  {
    id: 55,
    subniveluno_id: 235,
    nombre: 'Telares Mapuche',
    proveedor_id: 7
  },
  {
    id: 56,
    subniveluno_id: 235,
    nombre: 'Telares María',
    proveedor_id: 7
  },
  {
    id: 57,
    subniveluno_id: 236,
    nombre: 'Bastidores',
    proveedor_id: 7
  },
  {
    id: 58,
    subniveluno_id: 235,
    nombre: 'Usos',
    proveedor_id: 7
  },
  {
    id: 59,
    subniveluno_id: 235,
    nombre: 'Navetas',
    proveedor_id: 7
  },
  {
    id: 60,
    subniveluno_id: 235,
    nombre: 'Ñerehues',
    proveedor_id: 7
  },
  {
    id: 61,
    subniveluno_id: 252,
    nombre: 'Menta',
    proveedor_id: 8
  },
  {
    id: 62,
    subniveluno_id: 252,
    nombre: 'Poleo',
    proveedor_id: 8
  },
  {
    id: 63,
    subniveluno_id: 252,
    nombre: 'Paico',
    proveedor_id: 8
  },
  {
    id: 64,
    subniveluno_id: 252,
    nombre: 'Melisa',
    proveedor_id: 8
  },
  {
    id: 65,
    subniveluno_id: 252,
    nombre: 'Toronjil',
    proveedor_id: 8
  },
  {
    id: 66,
    subniveluno_id: 252,
    nombre: 'Apio',
    proveedor_id: 8
  },
  {
    id: 67,
    subniveluno_id: 252,
    nombre: 'Valeriana',
    proveedor_id: 8
  },
  {
    id: 68,
    subniveluno_id: 253,
    nombre: 'Lilium',
    proveedor_id: 8
  },
  {
    id: 69,
    subniveluno_id: 253,
    nombre: 'Hortencia',
    proveedor_id: 8
  },
  {
    id: 70,
    subniveluno_id: 253,
    nombre: 'Dolar',
    proveedor_id: 8
  },
  {
    id: 71,
    subniveluno_id: 253,
    nombre: 'Suculentas',
    proveedor_id: 8
  },
  {
    id: 72,
    subniveluno_id: 253,
    nombre: 'Cardenales',
    proveedor_id: 8
  },
  {
    id: 73,
    subniveluno_id: 253,
    nombre: 'Borgoña',
    proveedor_id: 8
  },
  {
    id: 74,
    subniveluno_id: 253,
    nombre: 'Enrredaderas',
    proveedor_id: 8
  },
  {
    id: 75,
    subniveluno_id: 264,
    nombre: 'Calzado',
    proveedor_id: 9
  },
  {
    id: 76,
    subniveluno_id: 265,
    nombre: 'Calzado',
    proveedor_id: 9
  },
  {
    id: 77,
    subniveluno_id: 266,
    nombre: 'Calzado',
    proveedor_id: 9
  },
  {
    id: 73,
    subniveluno_id: 267,
    nombre: 'Mascarillas',
    proveedor_id: 9
  },
  {
    id: 74,
    subniveluno_id: 267,
    nombre: 'Protectores Faciales',
    proveedor_id: 9
  },
  {
    id: 75,
    subniveluno_id: 385,
    nombre: 'Pantalon Cargo',
    proveedor_id: 16
  },
  {
    id: 76,
    subniveluno_id: 385,
    nombre: 'Pantalon Liso de Gabardina',
    proveedor_id: 16
  },
  {
    id: 77,
    subniveluno_id: 385,
    nombre: 'Pantalon de Jeans',
    proveedor_id: 16
  },
  {
    id: 78,
    subniveluno_id: 385,
    nombre: 'Calzoncillo Largo',
    proveedor_id: 16
  },
  {
    id: 79,
    subniveluno_id: 386,
    nombre: 'Camisa Formal',
    proveedor_id: 16
  },
  {
    id: 80,
    subniveluno_id: 386,
    nombre: 'Camisa de Franela',
    proveedor_id: 16
  },
  {
    id: 81,
    subniveluno_id: 387,
    nombre: 'Polera Manga Corta',
    proveedor_id: 16
  },
  {
    id: 82,
    subniveluno_id: 387,
    nombre: 'Polera Manga Larga',
    proveedor_id: 16
  },
  {
    id: 83,
    subniveluno_id: 388,
    nombre: 'Chaqueta Militar',
    proveedor_id: 16
  },
  {
    id: 84,
    subniveluno_id: 388,
    nombre: 'Chaqueta de Cuero',
    proveedor_id: 16
  },
  {
    id: 85,
    subniveluno_id: 388,
    nombre: 'Corta Vientos',
    proveedor_id: 16
  },
  {
    id: 86,
    subniveluno_id: 389,
    nombre: 'Sweater Manga Larga',
    proveedor_id: 16
  },
  {
    id: 87,
    subniveluno_id: 390,
    nombre: 'Short de Gabardina',
    proveedor_id: 16
  },
  {
    id: 88,
    subniveluno_id: 390,
    nombre: 'Traje de Baño',
    proveedor_id: 16
  },
  {
    id: 89,
    subniveluno_id: 391,
    nombre: 'Traje Completo',
    proveedor_id: 16
  },
  {
    id: 90,
    subniveluno_id: 391,
    nombre: 'Veston',
    proveedor_id: 16
  },
  {
    id: 91,
    subniveluno_id: 391,
    nombre: 'Corbatas',
    proveedor_id: 16
  },
  {
    id: 92,
    subniveluno_id: 392,
    nombre: 'Poleron de Algodón',
    proveedor_id: 16
  },
  {
    id: 93,
    subniveluno_id: 393,
    nombre: 'Pantalon Cargo',
    proveedor_id: 16
  },
  {
    id: 94,
    subniveluno_id: 393,
    nombre: 'Pantalon Liso de Gabardina',
    proveedor_id: 16
  },
  {
    id: 95,
    subniveluno_id: 393,
    nombre: 'Pantalon de Jeans',
    proveedor_id: 16
  },
  {
    id: 96,
    subniveluno_id: 393,
    nombre: 'Pantalon Formal',
    proveedor_id: 16
  },
  {
    id: 97,
    subniveluno_id: 394,
    nombre: 'Camisa Formal',
    proveedor_id: 16
  },
  {
    id: 98,
    subniveluno_id: 394,
    nombre: 'Camisa de Franela',
    proveedor_id: 16
  },
  {
    id: 99,
    subniveluno_id: 394,
    nombre: 'Camisa Outdoor',
    proveedor_id: 16
  },
  {
    id: 100,
    subniveluno_id: 395,
    nombre: 'Polera Manga Corta',
    proveedor_id: 16
  },
  {
    id: 101,
    subniveluno_id: 395,
    nombre: 'Polera Manga Larga',
    proveedor_id: 16
  },
  {
    id: 102,
    subniveluno_id: 396,
    nombre: 'Short Liso de Gabardina',
    proveedor_id: 16
  },
  {
    id: 103,
    subniveluno_id: 396,
    nombre: 'Short Cargo',
    proveedor_id: 16
  },
  {
    id: 104,
    subniveluno_id: 396,
    nombre: 'Short Microfibra',
    proveedor_id: 16
  },
  {
    id: 105,
    subniveluno_id: 396,
    nombre: 'Short Outdoor',
    proveedor_id: 16
  },
  {
    id: 106,
    subniveluno_id: 396,
    nombre: 'Traje de Baño',
    proveedor_id: 16
  }

]

class SubNivelDoSeeder {
  async run () {
    for (let i of data) {
      let cat = await NivelDos.findBy('id', i.id)
      if (!cat) {
        await NivelDos.create(i)
      }
      else {
        cat.id = i.id
        cat.subniveluno_id = i.subniveluno_id
        cat.nombre = i.nombre
        cat.proveedor_id = i.proveedor_id
        await cat.save()
      }
    }
    console.log('Finished Nivel Dos Categorias')
  }
}

module.exports = SubNivelDoSeeder
