<template>
  <div>
    <div class="bg-grey" style="height: 500px">
      <div class="row justify-between q-pa-md">
        <div class="row q-ml-lg">
          <q-img class="q-ml-md" src="logo.png" style="width:30px" />
          <div class="text-h5 q-ml-sm q-mt-xs">Telde</div>
        </div>
        <q-tabs
          v-model="tab"
          dense
          class="bg-grey"
        >
            <q-tab class="text-white" name="Inicio" label="Mails" />
            <q-separator vertical dark />
            <q-tab class="text-white" name="Nosotros" label="Alarms" />
            <q-separator vertical dark />
            <q-tab class="text-white" name="Tienda" label="Movies" />
            <q-separator vertical dark />
            <q-tab class="text-white" name="Blog" label="Movies" />
            <q-separator vertical dark />
            <q-tab class="text-white" name="Contacto" label="Movies" />
        </q-tabs>
      </div>

      <div class="q-ml-xl q-mt-xl">
        <div class="row">
          <div class="col-3 text-h2 text-white text-bold">AHORA ES MAS FACIL</div>
        </div>
        <div class="row">
          <div class="col-3 text-white q-mt-sm">Ahora puedes ser parte de la nueva plataforma en linea para vender tus productos de forma rápida y segura</div>
        </div>
        <div class="q-mt-lg">
          <q-btn class="q-px-md" rounded no-caps color="primary" label="¡Regístrate Ahora!" />
        </div>
      </div>
    </div>

    <div class="text-h5 q-my-md text-center">LAS TIENDAS MEJOR CALIFICADAS</div>

    <q-scroll-area
        horizontal
        style="height: 480px;"
      >
        <div class="row no-wrap q-py-md q-px-xl q-gutter-xl">
          <div v-for="(card, index) in arrLogos" :key="index" >
            <q-card class="my-card">
              <q-img
                :src="card.perfil ? baseuLogos + card._id : card.perfilEstatico ? 'logos/' + card.id.toString() + '.jpeg' : 'noimg.png'"
                spinner-color="white"
                style="height: 200px; width: 200px"/>

              <q-card-section>
                <q-rating v-model="card.calification" :max="5" size="25px" />

                <div class="row no-wrap items-center q-mt-xs">
                  <div class="col text-subtitle2 ellipsis">{{card.nombreEmpresa}}</div>
                  <div class="col-auto text-grey text-caption row no-wrap items-center">
                    <q-icon name="favorite_border" size="1.8em" />
                  </div>
                </div>
              </q-card-section>

              <q-separator inset />

              <q-card-section class="q-pt-sm">
                <div class="text-caption text-black">Small plates, salads sandwiches in an intimate setting.</div>
                <div class="text-h6 text-primary q-mt-sm">$ 000</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-scroll-area>

    <q-carousel
      v-if="web"
      v-model="slide3"
      swipeable
      animated
      infinite
      height="330px"
      class="bg-transparent q-my-md"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-around items-center no-wrap" style="width: 100%">
          <q-card class="col-6 q-mx-sm" clickable v-ripple v-for="(card, index) in slPublicidad1" :key="index" @click="!card.nuevo ? irRuta(card.ruta) : ''">
              <q-img :src="!card.nuevo ? baseuPublicidad + card.fileName : card.fileName" style="height: 290px; width: 100%" />
          </q-card>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <q-scroll-area
        v-else
        horizontal
        style="height: 210px;"
      >
        <div class="row no-wrap items-center q-py-md q-px-md q-gutter-md">
          <q-card clickable v-ripple style="width: 320px" v-for="(card, index) in slPublicidad1" :key="index" @click="!card.nuevo ? irRuta(card.ruta) : ''">
              <q-img :src="!card.nuevo ? baseuPublicidad + card.fileName : card.fileName" style="height: 160px; width: 100%" />
          </q-card>
        </div>
    </q-scroll-area>

    <div class="q-my-md">
      <q-scroll-area
        horizontal
        style="height: 430px;"
      >
        <div class="row no-wrap q-py-md q-px-xl q-gutter-xl">
          <div v-for="(card, index) in arrNuevo" :key="index" >
            <q-img
              :src="!card.caso ? baseuProducto + card.images[0] : card.images[0]"
              spinner-color="white"
              style="border-radius:12px; height: 260px; width: 180px"
              @click="producto = card, !card.caso ? verProducto = true : ''">
            </q-img>
            <div class="q-ma-sm" style="width: 180px" @click="producto = card, !card.caso ? verProducto = true : ''">
                <div class="row no-wrap items-center">
                  <q-icon class="col-1" name="store" size="xs"></q-icon>
                  <div v-if="!card.caso" class="col q-ml-sm text-subtitle2 ellipsis">{{card.datos_proveedor.nombreEmpresa}}</div>
                </div>
                <div class="row no-wrap items-center">
                  <div class="col text-subtitle2 text-bold ellipsis">{{card.nombre}}</div>
                </div>
                <div class="row no-wrap items-center">
                  <div v-if="!card.oferta" class="col text-h6 ellipsis">${{formatPrice(card.valor)}}</div>
                  <div v-if="card.oferta" class="col text-h6 ellipsis">$<strike>{{formatPrice(card.valor)}}</strike> - {{formatPrice(card.ofertaVal)}}</div>
                </div>
              </div>
          </div>
        </div>
      </q-scroll-area>
    </div>

    <q-carousel
      v-if="web"
      v-model="slide5"
      swipeable
      animated
      infinite
      height="330px"
      class="bg-transparent q-my-md"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-around items-center no-wrap" style="width: 100%">
          <q-card class="col-6 q-mx-sm" clickable v-ripple v-for="(card, index) in slPublicidad2" :key="index" @click="!card.nuevo ? irRuta(card.ruta) : ''">
              <q-img :src="!card.nuevo ? baseuPublicidad + card.fileName : card.fileName" style="height: 290px; width: 100%" />
          </q-card>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <q-scroll-area
        v-if="!web"
        horizontal
        style="height: 210px;"
      >
        <div class="row no-wrap items-center q-py-md q-px-md q-gutter-md">
          <q-card clickable v-ripple style="width: 320px" v-for="(card, index) in slPublicidad2" :key="index" @click="!card.nuevo ? irRuta(card.ruta) : ''">
              <q-img :src="!card.nuevo ? baseuPublicidad + card.fileName : card.fileName" style="height: 160px; width: 100%" />
          </q-card>
        </div>
    </q-scroll-area>

    <div class="q-my-md">
      <q-scroll-area
        horizontal
        style="height: 430px;"
      >
        <div class="row no-wrap q-py-md q-px-xl q-gutter-xl">
          <div v-for="(card, index) in arrTienda" :key="index" >
            <q-img
              :src="!card.caso ? baseuProducto + card.images[0] : card.images[0]"
              spinner-color="white"
              style="border-radius:12px; height: 260px; width: 180px"
              @click="producto = card, !card.caso ? verProducto = true : ''">
            </q-img>
            <div class="q-ma-sm" style="width: 180px" @click="producto = card, !card.caso ? verProducto = true : ''">
                <div class="row no-wrap items-center">
                  <q-icon class="col-1" name="store" size="xs"></q-icon>
                  <div v-if="!card.caso" class="col q-ml-sm text-subtitle2 ellipsis">{{card.datos_proveedor.nombreEmpresa}}</div>
                </div>
                <div class="row no-wrap items-center">
                  <div class="col text-subtitle2 text-bold ellipsis">{{card.nombre}}</div>
                </div>
                <div class="row no-wrap items-center">
                  <div v-if="!card.oferta" class="col text-h6 ellipsis">${{formatPrice(card.valor)}}</div>
                  <div v-if="card.oferta" class="col text-h6 ellipsis">$<strike>{{formatPrice(card.valor)}}</strike> - {{formatPrice(card.ofertaVal)}}</div>
                </div>
              </div>
          </div>
        </div>
      </q-scroll-area>
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
      producto: {},
      verProducto: false,
      login: true,
      web: true,
      baseuPublicidad: '',
      baseuProducto: '',
      baseuLogos: '',
      tap: 'Inicio',
      slide1: 1,
      slide2: 1,
      slide3: 1,
      slide5: 1,
      autoplay1: true,
      autoplay2: true,
      autoplay3: true,
      autoplay5: true,
      slPrincipal: [],
      slPublicidad1: [],
      slPublicidad2: [],
      arrTienda: [],
      arrNuevo: [],
      slLogos: {},
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
    const value = localStorage.getItem('FLAAG_SESSION_INFO')
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
              this.$router.push('/mi_tienda')
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
          this.arrTienda = res
          if (!this.arrTienda.length) {
            this.arrTienda = [{ nombre: 'Nombre Producto', descripcion: 'Descripcion', images: ['nopublicidad.jpg'], valor: 0, caso: true }]
          }
          var largo = this.arrTienda.length - 1
          for (let i = 0; i < 25; i++) {
            if (largo >= 0) {
              this.arrNuevo.push(this.arrTienda[largo])
              largo = largo - 1
            }
          }
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
          this.arrLogos.sort(() => Math.random() - 0.5)
          // arreglar el slide
          var arr = []
          var cc = 1
          var limit = 0
          if (this.web) {
            limit = 6
          } else {
            limit = 3
          }
          for (let i = 0; i < this.arrLogos.length; i++) {
            if (arr.length < limit) {
              arr.push(this.arrLogos[i])
              if (i === this.arrLogos.length - 1) {
                this.slLogos['slideL' + cc] = arr
              }
            } else {
              this.slLogos['slideL' + cc] = arr
              cc = cc + 1
              arr = []
              arr.push(this.arrLogos[i])
              if (i === this.arrLogos.length - 1) {
                this.slLogos['slideL' + cc] = arr
              }
            }
          }
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
