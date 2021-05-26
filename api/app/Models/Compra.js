'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Compra extends Model {
  productos () {
    return this.hasMany('App/Models/ComprasProducto', '_id', 'pedido_id')
  }
}

module.exports = Compra
