<template>
  <div>
    <q-img :src="'nopublicidad.jpg'" style="height: 150px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px">
      <div class="absolute-full">
        <div class="absolute-center full-width text-bold text-h5 text-center">Conoce nuestras tiendas</div>
      </div>
    </q-img>

    <div class="text-h6 q-mx-md text-grey-8 q-mt-md">Categoria</div>
    <q-scroll-area
      horizontal
      style="height: 80px;"
    >
      <div class="row no-wrap q-py-md q-px-md q-gutter-md">
        <div v-for="(btn, index) in categorias" :key="index" >
          <q-btn no-caps class="q-px-md" :label="btn" :color="selecCategoria === btn ? 'primary' : 'blue-grey-11'" text-color="blue-grey-9"
          @click="filterCategoria(btn, 'cat')" />
        </div>
      </div>
    </q-scroll-area>
    <div v-if="subCategorias.length" class="text-h6 q-mx-md text-grey-8">Selecciona tu SubCategoria</div>
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
      <q-btn :disable="selecCategoria === '' ? true : false" style="width:50%" rounded no-caps color="primary" label="Buscar"
      @click="filterTiendas()"/>
    </div>

    <div v-if="tiendas.length" class="row justify-around">
        <div class="col-6 row justify-center q-mt-md" v-for="(card, index) in tiendas" :key="index">
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
    <div v-else class="text-center text-h6 q-my-lg">No existen tiendas creadas</div>
    <div v-if="verTiendas" class="row justify-center q-ma-md">
      <q-btn rounded class="q-pa-xs" color="primary" text-color="white" @click="verMas()" label="Ver más tiendas" style="width: 90%;" no-caps/>
    </div>
  </div>
</template>

<script>
import env from '../../env'
export default {
  data () {
    return {
      verTiendas: true,
      baseuTiendas: '',
      selecCategoria: '',
      selecSubCategoria: '',
      allTiendas: [],
      tiendas: [],
      favoritoData: [],
      categorias: ['Comida', 'Tienda'],
      subCategoria1: ['Americana', 'Italiana', 'Mediterránea', 'Asiática', 'Latina'],
      subCategorias: []
    }
  },
  mounted () {
    this.baseuTiendas = env.apiUrl + '/perfil_img/'
    this.getTiendas()
    this.getFavoritos()
  },
  methods: {
    getTiendas () {
      this.$api.get('proveedores').then(res => {
        if (res) {
          this.allTiendas = res
          this.tiendas = this.allTiendas.slice(0, 6)
          if (this.$route.params.cat) {
            this.filterCategoria(this.$route.params.cat, 'cat')
            if (this.$route.params.subcat) {
              this.filterCategoria(this.$route.params.subcat, 'sub')
            }
            this.filterTiendas()
          }
        }
      })
    },
    getFavoritos () {
      this.$api.get('favoritos').then(res => {
        this.favoritoData = res
      })
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
      this.verTiendas = false
      this.tiendas = this.allTiendas.filter(v => {
        if (v.categoria === this.selecCategoria) {
          if (v.categoria === 'Comida') {
            if (this.selecSubCategoria !== '') {
              if (v.subCategoria.find(x => x === this.selecSubCategoria)) {
                return v
              }
            } else {
              return v
            }
          } else if (v.categoria === 'Tienda') {
            return v
          }
        }
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
      if (this.favoritoData.find(v => v.proveedor_id === id)) {
        this.$api.delete('favorito/' + id).then(res => {
          this.getFavoritos()
        })
      } else {
        this.$api.post('favorito/' + id).then(res => {
          this.getFavoritos()
        })
      }
    },
    irTienda (id) {
      this.$router.push('/tienda/' + id)
    },
    verMas () {
      this.tiendas = this.allTiendas
    }
  }
}
</script>
