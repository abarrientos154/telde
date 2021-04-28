<template>
  <div>
    <div class="bg-secondary column justify-center" style="height: 500px;">
      <div class="text-center text-h2 text-white text-bold">AHORA ES MAS FACIL</div>
      <div class="text-center text-h5 text-white q-mt-sm">Se parte de Nova Telde</div>
      <div class="q-mt-lg row justify-center">
        <q-btn v-if="!login" class="q-px-md" rounded no-caps color="primary" label="¡Regístrate Ahora!" @click="$router.push('registro')" />
      </div>
    </div>

    <div class="text-h5 q-mt-md text-center">Categorias</div>
    <q-scroll-area
      horizontal
      style="height: 80px;"
    >
      <div class="row no-wrap q-py-md q-px-md q-gutter-md">
        <div v-for="(btn, index) in arrLogos" :key="index" >
          <q-btn no-caps class="q-px-md" label="Categoria" color="blue-grey-11" text-color="blue-grey-9" />
        </div>
      </div>
    </q-scroll-area>

    <div class="text-h5 q-mt-md text-center">Algunas de nuestras tiendas</div>
    <q-scroll-area
        horizontal
        style="height: 350px;"
      >
        <div class="row no-wrap q-py-md q-px-md q-gutter-md">
          <div v-for="(card, index) in arrLogos" :key="index" >
            <q-card style="width:400px">
              <q-img
                :src="card.perfil ? baseuLogos + card._id : card.perfilEstatico ? 'logos/' + card.id.toString() + '.jpeg' : 'nopublicidad.jpg'"
                spinner-color="white"
                style="height: 220px; width: 100%">
                  <div class="bg-transparent" style="width:100%">
                    <q-btn icon="favorite" round color="primary" text-color="white" />
                  </div>
                </q-img>

              <q-card-section class="row justify-between">
                <div class="col-8">
                  <div class="row items-center" style="width: 100%">
                    <div class="col text-subtitle1 ellipsis"> Nombre de tienda </div>
                  </div>
                  <div class="row items-center" style="width: 100%">
                    <q-icon class="col-1" name="room" size="xs" />
                    <div class="col text-subtitle1 q-ml-xs ellipsis"> Dirección </div>
                  </div>
                </div>

                <div class="col-4 row items-center">
                  <q-btn no-caps icon="store" label="Ir tienda" color="primary" style="border-radius: 9px"
                  @click="irTienda(card._id)" />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-scroll-area>

      <q-scroll-area
        horizontal
        style="height: 410px;"
      >
        <div class="row no-wrap q-py-md q-px-md q-gutter-md">
          <q-card style="border-radius: 24px; width:450px" clickable v-ripple v-for="(card, index) in slPublicidad1" :key="index">
            <q-img :src="!card.nuevo ? baseuPublicidad + card.fileName : card.fileName"
            style="height: 380px; width: 100%" >
              <div class="absolute-bottom">
                <div class="text-white text-h6">BANNER</div>
                <div class="text-white text-h6">PUBLICIDAD {{index + 1}}</div>
              </div>
            </q-img>
          </q-card>
        </div>
      </q-scroll-area>

    <div class="text-h5 q-my-md text-center">Nuestros nuevos productos</div>
    <q-scroll-area
        horizontal
        style="height: 500px;"
      >
        <div class="row no-wrap q-py-md q-px-xl q-gutter-xl">
          <div v-for="(card, index) in arrTienda" :key="index" >
            <q-card flat class="my-card" style="height: 460px">
              <q-img
                :src="!card.caso ? baseuProducto + card.images[0] : card.images[0]"
                spinner-color="white"
                style="height: 230px; width: 210px"/>

              <q-card-section>
                <q-rating readonly v-model="card.rating" :max="5" size="25px" />

                <div class="row no-wrap items-center q-mt-xs">
                  <div class="col text-subtitle2 ellipsis"> {{card.nombre}} </div>
                  <div class="col-auto text-grey text-caption row no-wrap items-center">
                    <q-icon name="favorite_border" size="1.8em" />
                  </div>
                </div>
                <div class="text-caption text-black"> {{card.descripcion}} </div>
              </q-card-section>

              <q-card-section class="absolute-bottom">
                <div v-if="!card.oferta" class="text-h6 text-blue q-my-sm">${{formatPrice(card.valor)}}</div>
                <div v-if="card.oferta" class="text-h6 text-blue q-my-sm">$<strike>{{formatPrice(card.valor)}}</strike> - {{formatPrice(card.ofertaVal)}}</div>
                <div class="row items-center">
                  <q-btn no-caps icon="store" label="Ir tienda" color="primary" style="border-radius: 9px"
                  @click="irTienda(card.proveedor_id)" />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-scroll-area>

      <q-scroll-area
        horizontal
        style="height: 410px;"
      >
        <div class="row no-wrap q-py-md q-px-md q-gutter-md">
          <q-card style="border-radius: 24px; width:450px" clickable v-ripple v-for="(card, index) in slPublicidad1" :key="index">
            <q-img :src="!card.nuevo ? baseuPublicidad + card.fileName : card.fileName"
            style="height: 380px; width: 100%" >
              <div class="absolute-bottom">
                <div class="text-white text-h6">BANNER</div>
                <div class="text-white text-h6">PUBLICIDAD {{index + 1}}</div>
              </div>
            </q-img>
          </q-card>
        </div>
      </q-scroll-area>

      <div class="text-h5 q-my-md text-center">Más tiendas</div>
      <div class="row justify-around">
        <div class="col-6 row justify-center q-mt-md" v-for="(card, index) in 4" :key="index">
          <q-card style="width:95%; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-top-left-radius: 15px; border-top-right-radius: 15px">
              <q-img
                :src="card.perfil ? baseuLogos + card._id : card.perfilEstatico ? 'logos/' + card.id.toString() + '.jpeg' : 'nopublicidad.jpg'"
                spinner-color="white"
                style="height: 350px; width: 100%">
                  <div class="bg-transparent" style="width:100%">
                    <q-btn icon="favorite" round color="primary" text-color="white" />
                  </div>
                  <div class="absolute-bottom bg-transparent">
                    <div class="row items-center" style="width: 100%">
                      <div class="col text-subtitle1 ellipsis"> Nombre de tienda </div>
                    </div>
                    <div class="row items-center" style="width: 100%">
                      <q-icon class="col-1" name="room" size="xs" />
                      <div class="col text-subtitle1 q-ml-xs ellipsis"> Dirección </div>
                    </div>

                    <div class="row items-center q-mt-md">
                      <q-btn no-caps icon="store" label="Ir tienda" color="primary" style="border-radius: 9px" />
                    </div>
                  </div>
                </q-img>
            </q-card>
        </div>
      </div>
      <div class="row items-center justify-center q-mt-lg">
        <q-btn no-caps icon="store" label="Ver más tiendas" color="primary" size="lg" style="border-radius: 15px; width: 80%" />
      </div>

    <q-dialog v-model="verProducto">
      <q-card style="width: 400px">
        <q-card-section class="q-pa-none" style="width: 100%">
          <DetalleProducto :data="producto" lugar="inicio" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import DetalleProducto from '../pages/DetalleProducto'
import env from '../env'
import { openURL } from 'quasar'
export default {
  components: { DetalleProducto },
  data () {
    return {
      rol: 0,
      slide: 1,
      rating: 2,
      producto: {},
      tab: 'Inicio',
      verProducto: false,
      login: true,
      web: true,
      baseuPublicidad: '',
      baseuProducto: '',
      baseuLogos: '',
      slide1: 1,
      slide2: 1,
      slide3: 1,
      slide5: 1,
      autoplay1: true,
      autoplay2: true,
      autoplay3: true,
      autoplay5: true,
      tabTiendas: 'resto',
      tabOtras: 'seccion1',
      slPrincipal: [],
      slPublicidad1: [],
      slPublicidad2: [],
      arrTienda: [],
      arrNuevo: [],
      arrLogos: []
    }
  },
  mounted () {
    this.web = this.$q.platform.is.desktop
    this.baseuPublicidad = env.apiUrl + '/publicidad_img/'
    this.baseuProducto = env.apiUrl + '/producto_files/'
    this.baseuLogos = env.apiUrl + '/perfil_img/'
    this.getLogos()
    this.getPublicidad()
    this.getTienda()
    const value = localStorage.getItem('TELDE_SESSION_INFO')
    if (value) {
      this.getInfo()
    } else {
      this.login = false
    }
  },
  methods: {
    formatPrice (value) {
      const val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    irRuta (ruta) {
      openURL(ruta)
    },
    irTienda (id) {
      if (this.login) {
        this.$api.get('user_info').then(res => {
          if (res) {
            var mio = res._id
            if (mio === id) {
              this.$router.push('/tienda/' + id)
            } else {
              this.$router.push('/tienda/' + id)
            }
          }
        })
      } else {
        this.$router.push('/tienda/' + id)
      }
    },
    getInfo () {
      this.$api.get('user_info').then(res => {
        if (res) {
          this.rol = res.roles[0]
        }
      })
    },
    getTienda () {
      this.$api.get('all_productos').then(res => {
        if (res) {
          this.arrTienda = []
          if (!res.length) {
            this.arrTienda = [{ nombre: 'Nombre Producto', descripcion: 'Descripcion', images: ['nopublicidad.jpg'], valor: 0, caso: true }]
          }
          var largo = res.length - 1
          for (let i = 0; i < 20; i++) {
            if (largo >= 0) {
              this.arrTienda.push(res[largo])
              largo = largo - 1
            }
          }
          console.log('productos', this.arrTienda)
        }
      })
    },
    getPublicidad () {
      this.$api.get('publicidad').then(res => {
        if (res) {
          this.slPrincipal = res.filter(v => v.tipo === 'principal' && v.enable)
          this.slPublicidad1 = res.filter(v => v.tipo === 'publicidad1' && v.enable)
          this.slPublicidad2 = res.filter(v => v.tipo === 'publicidad2' && v.enable)
          if (!this.slPrincipal.length) {
            this.slPrincipal = [{ tipo: 'principal', enable: true, fileName: 'nopublicidad.jpg', caso: true }]
          }
        }
      })
    },
    getLogos () {
      this.$api.get('proveedores').then(res => {
        if (res) {
          this.arrLogos = res.filter(v => v.status === 1)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.bordes {
  border-top: 6px solid $primary
}
</style>
