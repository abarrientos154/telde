'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Payment extends Model {
  static get objectIDs () { return [ 'tienda_id' ] }
}

module.exports = Payment
