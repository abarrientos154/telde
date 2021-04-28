<template>
  <q-layout view="hHh Lpr lFf">
    <!-- <q-header elevated>
      <q-toolbar class="bg-white q-px-md q-py-xs row justify-end">
        <div class="row">
          <div class="q-mr-xs">
            <q-input dense class="row items-center" bottom-slots v-model="text" label="Buscar" outlined color="black">
              <template v-slot:append>
                <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
              </template>
              <template v-slot:after>
                <q-btn round dense flat icon="search" />
              </template>
            </q-input>
          </div>
          <q-separator vertical inset />

          <q-btn dense class="q-mx-xs" no-caps flat color="grey-8" icon="favorite" label="Mi Lista" />
          <q-separator vertical inset />

          <q-btn dense class="q-mx-xs" no-caps flat color="grey-8" icon="shopping_cart" label="Mi Carro" />
          <q-separator v-if="!login" vertical inset />

          <q-btn v-if="!login" dense class="q-mx-xs" no-caps flat color="primary" label="Iniciar Sesión" @click="$router.push('/login')" />
        </div>
      </q-toolbar>
    </q-header> -->

    <!-- <div class="bg-secondary q-pt-xl" style="height: 600px">
      <div class="row justify-between q-pa-md q-mt-lg">
        <div class="row q-ml-lg">
          <q-img class="q-ml-md" src="logo.png" style="width:30px" />
          <div class="text-h5 q-ml-sm q-mt-xs">Telde</div>
        </div>
        <q-tabs
          v-model="tabActions"
          indicator-color="transparent"
          active-color="primary"
          class="text-white"
          dense
        >
            <q-tab name="inicio" label="Inicio" @click="$router.push('/inicio')" />
            <q-separator vertical dark />
            <q-tab name="nosotros" label="Nosotros" />
            <q-separator vertical dark />
            <q-tab name="tienda" label="Tienda" @click="$router.push('/tienda')" />
            <q-separator vertical dark />
            <q-tab name="blog" label="Blog" />
            <q-separator vertical dark />
            <q-tab name="contacto" label="Contacto" />
        </q-tabs>
      </div>

      <q-tab-panels class="bg-transparent" v-model="tabActions" animated>
        <q-tab-panel name="inicio">
          <div class="q-ml-xl q-mt-xl">
            <div class="row">
              <div class="col-4 text-h2 text-white text-bold">AHORA ES MAS FACIL</div>
            </div>
            <div class="row">
              <div class="col-3 text-white q-mt-sm">Ahora puedes ser parte de la nueva plataforma en linea para vender tus productos de forma rápida y segura</div>
            </div>
            <div class="q-mt-lg">
              <q-btn v-if="!login" class="q-px-md" rounded no-caps color="primary" label="¡Regístrate Ahora!" />
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="nosotros">
          <div class="q-mt-xl q-pt-xl">
            <div>
              <div class="text-h2 text-white text-bold text-center">Somos Nova Telde</div>
            </div>
            <div class="row justify-center">
              <div class="col-4 text-white q-mt-md">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="tienda">
          <div class="q-ml-xl q-mt-xl">
            <div class="row justify-end q-mb-xl">
              <div class="col-6 text-h2 text-white text-center">Nuestros Nuevos Productos</div>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="text-white text-center text-subtitle1">Ofertas De Hasta</div>
                <div class="text-white text-center text-h1 text-bold">30%</div>
                <div class="text-white text-center text-h5 text-bold">Descuento</div>
              </div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="blog">
          <div class="q-mt-xl q-pt-xl">
            <div>
              <div class="text-h2 text-white text-bold text-center">Blog</div>
            </div>
            <div class="row justify-center">
              <div class="col-4 text-white q-mt-md">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="contacto">
          <div class="q-mt-xl q-pt-xl">
            <div>
              <div class="text-h2 text-white text-bold text-center">Contactanos</div>
            </div>
            <div class="row justify-center">
              <div class="col-4 text-white q-mt-md">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div> -->

    <!-- <q-drawer
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
      </q-drawer> -->

    <q-page-container class="q-mb-md">
      <router-view />
    </q-page-container>

    <!-- <div class="q-pb-md">
      <q-toolbar class="bg-white text-black q-pt-lg q-pb-xl column q-px-none">
          <div class="row justify-between q-mb-lg" style="width: 100%">
            <div class="row justify-around col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
              <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 q-mt-md column justify-start q-gutter-sm">
                <div class="text-bold q-mb-md">Nova Telde</div>
                <a class="text-black">Nosotros</a>
                <a class="text-black">Inicia sesión</a>
                <a class="text-black">Registrate</a>
                <a class="text-black">Address</a>
              </div>
              <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 q-mt-md column justify-start q-gutter-sm">
                <div class="text-bold q-mb-md">Nuestras redes</div>
                <a class="text-black">Facebook</a>
                <a class="text-black">Twitter</a>
                <a class="text-black">Instagram</a>
                <a class="text-black">Linkedin</a>
              </div>
              <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 q-mt-md column justify-start q-gutter-sm">
                <div class="text-bold q-mb-md">Enlaces de interes</div>
                <a class="text-black">FAQs</a>
                <a class="text-black">Políticas</a>
                <a class="text-black">Contáctanos</a>
                <a class="text-black">Trabaja con nosotros</a>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 column justify-center">
              <div class="row justify-center">
                <q-img class="q-ml-md" src="flaagfooter.png" style="width:50px" />
              </div>
              <div class="text-center text-h6">NOVA TELDE</div>
              <div class="text-center text-primary">A tu alcance</div>
              <div class="row justify-center q-mt-lg">
                <q-img class="q-ml-md" src="facebook.png" style="width:30px" />
                <q-img class="q-ml-md" src="instagram.png" style="width:30px" />
                <q-img class="q-ml-md" src="linkedin.png" style="width:30px" />
                <q-img class="q-ml-md" src="twitter.png" style="width:30px" />
              </div>
            </div>
          </div>
          <q-separator color="black" size="3px" />
          <div class="row justify-between items-center q-px-xl q-mt-md" style="width: 100%">
            <div class="row">
              <a class="text-black q-mr-md">¡Quiero ser proveedor!</a>
              <a class="text-black">Contáctanos</a>
            </div>
            <div>Copyright 2021, Nova Telde</div>
          </div>
        </q-toolbar>
    </div> -->

      <q-footer elevated>
        <div class="bg-blue-14 shadow-2 full-width row justify-around" >
          <div class="row items-center"><q-btn icon="store" color="white" flat round size="lg" /></div>
          <div class="row items-center"><q-btn icon="view_list" color="white" flat round size="lg" /></div>
          <div class="row items-center"><q-btn icon="person" color="white" flat round size="lg" /></div>
          <div class="row items-center"><q-btn icon="description" color="white" flat round size="lg" /></div>
          <div class="row items-center"><q-btn :icon="login ? 'logout' : 'login'" color="white" flat round size="lg" @click="login ? cerrarSesion() : $router.push('/login')" /></div>
      </div>
      </q-footer>
  </q-layout>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'MainLayout',
  data () {
    return {
      rol: 0,
      tabActions: 'inicio',
      text: '',
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
          label: 'Mi Perfil',
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
          label: 'Reportes',
          ruta: '/reporte_cliente',
          permission: 6
        },
        {
          icon: 'fact_check',
          label: 'Reportes',
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
    if (this.$route.path === '/tienda') {
      this.tabActions = 'tienda'
    }
    this.getTiendas()
    const value = localStorage.getItem('TELDE_SESSION_INFO')
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
