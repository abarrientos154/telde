<template>
  <div class="absolute-center">
    <q-btn label="Pagar" @click="redirpay()" color="primary" />
  </div>
</template>

<script>
import { openURL } from 'quasar'
import env from '../env'
export default {
  data () {
    return {
      apiUrl: '',
      total: 10,
      ref: 'referenciaaaaaaaaaa'
    }
  },
  mounted () {
    this.apiUrl = env.apiUrl + '/pagar_telde?user_id=' + this.$route.params.user_id
  },
  methods: {
    async redirpay () {
      const ruta = `${this.apiUrl}&montoTotal=${this.total}&ref=${this.ref}`
      await openURL(ruta)
      navigator.app.exitApp()
    }
  }
}
</script>

<style>

</style>
