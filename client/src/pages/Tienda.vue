<template>
  <q-page>
    <div class="row">
      <div class="q-mt-md q-ml-md text-bold text-h5">MI TIENDA</div>
      <q-space />
      <q-breadcrumbs class="q-pt-md q-pl-xl text-h6 q-mr-sm">
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="Tienda" />
        <q-breadcrumbs-el label="Pagina 1 de 1" />
      </q-breadcrumbs>
    </div>

    <div class="row" style="width:100%">
      <div>
        <q-card flat bordered class="column q-mt-md q-ml-md" :style="$q.screen.width > 474 ? 'width: 250px': 'width:90%'" >
          <q-card-section class="bg-blue">
            <div class="column items-center justify-center text-h6 text-white">FILTRO DE TIENDA</div>
          </q-card-section>

          <q-card-section>
            <q-list class="q-mt-sm">
              <div class="q-pl-md text-h6 text-black">CATEGORIAS</div>
              <q-item v-for="(item, index) in categorias" :key="index" class="text-black q-mt-xs text-bold">
                <div class="column justify-center items-center" >
                <q-checkbox v-model="catego" :label='item' :val="index" />
                </div>
              </q-item>
            </q-list>
          </q-card-section>

        <q-separator />

        <q-card-section>
          <q-list class="q-mt-sm">
            <div class="q-pl-md text-h6 text-black">TALLAS</div>
              <q-item v-for="(item, index) in tallas" :key="index" class="text-black q-mt-xs text-bold">
                <div class="column justify-center items-center" >
                <q-checkbox v-model="talla" :label='item' :val="index" />
                </div>
              </q-item>
          </q-list>
        </q-card-section>
          <q-separator />
        <q-card-section>
              <div class="q-pl-md text-h6 text-black">PRODUCTOS RECOMENDADOS</div>
              <div>
              <q-carousel
              v-model="slide"
              transition-prev="scale"
              transition-next="scale"
              swipeable
              animated
              control-color="grey"
              arrows
              height="380px"
              class="text-white bg-transparent"
            >
              <q-carousel-slide class="column items-center justify-center" :name="index" v-for="(card, index) in ejemplos2" :key="index">
                <q-card style="height: 320px; width: 150px" >
                <div class="column items-center justify-center">
                  <q-img
                    :src="card.images ? baseuLogos + card._id : card.perfilEstatico ? 'logos/' + card.id.toString() + '.jpeg' : 'nopublicidad.jpg'"
                    spinner-color="white"
                    style="height: 150px; width: 150px"/>
                </div>
                <q-card-section>
                  <q-rating v-model="card.calification" :max="5" size="20px" />
                  <div class="row no-wrap items-center q-mt-xs">
                    <div class="col text-subtitle2 text-black ellipsis">{{card.nombre}}</div>
                    <div class="col-auto text-grey text-caption row no-wrap items-center">
                      <q-icon name="favorite_border" size="1.8em" />
                    </div>
                  </div>
                </q-card-section>
                <q-separator inset />
                <q-card-section>
                  <div class="text-caption text-black">Small plates, salads.</div>
                </q-card-section>
                <q-card-section class="absolute-bottom">
                  <div class="text-h7 text-primary q-mt-sm">$ 000</div>
                </q-card-section>
              </q-card>
              </q-carousel-slide>
            </q-carousel>
            </div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-list class="q-mt-sm">
              <div class="q-pl-md text-h6 text-black">PRECIO</div>
                <q-item v-for="(item, index) in precio" :key="index" class="text-black q-mt-xs text-bold">
                  <div class="column justify-center items-center" >
                  <q-checkbox v-model="preci" :label='item' :val="index" />
                  </div>
                </q-item>
              </q-list>
          </q-card-section>
        </q-card>
      </div>

      <div class="q-pt-md column" :style="$q.screen.width > 474 ? 'width: calc(100% - 270px)': 'width:100%'">
        <div class="q-mb-sm bg-grey" style="height:65px; width:100%; border-top-right-radius:10px">
          <div class="row items-center q-pr-md justify-end q-pt-md">
            <q-icon name="view_list" size="lg">
            </q-icon>
            <q-btn dense class="q-mx-xs" no-caps color="primary" icon="add_shopping_cart" label="Nuevo Producto"
              @click="$router.push('/producto')" />
          </div>
        </div>

        <div class="row justify-around" style="width: 100%">
          <q-card class="q-ma-sm shadow-4" style="height: 400px; width: 250px" v-for="(card, index) in productos" :key="index">
          <div class="column items-center justify-center">
            <q-img
              :src="card.images.length > 0 ? baseu + card.images[0] : 'noimgproducto.png'"
              spinner-color="white"
              style="height: 200px; width: 250px"/>
          </div>

          <q-card-section>
            <q-rating :disable="rol === 3" v-model="card.calification" :max="5" size="25px" />

            <div class="row no-wrap items-center q-mt-xs">
              <div class="col text-subtitle2 ellipsis">{{card.nombre}}</div>
              <div class="col-auto text-grey text-caption row no-wrap items-center">
                <q-icon name="favorite_border" size="1.8em" />
              </div>
            </div>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
            <div class="text-caption text-black">{{card.descripcion}}</div>
          </q-card-section>

          <q-card-section class="absolute-bottom">
            <div class="text-h6 text-primary q-mt-sm">$ {{card.valor}}</div>
          </q-card-section>
        </q-card>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script>
import env from '../env'
export default {
  data () {
    return {
      rol: 0,
      id_tienda: '',
      baseu: '',
      tab: 'Inicio',
      categorias: ['categorias', 'categorias', 'categorias', 'categorias', 'categorias', 'converse'],
      tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      precio: ['€0-€100', '€110-€300', '€300-€500', '€500-€1000'],
      productos: [],
      slide: 0,
      catego: [],
      talla: [],
      preci: [],
      ejemplos2: [
        {
          nombre: 'Producto',
          calification: 5,
          value: 1
        },
        {
          nombre: 'Producto2',
          calification: 5,
          value: 2
        }
      ]
    }
  },
  mounted () {
    this.baseu = env.apiUrl + '/producto_files/'
    if (this.$route.params.proveedor_id) {
      this.id_tienda = this.$route.params.proveedor_id
      this.getProductosByProveedor(this.id_tienda)
    } else {
      this.getInfo()
    }
  },
  methods: {
    getInfo () {
      this.$api.get('user_info').then(res => {
        if (res) {
          this.id_tienda = res._id
          this.rol = res.roles[0]
          this.getProductosByProveedor(this.id_tienda)
        }
      })
    },
    getProductosByProveedor (id) {
      this.$api.get('productos/' + id).then(res => {
        if (res) {
          this.productos = res
          console.log('prod', this.productos)
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
