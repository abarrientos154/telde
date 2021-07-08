<template>
  <div>
    <img :src="!principal.nuevo ? baseuPublicidad + principal.fileName : principal.fileName" style="height: 400px; width: 100%;"
    @click="!principal.nuevo ? irRuta(principal.ruta) : ''" />

    <div class="text-h5 q-my-md text-center text-grey-8 text-bold">¡Busca lo que necesites!</div>

    <div class="column items-center justify-center">
      <div class="q-mt-sm text-h6 q-mx-md text-grey-8">Categorias</div>
    </div>

      <div class="column items-center justify-center">
        <div class="row no-wrap q-py-md q-px-md q-gutter-md">
          <div v-for="(btn, index) in categorias" :key="index" >
            <q-btn no-caps class="q-px-md" :label="btn" :color="selecCategoria === btn ? 'primary' : 'blue-grey-11'" text-color="blue-grey-9"
            @click="filterCategoria(btn, 'cat')" />
          </div>
        </div>
      </div>
    <div v-if="subCategorias.length" class="text-h6 q-mx-md text-grey-8">Sub categorias</div>
    <q-scroll-area
      v-if="subCategorias.length"
      horizontal
      style="height: 80px;"
    >
      <div class="row no-wrap q-py-md q-px-md q-gutter-md">
        <div v-for="(btn, index) in subCategorias" :key="index" >
          <q-btn no-caps class="q-px-md" :label="btn" :color="selecSubCategoria === btn ? 'primary' : 'blue-grey-11'" text-color="blue-grey-9"
          @click="filterCategoria(btn, 'sub')" />
        </div>
      </div>
    </q-scroll-area>
    <div class="q-my-md row justify-center">
      <q-btn :disable="mostrarBtn" style="width:50%" rounded no-caps color="primary" label="Buscar"
      @click="filterTiendas()"/>
    </div>

    <div class="text-h6 q-mx-md text-grey-8">Algunas de nuestras tiendas</div>
    <q-scroll-area
        v-if="tiendas.length"
        horizontal
        style="height: 350px;"
      >
        <div class="row no-wrap q-py-md q-px-md q-gutter-md">
          <div v-for="(card, index) in tiendas" :key="index" >
            <q-card style="width:400px; border-radius:15px">
              <q-img
                :src="baseuTiendas + card._id"
                spinner-color="white"
                style="height: 220px; width: 100%">
                  <div class="bg-transparent" style="width:100%">
                    <q-btn icon="favorite" round color="primary" :text-color="findFavorite(card._id) ? 'red' : 'white'" @click="addFavorito(card._id)" />
                  </div>
                </q-img>

              <q-card-section class="row justify-between">
                <div class="col-8">
                  <div class="row items-center" style="width: 100%">
                    <div class="col text-subtitle1 ellipsis"> {{card.nombre}} </div>
                  </div>
                  <div class="row items-center" style="width: 100%">
                    <q-icon class="col-1" name="room" size="xs" />
                    <div class="col text-subtitle1 q-ml-xs ellipsis"> {{card.ciudad ? card.ciudad.nombre + ', ' + card.direccion : ''}} </div>
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
      <div v-else class="text-center text-h6 q-my-lg">No hay ninguna tienda</div>

      <q-scroll-area
        horizontal
        style="height: 370px;"
      >
        <div class="row no-wrap q-py-md q-px-md q-gutter-md">
          <q-card style="border-radius: 24px; width:450px" clickable v-ripple v-for="(card, index) in publicidad1" :key="index">
            <img :src="!card.nuevo ? baseuPublicidad + card.fileName : card.fileName"
            style="height: 320px; width: 100%" @click="!card.nuevo ? irRuta(card.ruta) : ''"/>
          </q-card>
        </div>
      </q-scroll-area>

    <div class="text-h6 q-my-md text-center text-grey-8">Nuestros nuevos productos</div>
    <q-scroll-area
        v-if="productos.length"
        horizontal
        style="height: 410px;"
      >
        <div class="row no-wrap q-py-md q-px-md q-gutter-md">
          <div v-for="(card, index) in productos" :key="index" >
            <q-card flat class="my-card" style="height: 370px; width: 180px">
              <q-img
                :src="!card.caso ? baseuProducto + card._id : card.images[0]"
                spinner-color="white"
                style="height: 180px; width: 100%"
                @click="producto = card, verProducto = true"/>

              <q-card-section>
                <div class="row no-wrap items-center q-mt-xs">
                  <div class="col-12 text-subtitle2 ellipsis"> {{card.nombre}} </div>
                </div>
                <div class="text-caption text-black"> {{card.descripcion}} </div>
              </q-card-section>

              <q-card-section class="absolute-bottom">
                <div v-if="!card.oferta" class="text-h6 text-blue q-my-sm">€{{formatPrice(card.valor)}}</div>
                <div v-if="card.oferta" class="text-h6 text-blue q-my-sm">€<strike>{{formatPrice(card.valor)}}</strike> - {{formatPrice(card.ofertaVal)}}</div>
                <div class="row items-center">
                  <q-btn no-caps icon="store" label="Ir tienda" color="primary" style="border-radius: 9px"
                  @click="irTienda(card.proveedor_id)" />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-scroll-area>
      <div v-else class="text-center text-h6 q-my-lg">No hay ningún producto</div>

      <q-scroll-area
        horizontal
        style="height: 370px;"
      >
        <div class="row no-wrap q-py-md q-px-md q-gutter-md">
          <q-card style="border-radius: 24px; width:450px" clickable v-ripple v-for="(card, index) in publicidad2" :key="index">
            <img :src="!card.nuevo ? baseuPublicidad + card.fileName : card.fileName"
            style="height: 320px; width: 100%" @click="!card.nuevo ? irRuta(card.ruta) : ''"/>
          </q-card>
        </div>
      </q-scroll-area>

      <div class="text-h6 q-my-md text-center text-grey-8">Más tiendas</div>
      <div v-if="masTiendas.length" class="row justify-around">
        <div class="col-6 row justify-center q-mt-md" v-for="(card, index) in masTiendas" :key="index">
          <q-card style="width:95%; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-top-left-radius: 15px; border-top-right-radius: 15px">
              <q-img
                :src="baseuTiendas + card._id"
                spinner-color="white"
                style="height: 350px; width: 100%">
                  <div class="bg-transparent" style="width:100%">
                    <q-btn icon="favorite" round color="primary" :text-color="findFavorite(card._id) ? 'red' : 'white'" @click="addFavorito(card._id)" />
                  </div>
                  <div class="absolute-bottom bg-transparent">
                    <div class="row items-center" style="width: 100%">
                      <div class="col text-subtitle1 ellipsis"> {{card.nombre}} </div>
                    </div>
                    <div class="row items-center" style="width: 100%">
                      <q-icon class="col-1" name="room" size="xs" />
                      <div class="col text-subtitle1 q-ml-xs ellipsis"> {{card.ciudad ? card.ciudad.nombre + ', ' + card.direccion : ''}} </div>
                    </div>

                    <div class="row items-center q-mt-md">
                      <q-btn no-caps icon="store" label="Ir tienda" color="primary" style="border-radius: 9px"
                      @click="irTienda(card._id)" />
                    </div>
                  </div>
                </q-img>
            </q-card>
        </div>
      </div>
      <div v-else class="text-center text-h6 q-my-lg">No hay ninguna tienda</div>
      <div v-if="masTiendas.length" class="row items-center justify-center q-mt-lg">
        <q-btn no-caps rounded label="Ver más tiendas" color="primary" size="lg" style="width: 80%"
        @click="$router.push('/tiendas')"/>
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
      verProducto: false,
      login: true,
      web: true,
      baseuPublicidad: '',
      baseuProducto: '',
      baseuTiendas: '',
      selecCategoria: '',
      selecSubCategoria: '',
      producto: {},
      principal: {},
      publicidad1: [],
      publicidad2: [],
      productos: [],
      allTiendas: [],
      tiendas: [],
      masTiendas: [],
      favoritoData: [],
      categorias: ['Comida', 'Tienda'],
      subCategoria1: ['Americana', 'Italiana', 'Mediterránea', 'Asiática', 'Latina'],
      subCategorias: [],
      idClient: ''
    }
  },
  mounted () {
    this.web = this.$q.platform.is.desktop
    this.baseuPublicidad = env.apiUrl + '/publicidad_img/'
    this.baseuProducto = env.apiUrl + '/producto_files/'
    this.baseuTiendas = env.apiUrl + '/perfil_img/'
    this.getTiendas()
    this.getPublicidad()
    this.getProductos()
    const value = localStorage.getItem('TELDE_SESSION_INFO')
    if (value) {
      this.getInfo()
    } else {
      this.login = false
    }
  },
  computed: {
    mostrarBtn () {
      if (this.selecCategoria === '') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    getInfo () {
      this.$api.get('user_info').then(res => {
        if (res) {
          this.rol = res.roles[0]
          this.idClient = res._id
          if (this.rol === 2) {
            this.getFavoritos()
          }
        }
      })
    },
    getTiendas () {
      this.$api.get('proveedores').then(res => {
        if (res) {
          this.allTiendas = res
          this.tiendas = this.allTiendas
          this.tiendas.sort(() => Math.random() - 0.5)
          this.masTiendas = this.allTiendas.slice(0, 4)
        }
      })
    },
    getProductos () {
      this.$api.get('all_productos').then(res => {
        if (res) {
          this.productos = res.reverse().slice(0, 20)
        }
      })
    },
    getPublicidad () {
      this.$api.get('publicidad').then(res => {
        if (res) {
          this.principal = res.find(v => v.tipo === 'principal')
          this.publicidad1 = res.filter(v => v.tipo === 'publicidad1')
          this.publicidad2 = res.filter(v => v.tipo === 'publicidad2')
        }
      })
    },
    getFavoritos () {
      this.$api.get('favoritos').then(res => {
        this.favoritoData = res
      })
    },
    findFavorite (id) {
      if (this.favoritoData.find(v => v.proveedor_id === id)) {
        return true
      } else {
        return false
      }
    },
    addFavorito (id) {
      if (this.login) {
        if (this.favoritoData.find(v => v.proveedor_id === id)) {
          this.$api.delete('favorito/' + id).then(res => {
            this.getFavoritos()
          })
        } else {
          this.$api.post('favorito/' + id).then(res => {
            this.getFavoritos()
          })
        }
      }
    },
    formatPrice (value) {
      if (this.productos.length) {
        const val = (value / 1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      }
    },
    filterCategoria (btn, text) {
      if (text === 'cat') {
        this.selecCategoria = btn
        this.selecSubCategoria = ''
        if (btn === 'Comida') {
          this.subCategorias = this.subCategoria1
        } else {
          this.subCategorias = []
        }
      } else {
        this.selecSubCategoria = btn
      }
    },
    filterTiendas () {
      if (this.selecCategoria === 'Comida') {
        if (this.selecSubCategoria !== '') {
          this.$router.push('/tiendas/' + this.selecCategoria + '/' + this.selecSubCategoria)
        } else {
          this.$router.push('/tiendas/' + this.selecCategoria)
        }
      } else {
        this.$router.push('/tiendas/' + this.selecCategoria)
      }
    },
    irRuta (ruta) {
      openURL(ruta)
    },
    irTienda (id) {
      this.$router.push('/tienda/' + id)
    }
  }
}
</script>

<style scoped lang="scss">
.bordes {
  border-top: 6px solid $primary
}
</style>
