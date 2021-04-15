'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use("App/Models/User")
const Hash = use('Hash')

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const userData = [
  {
    email: 'root@flaag.cl',
    password: 'flaag2020',
    full_name: 'Administrador del Sistema',
    roles: [1]
  }
]

class UserSeeder {
  async run () {
    for (let i of userData) {
      let user = await User.findBy('email', i.email)
      if (!user) {
        await User.create(i)
      }
      else {
        user.email = i.email
        user.password = i.password
        user.full_name = i.full_name
        user.roles = i.roles
        await user.save()
      }
    }
    console.log('Finished User')
  }
}

module.exports = UserSeeder
