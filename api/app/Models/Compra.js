'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Compra extends Model {
  productos () {
    return this.hasMany('App/Models/ComprasProducto', '_id', 'pedido_id')
  }
  tienda () {
    return this.hasOne('App/Models/User', 'tienda_id', '_id')
  }
  cliente () {
    return this.hasOne('App/Models/User', 'cliente_id', '_id')
  }
}

module.exports = Compra
