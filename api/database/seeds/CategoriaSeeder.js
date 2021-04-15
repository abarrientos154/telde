'use strict'

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Categoria = use("App/Models/Categoria")
const categoriaData = [
  {
    id: 1,
    nombre: 'Perfumes Alternativos',
    proveedor_id: 1
  },
  {
    id: 2,
    nombre: 'Accesorios de Bebe',
    proveedor_id: 1
  },
  {
    id: 3,
    nombre: 'Accesorios de Dama y Varon',
    proveedor_id: 1
  },
  {
    id: 4,
    nombre: 'Articulos para el cuidado de la piel',
    proveedor_id: 1
  },
  {
    id: 5,
    nombre: 'Oficio= Tecnicas',
    proveedor_id: 2
  },
  {
    id: 6,
    nombre: 'Hogar y Decoraciones',
    proveedor_id: 2
  },
  {
    id: 7,
    nombre: 'Mesa Cocina',
    proveedor_id: 2
  },
  {
    id: 8,
    nombre: 'Indumentaria',
    proveedor_id: 2
  },
  {
    id: 9,
    nombre: 'Accesorio',
    proveedor_id: 2
  },
  {
    id: 10,
    nombre: 'Niños',
    proveedor_id: 2
  },
  {
    id: 11,
    nombre: 'Dama',
    proveedor_id: 2
  },
  {
    id: 12,
    nombre: 'Souvenirs',
    proveedor_id: 2
  },
  {
    id: 13,
    nombre: 'Articulos Útiles',
    proveedor_id: 2
  },
  {
    id: 14,
    nombre: 'Cocineria',
    proveedor_id: 3
  },
  {
    id: 15,
    nombre: 'Eectronica',
    proveedor_id: 3
  },
  {
    id: 16,
    nombre: 'Articulos del Hogar',
    proveedor_id: 3
  },
  {
    id: 17,
    nombre: 'Ejercicios fitness',
    proveedor_id: 3
  },
  {
    id: 18,
    nombre: 'Jardin',
    proveedor_id: 3
  },
  {
    id: 19,
    nombre: 'Uso Personal',
    proveedor_id: 3
  },
  {
    id: 20,
    nombre: 'Vestuario Mujer',
    proveedor_id: 4
  },
  {
    id: 21,
    nombre: 'Vestuario Hombre',
    proveedor_id: 4
  },
  {
    id: 22,
    nombre: 'Vestuario Niños',
    proveedor_id: 4
  },
  {
    id: 23,
    nombre: 'Articulos de Cuidado Personal',
    proveedor_id: 4
  },
  {
    id: 24,
    nombre: 'Tejidos a Mano',
    proveedor_id: 4
  },
  {
    id: 25,
    nombre: 'Paqueteria',
    proveedor_id: 4
  },
  {
    id: 26,
    nombre: 'Articulos para Regalos',
    proveedor_id: 4
  },
  {
    id: 27,
    nombre: 'Marcas de Ropa Interior',
    proveedor_id: 4
  },
  {
    id: 28,
    nombre: 'Artesania',
    proveedor_id: 5
  },
  {
    id: 29,
    nombre: 'Corte y Confección',
    proveedor_id: 5
  },
  {
    id: 30,
    nombre: 'Accesorios Electronicos',
    proveedor_id: 6
  },
  {
    id: 31,
    nombre: 'JUguetes Infantiles',
    proveedor_id: 6
  },
  {
    id: 32,
    nombre: 'Vestuario Casual y Deportivo',
    proveedor_id: 6
  },
  {
    id: 33,
    nombre: 'Artesanias con imanes',
    proveedor_id: 7
  },
  {
    id: 34,
    nombre: 'Tejidos de Lana Natural',
    proveedor_id: 7
  },
  {
    id: 35,
    nombre: 'Tejidos de Lana Sintética',
    proveedor_id: 7
  },
  {
    id: 36,
    nombre: 'Telares de Adornos',
    proveedor_id: 7
  },
  {
    id: 37,
    nombre: 'Artesanias de Madera',
    proveedor_id: 7
  },
  {
    id: 38,
    nombre: 'Accesorios',
    proveedor_id: 7
  },
  {
    id: 39,
    nombre: 'Lanas y Accesorios de Tejidos',
    proveedor_id: 7
  },
  {
    id: 40,
    nombre: 'Mermeladas Artesanales',
    proveedor_id: 7
  },
  {
    id: 41,
    nombre: 'Jugos',
    proveedor_id: 7
  },
  {
    id: 42,
    nombre: 'Bed&Breakfast',
    proveedor_id: 7
  },
  {
    id: 43,
    nombre: 'Maquinas Artesanales para el proceso de lanas',
    proveedor_id: 7
  },
  {
    id: 44,
    nombre: 'Libros Aysén Patagonia Chilena',
    proveedor_id: 7
  },
  {
    id: 45,
    nombre: 'Dama-Varon',
    proveedor_id: 8
  },
  {
    id: 46,
    nombre: 'Niño/a',
    proveedor_id: 8
  },
  {
    id: 47,
    nombre: 'Plantas',
    proveedor_id: 8
  },
  {
    id: 48,
    nombre: 'Madera',
    proveedor_id: 8
  },
  {
    id: 49,
    nombre: 'Mermeladas',
    proveedor_id: 8
  },
  {
    id: 50,
    nombre: 'Accesorios',
    proveedor_id: 9
  },
  {
    id: 51,
    nombre: 'Productos de Belleza',
    proveedor_id: 9
  },
  {
    id: 52,
    nombre: 'Vestuario',
    proveedor_id: 10
  },
  {
    id: 53,
    nombre: 'Artesania en Madera',
    proveedor_id: 10
  },
  {
    id: 54,
    nombre: 'Decoración',
    proveedor_id: 10
  },
  {
    id: 55,
    nombre: 'Gatos',
    proveedor_id: 11
  },
  {
    id: 56,
    nombre: 'Perros',
    proveedor_id: 11
  },
  {
    id: 57,
    nombre: 'Articulos para Pet Lovers',
    proveedor_id: 11
  },
  {
    id: 58,
    nombre: 'Vestuario',
    proveedor_id: 12
  },
  {
    id: 59,
    nombre: 'Accesorios',
    proveedor_id: 12
  },
  {
    id: 60,
    nombre: 'Productos de Belleza',
    proveedor_id: 12
  },
  {
    id: 61,
    nombre: 'Pantalones',
    proveedor_id: 13
  },
  {
    id: 62,
    nombre: 'Vestidos',
    proveedor_id: 13
  },
  {
    id: 63,
    nombre: 'Blusas',
    proveedor_id: 13
  },
  {
    id: 64,
    nombre: 'Polerones',
    proveedor_id: 13
  },
  {
    id: 65,
    nombre: 'Tejidos',
    proveedor_id: 13
  },
  {
    id: 66,
    nombre: 'Ropa de Jeans',
    proveedor_id: 13
  },
  {
    id: 67,
    nombre: 'Chaquetas',
    proveedor_id: 13
  },
  {
    id: 68,
    nombre: 'Lenceria',
    proveedor_id: 13
  },
  {
    id: 69,
    nombre: 'Calzado',
    proveedor_id: 13
  },
  {
    id: 70,
    nombre: 'Poleras',
    proveedor_id: 13
  },
  {
    id: 71,
    nombre: 'Jugueteria',
    proveedor_id: 14
  },
  {
    id: 72,
    nombre: 'Carteras',
    proveedor_id: 14
  },
  {
    id: 73,
    nombre: 'Peluches Americanos',
    proveedor_id: 14
  },
  {
    id: 74,
    nombre: 'MakeUp',
    proveedor_id: 15
  },
  {
    id: 75,
    nombre: 'Perfumes',
    proveedor_id: 15
  },
  {
    id: 76,
    nombre: 'Accesorios',
    proveedor_id: 15
  },
  {
    id: 77,
    nombre: 'Esmaltes',
    proveedor_id: 15
  },
  {
    id: 78,
    nombre: 'Ropa de Hombres',
    proveedor_id: 16
  },
  {
    id: 79,
    nombre: 'Ropa de Hombre Extra Grande',
    proveedor_id: 16
  }

]

class CategoriaSeeder {
  async run () {
    for (let i of categoriaData) {
      let cat = await Categoria.findBy('id', i.id)
      if (!cat) {
        await Categoria.create(i)
      }
      else {
        cat.id = i.id
        cat.nombre = i.nombre
        cat.proveedor_id = i.proveedor_id
        await cat.save()
      }
    }
    console.log('Finished Categorias')
  }
}

module.exports = CategoriaSeeder
