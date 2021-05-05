<template>
  <q-page>
    <div class="bg-secondary column justify-center" style="height: 500px;">
      <div class="text-center text-h2 text-white text-bold">Tiendas favoritas</div>
    </div>

    <div class="text-h5 q-mt-md text-center">Categorias</div>
    <q-scroll-area
      horizontal
      style="height: 80px;"
    >
      <div class="row no-wrap q-py-md q-px-md q-gutter-md">
        <div v-for="(btn, index) in 20" :key="index" >
          <q-btn no-caps class="q-px-md" label="Categoria" color="blue-grey-11" text-color="blue-grey-9" />
        </div>
      </div>
    </q-scroll-area>

    <div class="text-h5 q-mt-md text-center">Últimas tiendas agregadas</div>
    <q-scroll-area
        v-if="data.length > 0"
        horizontal
        style="height: 350px;"
      >
        <div class="row no-wrap q-py-md q-px-md q-gutter-md">
          <div v-for="(card, index) in tiendas" :key="index" >
            <q-card style="width:400px">
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
                    <div class="col text-subtitle1 q-ml-xs ellipsis"> {{card.info_tienda.ciudad + ', ' + card.info_tienda.direccion}} </div>
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
    <q-card v-else class="column items-center justify-center q-ma-md bg-secondary text-h6 text-white" style="height: 230px; width: 210px">*Nada por aquí*</q-card>

    <div class="text-h5 q-my-md text-center">Más tiendas</div>
      <div v-if="data.length > 0" class="row justify-around">
        <div class="col-6 row justify-center q-mt-md" v-for="(card, index) in masTiendas" :key="index">
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
                      <div class="col text-subtitle1 q-ml-xs ellipsis"> {{card.info_tienda.ciudad + ', ' + card.info_tienda.direccion}} </div>
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
      <q-card v-else class="column items-center justify-center q-ma-md bg-secondary text-h6 text-white" style="height: 230px; width: 210px">*Nada por aquí*</q-card>
      <div class="row items-center justify-center q-mt-lg">
        <q-btn no-caps icon="store" label="Ver más tiendas" color="primary" size="lg" style="border-radius: 15px; width: 80%" />
      </div>
  </q-page>
</template>

<script>
import env from '../../env'
export default {
  data () {
    return {
      data: [],
      tiendas: [],
      masTiendas: [],
      baseuTiendas: ''
    }
  },
  mounted () {
    this.getFavoritos()
    this.baseuTiendas = env.apiUrl + '/perfil_img/'
  },
  methods: {
    deleteFavorito (id) {
      this.$api.delete('favorito/' + id).then(res => {
        this.getFavoritos()
      })
    },
    getFavoritos () {
      this.$api.get('favoritos').then(res => {
        this.data = res
        this.tiendas = []
        var largo1 = this.data.length - 1
        for (let i = 0; i < 20; i++) {
          if (largo1 >= 0) {
            this.tiendas.push(this.data[largo1])
            largo1 = largo1 - 1
          }
        }
        this.masTiendas = []
        var largo = this.data.length - 1
        for (let i = 0; i < 4; i++) {
          if (largo >= 0) {
            this.masTiendas.push(this.data[i])
            largo = largo - 1
          }
        }
        console.log(this.data)
      })
    },
    irTienda (id) {
      this.$router.push('/tienda/' + id)
    }
  }
}
</script>

<style>

</style>
