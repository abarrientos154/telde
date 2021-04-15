'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Favorite extends Model {
  info_tienda () {
    return this.hasOne('App/Models/User', 'proveedor_id', '_id')
  }
}

module.exports = Favorite
