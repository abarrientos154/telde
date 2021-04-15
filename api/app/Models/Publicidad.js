'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Publicidad extends Model {
  static get fillable() {
    return ['ruta','tipo','enable']
  }
}

module.exports = Publicidad
