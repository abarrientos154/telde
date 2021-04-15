'use strict'

/*
|--------------------------------------------------------------------------
| SubNivelUnoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const NivelUno = use("App/Models/SubNivelUno")
const data = [
  {
    id: 1,
    categoria_id: 1,
    nombre: 'Perfumes Dama 100ml',
    proveedor_id: 1
  },
  {
    id: 2,
    categoria_id: 1,
    nombre: 'Perfumes Varon 100ml',
    proveedor_id: 1
  },
  {
    id: 3,
    categoria_id: 2,
    nombre: 'Bandanas',
    proveedor_id: 1
  },
  {
    id: 4,
    categoria_id: 2,
    nombre: 'Sonajeros',
    proveedor_id: 1
  },
  {
    id: 5,
    categoria_id: 2,
    nombre: 'vestidos Beba',
    proveedor_id: 1
  },
  {
    id: 6,
    categoria_id: 2,
    nombre: 'Chupetes para frutas',
    proveedor_id: 1
  },
  {
    id: 7,
    categoria_id: 2,
    nombre: 'Tutos',
    proveedor_id: 1
  },
  {
    id: 8,
    categoria_id: 2,
    nombre: 'Mordedores con sonajeros',
    proveedor_id: 1
  },
  {
    id: 9,
    categoria_id: 3,
    nombre: 'Gafas',
    proveedor_id: 1
  },
  {
    id: 10,
    categoria_id: 3,
    nombre: 'Bolsos de Verano',
    proveedor_id: 1
  },
  {
    id: 11,
    categoria_id: 3,
    nombre: 'Bolsas Pegables',
    proveedor_id: 1
  },
  {
    id: 12,
    categoria_id: 3,
    nombre: 'Mochilas Pegables',
    proveedor_id: 1
  },
  {
    id: 13,
    categoria_id: 3,
    nombre: 'Bananos',
    proveedor_id: 1
  },
  {
    id: 14,
    categoria_id: 3,
    nombre: 'Cinturones',
    proveedor_id: 1
  },
  {
    id: 15,
    categoria_id: 3,
    nombre: 'Billeteras',
    proveedor_id: 1
  },
  {
    id: 16,
    categoria_id: 3,
    nombre: 'Buzos',
    proveedor_id: 1
  },
  {
    id: 17,
    categoria_id: 3,
    nombre: 'Jokeys',
    proveedor_id: 1
  },
  {
    id: 18,
    categoria_id: 3,
    nombre: 'Bisuteria',
    proveedor_id: 1
  },
  {
    id: 19,
    categoria_id: 3,
    nombre: 'Fantasia',
    proveedor_id: 1
  },
  {
    id: 20,
    categoria_id: 3,
    nombre: 'Boxer',
    proveedor_id: 1
  },
  {
    id: 21,
    categoria_id: 5,
    nombre: 'Articulos y accesorios en fieltro',
    proveedor_id: 2
  },
  {
    id: 22,
    categoria_id: 5,
    nombre: 'Lanas Naturales',
    proveedor_id: 2
  },
  {
    id: 23,
    categoria_id: 5,
    nombre: 'Indumentaria',
    proveedor_id: 2
  },
  {
    id: 24,
    categoria_id: 5,
    nombre: 'Decoración en Telar Mapuche',
    proveedor_id: 2
  },
  {
    id: 25,
    categoria_id: 5,
    nombre: 'Artículos y Decoración en Cuero',
    proveedor_id: 2
  },
  {
    id: 26,
    categoria_id: 5,
    nombre: 'Decoración',
    proveedor_id: 2
  },
  {
    id: 27,
    categoria_id: 5,
    nombre: 'Hogar en Fibras Naturales',
    proveedor_id: 2
  },
  {
    id: 28,
    categoria_id: 5,
    nombre: 'Mesa Cocina en Madera Nativa',
    proveedor_id: 2
  },
  {
    id: 29,
    categoria_id: 5,
    nombre: 'Tejidos a Crochet',
    proveedor_id: 2
  },
  {
    id: 30,
    categoria_id: 5,
    nombre: 'Hilos',
    proveedor_id: 2
  },
  {
    id: 31,
    categoria_id: 6,
    nombre: 'Cuadros en Tecnicas de Cuero',
    proveedor_id: 2
  },
  {
    id: 32,
    categoria_id: 6,
    nombre: 'Cuadros en Telar',
    proveedor_id: 2
  },
  {
    id: 33,
    categoria_id: 6,
    nombre: 'Alfombras',
    proveedor_id: 2
  },
  {
    id: 34,
    categoria_id: 6,
    nombre: 'Canastos',
    proveedor_id: 2
  },
  {
    id: 35,
    categoria_id: 6,
    nombre: 'Pieceras',
    proveedor_id: 2
  },
  {
    id: 36,
    categoria_id: 6,
    nombre: 'Murales',
    proveedor_id: 2
  },
  {
    id: 37,
    categoria_id: 6,
    nombre: 'Tapices',
    proveedor_id: 2
  },
  {
    id: 38,
    categoria_id: 6,
    nombre: 'Joyeros',
    proveedor_id: 2
  },
  {
    id: 39,
    categoria_id: 6,
    nombre: 'Lamparas',
    proveedor_id: 2
  },
  {
    id: 40,
    categoria_id: 7,
    nombre: 'Canastos de Cocina',
    proveedor_id: 2
  },
  {
    id: 41,
    categoria_id: 7,
    nombre: 'Tablas Rusticas de Picar Individuales',
    proveedor_id: 2
  },
  {
    id: 42,
    categoria_id: 7,
    nombre: 'Caminos de Mesa',
    proveedor_id: 2
  },
  {
    id: 43,
    categoria_id: 8,
    nombre: 'Chales',
    proveedor_id: 2
  },
  {
    id: 44,
    categoria_id: 8,
    nombre: 'Echarpes',
    proveedor_id: 2
  },
  {
    id: 45,
    categoria_id: 8,
    nombre: 'Bufandas',
    proveedor_id: 2
  },
  {
    id: 46,
    categoria_id: 8,
    nombre: 'Mantas',
    proveedor_id: 2
  },
  {
    id: 47,
    categoria_id: 8,
    nombre: 'Ponchos',
    proveedor_id: 2
  },
  {
    id: 48,
    categoria_id: 8,
    nombre: 'Ruanas',
    proveedor_id: 2
  },
  {
    id: 49,
    categoria_id: 9,
    nombre: 'Aros',
    proveedor_id: 2
  },
  {
    id: 50,
    categoria_id: 9,
    nombre: 'Collares',
    proveedor_id: 2
  },
  {
    id: 51,
    categoria_id: 9,
    nombre: 'Pulseras',
    proveedor_id: 2
  },
  {
    id: 52,
    categoria_id: 9,
    nombre: 'Sombreros',
    proveedor_id: 2
  },
  {
    id: 53,
    categoria_id: 9,
    nombre: 'Carteras',
    proveedor_id: 2
  },
  {
    id: 54,
    categoria_id: 9,
    nombre: 'Boinas',
    proveedor_id: 2
  },
  {
    id: 55,
    categoria_id: 9,
    nombre: 'Morrales',
    proveedor_id: 2
  },
  {
    id: 56,
    categoria_id: 10,
    nombre: 'Chalecos',
    proveedor_id: 2
  },
  {
    id: 57,
    categoria_id: 10,
    nombre: 'Conjunto Bebe',
    proveedor_id: 2
  },
  {
    id: 58,
    categoria_id: 10,
    nombre: 'Pantunflas',
    proveedor_id: 2
  },
  {
    id: 59,
    categoria_id: 10,
    nombre: 'Zapatitos',
    proveedor_id: 2
  },
  {
    id: 60,
    categoria_id: 11,
    nombre: 'Chales',
    proveedor_id: 2
  },
  {
    id: 61,
    categoria_id: 11,
    nombre: 'Echarpes',
    proveedor_id: 2
  },
  {
    id: 62,
    categoria_id: 11,
    nombre: 'Ponchos',
    proveedor_id: 2
  },
  {
    id: 63,
    categoria_id: 11,
    nombre: 'Boinas',
    proveedor_id: 2
  },
  {
    id: 64,
    categoria_id: 12,
    nombre: 'Llaveros',
    proveedor_id: 2
  },
  {
    id: 65,
    categoria_id: 12,
    nombre: 'Mageticos',
    proveedor_id: 2
  },
  {
    id: 66,
    categoria_id: 12,
    nombre: 'Monederos',
    proveedor_id: 2
  },
  {
    id: 67,
    categoria_id: 13,
    nombre: 'Agendas Personalizadas',
    proveedor_id: 2
  },
  {
    id: 68,
    categoria_id: 13,
    nombre: 'Portalapices',
    proveedor_id: 2
  },
  {
    id: 68,
    categoria_id: 13,
    nombre: 'Lapiceras',
    proveedor_id: 2
  },
  {
    id: 70,
    categoria_id: 13,
    nombre: 'Neceser',
    proveedor_id: 2
  },
  {
    id: 71,
    categoria_id: 13,
    nombre: 'Billeteras',
    proveedor_id: 2
  },
  {
    id: 72,
    categoria_id: 13,
    nombre: 'Porta Celular',
    proveedor_id: 2
  },
  {
    id: 73,
    categoria_id: 13,
    nombre: 'Porta Documentos',
    proveedor_id: 2
  },
  {
    id: 74,
    categoria_id: 13,
    nombre: 'Porta Tarjetas',
    proveedor_id: 2
  },
  {
    id: 77,
    categoria_id: 13,
    nombre: 'Cartera de Mano',
    proveedor_id: 2
  },
  {
    id: 76,
    categoria_id: 13,
    nombre: 'Fundas de Cuchillo',
    proveedor_id: 2
  },
  {
    id: 77,
    categoria_id: 13,
    nombre: 'Joyeros',
    proveedor_id: 2
  },
  {
    id: 78,
    categoria_id: 14,
    nombre: 'Colaciones',
    proveedor_id: 3
  },
  {
    id: 79,
    categoria_id: 14,
    nombre: 'Papas Rellenas',
    proveedor_id: 3
  },
  {
    id: 80,
    categoria_id: 14,
    nombre: 'Milcaos',
    proveedor_id: 3
  },
  {
    id: 81,
    categoria_id: 14,
    nombre: 'Empanadas',
    proveedor_id: 3
  },
  {
    id: 82,
    categoria_id: 14,
    nombre: 'Pie Limón',
    proveedor_id: 3
  },
  {
    id: 83,
    categoria_id: 14,
    nombre: 'Tortas Vaso',
    proveedor_id: 3
  },
  {
    id: 84,
    categoria_id: 14,
    nombre: 'Kuguen',
    proveedor_id: 3
  },
  {
    id: 85,
    categoria_id: 14,
    nombre: 'Torta Yogurt',
    proveedor_id: 3
  },
  {
    id: 86,
    categoria_id: 15,
    nombre: 'Cargadores',
    proveedor_id: 3
  },
  {
    id: 87,
    categoria_id: 15,
    nombre: 'Equipos de Musica',
    proveedor_id: 3
  },
  {
    id: 88,
    categoria_id: 15,
    nombre: 'Alargadores',
    proveedor_id: 3
  },
  {
    id: 89,
    categoria_id: 15,
    nombre: 'Audifonos',
    proveedor_id: 3
  },
  {
    id: 90,
    categoria_id: 15,
    nombre: 'Power Box',
    proveedor_id: 3
  },
  {
    id: 91,
    categoria_id: 15,
    nombre: 'Radio Portatil',
    proveedor_id: 3
  },
  {
    id: 92,
    categoria_id: 15,
    nombre: 'Linterna Solar Radio',
    proveedor_id: 3
  },
  {
    id: 93,
    categoria_id: 15,
    nombre: 'Foco solar',
    proveedor_id: 3
  },
  {
    id: 94,
    categoria_id: 15,
    nombre: 'Luz Selfie',
    proveedor_id: 3
  },
  {
    id: 95,
    categoria_id: 15,
    nombre: 'Tripoide para celular',
    proveedor_id: 3
  },
  {
    id: 96,
    categoria_id: 15,
    nombre: 'Ampliador de pantalla',
    proveedor_id: 3
  },
  {
    id: 97,
    categoria_id: 15,
    nombre: 'Espanta cuco',
    proveedor_id: 3
  },
  {
    id: 98,
    categoria_id: 15,
    nombre: 'Aspiradora de Auto',
    proveedor_id: 3
  },
  {
    id: 99,
    categoria_id: 16,
    nombre: 'Ollas',
    proveedor_id: 3
  },
  {
    id: 100,
    categoria_id: 16,
    nombre: 'Fuentes',
    proveedor_id: 3
  },
  {
    id: 101,
    categoria_id: 16,
    nombre: 'Vasos',
    proveedor_id: 3
  },
  {
    id: 102,
    categoria_id: 16,
    nombre: 'PLatos',
    proveedor_id: 3
  },
  {
    id: 103,
    categoria_id: 16,
    nombre: 'Tazones',
    proveedor_id: 3
  },
  {
    id: 104,
    categoria_id: 16,
    nombre: 'Cubiertos',
    proveedor_id: 3
  },
  {
    id: 105,
    categoria_id: 16,
    nombre: 'Coladores',
    proveedor_id: 3
  },
  {
    id: 106,
    categoria_id: 16,
    nombre: 'Dispensador de Jabón',
    proveedor_id: 3
  },
  {
    id: 107,
    categoria_id: 16,
    nombre: 'Organizador de Ollas',
    proveedor_id: 3
  },
  {
    id: 108,
    categoria_id: 16,
    nombre: 'Picador Manual',
    proveedor_id: 3
  },
  {
    id: 109,
    categoria_id: 16,
    nombre: 'Bases de Utensilios',
    proveedor_id: 3
  },
  {
    id: 110,
    categoria_id: 16,
    nombre: 'Batidoras',
    proveedor_id: 3
  },
  {
    id: 111,
    categoria_id: 16,
    nombre: 'Sartenes',
    proveedor_id: 3
  },
  {
    id: 112,
    categoria_id: 16,
    nombre: 'Filtro Potenciador',
    proveedor_id: 3
  },
  {
    id: 113,
    categoria_id: 16,
    nombre: 'Organizador de espacios',
    proveedor_id: 3
  },
  {
    id: 114,
    categoria_id: 16,
    nombre: 'Baldes',
    proveedor_id: 3
  },
  {
    id: 115,
    categoria_id: 16,
    nombre: 'Basureros',
    proveedor_id: 3
  },
  {
    id: 116,
    categoria_id: 16,
    nombre: 'Pesa Gramera',
    proveedor_id: 3
  },
  {
    id: 117,
    categoria_id: 16,
    nombre: 'Destapador de Botella',
    proveedor_id: 3
  },
  {
    id: 118,
    categoria_id: 16,
    nombre: 'Moldes de Tortas',
    proveedor_id: 3
  },
  {
    id: 119,
    categoria_id: 16,
    nombre: 'Filtro Pegable',
    proveedor_id: 3
  },
  {
    id: 120,
    categoria_id: 16,
    nombre: 'Hervidores',
    proveedor_id: 3
  },
  {
    id: 121,
    categoria_id: 16,
    nombre: 'Colgadores',
    proveedor_id: 3
  },
  {
    id: 122,
    categoria_id: 16,
    nombre: 'Botella de Vidrio',
    proveedor_id: 3
  },
  {
    id: 123,
    categoria_id: 17,
    nombre: 'Barra de Ejercicios',
    proveedor_id: 3
  },
  {
    id: 124,
    categoria_id: 17,
    nombre: 'Smart Fitness Gluteos',
    proveedor_id: 3
  },
  {
    id: 125,
    categoria_id: 17,
    nombre: 'Abdominal de Succión',
    proveedor_id: 3
  },
  {
    id: 126,
    categoria_id: 17,
    nombre: 'Banda de Resistencia',
    proveedor_id: 3
  },
  {
    id: 127,
    categoria_id: 17,
    nombre: 'Cuerda Elastica',
    proveedor_id: 3
  },
  {
    id: 128,
    categoria_id: 17,
    nombre: 'Bandas de Ejercicios Body Trimer',
    proveedor_id: 3
  },
  {
    id: 129,
    categoria_id: 17,
    nombre: 'Pectoral Multifuncional',
    proveedor_id: 3
  },
  {
    id: 130,
    categoria_id: 17,
    nombre: 'Ruedas de Ejercicios Abdominal',
    proveedor_id: 3
  },
  {
    id: 131,
    categoria_id: 17,
    nombre: 'Maquina de Ejercicios',
    proveedor_id: 3
  },
  {
    id: 132,
    categoria_id: 17,
    nombre: 'Apreta Mano',
    proveedor_id: 3
  },
  {
    id: 133,
    categoria_id: 18,
    nombre: 'Macetros',
    proveedor_id: 3
  },
  {
    id: 134,
    categoria_id: 18,
    nombre: 'Set Jardinera',
    proveedor_id: 3
  },
  {
    id: 135,
    categoria_id: 18,
    nombre: 'Guante Jardinero',
    proveedor_id: 3
  },
  {
    id: 136,
    categoria_id: 18,
    nombre: 'Maceteros de Pared',
    proveedor_id: 3
  },
  {
    id: 137,
    categoria_id: 18,
    nombre: 'Regadera',
    proveedor_id: 3
  },
  {
    id: 138,
    categoria_id: 19,
    nombre: 'Secador de Cabello',
    proveedor_id: 3
  },
  {
    id: 139,
    categoria_id: 19,
    nombre: 'Rizador Profesional',
    proveedor_id: 3
  },
  {
    id: 140,
    categoria_id: 19,
    nombre: 'Cepillo Alisador',
    proveedor_id: 3
  },
  {
    id: 141,
    categoria_id: 19,
    nombre: 'Cortador de Cabello',
    proveedor_id: 3
  },
  {
    id: 142,
    categoria_id: 19,
    nombre: 'Corrector de Postura',
    proveedor_id: 3
  },
  {
    id: 143,
    categoria_id: 19,
    nombre: 'Masajeador Demoledor',
    proveedor_id: 3
  },
  {
    id: 144,
    categoria_id: 19,
    nombre: 'Depilador de Cejas',
    proveedor_id: 3
  },
  {
    id: 145,
    categoria_id: 19,
    nombre: 'Blanqueador de Dientes',
    proveedor_id: 3
  },
  {
    id: 146,
    categoria_id: 19,
    nombre: 'Espejo Led Touch',
    proveedor_id: 3
  },
  {
    id: 147,
    categoria_id: 19,
    nombre: 'Quemador Triple Grasa',
    proveedor_id: 3
  },
  {
    id: 148,
    categoria_id: 19,
    nombre: 'Plan 30 Dias',
    proveedor_id: 3
  },
  {
    id: 149,
    categoria_id: 19,
    nombre: 'Devorador de Grasa',
    proveedor_id: 3
  },
  {
    id: 150,
    categoria_id: 19,
    nombre: 'Pesas',
    proveedor_id: 3
  },
  {
    id: 151,
    categoria_id: 19,
    nombre: 'Ventilador Portatil',
    proveedor_id: 3
  },
  {
    id: 153,
    categoria_id: 19,
    nombre: 'Mascarillas',
    proveedor_id: 3
  },
  {
    id: 154,
    categoria_id: 19,
    nombre: 'Flea Doctor',
    proveedor_id: 3
  },
  {
    id: 155,
    categoria_id: 19,
    nombre: 'Dispensador de Pasta Dental',
    proveedor_id: 3
  },
  {
    id: 156,
    categoria_id: 19,
    nombre: 'Plancha de Cabello',
    proveedor_id: 3
  },
  {
    id: 157,
    categoria_id: 20,
    nombre: 'Ropa Interior',
    proveedor_id: 4
  },
  {
    id: 158,
    categoria_id: 21,
    nombre: 'Ropa Interior',
    proveedor_id: 4
  },
  {
    id: 159,
    categoria_id: 22,
    nombre: 'Ropa Interior',
    proveedor_id: 4
  },
  {
    id: 160,
    categoria_id: 23,
    nombre: 'Cósmetica',
    proveedor_id: 4
  },
  {
    id: 161,
    categoria_id: 23,
    nombre: 'Lociones',
    proveedor_id: 4
  },
  {
    id: 162,
    categoria_id: 23,
    nombre: 'Perfumes',
    proveedor_id: 4
  },
  {
    id: 163,
    categoria_id: 23,
    nombre: 'Estuches',
    proveedor_id: 4
  },
  {
    id: 164,
    categoria_id: 23,
    nombre: 'Pañales de Adulto',
    proveedor_id: 4
  },
  {
    id: 165,
    categoria_id: 23,
    nombre: 'Pañales de Bebe',
    proveedor_id: 4
  },
  {
    id: 166,
    categoria_id: 23,
    nombre: 'Confort',
    proveedor_id: 4
  },
  {
    id: 167,
    categoria_id: 23,
    nombre: 'Alcohol Gel',
    proveedor_id: 4
  },
  {
    id: 168,
    categoria_id: 24,
    nombre: 'Cuellos',
    proveedor_id: 4
  },
  {
    id: 169,
    categoria_id: 24,
    nombre: 'Gorros',
    proveedor_id: 4
  },
  {
    id: 170,
    categoria_id: 24,
    nombre: 'Mitones',
    proveedor_id: 4
  },
  {
    id: 171,
    categoria_id: 24,
    nombre: 'Ropa de niño',
    proveedor_id: 4
  },
  {
    id: 172,
    categoria_id: 24,
    nombre: 'Tejidos a Pedido',
    proveedor_id: 4
  },
  {
    id: 173,
    categoria_id: 25,
    nombre: 'Lanas',
    proveedor_id: 4
  },
  {
    id: 174,
    categoria_id: 25,
    nombre: 'Hilos',
    proveedor_id: 4
  },
  {
    id: 175,
    categoria_id: 25,
    nombre: 'Algodón',
    proveedor_id: 4
  },
  {
    id: 176,
    categoria_id: 26,
    nombre: 'Confiteria Importada',
    proveedor_id: 4
  },
  {
    id: 177,
    categoria_id: 27,
    nombre: 'Flores',
    proveedor_id: 4
  },
  {
    id: 178,
    categoria_id: 27,
    nombre: 'Baziani',
    proveedor_id: 4
  },
  {
    id: 179,
    categoria_id: 28,
    nombre: 'Lana',
    proveedor_id: 5
  },
  {
    id: 180,
    categoria_id: 28,
    nombre: 'Mimbre',
    proveedor_id: 5
  },
  {
    id: 181,
    categoria_id: 28,
    nombre: 'Manila',
    proveedor_id: 5
  },
  {
    id: 182,
    categoria_id: 28,
    nombre: 'Cuero',
    proveedor_id: 5
  },
  {
    id: 183,
    categoria_id: 29,
    nombre: 'Reparación',
    proveedor_id: 5
  },
  {
    id: 184,
    categoria_id: 29,
    nombre: 'Congección',
    proveedor_id: 5
  },
  {
    id: 185,
    categoria_id: 29,
    nombre: 'Mascarillas',
    proveedor_id: 5
  },
  {
    id: 186,
    categoria_id: 30,
    nombre: 'Nuevos',
    proveedor_id: 6
  },
  {
    id: 187,
    categoria_id: 31,
    nombre: '6 a 12 años',
    proveedor_id: 6
  },
  {
    id: 188,
    categoria_id: 32,
    nombre: 'Dama',
    proveedor_id: 6
  },
  {
    id: 189,
    categoria_id: 32,
    nombre: 'Varon',
    proveedor_id: 6
  },
  {
    id: 190,
    categoria_id: 32,
    nombre: 'Niño/a',
    proveedor_id: 6
  },
  {
    id: 191,
    categoria_id: 33,
    nombre: 'Ovejitas',
    proveedor_id: 7
  },
  {
    id: 192,
    categoria_id: 33,
    nombre: 'Gauchitos',
    proveedor_id: 7
  },
  {
    id: 193,
    categoria_id: 33,
    nombre: 'Gorritos',
    proveedor_id: 7
  },
  {
    id: 194,
    categoria_id: 33,
    nombre: 'Ovillos de Lana',
    proveedor_id: 7
  },
  {
    id: 195,
    categoria_id: 33,
    nombre: 'Boinas',
    proveedor_id: 7
  },
  {
    id: 196,
    categoria_id: 33,
    nombre: 'Telares',
    proveedor_id: 7
  },
  {
    id: 197,
    categoria_id: 33,
    nombre: 'Lapices de Lana',
    proveedor_id: 7
  },
  {
    id: 198,
    categoria_id: 34,
    nombre: 'Gorros',
    proveedor_id: 7
  },
  {
    id: 199,
    categoria_id: 34,
    nombre: 'Cuellos',
    proveedor_id: 7
  },
  {
    id: 200,
    categoria_id: 34,
    nombre: 'Cintillos',
    proveedor_id: 7
  },
  {
    id: 201,
    categoria_id: 34,
    nombre: 'Boinas',
    proveedor_id: 7
  },
  {
    id: 202,
    categoria_id: 34,
    nombre: 'Medias',
    proveedor_id: 7
  },
  {
    id: 203,
    categoria_id: 34,
    nombre: 'Polanainas',
    proveedor_id: 7
  },
  {
    id: 204,
    categoria_id: 35,
    nombre: 'Gorros',
    proveedor_id: 7
  },
  {
    id: 205,
    categoria_id: 35,
    nombre: 'Cuellos',
    proveedor_id: 7
  },
  {
    id: 206,
    categoria_id: 35,
    nombre: 'Cintillos',
    proveedor_id: 7
  },
  {
    id: 207,
    categoria_id: 35,
    nombre: 'Boinas',
    proveedor_id: 7
  },
  {
    id: 208,
    categoria_id: 35,
    nombre: 'Pantunflas',
    proveedor_id: 7
  },
  {
    id: 209,
    categoria_id: 36,
    nombre: 'Con Lana Natural',
    proveedor_id: 7
  },
  {
    id: 210,
    categoria_id: 36,
    nombre: 'Con Fieltro',
    proveedor_id: 7
  },
  {
    id: 211,
    categoria_id: 36,
    nombre: 'Con o sin Marco',
    proveedor_id: 7
  },
  {
    id: 212,
    categoria_id: 37,
    nombre: 'Cajas',
    proveedor_id: 7
  },
  {
    id: 213,
    categoria_id: 37,
    nombre: 'Rodajas de Madera',
    proveedor_id: 7
  },
  {
    id: 214,
    categoria_id: 37,
    nombre: 'Botones',
    proveedor_id: 7
  },
  {
    id: 215,
    categoria_id: 38,
    nombre: 'Llaveros en Lana',
    proveedor_id: 7
  },
  {
    id: 216,
    categoria_id: 38,
    nombre: 'Llaveros en Cuero',
    proveedor_id: 7
  },
  {
    id: 217,
    categoria_id: 38,
    nombre: 'Monederos',
    proveedor_id: 7
  },
  {
    id: 218,
    categoria_id: 38,
    nombre: 'Funda para Encendedores',
    proveedor_id: 7
  },
  {
    id: 219,
    categoria_id: 39,
    nombre: 'Lanas Naturales',
    proveedor_id: 7
  },
  {
    id: 220,
    categoria_id: 39,
    nombre: 'Lana Merino',
    proveedor_id: 7
  },
  {
    id: 221,
    categoria_id: 39,
    nombre: 'Fieltro',
    proveedor_id: 7
  },
  {
    id: 222,
    categoria_id: 39,
    nombre: 'Palillos',
    proveedor_id: 7
  },
  {
    id: 223,
    categoria_id: 39,
    nombre: 'Crochet',
    proveedor_id: 7
  },
  {
    id: 224,
    categoria_id: 39,
    nombre: 'Agujas para Fieltro',
    proveedor_id: 7
  },
  {
    id: 225,
    categoria_id: 40,
    nombre: 'Calafate',
    proveedor_id: 7
  },
  {
    id: 226,
    categoria_id: 40,
    nombre: 'Rosa Mosqueta',
    proveedor_id: 7
  },
  {
    id: 227,
    categoria_id: 40,
    nombre: 'Ruibarbo',
    proveedor_id: 7
  },
  {
    id: 228,
    categoria_id: 40,
    nombre: 'Grosella',
    proveedor_id: 7
  },
  {
    id: 229,
    categoria_id: 41,
    nombre: 'Jugo de Calafate',
    proveedor_id: 7
  },
  {
    id: 230,
    categoria_id: 42,
    nombre: 'Alojamientos Compartidos Hostal',
    proveedor_id: 7
  },
  {
    id: 231,
    categoria_id: 43,
    nombre: 'Hiladoras de Sobremesa',
    proveedor_id: 7
  },
  {
    id: 232,
    categoria_id: 43,
    nombre: 'Ruecas de Pedal',
    proveedor_id: 7
  },
  {
    id: 233,
    categoria_id: 43,
    nombre: 'Otras Máquinas',
    proveedor_id: 7
  },
  {
    id: 234,
    categoria_id: 43,
    nombre: 'Importadas',
    proveedor_id: 7
  },
  {
    id: 235,
    categoria_id: 43,
    nombre: 'Telares',
    proveedor_id: 7
  },
  {
    id: 236,
    categoria_id: 43,
    nombre: 'Utensilios',
    proveedor_id: 7
  },
  {
    id: 237,
    categoria_id: 44,
    nombre: 'Cuentos y Recuerdos(Español)',
    proveedor_id: 7
  },
  {
    id: 238,
    categoria_id: 44,
    nombre: 'EL Tallador y Otros Cuentos(Español)',
    proveedor_id: 7
  },
  {
    id: 239,
    categoria_id: 44,
    nombre: 'A Patagonian Man s Anthology(Ingles)',
    proveedor_id: 7
  },
  {
    id: 240,
    categoria_id: 44,
    nombre: 'Antologia Di Un Uomo Della Patagonia(Italiano)',
    proveedor_id: 7
  },
  {
    id: 241,
    categoria_id: 45,
    nombre: 'Chombas de Lana',
    proveedor_id: 8
  },
  {
    id: 242,
    categoria_id: 45,
    nombre: 'Medias de Lana',
    proveedor_id: 8
  },
  {
    id: 243,
    categoria_id: 45,
    nombre: 'Vestidos de Lana',
    proveedor_id: 8
  },
  {
    id: 244,
    categoria_id: 45,
    nombre: 'Boinas',
    proveedor_id: 8
  },
  {
    id: 245,
    categoria_id: 45,
    nombre: 'Guantes de Lana',
    proveedor_id: 8
  },
  {
    id: 246,
    categoria_id: 45,
    nombre: 'Gorros de Lana',
    proveedor_id: 8
  },
  {
    id: 247,
    categoria_id: 46,
    nombre: 'Medias de Lana',
    proveedor_id: 8
  },
  {
    id: 248,
    categoria_id: 46,
    nombre: 'Gorros de Lana',
    proveedor_id: 8
  },
  {
    id: 249,
    categoria_id: 46,
    nombre: 'Boinas',
    proveedor_id: 8
  },
  {
    id: 250,
    categoria_id: 46,
    nombre: 'Guantes de Lana',
    proveedor_id: 8
  },
  {
    id: 251,
    categoria_id: 46,
    nombre: 'Citillos',
    proveedor_id: 8
  },
  {
    id: 252,
    categoria_id: 47,
    nombre: 'Medicinales',
    proveedor_id: 8
  },
  {
    id: 253,
    categoria_id: 47,
    nombre: 'Decorativas',
    proveedor_id: 8
  },
  {
    id: 254,
    categoria_id: 48,
    nombre: 'Cucharas',
    proveedor_id: 8
  },
  {
    id: 255,
    categoria_id: 48,
    nombre: 'Saleros',
    proveedor_id: 8
  },
  {
    id: 256,
    categoria_id: 48,
    nombre: 'Paneras',
    proveedor_id: 8
  },
  {
    id: 257,
    categoria_id: 48,
    nombre: 'Tablas',
    proveedor_id: 8
  },
  {
    id: 258,
    categoria_id: 48,
    nombre: 'Porta Llaves',
    proveedor_id: 8
  },
  {
    id: 259,
    categoria_id: 48,
    nombre: 'Mates',
    proveedor_id: 8
  },
  {
    id: 260,
    categoria_id: 49,
    nombre: 'Ciruela',
    proveedor_id: 8
  },
  {
    id: 261,
    categoria_id: 49,
    nombre: 'Cereza',
    proveedor_id: 8
  },
  {
    id: 262,
    categoria_id: 49,
    nombre: 'Ciruela-Manzana',
    proveedor_id: 8
  },
  {
    id: 263,
    categoria_id: 49,
    nombre: 'Corosellas',
    proveedor_id: 8
  },
  {
    id: 264,
    categoria_id: 50,
    nombre: 'Dama',
    proveedor_id: 9
  },
  {
    id: 265,
    categoria_id: 50,
    nombre: 'Caballero',
    proveedor_id: 9
  },
  {
    id: 266,
    categoria_id: 50,
    nombre: 'Niño',
    proveedor_id: 9
  },
  {
    id: 267,
    categoria_id: 50,
    nombre: 'Salud',
    proveedor_id: 9
  },
  {
    id: 268,
    categoria_id: 51,
    nombre: 'Perfumes',
    proveedor_id: 9
  },
  {
    id: 269,
    categoria_id: 51,
    nombre: 'Cremas',
    proveedor_id: 9
  },
  {
    id: 270,
    categoria_id: 51,
    nombre: 'Labiales',
    proveedor_id: 9
  },
  {
    id: 271,
    categoria_id: 51,
    nombre: 'Esmaltes',
    proveedor_id: 9
  },
  {
    id: 272,
    categoria_id: 51,
    nombre: 'Cepillos de Cabello',
    proveedor_id: 9
  },
  {
    id: 273,
    categoria_id: 51,
    nombre: 'Salud',
    proveedor_id: 9
  },
  {
    id: 274,
    categoria_id: 52,
    nombre: 'Lana Natural',
    proveedor_id: 10
  },
  {
    id: 275,
    categoria_id: 52,
    nombre: 'Lana Sintética',
    proveedor_id: 10
  },
  {
    id: 276,
    categoria_id: 53,
    nombre: 'Imanes',
    proveedor_id: 10
  },
  {
    id: 277,
    categoria_id: 53,
    nombre: 'Espejos',
    proveedor_id: 10
  },
  {
    id: 278,
    categoria_id: 53,
    nombre: 'Llaveros',
    proveedor_id: 10
  },
  {
    id: 279,
    categoria_id: 54,
    nombre: 'Aros',
    proveedor_id: 10
  },
  {
    id: 280,
    categoria_id: 54,
    nombre: 'Telares',
    proveedor_id: 10
  },
  {
    id: 281,
    categoria_id: 55,
    nombre: 'Collares y Arnes',
    proveedor_id: 11
  },
  {
    id: 282,
    categoria_id: 55,
    nombre: 'Juguetes',
    proveedor_id: 11
  },
  {
    id: 283,
    categoria_id: 55,
    nombre: 'Rascadores',
    proveedor_id: 11
  },
  {
    id: 284,
    categoria_id: 55,
    nombre: 'PLatos y Dispensadores',
    proveedor_id: 11
  },
  {
    id: 275,
    categoria_id: 55,
    nombre: 'Areneros',
    proveedor_id: 11
  },
  {
    id: 276,
    categoria_id: 55,
    nombre: 'Ropa',
    proveedor_id: 11
  },
  {
    id: 277,
    categoria_id: 55,
    nombre: 'Transportadoras',
    proveedor_id: 11
  },
  {
    id: 278,
    categoria_id: 55,
    nombre: 'Cuidado e Higiene',
    proveedor_id: 11
  },
  {
    id: 279,
    categoria_id: 56,
    nombre: 'Collares y Arnes',
    proveedor_id: 11
  },
  {
    id: 282,
    categoria_id: 56,
    nombre: 'Juguetes',
    proveedor_id: 11
  },
  {
    id: 284,
    categoria_id: 56,
    nombre: 'PLatos y Dispensadores',
    proveedor_id: 11
  },
  {
    id: 285,
    categoria_id: 56,
    nombre: 'Ropa',
    proveedor_id: 11
  },
  {
    id: 286,
    categoria_id: 56,
    nombre: 'Transportadoras',
    proveedor_id: 11
  },
  {
    id: 287,
    categoria_id: 56,
    nombre: 'Cuidado e Higiene',
    proveedor_id: 11
  },
  {
    id: 288,
    categoria_id: 56,
    nombre: 'Camas',
    proveedor_id: 11
  },
  {
    id: 289,
    categoria_id: 57,
    nombre: 'Otros',
    proveedor_id: 11
  },
  {
    id: 290,
    categoria_id: 58,
    nombre: 'Ropa de Niño(Americana)',
    proveedor_id: 12
  },
  {
    id: 291,
    categoria_id: 58,
    nombre: 'Uniformes Clinicos-(Americana)',
    proveedor_id: 12
  },
  {
    id: 292,
    categoria_id: 58,
    nombre: 'Ropa Interior(Nueva)',
    proveedor_id: 12
  },
  {
    id: 293,
    categoria_id: 59,
    nombre: 'Moños',
    proveedor_id: 12
  },
  {
    id: 294,
    categoria_id: 59,
    nombre: 'Cintillos',
    proveedor_id: 12
  },
  {
    id: 295,
    categoria_id: 59,
    nombre: 'Pulseras',
    proveedor_id: 11
  },
  {
    id: 296,
    categoria_id: 59,
    nombre: 'Pinzas',
    proveedor_id: 12
  },
  {
    id: 297,
    categoria_id: 59,
    nombre: 'Billeteras',
    proveedor_id: 12
  },
  {
    id: 298,
    categoria_id: 59,
    nombre: 'Set de Limpieza para Cara',
    proveedor_id: 12
  },
  {
    id: 299,
    categoria_id: 60,
    nombre: 'Perfumes Dama y Varon',
    proveedor_id: 12
  },
  {
    id: 300,
    categoria_id: 60,
    nombre: 'Desodorante Dama y Varon',
    proveedor_id: 12
  },
  {
    id: 301,
    categoria_id: 60,
    nombre: 'Cremas de Mano',
    proveedor_id: 12
  },
  {
    id: 302,
    categoria_id: 60,
    nombre: 'Delineadores',
    proveedor_id: 12
  },
  {
    id: 303,
    categoria_id: 60,
    nombre: 'Esmaltes de Uña',
    proveedor_id: 12
  },
  {
    id: 304,
    categoria_id: 60,
    nombre: 'Base Liquida',
    proveedor_id: 12
  },
  {
    id: 305,
    categoria_id: 60,
    nombre: 'Labiales',
    proveedor_id: 12
  },
  {
    id: 306,
    categoria_id: 61,
    nombre: 'Pantalon de tela formal',
    proveedor_id: 13
  },
  {
    id: 307,
    categoria_id: 61,
    nombre: 'Pantalon de verano',
    proveedor_id: 13
  },
  {
    id: 308,
    categoria_id: 61,
    nombre: 'Pantalon corto',
    proveedor_id: 13
  },
  {
    id: 309,
    categoria_id: 61,
    nombre: 'Jeans pitillo',
    proveedor_id: 13
  },
  {
    id: 310,
    categoria_id: 61,
    nombre: 'Jeans recto',
    proveedor_id: 13
  },
  {
    id: 311,
    categoria_id: 62,
    nombre: 'Vestidos de fiesta',
    proveedor_id: 13
  },
  {
    id: 312,
    categoria_id: 62,
    nombre: 'Vestidos de formal',
    proveedor_id: 13
  },
  {
    id: 313,
    categoria_id: 62,
    nombre: 'Vestidos de verano',
    proveedor_id: 13
  },
  {
    id: 314,
    categoria_id: 62,
    nombre: 'Vestidos de invierno',
    proveedor_id: 13
  },
  {
    id: 315,
    categoria_id: 63,
    nombre: 'Blusa Manga Larga',
    proveedor_id: 13
  },
  {
    id: 316,
    categoria_id: 63,
    nombre: 'Blusa Manga Corta',
    proveedor_id: 13
  },
  {
    id: 317,
    categoria_id: 63,
    nombre: 'Blusa de Franela',
    proveedor_id: 13
  },
  {
    id: 318,
    categoria_id: 63,
    nombre: 'Blusa de Jeans',
    proveedor_id: 13
  },
  {
    id: 319,
    categoria_id: 64,
    nombre: 'Polerones de Algodón',
    proveedor_id: 13
  },
  {
    id: 320,
    categoria_id: 64,
    nombre: 'Polerones de Licra',
    proveedor_id: 13
  },
  {
    id: 321,
    categoria_id: 65,
    nombre: 'Sweaters',
    proveedor_id: 13
  },
  {
    id: 322,
    categoria_id: 65,
    nombre: 'Chalecos',
    proveedor_id: 13
  },
  {
    id: 323,
    categoria_id: 66,
    nombre: 'Chalquetas de Jeans',
    proveedor_id: 13
  },
  {
    id: 324,
    categoria_id: 66,
    nombre: 'Blusas de Jeans',
    proveedor_id: 13
  },
  {
    id: 325,
    categoria_id: 66,
    nombre: 'Short de Jeans',
    proveedor_id: 13
  },
  {
    id: 326,
    categoria_id: 66,
    nombre: 'Vestido de Jeans',
    proveedor_id: 13
  },
  {
    id: 327,
    categoria_id: 66,
    nombre: 'Pantalones de Jeans',
    proveedor_id: 13
  },
  {
    id: 328,
    categoria_id: 66,
    nombre: 'Faldas de Jeans',
    proveedor_id: 13
  },
  {
    id: 329,
    categoria_id: 66,
    nombre: 'Jardineras de Jeans',
    proveedor_id: 13
  },
  {
    id: 330,
    categoria_id: 66,
    nombre: 'Mini Faldas',
    proveedor_id: 13
  },
  {
    id: 331,
    categoria_id: 66,
    nombre: 'Faldas Largas',
    proveedor_id: 13
  },
  {
    id: 332,
    categoria_id: 67,
    nombre: 'Blazer',
    proveedor_id: 13
  },
  {
    id: 333,
    categoria_id: 67,
    nombre: 'Impermeables treanch',
    proveedor_id: 13
  },
  {
    id: 334,
    categoria_id: 67,
    nombre: 'Parcas Largas/Cortas',
    proveedor_id: 13
  },
  {
    id: 335,
    categoria_id: 68,
    nombre: 'Sostenes',
    proveedor_id: 13
  },
  {
    id: 336,
    categoria_id: 68,
    nombre: 'Petos Deportivos',
    proveedor_id: 13
  },
  {
    id: 337,
    categoria_id: 68,
    nombre: 'Pantis',
    proveedor_id: 13
  },
  {
    id: 338,
    categoria_id: 68,
    nombre: 'Pijamas',
    proveedor_id: 13
  },
  {
    id: 339,
    categoria_id: 69,
    nombre: 'Botines',
    proveedor_id: 13
  },
  {
    id: 340,
    categoria_id: 69,
    nombre: 'Botas',
    proveedor_id: 13
  },
  {
    id: 341,
    categoria_id: 69,
    nombre: 'Zapatos de Fiesta',
    proveedor_id: 13
  },
  {
    id: 342,
    categoria_id: 69,
    nombre: 'Cholas',
    proveedor_id: 13
  },
  {
    id: 343,
    categoria_id: 70,
    nombre: 'Poleras Manga Larga/Corta',
    proveedor_id: 13
  },
  {
    id: 344,
    categoria_id: 70,
    nombre: 'Polera Pabilo',
    proveedor_id: 13
  },
  {
    id: 345,
    categoria_id: 71,
    nombre: 'Aviones',
    proveedor_id: 14
  },
  {
    id: 346,
    categoria_id: 71,
    nombre: 'Camiones',
    proveedor_id: 14
  },
  {
    id: 347,
    categoria_id: 71,
    nombre: 'Pelotas',
    proveedor_id: 14
  },
  {
    id: 348,
    categoria_id: 71,
    nombre: 'Muñecas',
    proveedor_id: 14
  },
  {
    id: 349,
    categoria_id: 71,
    nombre: 'Metralletas',
    proveedor_id: 14
  },
  {
    id: 350,
    categoria_id: 71,
    nombre: 'Burbujas',
    proveedor_id: 14
  },
  {
    id: 351,
    categoria_id: 71,
    nombre: 'Coches de Muñecas',
    proveedor_id: 14
  },
  {
    id: 352,
    categoria_id: 71,
    nombre: 'Set de Pinturas',
    proveedor_id: 14
  },
  {
    id: 353,
    categoria_id: 71,
    nombre: 'Guantes Deportivos',
    proveedor_id: 14
  },
  {
    id: 354,
    categoria_id: 71,
    nombre: 'Set de Tasitas',
    proveedor_id: 14
  },
  {
    id: 355,
    categoria_id: 71,
    nombre: 'Pelotas Saltarinas',
    proveedor_id: 14
  },
  {
    id: 356,
    categoria_id: 71,
    nombre: 'Alcancias',
    proveedor_id: 14
  },
  {
    id: 357,
    categoria_id: 71,
    nombre: 'Raquetas',
    proveedor_id: 14
  },
  {
    id: 358,
    categoria_id: 71,
    nombre: 'Gruas',
    proveedor_id: 14
  },
  {
    id: 359,
    categoria_id: 71,
    nombre: 'Set de Herramientas',
    proveedor_id: 14
  },
  {
    id: 360,
    categoria_id: 71,
    nombre: 'Huevo de Dinosaurios',
    proveedor_id: 14
  },
  {
    id: 361,
    categoria_id: 71,
    nombre: 'Juegos Didacticos',
    proveedor_id: 14
  },
  {
    id: 362,
    categoria_id: 72,
    nombre: 'Carteras marcas',
    proveedor_id: 14
  },
  {
    id: 363,
    categoria_id: 72,
    nombre: 'Carteras Chicas',
    proveedor_id: 14
  },
  {
    id: 364,
    categoria_id: 72,
    nombre: 'Mochilas',
    proveedor_id: 14
  },
  {
    id: 365,
    categoria_id: 72,
    nombre: 'Bananos',
    proveedor_id: 14
  },
  {
    id: 366,
    categoria_id: 72,
    nombre: 'Bolsos',
    proveedor_id: 14
  },
  {
    id: 367,
    categoria_id: 72,
    nombre: 'Bolsos Playa',
    proveedor_id: 14
  },
  {
    id: 368,
    categoria_id: 72,
    nombre: 'Bolsas Compra Recicladas',
    proveedor_id: 14
  },
  {
    id: 369,
    categoria_id: 73,
    nombre: 'Osos Pequeños',
    proveedor_id: 14
  },
  {
    id: 370,
    categoria_id: 73,
    nombre: 'Osos Grandes',
    proveedor_id: 14
  },
  {
    id: 371,
    categoria_id: 73,
    nombre: 'Elefantes',
    proveedor_id: 14
  },
  {
    id: 372,
    categoria_id: 73,
    nombre: 'Dinosaurios',
    proveedor_id: 14
  },
  {
    id: 373,
    categoria_id: 73,
    nombre: 'Delfines',
    proveedor_id: 14
  },
  {
    id: 374,
    categoria_id: 73,
    nombre: 'Peluches Famosos',
    proveedor_id: 14
  },
  {
    id: 375,
    categoria_id: 73,
    nombre: 'Marionetas',
    proveedor_id: 14
  },
  {
    id: 376,
    categoria_id: 73,
    nombre: 'Peluches Musicales',
    proveedor_id: 14
  },
  {
    id: 377,
    categoria_id: 74,
    nombre: 'Sombras',
    proveedor_id: 15
  },
  {
    id: 378,
    categoria_id: 74,
    nombre: 'Labiales',
    proveedor_id: 15
  },
  {
    id: 379,
    categoria_id: 74,
    nombre: 'Bases',
    proveedor_id: 15
  },
  {
    id: 380,
    categoria_id: 74,
    nombre: 'Cuidados de la Piel',
    proveedor_id: 15
  },
  {
    id: 381,
    categoria_id: 75,
    nombre: 'Mujer',
    proveedor_id: 15
  },
  {
    id: 382,
    categoria_id: 75,
    nombre: 'Varon',
    proveedor_id: 15
  },
  {
    id: 383,
    categoria_id: 76,
    nombre: 'Mujer',
    proveedor_id: 15
  },
  {
    id: 384,
    categoria_id: 76,
    nombre: 'Varon',
    proveedor_id: 15
  },
  {
    id: 385,
    categoria_id: 78,
    nombre: 'Pantalones',
    proveedor_id: 16
  },
  {
    id: 386,
    categoria_id: 78,
    nombre: 'Camisas',
    proveedor_id: 16
  },
  {
    id: 387,
    categoria_id: 78,
    nombre: 'Poleras',
    proveedor_id: 16
  },
  {
    id: 388,
    categoria_id: 78,
    nombre: 'Chaquetas',
    proveedor_id: 16
  },
  {
    id: 389,
    categoria_id: 78,
    nombre: 'Sweaters',
    proveedor_id: 16
  },
  {
    id: 390,
    categoria_id: 78,
    nombre: 'Short',
    proveedor_id: 16
  },
  {
    id: 391,
    categoria_id: 78,
    nombre: 'Ropa Formal',
    proveedor_id: 16
  },
  {
    id: 392,
    categoria_id: 78,
    nombre: 'Polerones',
    proveedor_id: 16
  },
  {
    id: 393,
    categoria_id: 79,
    nombre: 'Pantalones',
    proveedor_id: 16
  },
  {
    id: 394,
    categoria_id: 79,
    nombre: 'Camisas',
    proveedor_id: 16
  },
  {
    id: 395,
    categoria_id: 79,
    nombre: 'Poleras',
    proveedor_id: 16
  },
  {
    id: 396,
    categoria_id: 79,
    nombre: 'Short',
    proveedor_id: 16
  }
]

class SubNivelUnoSeeder {
  async run () {
    for (let i of data) {
      let cat = await NivelUno.findBy('id', i.id)
      if (!cat) {
        await NivelUno.create(i)
      }
      else {
        cat.id = i.id
        cat.categoria_id = i.categoria_id
        cat.nombre = i.nombre
        cat.proveedor_id = i.proveedor_id
        await cat.save()
      }
    }
    console.log('Finished SubNivelUno')
  }
}

module.exports = SubNivelUnoSeeder
