<template>
  <q-page>
    <q-img :src="baseuPortada" style="height: 500px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px" >
      <div class="q-pa-md bg-transparent row justify-between" style="width:100%">
        <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="$router.go(-1)" />
        <q-btn v-if="miTienda" label="Editar perfil" flat no-caps color="grey-4" text-color="white"
        @click="$router.push('/editar-perfil')" />
      </div>
      <div class="row absolute-center justify-end items-center bg-transparent" style="width:100%">
        <div class="col-xs-7 col-sm-5 col-md-4 col-lg-4 col-xl-4">
          <div class="text-h6 text-black">Horario de atención</div>
          <div class="text-subtitle1 text-black">{{user.hapertura && user.hcierre ? user.hapertura + ' - ' + user.hcierre : 'Libre'}}</div>
          <div class="text-h6 q-mt-lg text-black">Días de atención</div>
          <div class="text-subtitle1 text-black">{{dias()}}</div>
        </div>
      </div>
    </q-img>

    <q-scroll-area
        v-if="user.images.length"
        horizontal
        style="height: 220px;"
      >
        <div class="row no-wrap q-py-md q-px-md q-gutter-md">
          <q-card @click="imgSelec = img, verImg = true" style="border-radius: 24px; width:180px" clickable v-ripple v-for="(img, index) in user.images" :key="index">
            <q-img :src="baseuImgsTienda + img"
            style="height: 180px; width: 100%; border-radius: 24px" >
            </q-img>
          </q-card>
        </div>
    </q-scroll-area>

    <q-dialog v-model="verImg">
      <q-card>
        <img :src="baseuImgsTienda + imgSelec" style="width: 500px;" />
      </q-card>
    </q-dialog>

    <q-scroll-area
      horizontal
      style="height: 80px;"
    >
      <div class="row no-wrap q-py-md q-px-md q-gutter-md">
        <div v-for="(btn, index) in 10" :key="index" >
          <q-btn no-caps class="q-px-md" label="Categoria" color="blue-grey-11" text-color="blue-grey-9" />
        </div>
      </div>
    </q-scroll-area>

    <div class="text-h5 q-my-md text-center">Últimos productos agregados</div>
    <q-scroll-area
        v-if="ultimosProductos.length"
        horizontal
        style="height: 500px;"
      >
        <div class="row no-wrap q-py-md q-px-xl q-gutter-xl">
          <div v-for="(card, index) in ultimosProductos" :key="index" >
            <q-card flat class="my-card" style="height: 460px; width: 210px">
              <q-img
                :src="!card.caso ? baseuProducto + card.images[0] : card.images[0]"
                spinner-color="white"
                style="height: 230px; width: 210px"
                @click="producto = card, verProducto = true"/>

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
                <div v-if="!miTienda" class="row items-center">
                  <q-btn no-caps icon-right="add_shopping_cart" label="Agregar al carro" color="primary" style="border-radius: 9px" />
                </div>
                <div v-if="miTienda" class="row justify-end">
                  <q-btn flat round icon="edit" color="primary" @click="$router.push('/editar_producto/' + card._id)" />
                  <q-btn flat round icon="delete" color="negative" @click="eliminarProducto(card._id)" />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-scroll-area>
      <q-card v-else class="column items-center justify-center q-ma-md bg-secondary text-h6 text-white" style="height: 230px; width: 210px">*Nada por aquí*</q-card>

      <div class="text-h5 q-my-md text-center">Mejores categorizados</div>
      <q-scroll-area
          v-if="productos.length"
          horizontal
          style="height: 500px;"
        >
          <div class="row no-wrap q-py-md q-px-xl q-gutter-xl">
            <div v-for="(card, index) in productos" :key="index" >
              <q-card flat class="my-card" style="height: 460px; width: 210px">
                <q-img
                  :src="!card.caso ? baseuProducto + card.images[0] : card.images[0]"
                  spinner-color="white"
                  style="height: 230px; width: 210px"
                  @click="producto = card, verProducto = true"/>

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
                  <div v-if="!miTienda" class="row items-center">
                    <q-btn no-caps icon-right="add_shopping_cart" label="Agregar al carro" color="primary" style="border-radius: 9px" />
                  </div>
                  <div v-if="miTienda" class="row justify-end">
                    <q-btn flat round icon="edit" color="primary" @click="$router.push('/editar_producto/' + card._id)" />
                    <q-btn flat round icon="delete" color="negative" @click="eliminarProducto(card._id)" />
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-scroll-area>
        <q-card v-else class="column items-center justify-center q-ma-md bg-secondary text-h6 text-white" style="height: 230px; width: 210px">*Nada por aquí*</q-card>

        <div class="text-h5 q-my-md text-center">Más productos</div>
        <div v-if="productos.length" class="row justify-around">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 row justify-center q-mt-md" v-for="(card, index) in productos" :key="index">
            <q-card flat class="my-card" style="height: 460px; width: 210px">
                <q-img
                  :src="!card.caso ? baseuProducto + card.images[0] : card.images[0]"
                  spinner-color="white"
                  style="height: 230px; width: 210px"
                  @click="producto = card, verProducto = true"/>

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
                  <div v-if="!miTienda" class="row items-center">
                    <q-btn no-caps icon-right="add_shopping_cart" label="Agregar al carro" color="primary" style="border-radius: 9px" />
                  </div>
                  <div v-if="miTienda" class="row justify-end">
                    <q-btn flat round icon="edit" color="primary" @click="$router.push('/editar_producto/' + card._id)" />
                    <q-btn flat round icon="delete" color="negative" @click="eliminarProducto(card._id)" />
                  </div>
                </q-card-section>
            </q-card>
          </div>
        </div>
        <q-card v-else class="column items-center justify-center q-ma-md bg-secondary text-h6 text-white" style="height: 230px; width: 210px">*Nada por aquí*</q-card>
        <div v-if="productos.length" class="row items-center justify-center q-mt-lg">
          <q-btn no-caps icon="store" label="Ver más productos" color="primary" size="lg" style="border-radius: 15px; width: 80%" />
        </div>

        <q-page-sticky v-if="miTienda" position="bottom-right" :offset="[18, 18]">
          <q-btn fab icon="dashboard_customize" color="primary" @click="$router.push('/producto')">
            <q-tooltip>
              Nuevo producto
            </q-tooltip>
          </q-btn>
        </q-page-sticky>

        <q-dialog v-model="verProducto">
          <q-card style="width: 400px">
            <q-card-section class="q-pa-none" style="width: 100%">
              <DetalleProducto :data="producto" lugar="tienda" />
            </q-card-section>
          </q-card>
        </q-dialog>

    <!-- <div class="row">
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
                  <q-rating readonly v-model="card.calification" :max="5" size="20px" />
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
            <q-rating readonly v-model="card.calification" :max="5" size="25px" />

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

    </div> -->
  </q-page>
</template>

<script>
import DetalleProducto from '../pages/DetalleProducto'
import env from '../env'
export default {
  components: { DetalleProducto },
  data () {
    return {
      miTienda: false,
      verProducto: false,
      verImg: false,
      slide: 0,
      id_tienda: '',
      baseuProducto: '',
      baseuPerfil: '',
      baseuPortada: '',
      baseuImgsTienda: '',
      imgSelec: '',
      producto: {},
      user: {
        images: []
      },
      categorias: ['categorias', 'categorias', 'categorias', 'categorias', 'categorias', 'converse'],
      tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      precio: ['€0-€100', '€110-€300', '€300-€500', '€500-€1000'],
      productos: [],
      ultimosProductos: [],
      catego: [],
      talla: [],
      preci: []
    }
  },
  mounted () {
    this.baseuProducto = env.apiUrl + '/producto_files/'
    this.baseuImgsTienda = env.apiUrl + '/tienda_files/'
    if (this.$route.params.proveedor_id) {
      this.id_tienda = this.$route.params.proveedor_id
      this.baseuPerfil = env.apiUrl + '/perfil_img/' + this.id_tienda
      this.baseuPortada = env.apiUrl + '/perfil_img/portada' + this.id_tienda
      this.getProductosByProveedor(this.id_tienda)
      this.getInfoById(this.id_tienda)
    }
    const value = localStorage.getItem('TELDE_SESSION_INFO')
    if (value) {
      this.getInfo()
    }
  },
  methods: {
    getInfo () {
      this.$api.get('user_info').then(res => {
        if (res) {
          if (res._id === this.id_tienda) {
            this.miTienda = true
          }
        }
      })
    },
    getInfoById (id) {
      this.$api.post('user_by_id/' + id).then(res => {
        this.user = res
        console.log('user', this.user)
      })
    },
    getProductosByProveedor (id) {
      this.$api.get('productos/' + id).then(res => {
        if (res) {
          this.ultimosProductos = []
          this.productos = res
          var largo = res.length - 1
          for (let i = 0; i < 10; i++) {
            if (largo >= 0) {
              this.ultimosProductos.push(res[largo])
              largo = largo - 1
            }
          }
          console.log('productos', this.productos)
        }
      })
    },
    eliminarProducto (id) {
      this.$q.dialog({
        title: '¡Atención!',
        message: '¿Seguro desea eliminar este producto?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$q.loading.show()
        this.$api.delete('producto/' + id).then(res => {
          if (res) {
            this.$q.loading.hide()
            this.$q.notify({
              message: 'Eliminado Correctamente',
              color: 'positive'
            })
            this.getProductosByProveedor(this.id_tienda)
          }
        })
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
    },
    formatPrice (value) {
      const val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    dias () {
      var dias = ''
      if (this.user.dias) {
        for (let i = 0; i < this.user.dias.length; i++) {
          if (this.user.dias[i] === 0) {
            dias = dias + 'Lunes, '
          } else if (this.user.dias[i] === 1) {
            dias = dias + 'Martes, '
          } else if (this.user.dias[i] === 2) {
            dias = dias + 'Miercoles, '
          } else if (this.user.dias[i] === 3) {
            dias = dias + 'Jueves, '
          } else if (this.user.dias[i] === 4) {
            dias = dias + 'Viernes, '
          } else if (this.user.dias[i] === 5) {
            dias = dias + 'Sabado, '
          } else if (this.user.dias[i] === 6) {
            dias = dias + 'Domingo, '
          }
        }
      }
      return dias
    }
  }
}
</script>

<style scoped lang="scss">
.bordes {
  border-top: 6px solid $primary
}
</style>
