<template>
  <q-layout>
    <q-page-container class="bg-grey-2">
      <q-page class="column justify-center items-center">
            <div class="column items-center justify-center">
                <div class="row justify-center q-my-md">
                  <img src="logo_inicio.png" alt="logo" style="width: 270px">
                </div>
                <div class="text-black text-h5 text-bold">Inicio de Sesión</div>
            </div>

            <q-form @submit="onSubmit" class="q-gutter-sm q-ma-sm q-mt-sm">
              <div>
                <q-input class="text-bold" type="email" v-model="form.email" label="Correo electrónico" filled>
                </q-input>
              </div>

              <div>
                <q-input class="text-bold q-mt-lg" :type="isPwd ? 'password' : 'text'" v-model="form.password" label="Contraseña" filled>
                  <template v-slot:append>
                    <q-icon :name="isPwd ? 'visibility' : 'visibility_off'" class="cursor-pointer" color="primary" @click="isPwd = !isPwd"/>
                  </template>
                </q-input>
              </div>
              <div class="text-center text-body2 text-grey-7" @click="cambio = true">¿Olvidaste tu contraseña?</div>

              <div class="row justify-center q-mt-lg">
                <q-btn rounded no-caps color="primary" style="width:200px" size="18px" label="Iniciar sesión" :loading="loading" @click="onSubmit()">
                  <template v-slot:loading>
                    <q-spinner-hourglass class="on-left" />
                    Cargando...
                  </template>
                </q-btn>
              </div>

              <div class="row justify-center">
                <div class="col-12 text-center text-body2 text-grey-7 q-mt-md">¿Aún no tienes una cuenta?</div>
                <q-btn no-caps flat color="black" label="¡Regístrate ahora!" size="lg" @click="$router.push('/registro')">
                </q-btn>
              </div>
              <q-dialog v-model="noLogin">
                <q-card class="q-pa-md">
                  <q-card-section>
                    <div class="q-ml-sm text-center text-subtitle2">Para poder comprar debes tener una cuenta.</div>
                    <div class="q-ml-sm text-center text-h6 text-bold">{{dd}}</div>
                  </q-card-section>

                  <q-card-section class="column items-center">
                    <q-btn style="border-radius: 14px" label="Iniciar Sesión" color="primary" @click="$router.push('/login')" />
                    <q-btn flat label="Registrarme" color="primary" @click="noLogin = false" />
                  </q-card-section>
                </q-card>
              </q-dialog>
              <!-- <q-separator inset class="q-mt-lg q-mb-lg" />

              <div class="text-center text-primary text-bold cursor-pointer" @click="$router.push('registro')"> ¿Eres Nuevo? Registrate </div> -->
            </q-form>
            <q-dialog v-model="cambio">
            <q-card class="column items-center justify-center" style="width: 350px; height:350px;">
              <q-card-section>
                <div class="text-h6">¿Olvidaste tu contraseña?</div>
              </q-card-section>
              <q-card-section>
                 <q-input rounded outlined v-model="email" label="Introduce tu correo aqui" autofocus>
                  <template v-slot:prepend>
                    <q-icon color="primary" name="mail" />
                  </template>
                </q-input>
              </q-card-section>
              <q-card-actions align="right">
                 <q-btn
                    :loading="loading2"
                    rounded
                    icon-right="arrow_right"
                    color="primary"
                    @click="recuperar()"
                  >Recuperar contraseña
                  <template v-slot:loading>
                    <q-spinner-hourglass class="on-center" />
                    Loading...
                  </template>
                  </q-btn>
              </q-card-actions>
              <q-card-actions class="absolute-top-right">
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-actions>
            </q-card>
          </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      form: {},
      isPwd: true,
      loading: false,
      cambio: false,
      email: '',
      loading2: false,
      noLogin: false,
      dd: {}
    }
  },
  created () {
    /* const session = JSON.parse(localStorage.getItem('TELDE_SESSION_INFO'))
    if (session) {
      if (session.roles[0] === 2) {
        this.$router.push('/inicio')
      } else if (session.roles[0] === 3) {
        this.$router.push('/tienda/' + session._id)
      } else if (session.roles[0] === 1) {
        this.$router.push('/administrador')
      }
    } */
  },
  mounted () {
    /* const vm = this
    if (this.$q.platform.is.mobile) { // Si es teléfono{
      universalLinks.subscribe('ul_payStripe', function (eventData) {
        // do some work
        // alert('Did launch application from the link: ' + eventData.url)
        vm.$q.notify({
          message: 'Su no fue procesado',
          color: 'negative'
        })
        if (eventData.params.user_id) {
          vm.aprobarPago({ user_id: eventData.params.user_id, cantM: eventData.params.cantM, costoM: eventData.params.costoM })
        } else {
          vm.$q.notify({
            message: 'Su pago no fue procesado',
            color: 'negative'
          })
        }
      })

      universalLinks.subscribe('ul_payStripeShop', function (eventData) {
        // vm.dd = eventData.params
        // vm.noLogin = true
        if (eventData.params.cancel) {
          vm.pago_ok({ user_id: eventData.params.user_id, tienda_id: eventData.params.tienda_id, ref: eventData.params.ref, cancel: eventData.params.cancel })
        } else {
          vm.pago_ok({ user_id: eventData.params.user_id, tienda_id: eventData.params.tienda_id, ref: eventData.params.ref })
        }
        // do some work
        // alert('Did launch application from the link: ' + eventData.url)
      })

      universalLinks.subscribe('ul_recuperar', function (eventData) {
        if (eventData.params.codigo) {
          vm.$router.push('/recuperacion/' + eventData.params.codigo)
        }
      })
    } */
  },
  methods: {
    ...mapMutations('generals', ['login']),
    async pago_ok (data) {
      this.$q.loading.show({
        message: 'Procesando'
      })
      /* this.dd.a = data.cancel ? 'pago_no_ok' : 'pago_ok'
      this.dd.b = data.cancel
      this.dd.c = data.cancel === '1' ? 'pago_no_ok' : 'pago_ok'
      this.noLogin = true */
      await this.$api.post(data.cancel ? 'pago_no_ok' : 'pago_ok', data).then(res => {
        this.logeo_ok({ ...data })
      })
    },
    async aprobarPago (datos) {
      this.$q.loading.show({
        message: 'Iniciando sesión'
      })
      await this.$api.put('aprobar_pago/' + datos.user_id, datos).then(res => {
        this.$q.loading.hide()
        if (res) {
          this.loguear({ user_id: res._id })
          // this.$q.loading.hide()
        } else {
          // this.$q.loading.hide()
          console.log('hubo un error')
        }
      })
      // this.$q.loading.hide()
    },
    logeo_ok (data) {
      this.$api.post('login_by_mail', { user_id: data.user_id }).then(resp => {
        if (resp) {
          this.$q.loading.hide()
          if (resp.TELDE_SESSION_INFO.enable) {
            var est = data.cancel ? '2' : '1'
            this.$router.push('/tienda/' + data.tienda_id + '/' + est)
            this.login(resp)
          } else {
            this.$q.notify({
              message: 'Lo sentimos no puede acceder, su cuenta a sido bloqueada por el administrador.',
              color: 'negative'
            })
          }
        } else {
          this.$q.notify({
            message: 'err',
            color: 'negative'
          })
          this.$q.loading.hide()
          console.log('hubo un error')
        }
      })
    },
    loguear (datos) {
      this.$q.loading.show({
        message: 'Iniciando sesión'
      })
      this.$api.post('login_by_mail', datos).then(res => {
        if (res) {
          if (res.TELDE_SESSION_INFO.roles[0] === 2 || res.TELDE_SESSION_INFO.roles[0] === 3) {
            if (res.TELDE_SESSION_INFO.enable) {
              if (res.TELDE_SESSION_INFO.roles[0] === 3) {
                this.$router.push('/tienda/' + res.TELDE_SESSION_INFO._id)
              } else {
                this.$router.push('/inicio')
              }
              this.login(res)
            } else {
              this.$q.notify({
                message: 'Lo sentimos no puede acceder, su cuenta a sido bloqueada por el administrador.',
                color: 'negative'
              })
            }
          } else if (res.TELDE_SESSION_INFO.roles[0] === 1) {
            this.$router.push('/administrador')
            this.login(res)
          }
          this.$q.loading.hide()
        } else {
          this.$q.loading.hide()
          console.log('hubo un error')
        }
      })
    },
    onSubmit () {
      this.$q.loading.show({
        message: 'Iniciando sesión'
      })
      this.$api.post('login', this.form).then(res => {
        if (res) {
          if (res.TELDE_SESSION_INFO.roles[0] === 2 || res.TELDE_SESSION_INFO.roles[0] === 3) {
            if (res.TELDE_SESSION_INFO.enable) {
              if (res.TELDE_SESSION_INFO.roles[0] === 3) {
                if (res.TELDE_SESSION_INFO.status === 2) {
                  this.$router.push('/tienda/' + res.TELDE_SESSION_INFO._id)
                } else {
                  this.$router.push('/pago-membresia/' + res.TELDE_SESSION_INFO._id + '/1')
                }
              } else {
                this.$router.push('/inicio')
              }
              this.login(res)
            } else {
              this.$q.notify({
                message: 'Lo sentimos no puede acceder, su cuenta a sido bloqueada por el administrador.',
                color: 'negative'
              })
            }
          } else if (res.TELDE_SESSION_INFO.roles[0] === 1) {
            this.$router.push('/administrador')
            this.login(res)
          }
          this.$q.loading.hide()
        } else {
          this.$q.loading.hide()
          console.log('hubo un error')
        }
      })
    },
    async recuperar () {
      if (this.email) {
        this.simulateProgress()
        // this.loading2 = true
        this.$q.loading.show()
        await this.$api.get('email_send_app/' + this.email).then(res => {
          this.$q.loading.hide()
          if (res) {
            this.$q.notify({
              message: 'Se envio un correo para recuperar tu contraseña',
              color: 'positive'
            })
          }
        })
      } else {
        this.$q.notify({
          message: 'Campo Vacio',
          color: 'negative'
        })
        // this.loading2 = false
      }
      // this.loading2 = false
    },
    simulateProgress () {
      this.loading2 = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this.loading2 = false
      }, 5000)
    }
  }
}
</script>
<style lang="css" scoped>

</style>
