'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static get fillableProveedor() {
    return ['nombreEmpresa', 'rut', 'direccionFisica', 'telefono', 'delivery', 'regiones', 'dias', 'hapertura', 'hcierre', 'deliveryPrice', 'status', 'metodoPago', 'banco', 'tipoCuenta', 'cuenta', 'rutTitular', 'titular', 'correoDestino', 'apiKey', 'secretKey']
  }
  static fieldValidationRules() {
    const rulesUser = {
      direccion: 'string',
      name: 'string|required',
      lastName: 'string|required',
      password: 'string|required',
      telefono: 'string',
      email: 'email|required'
    }
    return rulesUser
  }
  static boot() {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany('App/Models/Token')
  }
  // static get objectIDs () { return [ 'country_id','_id', 'city_id' ] }
}

module.exports = User
