<template>
  <div>
    <q-img :src="'nopublicidad.jpg'" style="height: 150px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px">
      <div class="absolute-full">
        <div class="absolute-center full-width text-bold text-h5 text-center">Todos los usuarios</div>
      </div>
    </q-img>

    <div class="text-h6 q-ma-lg text-grey-8">Ultimas tiendas registradas</div>
    <div v-if="ultimas.length" class="row q-pa-sm">
      <div v-for="(item, index) in ultimas"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
        <q-card bordered style="width: 100%; border-radius:25px;">
          <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center full-height">
                <q-img style="height: 140px; width: 120px; border-radius:25px;" :src=" baseuUsers + item._id"/>
              </div>
            </q-card-section>

            <q-card-section class="q-pl-xs column justify-between col">
              <div class="text-h6 text-bold">{{item.nombre}}</div>
              <div class="text-bold text-subtitle2">Fecha de vencimiento</div>
              <div class="text-subtitle4 text-grey">{{item.membresia ? item.membresia.fecha_vence : 'No tiene membresia'}}</div>
              <q-btn color="primary" label="Cambiar estado" style="border-radius:10px;" @click="estadoUser(item, false)" no-caps/>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-else class="text-center text-h6 q-my-lg">No existen tiendas registradas</div>
    <div v-if="ultimas.length > 2" class="row justify-center q-ma-md">
      <q-btn rounded class="q-pa-xs" color="primary" @click="verMasTiendas()" :label="ver1 ? 'Ver menos' : 'Ver más'" style="width: 75%;" no-caps/>
    </div>

    <div class="text-h6 q-ma-lg text-grey-8">Tiendas que vencerán su membresia</div>
    <div v-if="tiendas.length" class="row q-pa-sm">
      <div v-for="(item, index) in tiendas"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
        <q-card bordered style="width: 100%; border-radius:25px;">
          <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center full-height">
                <q-img style="height: 140px; width: 120px; border-radius:25px;" :src=" baseuUsers + item._id"/>
              </div>
            </q-card-section>

            <q-card-section class="q-pl-xs column justify-between col">
              <div class="text-h6 text-bold">{{item.nombre}}</div>
              <div class="text-bold text-subtitle2">Fecha de vencimiento</div>
              <div class="text-subtitle4 text-grey">{{item.membresia ? item.membresia.fecha_vence : 'No tiene membresia'}}</div>
              <q-btn color="primary" label="Cambiar estado" style="border-radius:10px;" @click="estadoUser(item, false)" no-caps/>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-else class="text-center text-h6 q-my-lg">No hay ninguna tienda</div>
    <div v-if="tiendas.length > 2" class="row justify-center q-ma-md">
      <q-btn rounded class="q-pa-xs" color="primary" @click="verMasMembresia()" :label="ver2 ? 'Ver menos' : 'Ver más'" style="width: 75%;" no-caps/>
    </div>

    <div class="text-h6 q-ma-lg text-grey-8">Usuarios clientes</div>
    <div v-if="clientes.length" class="row q-pa-sm">
      <div v-for="(item, index) in clientes"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
        <q-card bordered style="width: 100%; border-radius:25px;">
          <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center full-height">
                <q-img style="height: 140px; width: 120px; border-radius:25px;" :src=" baseuUsers + item._id"/>
              </div>
            </q-card-section>

            <q-card-section class="q-pl-xs column justify-between col">
              <div class="text-h6 text-bold">{{item.name}}</div>
              <q-btn color="primary" label="Cambiar estado" style="border-radius:10px;" @click="estadoUser(item, true)" no-caps/>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-else class="text-center text-h6 q-my-lg">No existen clientes registrados</div>
    <div v-if="clientes.length > 2" class="row justify-center q-ma-md">
      <q-btn rounded class="q-pa-xs" color="primary" @click="verMasClientes()" :label="ver3 ? 'Ver menos' : 'Ver más'" style="width: 75%;" no-caps/>
    </div>

    <q-dialog v-model="estado">
      <q-card style="width: 300px; border-radius:25px;">
        <q-card-section>
          <div class="text-h6 text-center">Administración Usuarios</div>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
          <div class="text-subtitle1 text-bold q-mb-sm">Datos del usuario</div>
          <div class="row items-center">
            <div class="col">
              <div>Nombre de usuario</div>
              <div class="text-caption text-grey-8">{{user.roles[0] === 2 ? user.name : user.nombre}}</div>
              <div>Correo de contacto</div>
              <div class="text-caption text-grey-8">{{user.email}}</div>
              <div>Telefono de contacto</div>
              <div class="text-caption text-grey">{{user.telefono}}</div>
            </div>
            <div class="col-5">
              <q-img style="height: 100px; width: 100px; border-radius:25px;" :src=" baseuUsers + user._id"/>
            </div>
          </div>
        </q-card-section>
        <q-separator inset />
        <q-card-section class="col">
          <div class="q-mb-xl">
            <div class="text-subtitle1 text-bold q-mb-sm">Suspensión de ingreso</div>
            <div>
              <div class="row justify-between q-mb-sm">
                <div>
                  <div>Suspensión</div>
                  <div class="text-caption text-grey-8" style="width: 200px">El usuario no podrá ingresar con su cuenta al sistema</div>
                </div>
                <q-toggle v-model="user.enable" checked-icon="lock_open" color="green" unchecked-icon="lock"/>
              </div>
              <div v-if="!client" class="row items-center justify-between">
                <div>
                  <div>Fecha vencimiento membresia</div>
                  <div class="text-caption text-grey-8">{{user.membresia ? user.membresia.fecha_vence : 'No tiene membresia'}}</div>
                  <q-chip :color="user.status === 2 ? 'positive' : 'red'" text-color="white">
                    {{user.status === 2 ? 'Membresia activa' : 'Membresia vencida'}}
                  </q-chip>
                </div>
                <q-icon class="q-mr-sm" size="md" name="event" />
              </div>
            </div>
          </div>
          <div class="column items-center">
            <q-btn rounded class="q-pa-xs" color="primary" label="Guardar" @click="modificarEstado()" style="width: 60%" no-caps/>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import env from '../../env'
export default {
  data () {
    return {
      baseuUsers: '',
      estado: false,
      ver1: false,
      ver2: false,
      ver3: false,
      client: false,
      user: { roles: [] },
      allTiendas: [],
      ultimas: [],
      tiendas: [],
      allClientes: [],
      clientes: []
    }
  },
  mounted () {
    this.baseuUsers = env.apiUrl + '/perfil_img/'
    this.getTiendas()
    this.getClientes()
  },
  methods: {
    getTiendas () {
      this.$api.get('proveedores').then(res => {
        if (res) {
          this.allTiendas = res.reverse()
          console.log(this.allTiendas)
          this.ultimas = this.allTiendas.slice(0, 2)
          this.tiendas = this.allTiendas.slice(0, 2)
        }
      })
    },
    getClientes () {
      this.$api.get('clientes').then(res => {
        if (res) {
          this.allClientes = res.reverse()
          this.clientes = this.allClientes.slice(0, 2)
        }
      })
    },
    estadoUser (item, bool) {
      this.client = bool
      this.estado = true
      this.user = { ...item }
    },
    modificarEstado () {
      this.$q.dialog({
        title: 'Confirma',
        message: '¿Seguro deseas guardar esta configuración?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$api.put('update_enable/' + this.user._id, { enable: this.user.enable }).then(res => {
          if (res) {
            this.getTiendas()
            this.getClientes()
            this.estado = false
          }
        })
      }).onCancel(() => {
        // cancel
        this.estado = false
      })
    },
    verMasTiendas () {
      if (!this.ver1) {
        this.ultimas = this.allTiendas
      } else {
        this.ultimas = this.allTiendas.slice(0, 2)
      }
      this.ver1 = !this.ver1
    },
    verMasMembresia () {
      if (!this.ver2) {
        this.tiendas = this.allTiendas
      } else {
        this.tiendas = this.allTiendas.slice(0, 2)
      }
      this.ver2 = !this.ver2
    },
    verMasClientes () {
      if (!this.ver3) {
        this.clientes = this.allClientes
      } else {
        this.clientes = this.allClientes.slice(0, 2)
      }
      this.ver3 = !this.ver3
    }
  }
}
</script>
