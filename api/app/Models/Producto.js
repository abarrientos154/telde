'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Producto extends Model {
  static fillable () {
    return ['nombre', 'descripcion', 'categoria_id', 'subniveluno_id',
    'subniveldos_id', 'subniveltres_id', 'cantidad', 'valor', 'oferta', 'ofertaVal', 'ofertaDate']
  }
  static fieldValidationRules() {
    const rulesUser = {
      nombre: 'string',
      descripcion: 'string',
      categoria_id: 'number',
      subniveluno_id: 'number',
      subniveldos_id: 'number',
      subniveltres_id: 'number',
      cantidad: 'number',
      valor: 'number',
      cantidadFiles: 'number'
    }
    return rulesUser
  }

  datos_proveedor () {
    return this.hasOne('App/Models/User', 'proveedor_id', '_id')
  }
  categoria_info () {
    return this.hasOne('App/Models/Categoria', 'categoria_id', 'id')
  }
}

module.exports = Producto

