'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ComprasProducto extends Model {
  producto () {
    return this.hasOne('App/Models/Producto', 'producto_id', '_id')
  }
}

module.exports = ComprasProducto
