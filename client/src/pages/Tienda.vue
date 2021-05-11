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
                <div v-if="rol === 2 || rol === 0" class="row items-center">
                  <q-btn no-caps icon-right="add_shopping_cart" label="Agregar al carro" color="primary" style="border-radius: 9px"
                  @click="rol === 2 ? addCarrito(card) : noLogin = true" />
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
                  <div v-if="rol === 2 || rol === 0" class="row items-center">
                    <q-btn no-caps icon-right="add_shopping_cart" label="Agregar al carro" color="primary" style="border-radius: 9px"
                    @click="rol === 2 ? addCarrito(card) : noLogin = true" />
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
                  <div v-if="rol === 2 || rol === 0" class="row items-center">
                    <q-btn no-caps icon-right="add_shopping_cart" label="Agregar al carro" color="primary" style="border-radius: 9px"
                    @click="rol === 2 ? addCarrito(card) : noLogin = true" />
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
          <q-btn no-caps icon="store" label="Ver más productos" color="primary" size="lg" style="border-radius: 15px; width: 80%"
          @click="masData()" />
        </div>

        <q-page-sticky v-if="miTienda" position="bottom-right" :offset="[18, 18]">
          <q-btn fab icon="dashboard_customize" color="primary" @click="$router.push('/producto')">
            <q-tooltip>
              Nuevo producto
            </q-tooltip>
          </q-btn>
        </q-page-sticky>

        <q-page-sticky v-if="rol === 2" position="bottom-right" :offset="[18, 18]">
          <q-btn fab icon="shopping_cart" color="primary" @click="verCarrito = true">
            <q-tooltip>
              Carrito
            </q-tooltip>
          </q-btn>
        </q-page-sticky>

        <q-dialog v-model="verProducto">
          <q-card style="width: 400px">
            <q-card-section class="q-pa-none" style="width: 100%">
              <DetalleProducto :data="producto" lugar="tienda" @compra="addCarrito" />
            </q-card-section>
          </q-card>
        </q-dialog>

        <q-dialog v-model="verCarrito" full-height>
          <q-card style="width: 100%">
            <q-card-section style="height:100%">
              <div class="row items-between" style="height:100%;">
                <div class="col-12">
                  <div class="row items-center q-mb-lg">
                    <div class="text-h6 text-grey-9">Carro de compra</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                  </div>
                  <q-list class="q-gutter-md">
                    <div v-for="(producto, index) in carrito" :key="index">
                      <div class="row items-start justify-start q-ma-xs">
                        <div class="col-3 q-mr-sm column justify-start items-start bg-red">
                          <img
                            :src="baseuProducto + producto.image"
                            spinner-color="white"
                            style="height: 100px; width: 100%; border-radius: 10px"/>
                        </div>

                        <div class="col-8">
                          <div class="row no-wrap items-center q-ml-sm">
                            <div class="text-subtitle1 ellipsis">{{producto.nombre}}</div>
                          </div>
                          <div class="row no-wrap items-center q-ml-sm">
                            <div class="text-subtitle1 text-grey-8 ellipsis">{{producto.proveedor_name}}</div>
                          </div>
                          <div class="q-mt-xs q-ml-sm">
                            <div class="text-h6 text-positive"> {{!producto.oferta ? '$' + formatPrice(producto.valor) : '$' + formatPrice(producto.ofertaVal)}} </div>
                          </div>
                          <div class="row">
                            <q-btn flat no-caps dense class="q-mr-sm" color="grey-6" icon="delete" label="Eliminar" @click="deleteProdCarrito(index)" />
                            <q-btn size="12px" dense color="grey" icon="remove" @click="editCantidad(index, false)" />
                            <div class="text-weight-bold text-h6 q-mx-sm">{{producto.cantidad_compra}}</div>
                            <q-btn size="12px" dense color="primary" icon="add" @click="editCantidad(index, true)" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </q-list>
                </div>
                <div class="col-12 q-py-lg column justify-end items-end">
                  <div class="row justify-between" style="width:100%">
                    <div class="text-h6 text-grey">Cantidad de productos</div>
                    <div class="text-h6 text-bold text-black">{{totalProductos}}</div>
                  </div>
                  <div class="row justify-between q-my-lg" style="width:100%">
                    <div class="text-h6 text-grey">Total a pagar</div>
                    <div class="text-h4 text-bold text-primary">${{formatPrice(totalCarrito)}}</div>
                  </div>
                  <div class="row justify-center" style="width:100%">
                    <q-btn :disable="carrito.length ? false : true" @click="$v.form.$reset(), comprarCarrito = true, verCarrito = false" no-caps label="Checkout" color="primary" size="xl" style="width: 90%; border-radius:15px" />
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>

        <q-dialog persistent v-model="comprarCarrito" full-height>
          <q-card style="width: 100%">
            <q-card-section style="height:100%">
              <div class="row items-between" style="height:100%;">
                <div class="col-12">
                  <div class="row items-center q-mb-xl">
                    <div class="col-1">
                      <q-btn icon="keyboard_backspace" round dense color="grey" @click="verCarrito = true, comprarCarrito = false" />
                    </div>
                    <div class="col-11 q-pl-md text-h6 text-grey-9">Carro de compra/Ckeckout</div>
                  </div>
                  <div class="q-px-sm">
                    <div class="row items-center">
                      <div class="text-h6 text-bold">Dirección de envío</div>
                      <q-space />
                      <q-btn icon="edit" round dense color="grey" />
                    </div>
                    <q-input v-model="form.user" label-slot borderless dense
                      :error="$v.form.user.$error" @blur="$v.form.user.$touch()"
                    >
                      <template v-slot:label>
                        <div class="text-h6">Nombre de usuario</div>
                      </template>
                    </q-input>
                    <q-input v-model="form.direccion" label-slot borderless dense
                      :error="$v.form.direccion.$error" @blur="$v.form.direccion.$touch()"
                    >
                      <template v-slot:label>
                        <div class="text-h6">Dirección</div>
                      </template>
                    </q-input>
                    <q-input v-model="form.codigo_postal" label-slot borderless dense
                      :error="$v.form.codigo_postal.$error" @blur="$v.form.codigo_postal.$touch()"
                    >
                      <template v-slot:label>
                        <div class="text-h6">Código postal</div>
                      </template>
                    </q-input>
                    <q-separator />
                    <div class="text-h6 text-bold q-my-md">Pedido</div>
                    <div class="row justify-between" style="width:100%">
                      <div class="text-h6 text-grey">Cantidad de productos</div>
                      <div class="text-h6 text-bold text-black">{{totalProductos}}</div>
                    </div>
                    <div class="row justify-between q-my-sm" style="width:100%">
                      <div class="text-h6 text-grey">Total a pagar</div>
                      <div class="text-h4 text-bold text-primary">${{formatPrice(totalCarrito)}}</div>
                    </div>
                    <q-separator />
                    <div class="row items-center q-my-md">
                      <div class="text-h6 text-bold">Método de pago</div>
                      <q-space />
                      <q-btn icon="edit" round dense color="grey" />
                    </div>
                    <div class="text-h6 text-grey">Número de cuenta</div>
                  </div>
                </div>
                <div class="col-12 q-py-lg column justify-end items-end">
                  <div class="row justify-between q-my-lg" style="width:100%">
                    <div class="text-h6 text-grey">Precio total</div>
                    <div class="text-h4 text-bold text-blue">${{formatPrice(totalCarrito)}}</div>
                  </div>
                  <div class="row justify-center" style="width:100%">
                    <q-btn :disable="carrito.length ? false : true" @click="iniciarCompra()" no-caps label="Pagar ahora" color="primary" size="xl" style="width: 90%; border-radius:15px" />
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>

        <q-dialog v-model="noLogin">
          <q-card class="q-pa-md">
            <q-card-section>
              <div class="q-ml-sm text-center text-subtitle2">Para poder comprar debes tener una cuenta.</div>
              <div class="q-ml-sm text-center text-h6 text-bold">¿Deseas registrarte o iniciar sesión?</div>
            </q-card-section>

            <q-card-section class="column items-center">
              <q-btn style="border-radius: 14px" label="Iniciar Sesión" color="primary" @click="$router.push('/login')" />
              <q-btn flat label="Registrarme" color="primary" @click="$router.push('/registro')" />
            </q-card-section>
          </q-card>
        </q-dialog>
  </q-page>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import DetalleProducto from '../pages/DetalleProducto'
import env from '../env'
export default {
  components: { DetalleProducto },
  data () {
    return {
      miTienda: false,
      verProducto: false,
      verImg: false,
      verCarrito: false,
      comprarCarrito: false,
      noLogin: false,
      slide: 0,
      rol: 0,
      id_tienda: '',
      baseuProducto: '',
      baseuPerfil: '',
      baseuPortada: '',
      baseuImgsTienda: '',
      imgSelec: '',
      producto: {},
      form: {},
      cliente: {},
      user: {
        images: []
      },
      carrito: [],
      categorias: ['categorias', 'categorias', 'categorias', 'categorias', 'categorias', 'converse'],
      tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      precio: ['€0-€100', '€110-€300', '€300-€500', '€500-€1000'],
      allProductos: [],
      productos: [],
      ultimosProductos: [],
      catego: [],
      talla: [],
      preci: []
    }
  },
  validations: {
    form: {
      user: { required },
      direccion: { required },
      codigo_postal: { required }
    }
  },
  computed: {
    totalCarrito () {
      let total = 0
      if (this.carrito.length > 0) {
        for (const i of this.carrito) {
          if (!i.oferta) {
            total = total + (i.valor * i.cantidad_compra)
          } else {
            total = total + (i.ofertaVal * i.cantidad_compra)
          }
        }
      }
      return total
    },
    totalProductos () {
      let total = 0
      if (this.carrito.length > 0) {
        for (const i of this.carrito) {
          total = total + i.cantidad_compra
        }
      }
      return total
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
    iniciarCompra () {
      this.$v.$touch()
      if (!this.$v.form.$error) {
        this.comprarCarrito = false
        this.form = {}
        this.$v.form.$reset()
        console.log('iniciando compra')
      }
    },
    getInfo () {
      this.$api.get('user_info').then(res => {
        if (res) {
          this.cliente = res
          this.rol = res.roles[0]
          if (res._id === this.id_tienda) {
            this.miTienda = true
          }
        }
      })
    },
    getInfoById (id) {
      this.$api.post('user_by_id/' + id).then(res => {
        this.user = res
      })
    },
    getProductosByProveedor (id) {
      this.$api.get('productos/' + id).then(res => {
        if (res) {
          this.allProductos = res
          console.log(res)
          this.ultimosProductos = []
          var largo = this.allProductos.length - 1
          for (let i = 0; i < 10; i++) {
            if (largo >= 0) {
              this.ultimosProductos.push(this.allProductos[largo])
              largo = largo - 1
            }
          }
          this.productos = []
          var largo2 = this.allProductos.length - 1
          for (let i = 0; i < 4; i++) {
            if (largo2 >= 0) {
              this.productos.push(this.allProductos[i])
              largo2 = largo2 - 1
            }
          }
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
    masData () {
      this.productos = this.allProductos
    },
    formatPrice (value) {
      const val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    addCarrito (val) {
      if (!this.carrito.find(v => v._id === val._id)) {
        var prod = {
          _id: val._id,
          nombre: val.nombre,
          proveedor_id: val.proveedor_id,
          proveedor_name: val.datos_proveedor.nombre,
          valor: val.valor,
          oferta: val.oferta,
          cantidad: val.cantidad - 1,
          cantidad_compra: 1,
          image: val.images[0]
        }
        if (val.oferta) {
          prod.ofertaVal = val.ofertaVal
        }
        this.carrito.push(prod)
        console.log(this.carrito)
        prod = {}
        this.$q.notify({
          message: 'Añadido al carro de compra',
          color: 'positive',
          positive: 'positive'
        })
      } else {
        this.$q.dialog({
          title: '¡Atención!',
          message: 'Ya añadiste este producto al carro de compra.'
        }).onOk(() => {

        })
      }
    },
    editCantidad (index, val) {
      if (val) {
        if (this.carrito[index].cantidad > 0) {
          this.carrito[index].cantidad_compra = this.carrito[index].cantidad_compra + 1
          this.carrito[index].cantidad = this.carrito[index].cantidad - 1
        } else {
          this.$q.dialog({
            title: '¡Atención!',
            message: 'Este producto se agotó de la tienda.'
          }).onOk(() => {

          })
        }
      } else {
        if (this.carrito[index].cantidad_compra > 1) {
          this.carrito[index].cantidad_compra = this.carrito[index].cantidad_compra - 1
          this.carrito[index].cantidad = this.carrito[index].cantidad + 1
        }
      }
    },
    deleteProdCarrito (index) {
      this.carrito.splice(index, 1)
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
