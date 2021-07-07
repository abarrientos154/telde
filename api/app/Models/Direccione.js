'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Direccione extends Model {
  static get fillable() {
    return ['provincia', 'ciudad', 'direccion', 'principal']
  }

  static get objectIDs () { return [ '_id', 'ciudad_id', 'user_id' ] }

  ciudad () {
    return this.hasOne('App/Models/Ciudad', 'ciudad_id', '_id')
  }

  provincia () {
    return this.hasOne('App/Models/Provincia', 'provincia_id', 'id')
  }
}

module.exports = Direccione
