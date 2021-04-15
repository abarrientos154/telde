<template>
  <q-page>
    <q-img :src="user.portada ? baseuImgTiendaPortada : 'noimg.png'" style="height:300px; width:" >
      <div class="full-width full-height bg-transparent">
        <div class="row justify-between bg-transparent" style="width: 100%">
          <q-btn flat round class="q-ma-xs" icon="keyboard_backspace" color="white" @click="$router.go(-1)" />
          <q-btn no-caps rounded class="q-mr-md q-mt-md" label="Editar perfil" icon="edit" color="white" text-color="black" @click="ver()" />
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

              <div class="row justify-around" style="width:240px">
                <q-btn no-caps label="Eliminar" icon="delete" color="negative" @click="confirmEliminar(card._id)" size="sm" class="col-5 q-mr-sm"/>
                <q-btn no-caps label="Editar" icon="edit" color="primary" @click="$router.push('/producto/' + card._id)" size="sm" class="col-5" />
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

        <div class="row justify-around" :style="web ? 'width: 240px' : 'width: 100%'">
          <q-btn no-caps label="Eliminar" icon="delete" color="negative" @click="confirmEliminar(card._id)" size="sm" class="col-5 q-mr-sm"/>
          <q-btn no-caps label="Editar" icon="edit" color="primary" @click="$router.push('/producto/' + card._id)" size="sm" class="col-5" />
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
          <DetalleProducto :data="producto" lugar="perfil" />
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-page-sticky v-if="!admin" position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" @click="$router.push('/producto')" >
        <q-tooltip>
          Nuevo Producto
        </q-tooltip>
      </q-btn>
    </q-page-sticky>
  </q-page>
</template>

<script>
import env from '../../env'
import DetalleProducto from '../DetalleProducto'
export default {
  components: { DetalleProducto },
  data () {
    return {
      admin: false,
      verProducto: false,
      web: true,
      baseuImgTienda: '',
      baseuImgTiendaPortada: '',
      rutaCargarImgs: '',
      proveedor_id: '',
      baseu: '',
      buscar: 0,
      limit: 10,
      data: [],
      dataLimit: [],
      categorias: [],
      subnivelunoOpciones: [],
      subniveldosOpciones: [],
      subniveltresOpciones: [],
      user: {},
      producto: {},
      mostrarImg: {
        dialog: false,
        imagen: 0
      }
    }
  },
  computed: {
    filtrarProCa () {
      if (this.buscar === 0) {
        return this.data
      } else {
        return this.data.filter(v => v.categoria_id === this.buscar)
      }
    }
  },
  mounted () {
    this.web = this.$q.platform.is.desktop
    this.rutaCargarImgs = env.apiUrl + '/tienda_files/'
    this.ejecutarMounted()
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
    formatPrice (value) {
      const val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    ejecutarMounted () {
      this.baseu = env.apiUrl + '/producto_files/'
      if (this.$route.params.proveedor_id) {
        this.proveedor_id = this.$route.params.proveedor_id
        this.admin = true
        this.getInfoById(this.proveedor_id)
        this.getProductosByProveedor(this.proveedor_id)
      } else {
        this.getProductos()
        this.getCategorias()
        this.getInfo()
      }
    },
    activarB (ind) {
      const indexActual = this.categorias.findIndex(v => v.active)
      this.categorias[indexActual].active = false
      this.categorias[ind].active = true
      this.buscar = ind
    },
    async getInfo () {
      await this.$api.get('user_info').then(res => {
        this.user = res
        this.baseuImgTienda = env.apiUrl + '/perfil_img/' + res._id
        this.baseuImgTiendaPortada = env.apiUrl + '/perfil_img/portada' + res._id
      })
    },
    getInfoById (id) {
      this.$api.post('user_by_id/' + id).then(res => {
        this.user = res
        this.baseuImgTienda = env.apiUrl + '/perfil_img/' + res._id
        this.baseuImgTiendaPortada = env.apiUrl + '/perfil_img/portada' + res._id
        this.getCategoriasNoLogueado(this.user.id)
      })
    },
    getCategorias () {
      this.$api.get('categorias_y_sub').then(res => {
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
    getCategoriasNoLogueado (id) {
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
    eliminar (id) {
      this.$q.loading.show()
      this.$api.delete('producto/' + id).then(res => {
        this.$q.loading.hide()
        if (res) {
          this.$q.notify({
            message: 'Eliminado Correctamente',
            color: 'positive'
          })
          this.ejecutarMounted()
          this.activarB(0)
        }
      })
    },
    confirmEliminar (id) {
      this.$q.dialog({
        title: '¡Atención!',
        message: '¿Esta seguro que Quiere Eliminar Este Producto?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.eliminar(id)
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },
    ver () {
      if (this.admin) {
        this.$router.push('/perfil_proveedor/' + this.proveedor_id)
      } else {
        this.$router.push('/perfil_proveedor')
      }
    },
    getProductos () {
      this.dataLimit = []
      this.$api.get('productos').then(res => {
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
    },
    getProductosByProveedor (id) {
      this.dataLimit = []
      this.$api.get('productos/' + id).then(res => {
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

<style lang="scss">
h1 {
  text-shadow: 4px 4px 8px $secondary;
}
</style>
