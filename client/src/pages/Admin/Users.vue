<template>
  <div>
    <div>
      <q-img :src="'nopublicidad.jpg'" style="height: 200px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px" basic>
        <div class="absolute-full">
          <div class="absolute-center full-width text-bold text-h5 text-center">
            Todos los usuarios
          </div>
        </div>
      </q-img>
    </div>

    <div class="q-pa-md text-h5 text-grey text-bold">Ultimas tiendas registradas</div>
    <div v-if="tiendas.length <= 2" class="row q-pa-sm">
      <div v-for="(item, index) in tiendas"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
        <q-card bordered style="width: 100%; border-radius:25px;">
          <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center full-height">
                <q-img style="height: 140px; width: 120px; border-radius:25px;" :src=" baseuUsers + item._id"/>
              </div>
            </q-card-section>

            <q-card-section class="q-pl-xs column justify-between col">
              <div>
                <div class="text-h6 text-bold">{{item.nombre}}</div>
                <div class="text-bold text-subtitle2">Fecha de vencimiento</div>
              </div>
              <div class="text-subtitle4 text-grey">01/08/2021</div>
              <q-btn color="light-green-13" text-color="white" label="Cambiar estado" style="border-radius:10px;" @click="estadoUser(item)" no-caps/>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-else-if="ver1" class="row q-pa-sm">
      <div v-for="(item, index) in tiendas"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
        <q-card bordered style="width: 100%; border-radius:25px;">
          <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center full-height">
                <q-img style="height: 140px; width: 120px; border-radius:25px;" :src=" baseuUsers + item._id"/>
              </div>
            </q-card-section>

            <q-card-section class="q-pl-xs column justify-between col">
              <div>
                <div class="text-h6 text-bold">{{item.nombre}}</div>
                <div class="text-bold text-subtitle2">Fecha de vencimiento</div>
              </div>
              <div class="text-subtitle4 text-grey">01/08/2021</div>
              <q-btn color="light-green-13" text-color="white" label="Cambiar estado" style="border-radius:10px;" @click="estadoUser(item)" no-caps/>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-else class="row q-pa-sm">
      <div v-for="index in 2"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
        <q-card bordered style="width: 100%; border-radius:25px;">
          <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center full-height">
                <q-img style="height: 140px; width: 120px; border-radius:25px;" :src=" baseuUsers + tiendas[index - 1]._id"/>
              </div>
            </q-card-section>

            <q-card-section class="q-pl-xs column justify-between col">
              <div>
                <div class="text-h6 text-bold">{{tiendas[index - 1].nombre}}</div>
                <div class="text-bold text-subtitle2">Fecha de vencimiento</div>
              </div>
              <div class="text-subtitle4 text-grey">01/08/2021</div>
              <q-btn color="light-green-13" text-color="white" label="Cambiar estado" style="border-radius:10px;" @click="estadoUser(tiendas[index - 1])" no-caps/>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-if="tiendas.length > 2" class="row justify-center q-ma-md">
      <q-btn rounded class="q-pa-xs" color="light-green-13" text-color="white" @click="ver1 = !ver1" :label="ver1 ? 'Ver menos' : 'Ver más'" style="width: 75%;" no-caps/>
    </div>

    <div class="q-pa-md text-h5 text-grey text-bold">Tiendas que venceran su menbresia</div>
    <div v-if="tiendas.length <= 2" class="row q-pa-sm">
      <div v-for="(item, index) in tiendas"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
        <q-card bordered style="width: 100%; border-radius:25px;">
          <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center full-height">
                <q-img style="height: 140px; width: 120px; border-radius:25px;" :src=" baseuUsers + item._id"/>
              </div>
            </q-card-section>

            <q-card-section class="q-pl-xs column justify-between col">
              <div>
                <div class="text-h6 text-bold">{{item.nombre}}</div>
                <div class="text-bold text-subtitle2">Fecha de vencimiento</div>
              </div>
              <div class="text-subtitle4 text-grey">01/08/2021</div>
              <q-btn color="light-green-13" text-color="white" label="Cambiar estado" style="border-radius:10px;" @click="estadoUser(item)" no-caps/>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-else-if="ver2" class="row q-pa-sm">
      <div v-for="(item, index) in tiendas"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
        <q-card bordered style="width: 100%; border-radius:25px;">
          <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center full-height">
                <q-img style="height: 140px; width: 120px; border-radius:25px;" :src=" baseuUsers + item._id"/>
              </div>
            </q-card-section>

            <q-card-section class="q-pl-xs column justify-between col">
              <div>
                <div class="text-h6 text-bold">{{item.nombre}}</div>
                <div class="text-bold text-subtitle2">Fecha de vencimiento</div>
              </div>
              <div class="text-subtitle4 text-grey">01/08/2021</div>
              <q-btn color="light-green-13" text-color="white" label="Cambiar estado" style="border-radius:10px;" @click="estadoUser(item)" no-caps/>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-else class="row q-pa-sm">
      <div v-for="index in 2"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
        <q-card bordered style="width: 100%; border-radius:25px;">
          <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center full-height">
                <q-img style="height: 140px; width: 120px; border-radius:25px;" :src=" baseuUsers + tiendas[index - 1]._id"/>
              </div>
            </q-card-section>

            <q-card-section class="q-pl-xs column justify-between col">
              <div>
                <div class="text-h6 text-bold">{{tiendas[index - 1].nombre}}</div>
                <div class="text-bold text-subtitle2">Fecha de vencimiento</div>
              </div>
              <div class="text-subtitle4 text-grey">01/08/2021</div>
              <q-btn color="light-green-13" text-color="white" label="Cambiar estado" style="border-radius:10px;" @click="estadoUser(tiendas[index - 1])" no-caps/>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-if="tiendas.length > 2" class="row justify-center q-ma-md">
      <q-btn rounded class="q-pa-xs" color="light-green-13" text-color="white" @click="ver2 = !ver2" :label="ver2 ? 'Ver menos' : 'Ver más'" style="width: 75%;" no-caps/>
    </div>

    <div class="q-pa-md text-h5 text-grey text-bold">Usuarios clientes</div>
    <div v-if="clientes.length <= 2" class="row q-pa-sm">
      <div v-for="(item, index) in clientes"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
        <q-card bordered style="width: 100%; border-radius:25px;">
          <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center full-height">
                <q-img style="height: 140px; width: 120px; border-radius:25px;" :src=" baseuUsers + item._id"/>
              </div>
            </q-card-section>

            <q-card-section class="q-pl-xs column justify-between col">
              <div>
                <div class="text-h6 text-bold">{{item.name}}</div>
                <div class="text-bold text-subtitle2">Fecha de vencimiento</div>
              </div>
              <div class="text-subtitle4 text-grey">01/08/2021</div>
              <q-btn color="light-green-13" text-color="white" label="Cambiar estado" style="border-radius:10px;" @click="estadoUser(item)" no-caps/>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-else-if="ver3" class="row q-pa-sm">
      <div v-for="(item, index) in clientes"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
        <q-card bordered style="width: 100%; border-radius:25px;">
          <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center full-height">
                <q-img style="height: 140px; width: 120px; border-radius:25px;" :src=" baseuUsers + item._id"/>
              </div>
            </q-card-section>

            <q-card-section class="q-pl-xs column justify-between col">
              <div>
                <div class="text-h6 text-bold">{{item.name}}</div>
                <div class="text-bold text-subtitle2">Fecha de vencimiento</div>
              </div>
              <div class="text-subtitle4 text-grey">01/08/2021</div>
              <q-btn color="light-green-13" text-color="white" label="Cambiar estado" style="border-radius:10px;" @click="estadoUser(item)" no-caps/>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-else class="row q-pa-sm">
      <div v-for="index in 2"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
        <q-card bordered style="width: 100%; border-radius:25px;">
          <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center full-height">
                <q-img style="height: 140px; width: 120px; border-radius:25px;" :src=" baseuUsers + clientes[index - 1]._id"/>
              </div>
            </q-card-section>

            <q-card-section class="q-pl-xs column justify-between col">
              <div>
                <div class="text-h6 text-bold">{{clientes[index - 1].name}}</div>
                <div class="text-bold text-subtitle2">Fecha de vencimiento</div>
              </div>
              <div class="text-subtitle4 text-grey">01/08/2021</div>
              <q-btn color="light-green-13" text-color="white" label="Cambiar estado" style="border-radius:10px;" @click="estadoUser(clientes[index - 1])" no-caps/>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-if="clientes.length > 2" class="row justify-center q-ma-md">
      <q-btn rounded class="q-pa-xs" color="light-green-13" text-color="white" @click="ver3 = !ver3" :label="ver3 ? 'Ver menos' : 'Ver más'" style="width: 75%;" no-caps/>
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
              <div class="text-caption text-grey">{{user.roles[0] === 2 ? user.name : user.nombre}}</div>
              <div>Correo de contacto</div>
              <div class="text-caption text-grey">{{user.email}}</div>
              <div v-if="user.roles[0] === 2">Telefono de contacto</div>
              <div v-if="user.roles[0] === 2" class="text-caption text-grey">{{user.telefono}}</div>
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
                  <div class="text-caption text-grey" style="width: 200px">El usuario no podrá ingresar con su cuenta al sistema</div>
                </div>
                <q-toggle v-model="user.enable" checked-icon="lock_open" color="green" unchecked-icon="lock"/>
              </div>
              <div class="row items-center justify-between">
                <div>
                  <div>Fecha vencimiento membresia</div>
                  <div class="text-caption text-grey">12/08/2021</div>
                </div>
                <q-icon class="q-mr-sm" size="md" name="event" />
              </div>
            </div>
          </div>
          <div class="column items-center">
            <q-btn rounded class="q-pa-xs" color="light-green-13" text-color="white" label="Guardar" @click="modificarEstado()" style="width: 60%" no-caps/>
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
      tiendas: [],
      ver1: false,
      ver2: false,
      clientes: [],
      ver3: false,
      estado: false,
      user: { roles: [] }
    }
  },
  mounted () {
    this.baseuUsers = env.apiUrl + 'perfil_img/'
    this.getTiendas()
    this.getClientes()
  },
  methods: {
    getTiendas () {
      this.$api.get('proveedores').then(res => {
        if (res) {
          this.tiendas = res
          console.log(this.tiendas)
        }
      })
    },
    getClientes () {
      this.$api.get('clientes').then(res => {
        if (res) {
          this.clientes = res
          console.log(this.clientes)
        }
      })
    },
    estadoUser (itm) {
      this.estado = true
      this.user = { ...itm }
      console.log(this.user)
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
            this.estado = false
            this.getTiendas()
            this.getClientes()
          }
        })
      }).onCancel(() => {
        // cancel
        this.estado = false
      })
    }
  }
}
</script>
