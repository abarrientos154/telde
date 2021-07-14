<template>
  <q-layout view="hHh Lpr lFf">

    <q-page-container class="q-mb-md">
      <router-view />
    </q-page-container>

      <q-footer elevated v-if="rol != 0">
        <div v-if="rol !== 1" class="bg-blue-14 shadow-2 full-width row justify-around" >
          <div class="row items-center"><q-btn :icon="rol === 3 ? 'store' : 'home'" :label="rol === 3 ? 'Tienda' : 'Home'" color="white" flat stack dense no-caps size="md" @click="rol === 3 ? $router.push('/tienda/'+user_id) : $router.push('/inicio')" /></div>
          <div class="row items-center"><q-btn :icon="rol === 3 ? 'monetization_on' : 'store'" :label="rol === 3 ? 'Monedero' : 'Tiendas'" color="white" flat stack dense no-caps size="md" @click="rol === 3 ? $router.push('/monedero/') : $router.push('/tiendas')" /></div>
          <div class="row items-center"><q-btn :icon="rol === 3 ? 'description' : 'favorite'" :label="rol === 3 ? 'Estadísticas' : 'Favoritos'" color="white" flat stack dense no-caps size="md" @click="rol === 2 ? $router.push('/tiendas_favoritas') : $router.push('/estadisticas')" /></div>
          <div class="row items-center"><q-btn icon="shopping_basket" label="Pedidos" color="white" flat stack dense no-caps size="md" @click="rol === 3 ? $router.push('/mis_pedidos_tienda') : $router.push('/mis_pedidos')" /></div>
          <div class="row items-center"><q-btn icon="logout" label="Salir" color="white" flat stack dense no-caps size="md" @click="cerrarSesion()" /></div>
        </div>
        <div v-else class="bg-blue-14 shadow-2 full-width row justify-around" >
          <div class="row items-center"><q-btn icon="home" label="Home" color="white" flat stack dense no-caps size="md" @click="$router.push('/administrador')" /></div>
          <div class="row items-center"><q-btn icon="groups" label="Usuarios" color="white" flat stack dense no-caps size="md" @click="$router.push('/usuarios')" /></div>
          <div class="row items-center"><q-btn icon="monetization_on" label="Retiros" color="white" flat stack dense no-caps size="md" @click="$router.push('/retiros')" /></div>
          <div class="row items-center"><q-btn icon="description" label="Estadísticas" color="white" flat stack dense no-caps size="md" @click="$router.push('/reportes')" /></div>
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
      text: '',
      user_id: ''
    }
  },
  computed: {
    ...mapGetters('generals', ['can'])
  },
  mounted () {
    const value = localStorage.getItem('TELDE_SESSION_INFO')
    if (value) {
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
    }
  }
}
</script>

<style>
</style>
