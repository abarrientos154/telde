<template>
  <q-layout view="hHh Lpr lff"><!-- lhh lpR fFf -->
    <q-header elevated>
      <q-toolbar class="bg-white q-px-md q-py-md row justify-between">
        <div>
          <q-btn class="q-mr-md" round dense flat icon="menu" size="1em" color="black" @click="drawer = !drawer"/>
          <q-img src="flaagweb.png" style="width:140px" @click="$router.push('/inicio')" />
        </div>
        <q-btn v-if="!login" round flat color="black" icon="login" @click="$router.push('/login')" />
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="drawer"
        :width="350"
        :breakpoint="500"
        overlay
        bordered
        content-class="bg-white"
      >
      <q-separator/>
        <q-scroll-area v-if="login" class="fit">
          <q-list>

            <template v-for="(item, index) in menu">
              <q-item :key="index" clickable v-ripple v-if="can(item.permission)" @click="item.label === 'Cerrar Sesión' ? cerrarSesion() : $router.push(item.ruta)">
                <q-item-section avatar>
                  <q-icon :name="item.icon" />
                </q-item-section>
                <q-item-section>
                  {{ item.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index" />
            </template>

          </q-list>
        </q-scroll-area>
        <div v-else class="q-py-md">
          <div class="row justify-center">
            <q-btn no-caps class="text-white text-subtitle1 q-px-xl q-py-sm" color="black" label="Inicia Sesión" @click="$router.push('/login')" />
          </div>
        </div>
      </q-drawer>

    <q-page-container @click="drawer = false">
      <router-view />
    </q-page-container>

      <q-footer>
        <q-toolbar class="bg-black text-white q-py-xl column">
          <div class="row justify-between" style="width: 100%">
            <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 column justify-around">
              <q-img class="q-ml-md" src="flaagfooter.png" style="width:100px" />
              <!-- <q-img class="q-ml-md q-mt-md" src="Logo-Sercotec.png" style="width:100px" />
              <div class="q-mt-md">
                Conoce <a target="_blank" class="text-white" href="https://www.lodelaferia.cl/#/inicio">www.lodelaferia.cl</a> un portal de emprendedores de la región de Aysén. Podrás encontrar en nuestra feria digital diferentes productos característicos de la región. Este es un proyecto patrocinado por Sercotec Chile.
              </div> -->
            </div>
            <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 q-mt-md column justify-start">
              <div class="text-bold q-mb-sm">Conoce nuestras tiendas</div>
              <div class="row justify-between" style="height: 85%; width: 100%">
                <div class="col-6" v-for="(item, index) in tiendas" :key="index">
                  <a class="text-white" :href="'#/tienda/'+item._id">{{item.nombreEmpresa}}</a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 q-mt-md column justify-start q-gutter-sm">
              <div class="text-bold">Contacte con nosotros</div>
              <a class="text-white">Correo de contacto: contacto@lodelaferia.cl</a>
              <a class="text-white">Dirección: Teniente Merino #630</a>
              <a class="text-white">Aysén, Chile</a>
            </div>
          </div>
        </q-toolbar>
      </q-footer>
  </q-layout>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'MainLayout',
  data () {
    return {
      // dialogo: true,
      rol: 0,
      login: false,
      drawer: false,
      tiendas: [],
      menu: [
        {
          icon: 'home',
          label: 'Inicio',
          ruta: '/inicio',
          permission: 1
        },
        {
          icon: 'dashboard',
          label: 'Baaners Publicitarios',
          ruta: '/banners_publicidad',
          permission: 2
        },
        {
          icon: 'people',
          label: 'Emprendedores',
          ruta: '/emprendedores',
          permission: 2
        },
        {
          icon: 'person',
          label: 'Perfil',
          ruta: '/perfil_proveedor',
          permission: 3
        },
        {
          icon: 'store',
          label: 'Mi Tienda',
          ruta: '/mi_tienda',
          permission: 3
        },
        {
          icon: 'favorite',
          label: 'Mis Favoritos',
          ruta: '/tiendas_favoritas',
          permission: 5
        },
        {
          icon: 'fact_check',
          label: 'Reporte',
          ruta: '/reporte_cliente',
          permission: 6
        },
        {
          icon: 'fact_check',
          label: 'Reporte',
          ruta: '/reporte_tienda',
          permission: 7
        },
        {
          icon: 'logout',
          label: 'Cerrar Sesión',
          ruta: '',
          permission: 1
        }
      ]
    }
  },
  computed: {
    ...mapGetters('generals', ['can'])
  },
  mounted () {
    this.getTiendas()
    const value = localStorage.getItem('FLAAG_SESSION_INFO')
    if (value) {
      this.login = true
    }
  },
  methods: {
    ...mapMutations('generals', ['logout']),
    cerrarSesion () {
      this.logout()
      this.$router.push('/inicio')
      location.reload()
    },
    getTiendas () {
      this.$api.get('proveedores').then(res => {
        if (res) {
          this.tiendas = res.filter(v => v.status === 1)
        }
      })
    }
  }
}
</script>

<style>
.loader {
  background: url('../../public/prueba.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
