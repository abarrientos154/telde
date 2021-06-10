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
              <div class="text-center text-body2 text-grey-7">¿Olvidaste tu contraseña?</div>

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
              <!-- <q-separator inset class="q-mt-lg q-mb-lg" />

              <div class="text-center text-primary text-bold cursor-pointer" @click="$router.push('registro')"> ¿Eres Nuevo? Registrate </div> -->
            </q-form>
             <q-dialog v-model="prueba">
              <q-card class="q-pa-md">
                <q-card-section>
                  <div class="q-ml-sm text-center text-subtitle2"></div>
                  <div class="q-ml-sm text-center text-h6 text-bold">{{info.user}}</div>
                </q-card-section>

                <q-card-section class="column items-center">
                  <q-btn style="border-radius: 14px" label="Iniciar Sesión" color="primary" />
                  <q-btn flat label="Registrarme" color="primary" @click="prueba = false" />
                </q-card-section>
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
      info: {},
      prueba: false
    }
  },
  mounted () {
    const vm = this
    if (this.$q.platform.is.mobile) { // Si es teléfono{
      universalLinks.subscribe('ul_payStripe', function (eventData) {
        // do some work
        // alert('Did launch application from the link: ' + eventData.url)
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
        if (eventData.params.cancel) {
          vm.pago_ok({ user_id: eventData.params.user_id, tienda_id: eventData.params.tienda_id })
        } else {
          vm.pago_ok({ user_id: eventData.params.user_id, tienda_id: eventData.params.tienda_id, cancel: eventData.params.cancel })
        }
        // do some work
        // alert('Did launch application from the link: ' + eventData.url)
      })
    }
  },
  methods: {
    ...mapMutations('generals', ['login']),
    async pago_ok (data) {
      this.$q.loading.show({
        message: 'Procesando'
      })
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
            this.info = resp
            // this.info.dos = data
            var est = data.cancel ? '2' : '1'
            this.$router.push('/tienda/' + data.tienda_id + '/' + est)
            this.login(resp)
            this.prueba = true
          } else {
            this.$q.notify({
              message: 'Lo sentimos no puede acceder, su cuenta a sido bloqueada.',
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
                message: 'Lo sentimos no puede acceder, su cuenta a sido bloqueada.',
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
                  this.$router.push('/pago-membresia/' + res.TELDE_SESSION_INFO._id)
                }
              } else {
                this.$router.push('/inicio')
              }
              this.login(res)
            } else {
              this.$q.notify({
                message: 'Lo sentimos no puede acceder, su cuenta a sido bloqueada.',
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
    }
  }
}
</script>
<style lang="css" scoped>

</style>
