<template>
  <div style="height:100%;">
      <q-img :src="baseu + perfile" spinner-color="white" style="height: 400px; width: 100%;">
          <div class="row no-wrap justify-between bg-transparent" style="width:100%">
              <div class="col text-h6 text-white text-weight-bolder ellipsis">{{data.datos_proveedor.nombreEmpresa}}</div>
              <q-btn no-caps flat icon="store" label="Ir" color="white" @click="rol !== 1 ? irTienda() : $router.push('/proveedor/' + data.datos_proveedor._id)" />
          </div>
        </q-img>

        <div class="q-pa-sm q-my-sm">
          <div style="width: 100%">
            <div class="text-h5 text-weight-bolder">{{data.nombre}}</div>
          </div>
            <q-scroll-area
            horizontal
            style="height: 110px;"
          >
            <div class="row no-wrap" style="width: 100%">
              <q-card @click="perfile = img" v-for="(img, index) in data.images" class="bg-secondary q-mt-xs q-mr-sm" style="border-radius:12px;width: 100px" :key="index">
                <q-img :src="data.images ? baseu + img : 'noimg.png'" spinner-color="white" style="height: 100px; width: 100px" />
              </q-card>
            </div>
          </q-scroll-area>
        </div>

        <div class="q-mx-md q-mt-sm q-mb-lg q-pb-lg text-h5">{{data.descripcion}}</div>

        <div class="row justify-between q-px-md">
          <div>
            <div v-if="!data.oferta" class="text-h6 text-bold text-center ellipsis q-ma-md">${{formatPrice(data.valor)}}</div>
            <div v-if="data.oferta" class="text-h6 text-bold text-center ellipsis q-ma-md">$<strike>{{formatPrice(data.valor)}}</strike> - {{formatPrice(data.ofertaVal)}}</div>
          </div>
          <div class="row q-mb-md no-wrap items-center">
              <q-btn
                v-if="rol === 2 || !login"
                @click="login ? addCarrito() : noLogin = true"
                glossy
                round
                size="1.3em"
                text-color="black"
                color="primary"
                icon="add_shopping_cart"
              >
                <q-tooltip anchor="top middle">
                  Comprar
                </q-tooltip>
              </q-btn>
            </div>
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
    const value = localStorage.getItem('FLAAG_SESSION_INFO')
    if (!value) {
      this.login = false
    } else {
      this.getInfo()
    }
  },
  methods: {
    formatPrice (value) {
      const val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    irTienda () {
      if (this.login) {
        this.$api.get('user_info').then(res => {
          if (res) {
            var mio = res._id
            if (mio === this.data.datos_proveedor._id) {
              this.$router.push('/mi_tienda')
            } else {
              this.$router.push('/tienda/' + this.data.datos_proveedor._id)
            }
          }
        })
      } else {
        this.$router.push('/tienda/' + this.data.datos_proveedor._id)
      }
    },
    addCarrito () {
      if (this.lugar === 'tienda') {
        this.$emit('compra', this.data)
      } else {
        this.$router.push('/tienda/' + this.data.proveedor_id + '/' + this.data._id)
      }
    },
    getInfo () {
      this.$api.get('user_info').then(res => {
        if (res) {
          this.rol = res.roles[0]
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.bordes {
  border: 6px solid $primary
}
</style>
