<template>
  <div>
    <div class="text-h5 q-my-md text-center">LAS TIENDAS MEJOR CALIFICADAS</div>

    <q-scroll-area
        horizontal
        style="height: 480px;"
      >
        <div class="row no-wrap q-py-md q-px-xl q-gutter-xl">
          <div v-for="(card, index) in arrLogos" :key="index" >
            <q-card class="my-card" @click="$router.push('/Detalleproducto')">
              <q-img
                :src="card.perfil ? baseuLogos + card._id : card.perfilEstatico ? 'logos/' + card.id.toString() + '.jpeg' : 'noimg.png'"
                spinner-color="white"
                style="height: 220px; width: 200px"/>

              <q-card-section>
                <q-rating v-model="rating" :max="5" size="25px" />

                <div class="row no-wrap items-center q-mt-xs">
                  <div class="col text-subtitle2 ellipsis">Producto</div>
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

      <div class="row justify-center q-gutter-sm q-my-md" style="height: 330px">
        <q-card class="col-4 q-mx-sm" style="border-radius: 12px" clickable v-ripple v-for="(card, index) in slPublicidad1" :key="index">
          <q-img :src="!card.nuevo ? baseuPublicidad + card.fileName : card.fileName" style="height: 330px; width: 100%" >
            <div class="absolute-bottom">
              <div class="text-white text-h6">BANNER</div>
              <div class="text-white text-h6">PUBLICIDAD {{index + 1}}</div>
            </div>
          </q-img>
        </q-card>
      </div>

      <div class="row justify-center q-mt-xl q-pt-xl">
        <div class="col-9">
          <div class="row justify-between q-mb-md">
            <div class="text-h5">CONOCE NUESTRAS TIENDAS</div>
            <q-tabs
              v-model="tabTiendas"
              indicator-color="transparent"
              active-color="primary"
              class="text-black"
              dense
              no-caps
            >
                <q-tab name="resto" label="Resto" />
                <q-tab name="tecnologia" label="Tecnología" />
                <q-tab name="ferreteria" label="Ferreteria" />
                <q-tab name="ofertas" label="Ofertas" />
            </q-tabs>
          </div>
          <q-separator color="grey-7" />
        </div>
      </div>

    <div class="q-my-md row justify-center">
      <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="black"
      arrows
      height="350px"
      class="col-xs-11 col-sm-11 col-md-9 col-lg-9 col-xl-9"
    >
      <q-carousel-slide :name="index + 1" class="column no-wrap" v-for="(value, name, index) in slLogos" :key="index">
        <div class="row justify-center items-center q-gutter-md no-wrap">
          <div v-for="(card, index2) in value" :key="index2">
            <q-card class="my-card">
              <q-img
                :src="card.perfil ? baseuLogos + card._id : card.perfilEstatico ? 'logos/' + card.id.toString() + '.jpeg' : 'noimg.png'"
                spinner-color="white"
                style="height: 200px; width: 200px"/>

              <q-card-section>
                <q-rating v-model="rating" :max="5" size="25px" />

                <div class="row no-wrap items-center q-mt-xs">
                  <div class="col text-subtitle2 ellipsis">Producto</div>
                  <div class="col-auto text-grey text-caption row no-wrap items-center">
                    <q-icon name="favorite_border" size="1.8em" />
                  </div>
                </div>
                <div class="text-h6 text-primary q-mt-sm">$ 000</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    </div>

    <div class="q-my-xl" style="height: 370px">
      <q-img src="nopublicidad.jpg" style="height: 370px; width: 100%" >
        <div class="row justify-end absolute-center bg-transparent" style="width: 100%">
          <div class="col-4">
            <div class="text-white text-h4 text-center">Banner</div>
            <div class="text-white text-h4 text-center">Publicidad 03</div>
            <div class="row justify-center q-mt-xl">
              <a class="text-white text-subtitle1">Ir ahora</a>
            </div>
          </div>
        </div>
      </q-img>
    </div>

    <div class="row justify-center q-mt-xl q-pt-xl">
        <div class="col-9">
          <div class="row justify-between q-mb-md">
            <div class="text-h5">OTRAS SECCIONES</div>
            <q-tabs
              v-model="tabOtras"
              indicator-color="transparent"
              active-color="primary"
              class="text-black"
              dense
              no-caps
            >
                <q-tab name="seccion1" label="Seccion1" />
                <q-tab name="seccion2" label="Seccion2" />
                <q-tab name="seccion3" label="Seccion3" />
                <q-tab name="seccion4" label="Seccion4" />
            </q-tabs>
          </div>
          <q-separator color="grey-7" />
        </div>
      </div>

    <div class="q-my-md row justify-center">
      <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="black"
      arrows
      height="350px"
      class="col-xs-11 col-sm-11 col-md-9 col-lg-9 col-xl-9"
    >
      <q-carousel-slide :name="index + 1" class="column no-wrap" v-for="(value, name, index) in slLogos" :key="index">
        <div class="row justify-center items-center q-gutter-md no-wrap">
          <div v-for="(card, index2) in value" :key="index2">
            <q-card class="my-card">
              <q-img
                :src="card.perfil ? baseuLogos + card._id : card.perfilEstatico ? 'logos/' + card.id.toString() + '.jpeg' : 'noimg.png'"
                spinner-color="white"
                style="height: 200px; width: 200px"/>

              <q-card-section>
                <q-rating v-model="rating" :max="5" size="25px" />

                <div class="row no-wrap items-center q-mt-xs">
                  <div class="col text-subtitle2 ellipsis">Producto</div>
                  <div class="col-auto text-grey text-caption row no-wrap items-center">
                    <q-icon name="favorite_border" size="1.8em" />
                  </div>
                </div>
                <div class="text-h6 text-primary q-mt-sm">$ 000</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
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
          // arreglar el slide
          var arr = []
          var cc = 1
          var limit = 3
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
          console.log('logos', this.slLogos)
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
