'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comentario extends Model {
  cliente () {
    return this.hasOne('App/Models/User', 'cliente_id', '_id')
  }
  pedido () {
    return this.hasOne('App/Models/Compra', 'pedido_id', '_id')
  }
}

module.exports = Comentario
