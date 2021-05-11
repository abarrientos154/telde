<template>
  <div style="height:100%;">
      <img :src="baseu + perfile" spinner-color="white" style="height: 400px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px"/>

        <div class="q-pa-sm">
            <q-scroll-area
            horizontal
            style="height: 110px;"
          >
            <div class="row no-wrap" style="width: 100%">
              <q-card @click="perfile = img" v-for="(img, index) in data.images" class="bg-secondary q-mt-xs q-mr-sm" style="border-radius:12px;width: 100px" :key="index">
                <q-img :src="baseu + img" spinner-color="white" style="height: 100px; width: 100px" />
              </q-card>
            </div>
          </q-scroll-area>
        </div>

        <div class="q-pa-md" style="width: 100%">
          <div class="text-h5">{{data.nombre}}</div>
          <div class="text-subtitle1 text-grey">Cantidad Disponible {{data.cantidad}}</div>
          <q-rating readonly v-model="data.rating" :max="5" size="25px" />
          <div class="text-subtitle1 text-grey">Descripción</div>
          <div class="text-subtitle1">{{data.descripcion}}</div>
        </div>
        <q-separator inset />
        <div>
          <div v-if="!data.oferta" class="text-h4 text-blue text-bold ellipsis q-ma-md">${{formatPrice(data.valor)}}</div>
          <div v-if="data.oferta" class="text-h4 text-blue text-bold ellipsis q-ma-md">$<strike>{{formatPrice(data.valor)}}</strike> - {{formatPrice(data.ofertaVal)}}</div>
        </div>

        <div class="row justify-center q-py-lg">
          <q-btn v-if="lugar !== 'tienda'" no-caps label="Ver tienda" color="primary" size="md" style="border-radius: 15px; width: 90%"
          @click="irTienda()" />
          <q-btn v-if="lugar === 'tienda'" no-caps label="Agregar al carro" color="primary" size="md" style="border-radius: 15px; width: 90%"
          @click="login ? addCarrito() : noLogin = true" />
        </div>

        <q-dialog v-model="noLogin">
          <q-card class="q-pa-md">
            <q-card-section>
              <div class="q-ml-sm text-center text-subtitle2">Para poder comprar debes tener una cuenta.</div>
              <div class="q-ml-sm text-center text-h6 text-bold">¿Deseas registrarte o iniciar sesión?</div>
            </q-card-section>

            <q-card-section class="column items-center">
              <q-btn label="Iniciar Sesión" color="primary" @click="$router.push('/login')" />
              <q-btn flat label="Registrarme" color="primary" @click="$router.push('/registro')" />
            </q-card-section>
          </q-card>
        </q-dialog>
  </div>
</template>

<script>
import env from '../env'
export default {
  props: ['data', 'lugar'],
  data () {
    return {
      baseu: '',
      perfile: '',
      rol: 0,
      miTienda: false,
      login: true,
      noLogin: false
    }
  },
  mounted () {
    this.baseu = env.apiUrl + '/producto_files/'
    this.perfile = this.data.images[0]
    const value = localStorage.getItem('TELDE_SESSION_INFO')
    if (!value) {
      this.login = false
    } else {
      this.getInfo()
    }
  },
  methods: {
    getInfo () {
      this.$api.get('user_info').then(res => {
        if (res) {
          this.rol = res.roles[0]
        }
      })
    },
    formatPrice (value) {
      const val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    irTienda () {
      this.$router.push('/tienda/' + this.data.datos_proveedor._id)
    },
    addCarrito () {
      if (this.lugar === 'tienda') {
        this.$emit('compra', this.data)
      } else {
        /* this.$router.push('/tienda/' + this.data.proveedor_id + '/' + this.data._id) */
      }
    }
  }
}
</script>

<style scoped lang="scss">
.bordes {
  border: 6px solid $primary
}
</style>
