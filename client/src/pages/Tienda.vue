<template>
  <q-page>
    <q-img :src="baseuPortada" style="height: 300px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px" >
      <div class="absolute-bottom-right q-mb-md bg-transparent">
        <q-btn v-if="miTienda" class="q-px-md" size="md" label="Editar perfil" no-caps color="primary" style="border-radius: 25px"
        @click="$router.push('/editar-perfil')" />
      </div>
    </q-img>

    <div class="row justify-between items-start q-pa-sm" style="width:100%">
      <div class="col-5 column items-center justify-center">
        <div>
          <q-img :src="baseuPerfil"
            style="height: 110px; width: 110px; border-radius: 24px" >
            </q-img>
        </div>
        <q-rating readonly v-model="user.calificacion" icon-selected="star" icon="star_border" color="orange" :max="5" size="23px" />
      </div>
      <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
        <div class="row items-start" style="width: 100%">
          <q-icon class="col-1" name="location_city" size="sm" />
          <div class="col q-ml-sm">
            <div class="ellipsis text-subtitle2">Comunidad autónoma</div>
            <div class="ellipsis text-subtitle2 text-grey"> {{user.provincia ? user.provincia.nombre : ''}} </div>
          </div>
        </div>
        <div class="row items-start" style="width: 100%">
          <q-icon class="col-1" name="room" size="sm" />
          <div class="col q-ml-sm">
            <div class="ellipsis text-subtitle2">Dirección del local</div>
            <div class="text-subtitle2 text-grey"> {{user.ciudad ? user.ciudad.nombre + ', ' + user.direccion : ''}} </div>
          </div>
        </div>
        <div class="row items-start" style="width: 100%">
          <q-icon class="col-1" name="phone" size="sm" />
          <div class="col q-ml-sm">
            <div class="ellipsis text-subtitle2">Teléfono de contacto</div>
            <div class="ellipsis text-subtitle2 text-grey"> {{user.telefono}} </div>
          </div>
        </div>
      </div>
      <div class="col-xs-5 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <div class="row items-start" style="width: 100%">
          <q-icon class="col-1" name="schedule" size="sm" />
          <div class="col q-ml-sm">
            <div class="ellipsis text-subtitle2">Horario de atención</div>
            <div class="ellipsis text-subtitle2 text-grey"> {{user.hapertura && user.hcierre ? user.hapertura + ' - ' + user.hcierre : 'Libre'}} </div>
          </div>
        </div>
      </div>
      <div class="col-xs-7 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <div class="row items-start" style="width: 100%">
          <q-icon class="col-1" name="date_range" size="sm" />
          <div class="col q-ml-sm">
            <div class="ellipsis text-subtitle2">Días de atención</div>
            <div class="text-subtitle2 text-grey"> {{dias()}} </div>
          </div>
        </div>
      </div>
    </div>

    <q-scroll-area
        v-if="user.images.length"
        horizontal
        style="height: 130px;"
      >
        <div class="row no-wrap q-py-sm q-px-md q-gutter-md">
          <q-card @click="imgSelec = img, verImg = true" style="border-radius: 24px; width:110px" clickable v-ripple v-for="(img, index) in user.images" :key="index">
            <q-img :src="baseuImgsTienda + img"
            style="height: 110px; width: 100%; border-radius: 24px" >
            </q-img>
          </q-card>
        </div>
    </q-scroll-area>

    <q-dialog v-model="verImg">
      <q-card>
        <img :src="baseuImgsTienda + imgSelec" style="width: 500px;" />
      </q-card>
    </q-dialog>

    <div class="text-h6 q-ma-md text-grey-8">Comentarios</div>
    <q-scroll-area
        v-if="comentarios.length"
        horizontal
        style="height: 200px;"
      >
        <div class="row no-wrap q-py-md q-px-md q-gutter-md">
          <div v-for="(card, index) in comentarios" :key="index" >
            <q-card class="my-card" style="height: 150px; width: 330px; border-radius: 25px">
              <q-card-section>
                <div class="row justify-between">
                  <q-rating readonly v-model="card.rating" icon-selected="star" icon="star_border" color="orange" :max="5" size="25px" />
                  <div class="column items-end">
                    <div class="text-subtitle2">Fecha de pedido</div>
                    <div>{{card.fecha_pedido}}</div>
                  </div>
                </div>

                <div class="col text-h6 ellipsis"> {{card.cliente.name + ' ' + card.cliente.lastName}} </div>
                <div class="text-caption text-grey-8"> {{card.comentario}} </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-scroll-area>
      <div v-else class="text-center text-h6 q-my-lg">No tienes comentarios</div>

      <div class="text-h6 q-ma-md text-grey-8">Mejores categorizados</div>
      <q-scroll-area
          v-if="mejores.length"
          horizontal
          style="height: 405px;"
        >
          <div class="row no-wrap q-py-md q-px-md q-gutter-md">
            <div v-for="(card, index) in mejores" :key="index" >
              <q-card flat class="my-card" style="height: 370px; width: 180px">
                <q-img
                  :src="baseuProducto + card._id"
                  spinner-color="white"
                  style="height: 180px; width: 100%">
                  <div class="full-width full-height absolute bg-transparent" @click="producto = card, verProducto = true"></div>
                    <div v-if="miTienda" class="row absolute-top-right bg-transparent">
                      <q-btn flat round dende icon="delete" color="negative" @click="eliminarProducto(card._id)" />
                      <q-btn flat round dense icon="edit" color="primary" @click="$router.push('/editar_producto/' + card._id)" />
                    </div>
                </q-img>

                <q-card-section>
                  <div class="row no-wrap items-center q-mt-xs">
                    <div class="col-12 text-subtitle2 ellipsis"> {{card.nombre}} </div>
                  </div>
                  <div class="text-caption text-black"> {{card.descripcion}} </div>
                </q-card-section>

                <q-card-section class="absolute-bottom">
                  <div v-if="!card.oferta" class="text-h6 text-blue q-my-sm">€{{formatPrice(card.valor)}}</div>
                  <div v-if="card.oferta" class="text-h6 text-blue q-my-sm">€<strike>{{formatPrice(card.valor)}}</strike> - {{formatPrice(card.ofertaVal)}}</div>
                  <div v-if="rol === 2 || rol === 0" class="row items-center">
                    <q-btn no-caps label="Agregar producto" color="primary" style="border-radius: 9px"
                    @click="rol === 2 ? addCarrito(card) : noLogin = true" />
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-scroll-area>
        <div v-else class="q-my-lg">
          <div class="text-center text-h6">Aún no tienes productos</div>
          <div class="text-center text-caption">Preciona en el botón azul para agregar un nuevo producto</div>
        </div>

    <div class="text-h6 q-ma-md text-grey-8">Últimos productos agregados</div>
    <q-scroll-area
        v-if="ultimosProductos.length"
        horizontal
        style="height: 405px;"
      >
        <div class="row no-wrap q-py-md q-px-md q-gutter-md">
          <div v-for="(card, index) in ultimosProductos" :key="index" >
            <q-card flat class="my-card" style="height: 370px; width: 180px">
              <q-img
                :src="baseuProducto + card._id"
                spinner-color="white"
                style="height: 180px; width: 100%">
                <div class="full-width full-height absolute bg-transparent" @click="producto = card, verProducto = true"></div>
                  <div v-if="miTienda" class="row absolute-top-right bg-transparent">
                    <q-btn flat round dende icon="delete" color="negative" @click="eliminarProducto(card._id)" />
                    <q-btn flat round dense icon="edit" color="primary" @click="$router.push('/editar_producto/' + card._id)" />
                  </div>
              </q-img>

              <q-card-section>
                <div class="row no-wrap items-center q-mt-xs">
                  <div class="col-12 text-subtitle2 ellipsis"> {{card.nombre}} </div>
                </div>
                <div class="text-caption text-black"> {{card.descripcion}} </div>
              </q-card-section>

              <q-card-section class="absolute-bottom">
                <div v-if="!card.oferta" class="text-h6 text-blue q-my-sm">€{{formatPrice(card.valor)}}</div>
                <div v-if="card.oferta" class="text-h6 text-blue q-my-sm">€<strike>{{formatPrice(card.valor)}}</strike> - {{formatPrice(card.ofertaVal)}}</div>
                <div v-if="rol === 2 || rol === 0" class="row items-center">
                  <q-btn no-caps label="Agregar producto" color="primary" style="border-radius: 9px"
                  @click="rol === 2 ? addCarrito(card) : noLogin = true" />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-scroll-area>
        <div v-else class="q-my-lg">
          <div class="text-center text-h6">Aún no tienes productos</div>
          <div class="text-center text-caption">Preciona en el botón azul para agregar un nuevo producto</div>
        </div>

        <div class="text-h6 q-ma-md text-grey-8">Conoce todos nuestros productos</div>
        <div v-if="productos.length" class="row justify-around">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 row justify-center q-mt-md" v-for="(card, index) in productos" :key="index">
            <q-card flat class="my-card" style="height: 350px; width: 160px">
                <q-img
                  :src="baseuProducto + card._id"
                  spinner-color="white"
                  style="height: 160px; width: 100%">
                  <div class="full-width full-height absolute bg-transparent" @click="producto = card, verProducto = true"></div>
                    <div v-if="miTienda" class="row absolute-top-right bg-transparent">
                      <q-btn flat round dende icon="delete" color="negative" @click="eliminarProducto(card._id)" />
                      <q-btn flat round dense icon="edit" color="primary" @click="$router.push('/editar_producto/' + card._id)" />
                    </div>
                </q-img>

                <q-card-section>
                  <div class="row no-wrap items-center q-mt-xs">
                    <div class="col-12 text-subtitle2 ellipsis"> {{card.nombre}} </div>
                  </div>
                  <div class="text-caption text-black"> {{card.descripcion}} </div>
                </q-card-section>

                <q-card-section class="absolute-bottom">
                  <div v-if="!card.oferta" class="text-h6 text-blue q-my-sm">€{{formatPrice(card.valor)}}</div>
                  <div v-if="card.oferta" class="text-h6 text-blue q-my-sm">€<strike>{{formatPrice(card.valor)}}</strike> - {{formatPrice(card.ofertaVal)}}</div>
                  <div v-if="rol === 2 || rol === 0" class="row items-center">
                    <q-btn no-caps label="Agregar producto" size="sm" color="primary" style="border-radius: 9px"
                    @click="rol === 2 ? addCarrito(card) : noLogin = true" />
                  </div>
                </q-card-section>
            </q-card>
          </div>
        </div>
        <div v-else class="q-my-lg">
          <div class="text-center text-h6">Aún no tienes productos</div>
          <div class="text-center text-caption">Preciona en el botón azul para agregar un nuevo producto</div>
        </div>
        <div v-if="productos.length" class="row items-center justify-center q-mt-lg">
          <q-btn no-caps rounded label="Ver más productos" color="primary" size="lg" style="width: 80%"
          @click="verMas()"/>
        </div>

        <q-page-sticky v-if="miTienda" class="q-pb-lg" position="bottom-right" :offset="[18, 18]">
          <q-btn fab icon="add" color="blue" style="border-radius:15px" @click="$router.push('/producto')">
            <q-tooltip>
              Nuevo producto
            </q-tooltip>
          </q-btn>
        </q-page-sticky>

        <q-page-sticky v-if="rol === 2" class="q-pb-lg" position="bottom-right" :offset="[18, 18]">
          <q-btn fab icon="shopping_basket" color="blue" style="border-radius:15px" @click="verCarrito = true">
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
                        <div class="col-3 q-mr-sm column justify-start items-start">
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
                            <div class="text-h6 text-positive"> {{!producto.oferta ? '€' + formatPrice(producto.valor) : '€' + formatPrice(producto.ofertaVal)}} </div>
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
                    <div class="text-h4 text-bold text-primary">€{{formatPrice(totalCarrito)}}</div>
                  </div>
                  <div class="row justify-center" style="width:100%">
                    <q-btn :disable="carrito.length ? false : true" @click="$v.form.$reset(), comprarCarrito = true, verCarrito = false" no-caps label="Checkout" color="primary" size="lg" style="width: 90%; border-radius:15px" />
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
                    <div class="text-subtitle1 text-grey-7">{{cliente.name + ' ' + cliente.lastName}}</div>
                    <q-select borderless dense color="black" v-model="form.direccion" :options="cliente.direccionC" label="Seleccione dirección" map-options
                      error-message="requerido" :error="$v.form.direccion.$error" @blur="$v.form.direccion.$touch()"
                      option-label="ciudad_name" >
                        <template v-slot:no-option>
                        <q-item>
                          <q-item-section class="text-grey text-italic">
                            No hay Resultados
                          </q-item-section>
                        </q-item>
                      </template>
                      <template v-slot:option="scope">
                        <q-item
                          v-bind="scope.itemProps"
                          v-on="scope.itemEvents"
                        >
                          <q-item-section>
                            <q-item-label v-html="scope.opt.ciudad.nombre" />
                            <q-item-label caption>{{ scope.opt.direccion }}</q-item-label>
                          </q-item-section>
                        </q-item>
                      </template>
                    </q-select>
                    <q-separator />
                    <div class="text-h6 text-bold q-my-md">Pedido</div>
                    <div class="row justify-between" style="width:100%">
                      <div class="text-h6 text-grey">Cantidad de productos</div>
                      <div class="text-h6 text-bold text-black">{{totalProductos}}</div>
                    </div>
                    <div class="row justify-between q-my-sm" style="width:100%">
                      <div class="text-h6 text-grey">Total a pagar</div>
                      <div class="text-h4 text-bold text-primary">€{{formatPrice(totalCarrito)}}</div>
                    </div>
                  </div>
                </div>
                <div class="col-12 q-py-lg column justify-end items-end">
                  <div class="row justify-between q-my-lg" style="width:100%">
                    <div class="text-h6 text-grey">Precio total</div>
                    <div class="text-h4 text-bold text-blue">€{{formatPrice(totalCarrito)}}</div>
                  </div>
                  <div class="row justify-center" style="width:100%">
                    <q-btn :disable="carrito.length ? false : true" @click="iniciarCompra()" no-caps label="Pagar ahora" color="primary" size="lg" style="width: 90%; border-radius:15px" />
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>

        <q-dialog persistent v-model="compraExitosa">
          <q-card class="q-py-xl" style="width: 100%">
              <div style="width:100%">
                <div class="q-mb-md row justify-center">
                  <q-img src="nova_telde-01.png" style="width:100%" >
                  </q-img>
                </div>
                <div class="text-center text-h6 text-bold">Compra exitosa</div>
                <div class="text-center text-subtitle1 q-mx-md text-grey-8">Tu compra fue exitosa, recibirás un correo electrónico con los detalles de tu compra</div>
                <div class="row items-center justify-center q-mt-lg" style="width:100%">
                  <q-btn no-caps label="Ir a Nova Telde" color="primary" size="lg" style="border-radius: 25px; width: 80%"
                  @click="compraExitosa = false" />
                </div>
              </div>
          </q-card>
        </q-dialog>

        <q-dialog persistent v-model="compraFallo">
          <q-card class="q-py-xl" style="width: 100%">
              <div style="width:100%">
                <div class="q-mb-md row justify-center">
                  <q-img src="nova_telde-02.png" style="width:100%" >
                  </q-img>
                </div>
                <div class="text-center text-h6 text-bold">Tuvimos problemas con tu pago</div>
                <div class="text-center text-subtitle1 q-mx-md text-grey-8">Te estamos redireccionando al carro de compra para que verifiques tus datos de transacción</div>
                <div class="row items-center justify-center q-mt-lg" style="width:100%">
                  <q-btn no-caps label="Aceptar" color="primary" size="lg" style="border-radius: 25px; width: 80%"
                  @click="comprarCarrito = true, compraFallo = false" />
                </div>
              </div>
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
import { openURL, uid } from 'quasar'
import env from '../env'
export default {
  components: { DetalleProducto },
  data () {
    return {
      miTienda: false,
      calificacion: 0,
      verProducto: false,
      verImg: false,
      verCarrito: false,
      comprarCarrito: false,
      compraExitosa: false,
      compraFallo: false,
      noLogin: false,
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
        images: [],
        calificacion: 0
      },
      carrito: [],
      comentarios: [],
      allProductos: [],
      productos: [],
      mejores: [],
      ultimosProductos: []
    }
  },
  validations: {
    form: {
      direccion: { required }
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
      this.getComentarios()
    }
    if (this.$route.params.result) {
      if (this.$route.params.result === 1) {
        this.compraExitosa = true
      } else {
        this.compraFallo = true
      }
    }
    const value = localStorage.getItem('TELDE_SESSION_INFO')
    if (value) {
      this.getInfo()
    }
  },
  methods: {
    async iniciarCompra () {
      this.$v.form.direccion.$touch()
      console.log(this.$v.form)
      if (!this.$v.form.direccion.$error) {
        this.form.cliente_id = this.cliente._id
        this.form.tienda_id = this.user._id
        this.tienda_name = this.user.nombre
        this.form.totalValor = this.totalCarrito
        this.form.totalProductos = this.totalProductos
        var ref = uid()
        this.form.uid = ref
        this.$api.post('comprar_productos', { dat: this.form, carrito: this.carrito }).then(async res => {
          if (res) {
            var apiUrl = env.apiUrl + '/pagar_telde?tienda_id=' + this.user._id
            const ruta = `${apiUrl}&montoTotal=${this.form.totalValor}&ref=${ref}&user_id=${this.cliente._id}`
            await openURL(ruta)
            navigator.app.exitApp()
            /* this.comprarCarrito = false
            this.compraExitosa = true
            this.form = {}
            this.carrito = []
            this.$v.form.$reset()
            this.getProductosByProveedor(this.id_tienda) */
          } else {
            this.comprarCarrito = false
            this.compraFallo = true
          }
        })
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
      this.$q.loading.show({
        message: 'Cargando productos'
      })
      this.$api.get('productos/' + id).then(res => {
        if (res) {
          this.allProductos = res
          var tot = res.slice()
          this.mejores = this.allProductos.slice(0, 5)
          this.productos = this.allProductos.slice(0, 4)
          this.ultimosProductos = tot.reverse().slice(0, 10)
          this.$q.loading.hide()
        } else {
          this.$q.loading.hide()
        }
      })
    },
    getComentarios () {
      this.$api.get('comentarios').then(res => {
        if (res) {
          this.comentarios = res
        }
      })
    },
    verMas () {
      this.productos = this.allProductos
    },
    eliminarProducto (id) {
      this.$q.dialog({
        title: '¡Atención!',
        message: '¿Seguro desea eliminar este producto?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$q.loading.show({
          message: 'Eliminando producto'
        })
        this.$api.delete('producto/' + id).then(res => {
          if (res) {
            this.$q.loading.hide()
            this.$q.notify({
              message: 'Eliminado Correctamente',
              color: 'positive'
            })
            this.getProductosByProveedor(this.id_tienda)
          } else {
            this.$q.loading.hide()
            this.$q.notify({
              message: 'Hubo un error',
              color: 'negative'
            })
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
