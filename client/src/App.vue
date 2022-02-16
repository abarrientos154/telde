<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapMutations('generals', ['login']),
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
    }
  },
  created () {
    const vm = this
    if (this.$q.platform.is.mobile) { // Si es teléfono{
      universalLinks.subscribe('ul_payStripe', function (eventData) {
        // do some work
        // alert('Did launch application from the link: ' + eventData.url)
        if (eventData.params.user_id) {
          vm.aprobarPago({ user_id: eventData.params.user_id, cantM: eventData.params.cantM, costoM: eventData.params.costoM })
        } else {
          localStorage.removeItem('TELDE_SESSION_INFO')
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
    }
  }
}
</script>
