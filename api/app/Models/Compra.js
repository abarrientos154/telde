'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Compra extends Model {
 productos () {
    return this.hasOne('App/Models/Producto', 'producto', '_id')
  }
}

module.exports = Compra
