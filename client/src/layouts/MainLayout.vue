<template>
  <q-layout view="hHh Lpr lFf">

    <q-page-container class="q-mb-md">
      <router-view />
    </q-page-container>

      <q-footer elevated v-if="login">
        <div v-if="rol !== 1" class="bg-blue-14 shadow-2 full-width row justify-around" >
          <div class="row items-center"><q-btn :icon="rol === 3 ? 'store' : 'home'" :label="rol === 3 ? 'Tienda' : 'Home'" color="white" flat stack dense no-caps size="md" @click="rol === 3 ? $router.push('/tienda/'+user_id) : $router.push('/inicio')" /></div>
          <div class="row items-center"><q-btn :icon="rol === 3 ? 'monetization_on' : 'store'" :label="rol === 3 ? 'Monedero' : 'Tiendas'" color="white" flat stack dense no-caps size="md" @click="rol === 3 ? $router.push('/monedero/') : $router.push('/tiendas')" /></div>
          <div class="row items-center"><q-btn :icon="rol === 3 ? 'description' : 'favorite'" :label="rol === 3 ? 'Estadísticas' : 'Favoritos'" color="white" flat stack dense no-caps size="md" @click="rol === 2 ? $router.push('/tiendas_favoritas') : $router.push('/estadisticas')" /></div>
          <div class="row items-center"><q-btn icon="shopping_basket" label="Pedidos" color="white" flat stack dense no-caps size="md" @click="rol === 3 ? $router.push('/pedidos') : $router.push('/pedidosC')" /></div>
          <div class="row items-center"><q-btn icon="logout" label="Salir" color="white" flat stack dense no-caps size="md" @click="cerrarSesion()" /></div>
        </div>
        <div v-else class="bg-blue-14 shadow-2 full-width row justify-around" >
          <div class="row items-center"><q-btn icon="home" label="Home" color="white" flat stack dense no-caps size="md" @click="$router.push('/administrador')" /></div>
          <div class="row items-center"><q-btn icon="store" label="Usuarios" color="white" flat stack dense no-caps size="md" @click="$router.push('/all_users')" /></div>
          <div class="row items-center"><q-btn icon="favorite" label="Retiros" color="white" flat stack dense no-caps size="md" /></div>
          <div class="row items-center"><q-btn icon="shopping_basket" label="Estadísticas" color="white" flat stack dense no-caps size="md" /></div>
          <div class="row items-center"><q-btn icon="logout" label="Salir" color="white" flat stack dense no-caps size="md" @click="cerrarSesion()" /></div>
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
      user_id: '',
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
      this.getInfo()
    }
  },
  methods: {
    ...mapMutations('generals', ['logout']),
    cerrarSesion () {
      this.logout()
      this.$router.push('/login')
    },
    getInfo () {
      this.$api.get('user_info').then(res => {
        if (res) {
          this.rol = res.roles[0]
          this.user_id = res._id
        }
      })
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
