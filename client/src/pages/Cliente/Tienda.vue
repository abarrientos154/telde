<template>
  <q-page>
    <q-img :src="user.portada ? baseuImgTiendaPortada : 'noimg.png'" style="height:300px; width:" >
      <div class="full-width full-height bg-transparent">
        <div class="row justify-between bg-transparent" style="width: 100%">
          <q-btn flat round class="q-ma-xs" icon="keyboard_backspace" color="white" @click="$router.go(-1)" />
          <q-btn v-if="login" :color="favorito ? 'red': 'primary' " flat :icon="favorito ? 'favorite' :'favorite_border'" round @click="addFavorito()" />
        </div>
        <div v-if="user.images" class="row absolute-bottom justify-end" style="width:100%">
          <q-scroll-area horizontal style="height: 95px; width: 330px;" class="rounded-borders" >
            <div class="row no-wrap">
              <q-avatar @click="mostrarImg.dialog = true, mostrarImg.imagen = index" rounded v-for="(img, index) in user.images" :key="index" style="width:90px;height:90px" class="q-ml-sm">
                <q-img :src="rutaCargarImgs + img" style="border-radius:12px" />
              </q-avatar>
            </div>
          </q-scroll-area>
        </div>
      </div>
    </q-img>

    <div class="row q-pa-md" style="width: 100%">
      <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2 col-xl-2 row justify-center">
        <q-img style="width:150px;height:150px; border-radius: 100%" :src="user.perfil ? baseuImgTienda : user.perfilEstatico ? 'logos/' + user.id.toString() + '.jpeg' : 'noimg.png'" />
      </div>
      <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10 col-xl-10">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div class="row items-center" style="width: 100%">
              <q-icon class="col-1" name="store" size="sm" />
              <div class="col text-bold text-h6 q-ml-xs ellipsis"> {{user.nombreEmpresa}} </div>
            </div>
            <div class="row items-center" style="width: 100%">
              <q-icon class="col-1" name="room" size="sm" />
              <div class="col q-ml-xs ellipsis text-subtitle2"> {{user.direccionFisica}} </div>
            </div>
            <div class="row items-center" style="width: 100%">
              <q-icon class="col-1" name="email" size="sm" />
              <div class="col q-ml-xs ellipsis text-subtitle2"> {{user.email}} </div>
            </div>
            <div class="row items-center" style="width: 100%">
              <q-icon class="col-1" name="phone" size="sm" />
              <div class="col q-ml-xs ellipsis text-subtitle2"> {{user.telefono}} </div>
            </div>
            <div class="row items-center" style="width: 100%">
              <q-icon class="col-1" name="home_work" size="sm" />
              <div class="col q-ml-xs text-subtitle2"> Días de atención: {{user.dias.length ? dias() : ''}} </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div class="row items-center" style="width: 100%">
              <q-icon class="col-1" name="alarm" size="sm" />
              <div class="col q-ml-xs ellipsis text-subtitle2"> Horario: {{user.hapertura && user.hcierre ? user.hapertura + ' - ' + user.hcierre : ''}} </div>
            </div>
            <div v-if="user.delivery" class="row items-center" style="width: 100%">
              <q-icon class="col-1" name="delivery_dining" size="sm" />
              <div class="col q-ml-xs ellipsis text-subtitle2"> Delivery: ${{user.deliveryPrice}} </div>
            </div>
            <div v-if="user.regiones" class="row items-center" style="width: 100%">
              <q-icon class="col-1" name="local_shipping" size="sm" />
              <div class="col q-ml-xs ellipsis text-subtitle2"> Despacho a regiones </div>
            </div>
            <div class="column items-start" style="width: 100%">
              <div class="row items-center" style="width: 100%">
                <q-icon class="col-1" name="payment" size="sm" />
                <div class="col q-ml-xs text-subtitle2"> Recibe pagos:</div>
              </div>
              <div style="width: 100%">
                <div class="q-ml-md" v-for="(item, index) in user.metodoPago" :key="index" style="width: 100%">
                  <div class="row items-center" style="width: 100%">
                    <q-icon class="col-1" name="stop_circle" size="1em" />
                    <div class="col q-ml-xs text-subtitle2">{{item === '1' ? 'Efectivo' : item === '2' ? 'Transferencia Bancaria' : item === '3' ? 'Transferencia Electrónica' : ''}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <q-dialog v-if="mostrarImg.dialog" v-model="mostrarImg.dialog">
      <q-img style="width:50%;height:50%" :src="rutaCargarImgs + user.images[mostrarImg.imagen]" />
    </q-dialog>

    <div>
      <q-scroll-area horizontal style="height: 100px; width: 100%;">
        <div class="row no-wrap q-mx-md">
          <div class="q-ml-sm column justify-center" style="height: 100px" v-for="(item, index) in categorias" :key="index">
            <q-btn :label="item.nombre" :color="item.active ? 'primary':'white'" :text-color="item.active ? 'white':'primary'" rounded style="height: 60px; width:200px" @click="activarB(index)" />
          </div>
        </div>
      </q-scroll-area>
    </div>

    <div  v-if="buscar === 0" class="text-h5 estilo-titulos text-center text-weight-bold q-mx-md q-my-xl">Más recientes</div>
    <q-scroll-area
        v-if="buscar === 0 && dataLimit.length > 0"
        horizontal
        class="q-my-md"
        style="height: 590px;"
      >
        <div class="row no-wrap q-py-md q-px-xl q-gutter-xl">
          <div v-for="(card, index) in dataLimit" :key="index" >
            <q-img
              :src="card.images.length > 0 ? baseu + card.images[0] : 'noimgproducto.png'"
              spinner-color="white"
              style="border-radius:12px; height: 320px; width: 240px"
              @click="producto = card, verProducto = true">
            </q-img>
            <div class="q-ma-sm" style="width:240px">
                <div class="row no-wrap items-center">
                  <div class="col text-h6 text-bold ellipsis">{{card.nombre}}</div>
                </div>
                <div class="row no-wrap items-center">
                  <q-icon class="col-1" name="store" color="black" style="font-size: 1.3rem;"></q-icon>
                  <div v-if="!card.caso" class="col q-ml-sm text-subtitle2 ellipsis">{{card.datos_proveedor.nombreEmpresa}}</div>
                </div>
                <div class="row no-wrap items-center" style="width:100%">
                  <q-icon class="col-1" name="description" color="black" style="font-size: 1.3rem;"/>
                  <div class="col q-pl-xs text-grey-9 text-subtitle2 ellipsis">{{card.descripcion}}</div>
                </div>
                <div class="row no-wrap items-center" style="width:100%">
                  <q-icon class="col-1" name="category" color="black" style="font-size: 1.3rem;"/>
                  <div class="col q-pl-xs text-grey-9 text-subtitle2 ellipsis">{{card.categoria_info.nombre}}</div>
                </div>
                <div class="row no-wrap items-center" style="width:100%">
                  <q-icon class="col-1" name="zoom_in" color="black" style="font-size: 1.3rem;"/>
                  <div class="col q-pl-xs text-grey-9 text-subtitle2 ellipsis">{{card.cantidad}}</div>
                </div>
                <div class="row no-wrap items-center">
                  <div v-if="!card.oferta" class="col text-h6 ellipsis">${{formatPrice(card.valor)}}</div>
                  <div v-if="card.oferta" class="col text-h6 ellipsis">$<strike>{{formatPrice(card.valor)}}</strike> - {{formatPrice(card.ofertaVal)}}</div>
                </div>
              </div>

              <div v-if="!login || rol === 2" class="row justify-center">
                <q-btn glossy icon="add_shopping_cart" label="Comprar" color="primary" text-color="black" @click="login ? addCarrito(card) : noLogin = true" />
              </div>
          </div>
        </div>
      </q-scroll-area>

      <div v-else class="row justify-center full-width full-height items-center q-pa-xl">
        <div class="text-h5">
          :( Sin Nada Por Aqui
        </div>
      </div>

      <q-separator  v-if="buscar === 0" color="black" />

    <div class="text-h5 estilo-titulos text-center text-weight-bold q-mx-md q-my-xl">Productos</div>
    <div v-if="filtrarProCa.length > 0" class="row justify-around q-px-md">
      <div v-for="(card, index) in filtrarProCa" :key="index" :class="web ? 'col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 q-my-md column items-center' : 'col-5 q-my-md'" >
        <q-img
          :src="card.images.length > 0 ? baseu + card.images[0] : 'noimgproducto.png'"
          spinner-color="white"
          :style="web ? 'border-radius:12px; height: 320px; width: 240px' : 'border-radius:12px; height: 320px; width: 100%'"
          @click="producto = card, verProducto = true">
        </q-img>
        <div class="q-ma-sm" :style="web ? 'width: 240px' : 'width: 100%'">
          <div class="row no-wrap items-center">
            <div class="col text-h6 text-bold ellipsis">{{card.nombre}}</div>
          </div>
          <div class="row no-wrap items-center">
            <q-icon class="col-1" name="store" color="black" style="font-size: 1.3rem;"></q-icon>
            <div v-if="!card.caso" class="col q-ml-sm text-subtitle2 ellipsis">{{card.datos_proveedor.nombreEmpresa}}</div>
          </div>
          <div class="row no-wrap items-center" style="width:100%">
            <q-icon class="col-1" name="description" color="black" style="font-size: 1.3rem;"/>
            <div class="col q-pl-xs text-grey-9 text-subtitle2 ellipsis">{{card.descripcion}}</div>
          </div>
          <div class="row no-wrap items-center" style="width:100%">
            <q-icon class="col-1" name="category" color="black" style="font-size: 1.3rem;"/>
            <div class="col q-pl-xs text-grey-9 text-subtitle2 ellipsis">{{card.categoria_info.nombre}}</div>
          </div>
          <div class="row no-wrap items-center" style="width:100%">
            <q-icon class="col-1" name="zoom_in" color="black" style="font-size: 1.3rem;"/>
            <div class="col q-pl-xs text-grey-9 text-subtitle2 ellipsis">{{card.cantidad}}</div>
          </div>
          <div class="row no-wrap items-center">
            <div v-if="!card.oferta" class="col text-h6 ellipsis">${{formatPrice(card.valor)}}</div>
            <div v-if="card.oferta" class="col text-h6 ellipsis">$<strike>{{formatPrice(card.valor)}}</strike> - {{formatPrice(card.ofertaVal)}}</div>
          </div>
        </div>

        <div v-if="!login || rol === 2" class="row justify-center" :style="web ? 'width: 240px' : 'width: 100%'">
          <q-btn glossy icon="add_shopping_cart" label="Comprar" color="primary" text-color="black" @click="login ? addCarrito(card) : noLogin = true" />
        </div>
      </div>
    </div>

    <div v-else class="row justify-center full-width full-height items-center q-pa-xl">
      <div class="text-h5">
        :( Sin Nada Por Aqui
      </div>
    </div>

    <q-dialog v-model="verProducto">
      <q-card style="width: 400px">
        <q-card-section class="q-pa-none" style="width: 100%;">
          <DetalleProducto :data="producto" lugar="tienda" @compra="addCarrito" />
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
          <q-btn label="Iniciar Sesión" color="primary" @click="$router.push('/login')" />
          <q-btn flat label="Registrarme" color="primary" @click="$router.push('/registro')" />
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="verCarrito" full-height>
      <q-card style="width: 100%">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h5 text-bold">Carrito</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <q-list bordered>
            <div v-for="(producto, index) in carrito" :key="index">
              <div class="row items-center justify-between q-ma-sm">
                <div class="col-1 q-mr-sm">
                  <q-icon name="shopping_cart" size="md" />
                </div>

                <div class="col">
                  <div class="row no-wrap items-center">
                    <div class="text-subtitle1 ellipsis">{{producto.nombre}}</div>
                  </div>
                  <div class="q-mt-sm">
                    <q-badge class="text-subtitle2" :color="producto.oferta ? 'positive' : 'teal'" :label="!producto.oferta ? '$' + formatPrice(producto.valor) : '$' + formatPrice(producto.ofertaVal)" />
                  </div>
                </div>

                <div class="col-1 row justify-center">
                  <div class="text-weight-bold text-h6">{{producto.cantidad_compra}}</div>
                </div>

                <div class="col-1 q-ml-sm">
                  <q-btn size="12px" flat dense round icon="add" @click="editCantidad(index, true)" />
                  <q-btn size="12px" flat dense round icon="remove" @click="editCantidad(index, false)" />
                </div>
              </div>
              <q-separator />
            </div>
          </q-list>
        </q-card-section>

        <q-card-actions class="absolute-bottom q-my-md" align="center">
            <q-card class="bordes bg-grey-3 q-pa-sm q-my-md q-mx-md shadow-11" style="width: 100%">
                <div class="row justify-around">
                    <div class="text-h4 text-bold text-primary">Total</div>
                    <div class="text-h4 text-bold text-primary">${{formatPrice(totalCarrito)}}</div>
                </div>
            </q-card>
            <q-btn :disable="carrito.length ? false : true" @click="options_pago = user.metodoPago, verCarrito = false, selecMetodoPago = true" glossy icon="add_shopping_cart" label="Comprar" color="primary" text-color="black" size="xl" style="width: 90%" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="selecMetodoPago">
      <q-card style="width: 100%">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h5 text-bold">Método de pago</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section v-if="options_pago.length">
          <q-card
            v-ripple
            clickable
            style="border-radius:10px;width:100%"
            class="q-pa-sm q-my-md shadow-11 bg-primary"
            v-for="(item, index) in options_pago"
            :key="index"
            @click="iniciarCompra(item)">
            <q-item>
              <q-item-section avatar>
                <q-avatar icon="home" class="text-black" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-black text-h6">{{item === '1' ? 'Efectivo' : item === '2' ? 'Transferencia Bancaria' : item === '3' ? 'Transferencia Electrónica' : ''}}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="arrow_right" color="black" />
              </q-item-section>
            </q-item>
          </q-card>
        </q-card-section>
        <q-card-section v-else>
          <div class="text-center text-weight-bolder text-subtitle1 q-ma-md shadow-11 q-pa-md bg-primary" style="border-radius:10px;">La tienda no ha configurado un método de pago</div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="transferencia">
      <q-card style="width: 100%">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h5 text-bold">Datos de la cuenta</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <q-field outlined class="q-mb-sm" label="Banco" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">{{user.banco ? user.banco : ''}}</div>
            </template>
          </q-field>
          <q-field outlined class="q-mb-sm" label="Tipo de cuenta" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">{{user.tipoCuenta ? user.tipoCuenta : ''}}</div>
            </template>
          </q-field>
          <q-field outlined class="q-mb-sm" label="Número de cuenta" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">{{user.cuenta ? user.cuenta : ''}}</div>
            </template>
          </q-field>
          <q-field outlined class="q-mb-sm" label="RUT" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">{{user.rutTitular ? user.rutTitular : ''}}</div>
            </template>
          </q-field>
          <q-field outlined class="q-mb-sm" label="Titular" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">{{user.titular ? user.titular : ''}}</div>
            </template>
          </q-field>
          <q-field outlined class="q-mb-sm" label="Correo electrónico" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">{{user.correoDestino ? user.correoDestino : ''}}</div>
            </template>
          </q-field>
        </q-card-section>

        <q-card-section>
          <div class="text-weight-bold q-mb-md text-h6 text-primary">Comprobante de transferencia</div>
            <div class="row justify-between">
              <div class="col-10">
                <q-file style="width: 100%" @input="fileCompra" accept=".jpg, image/*" v-model="compraFile" outlined label="CLICK AQUÍ" hint="Ingresa la foto del comprobante" :error="$v.compraFile.$error" error-message="Este campo es requerido" @blur="$v.compraFile.$touch()">
                  </q-file>
              </div>
              <div class="col-2 row justify-center">
                <q-icon size="md" name="close" color="negative" @click="compraFile = null, imgCompra = ''" class="cursor-pointer" />
              </div>
            </div>
        </q-card-section>

        <q-separator />

        <q-card-section class="row justify-around">
          <div v-if="imgCompra === ''" class="text-subtitle2 text-grey text-center">Carga una imagen del comprobante</div>
            <div v-else style="width:100%">
              <q-img
                :src="imgCompra"
                style="width:100%"
              />
            </div>
        </q-card-section>

        <q-card-actions class="q-my-md" align="center">
            <q-btn glossy no-caps label="Enviar" @click="compraTransferencia()" color="primary" text-color="black" size="xl" style="width: 90%" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-sticky v-if="!login || rol === 2" position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="shopping_cart" color="primary" @click="verCarrito = true" >
        <q-tooltip>
          Carrito
        </q-tooltip>
      </q-btn>
    </q-page-sticky>
  </q-page>
</template>

<script>
import DetalleProducto from '../DetalleProducto'
import env from '../../env'
import { required } from 'vuelidate/lib/validators'
export default {
  components: { DetalleProducto },
  data () {
    return {
      token: '',
      rutaCargarImgs: '',
      baseuImgTiendaPortada: '',
      baseu: '',
      baseuImgTienda: '',
      proveedor_id: '',
      imgCompra: '',
      favorito: false,
      verProducto: false,
      verCarrito: false,
      transferencia: false,
      noLogin: false,
      selecMetodoPago: false,
      login: true,
      web: true,
      compraFile: null,
      buscar: 0,
      rol: 0,
      limit: 10,
      options_pago: [],
      dataLimit: [],
      data: [],
      carrito: [],
      categorias: [],
      subnivelunoOpciones: [],
      subniveldosOpciones: [],
      subniveltresOpciones: [],
      user: {},
      userLog: {},
      producto: {},
      mostrarImg: {
        dialog: false,
        imagen: 0
      }
    }
  },
  validations: {
    compraFile: { required }
  },
  computed: {
    filtrarProCa () {
      if (this.buscar === 0) {
        return this.data
      } else {
        return this.data.filter(v => v.categoria_id === this.buscar)
      }
    },
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
    }
  },
  async mounted () {
    this.web = this.$q.platform.is.desktop
    this.rutaCargarImgs = env.apiUrl + '/tienda_files/'
    this.$q.loading.show({
      message: 'Cargando Datos'
    })
    this.baseu = env.apiUrl + '/producto_files/'
    if (this.$route.params.token) {
      this.token = this.$route.params.token
      this.response = await this.$api.get('get_info_flow/' + this.token)
      await this.getInfoById(this.response.localData.tienda_id)
      this.proveedor_id = this.response.localData.tienda_id
      if (this.response.flow.status === 2 && this.response.localData.status === 0) {
        await this.aprobado()
      } else {
        await this.getProductosByProveedor(this.response.localData.tienda_id)
        this.$q.notify({
          message: 'Error al procesar la compra',
          color: 'negative'
        })
      }
    }
    if (this.$route.params.proveedor_id) {
      this.proveedor_id = this.$route.params.proveedor_id
      this.getInfoById(this.proveedor_id)
      this.getProductosByProveedor(this.proveedor_id)
    }
    if (this.$route.params.producto_id) {
      this.getProducto(this.$route.params.producto_id)
    }
    const value = localStorage.getItem('FLAAG_SESSION_INFO')
    if (!value) {
      this.login = false
    } else {
      this.getInfo()
    }
    if (this.$route.params.proveedor_id && this.login) {
      this.obtenerFavorito()
    }
    this.$q.loading.hide()
  },
  methods: {
    dias () {
      var dias = ''
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
      return dias
    },
    iniciarCompra (val) {
      if (val === '1') {
        this.efectivo()
      } else if (val === '2') {
        this.imgCompra = ''
        this.compraFile = null
        this.$v.compraFile.$reset()
        this.selecMetodoPago = false
        this.transferencia = true
      } else if (val === '3') {
        this.$api.post('flow_by_id/' + this.user._id).then(res => {
          if (res) {
            this.test()
          } else {
            this.$q.notify({
              message: 'Método de pago fuera de servicio',
              negative: 'negative'
            })
          }
        })
      }
    },
    fileCompra () {
      var img = ''
      var cc = {}
      cc = this.compraFile
      img = URL.createObjectURL(cc)
      this.imgCompra = img
    },
    formatPrice (value) {
      const val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    addFavorito () {
      if (this.login) {
        if (this.favorito) {
          this.$api.delete('favorito/' + this.proveedor_id).then(res => {
            this.favorito = res
          })
        } else {
          this.$api.post('favorito/' + this.proveedor_id).then(res => {
            this.favorito = res
          })
        }
      }
    },
    obtenerFavorito () {
      this.$api.get('favorito/' + this.proveedor_id).then(res => {
        this.favorito = res
      })
    },
    efectivo () {
      this.$api.post('comprar_productos', { carrito: this.carrito, token: true, pago: '1' }).then(res => {
        if (res) {
          this.carrito = []
          this.getProductosByProveedor(this.proveedor_id)
          this.selecMetodoPago = false
          this.$q.notify({
            message: 'Compra realizada con exito',
            color: 'positive',
            positive: 'positive'
          })
        }
      })
    },
    compraTransferencia () {
      this.$v.$touch()
      if (!this.$v.compraFile.$error) {
        this.$q.loading.show({
          message: 'Enviando Comprobante, Por Favor Espere...'
        })
        var compra = {
          carrito: this.carrito,
          pago: '2'
        }
        var formData = new FormData()
        formData.append('files', this.compraFile)
        formData.append('dat', JSON.stringify(compra))
        this.$api.post('comprar_productos_comprobante', formData, {
          headers: {
            'Content-Type': undefined
          }
        }).then(res => {
          if (res) {
            this.carrito = []
            this.getProductosByProveedor(this.proveedor_id)
            this.$q.loading.hide()
            this.transferencia = false
            this.$q.notify({
              message: 'Compra realizada con exito',
              color: 'positive',
              positive: 'positive'
            })
          } else {
            this.$q.loading.hide()
          }
        })
      }
    },
    aprobado () {
      this.$api.post('comprar_productos', { carrito: this.response.localData.carrito, token: this.token, pago: '3' }).then(res => {
        if (res) {
          this.carrito = []
          this.getProductosByProveedor(this.proveedor_id)
          this.verCarrito = false
          this.$q.notify({
            message: 'Compra realizada con exito',
            color: 'positive',
            positive: 'positive'
          })
        }
      })
    },
    async test () {
      this.$q.loading.show({
        message: 'Iniciando Proceso de Pago'
      })
      const params = {
        commerceOrder: Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
        subject: 'Compra en Flaag',
        currency: 'CLP',
        amount: this.totalCarrito,
        email: this.userLog.email,
        tienda_id: this.proveedor_id
      }
      this.$api.post('flow', params).then(async v => {
        if (v) {
          await this.$api.post('store_flow', { token: v.token, tienda_id: this.proveedor_id, user: this.userLog._id, carrito: this.carrito, status: 0 })
          this.$q.loading.hide()
          location.href = v.redirect
        } else {
          /* this.$q.notify({
            message: 'Error al procesar la compra',
            color: 'negative'
          }) */
        }
        this.$q.loading.hide()
      }).catch(v => {
        this.$q.loading.hide()
        this.$q.notify({
          message: 'Error al procesar la compra ' + v.data,
          color: 'negative'
        })
      })
    },
    getInfo () {
      this.$api.get('user_info').then(res => {
        this.userLog = res
        this.rol = res.roles[0]
      })
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
        } else {
          this.carrito.splice(index, 1)
        }
      }
    },
    addCarrito (val) {
      if (!this.carrito.find(v => v._id === val._id)) {
        var prod = {
          _id: val._id,
          nombre: val.nombre,
          proveedor_id: val.proveedor_id,
          valor: val.valor,
          oferta: val.oferta,
          cantidad: val.cantidad - 1,
          cantidad_compra: 1
        }
        if (val.oferta) {
          prod.ofertaVal = val.ofertaVal
        }
        this.carrito.push(prod)
        prod = {}
        this.$q.notify({
          message: 'Añadido al carrito',
          color: 'positive',
          positive: 'positive'
        })
      } else {
        this.$q.dialog({
          title: '¡Atención!',
          message: 'Ya añadiste este producto al carrito.'
        }).onOk(() => {

        })
      }
    },
    activarB (ind) {
      const indexActual = this.categorias.findIndex(v => v.active)
      this.categorias[indexActual].active = false
      this.categorias[ind].active = true
      this.buscar = ind
    },
    getProducto (id) {
      this.$api.get('producto/' + id).then(res => {
        if (res) {
          this.addCarrito(res)
          this.verCarrito = true
        }
      })
    },
    getInfoById (id) {
      this.$api.post('user_by_id/' + id).then(res => {
        this.user = res
        this.baseuImgTienda = env.apiUrl + '/perfil_img/' + res._id
        this.baseuImgTiendaPortada = env.apiUrl + '/perfil_img/portada' + res._id
        this.getCategorias(this.user.id)
      })
    },
    getCategorias (id) {
      this.$api.post('categorias_no_logueado/' + id).then(res => {
        if (res) {
          const cate = res.categoria.map(v => {
            return {
              ...v,
              active: false
            }
          })
          this.categorias.push({
            nombre: 'Todos',
            todos: true
          })
          this.categorias = this.categorias.concat(cate)
          this.categorias[0].active = true
          this.subnivelunoOpciones = res.subniveluno
          this.subniveldosOpciones = res.subniveldos
          this.subniveltresOpciones = res.subniveltres
        }
      })
    },
    async getProductosByProveedor (id) {
      this.dataLimit = []
      await this.$api.get('productos/' + id).then(res => {
        if (res) {
          var j = this.limit
          var i = res.length - 1
          while (j !== 0) {
            if (res[i]) {
              this.dataLimit.push(res[i])
            }
            j -= 1
            i -= 1
          }
          this.data = res
        }
      })
    }

  }
}
</script>

<style scoped lang="scss">
h1 {
  text-shadow: 4px 4px 8px $secondary;
}
.bordes {
  border: 6px solid $primary;
  border-radius: 25px
}
</style>
