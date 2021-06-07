<template>
  <q-page>
    <q-img :src="'nopublicidad.jpg'" style="height: 150px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px">
      <div class="absolute-full">
        <div class="absolute-center full-width text-bold text-h5 text-center">Mis tiendas favoritas</div>
      </div>
    </q-img>

    <div class="text-h6 q-mx-md text-grey-8 q-mt-md">Últimas tiendas agregadas</div>
    <q-scroll-area
        v-if="ultimas.length > 0"
        horizontal
        style="height: 350px;"
      >
        <div class="row no-wrap q-py-md q-px-md q-gutter-md">
          <div v-for="(card, index) in ultimas" :key="index" >
            <q-card style="width:400px; border-radius:15px">
              <q-img
                :src="baseuTiendas + card.proveedor_id"
                spinner-color="white"
                style="height: 220px; width: 100%">
                  <div class="bg-transparent" style="width:100%">
                    <q-btn icon="favorite" round color="primary" text-color="red" @click="deleteFavorito(card.proveedor_id)" />
                  </div>
                </q-img>

              <q-card-section class="row justify-between">
                <div class="col-8">
                  <div class="row items-center" style="width: 100%">
                    <div class="col text-subtitle1 ellipsis"> {{card.info_tienda.nombre}} </div>
                  </div>
                  <div class="row items-center" style="width: 100%">
                    <q-icon class="col-1" name="room" size="xs" />
                    <div class="col text-subtitle1 q-ml-xs ellipsis"> {{card.info_tienda.ciudad.name + ', ' + card.info_tienda.direccion}} </div>
                  </div>
                </div>

                <div class="col-4 row items-center">
                  <q-btn no-caps icon="store" label="Ir tienda" color="primary" style="border-radius: 9px"
                  @click="irTienda(card.proveedor_id)" />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    </q-scroll-area>
    <div v-else class="text-center text-h6 q-my-lg">No hay tiendas agregadas</div>

    <div class="q-my-sm text-center text-h6 text-grey-8">Más tiendas</div>
      <div v-if="tiendas.length" class="row justify-around">
        <div class="col-6 row justify-center q-mt-md" v-for="(card, index) in tiendas" :key="index">
          <q-card style="width:95%; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-top-left-radius: 15px; border-top-right-radius: 15px">
              <q-img
                :src="baseuTiendas + card.proveedor_id"
                spinner-color="white"
                style="height: 350px; width: 100%">
                  <div class="bg-transparent" style="width:100%">
                    <q-btn icon="favorite" round color="primary" text-color="red" @click="deleteFavorito(card.proveedor_id)" />
                  </div>
                  <div class="absolute-bottom bg-transparent">
                    <div class="row items-center" style="width: 100%">
                      <div class="col text-subtitle1 ellipsis"> {{card.info_tienda.nombre}} </div>
                    </div>
                    <div class="row items-center" style="width: 100%">
                      <q-icon class="col-1" name="room" size="xs" />
                      <div class="col text-subtitle1 q-ml-xs ellipsis"> {{card.info_tienda.ciudad.name + ', ' + card.info_tienda.direccion}} </div>
                    </div>

                    <div class="row items-center q-mt-md">
                      <q-btn no-caps icon="store" label="Ir tienda" color="primary" style="border-radius: 9px"
                      @click="irTienda(card.proveedor_id)" />
                    </div>
                  </div>
                </q-img>
            </q-card>
        </div>
      </div>
      <div v-else class="text-center text-h6 q-my-lg">No hay tiendas agregadas</div>
      <div class="row items-center justify-center q-mt-lg">
        <q-btn no-caps rounded label="Ver más tiendas" color="primary" size="lg" style="width: 80%"
        @click="verMas()" />
      </div>
  </q-page>
</template>

<script>
import env from '../../env'
export default {
  data () {
    return {
      ultimas: [],
      allTiendas: [],
      tiendas: [],
      baseuTiendas: ''
    }
  },
  mounted () {
    this.getFavoritos()
    this.baseuTiendas = env.apiUrl + '/perfil_img/'
  },
  methods: {
    getFavoritos () {
      this.$api.get('favoritos').then(res => {
        this.allTiendas = res
        var tot = res.slice()
        this.tiendas = this.allTiendas.slice(0, 4)
        this.ultimas = tot.reverse().slice(0, 5)
      })
    },
    deleteFavorito (id) {
      this.$api.delete('favorito/' + id).then(res => {
        this.getFavoritos()
      })
    },
    verMas () {
      this.tiendas = this.allTiendas
    },
    irTienda (id) {
      this.$router.push('/tienda/' + id)
    }
  }
}
</script>

<style>

</style>
