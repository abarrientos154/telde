<template>
  <div>
    <q-carousel
        class="window-height"
        animated
        v-model="slide"
        infinite
      >
        <q-carousel-slide :name="1" >
          <div class="row">
            <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="$router.push('/login')" />
          </div>
          <div class="absolute-center" style="width:100%">
            <div class="q-mb-md row justify-center">
              <q-img src="nova_telde-05.png" style="width:100%" >
              </q-img>
            </div>
            <div class="row items-center justify-center q-mt-lg" style="width:100%">
              <q-btn no-caps label="Adquirir membresia" color="primary" size="lg" style="border-radius: 25px; width: 80%"
              @click="slide = 2"/>
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide :name="2" class="q-pa-none">
          <q-card flat class="my-card window-height">
            <q-card-section>
              <div class="row items-center">
                <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="!tienda ? slide = 1 : $router.push('/tienda/' + id)" />
                <div class="q-ml-md text-h6 text-grey-9">Carro de compra</div>
              </div>
            </q-card-section>
            <div class="row items-start justify-start q-ma-xs">
                <div class="col-3 q-mr-sm column justify-center items-center">
                  <img
                    :src="'nopublicidad.jpg'"
                    spinner-color="white"
                    style="height: 80px; width: 80%; border-radius: 10px"/>
                </div>

                <div class="col-8">
                  <div class="text-subtitle1">Membresía de tienda</div>
                  <div class="text-subtitle2 text-grey-8">Nova Telde</div>
                  <div class="text-h6 text-bold text-primary">€{{costoMembresia}}</div>
                </div>
            </div>
            <div class="row justify-end">
                <div class="col-6 column items-end q-mr-lg">
                  <div class="text-h7 text-grey">Cantidad de meses</div>
                  <div class="row">
                      <q-icon class="bg-grey q-mt-sm" size="sm" name="remove" @click="resta()" />
                      <q-input v-model.number="cantidad" borderless class="q-pr-sm q-ml-sm" type="number" dense style="width: 25px" min="0"/>
                      <q-icon class="bg-primary q-mt-sm text-white" size="sm" name="add" @click="cantidad++" />
                  </div>
                </div>
            </div>

            <div class="absolute-bottom">
              <q-card-section class="q-pt-xs">
                <div class="row">
                  <div class="q-mt-md text-h6 text-grey text-bold">Total a pagar:</div>
                  <q-space />
                  <div class="q-mt-md text-h6 text-primary text-bold">€{{totalPagar}} </div>
                </div>
              </q-card-section>

              <q-card-actions class="q-py-md" align="center">
                <div class="q-pb-md">
                  <q-btn v-close-popup rounded no-caps color="primary" text-color="white" label="Pagar" size="lg" style="width:200px" @click="siguiente()" />
                </div>
              </q-card-actions>
            </div>
          </q-card>
        </q-carousel-slide>

        <q-carousel-slide :name="3" class="q-pa-none">
          <q-card flat class="my-card window-height">
            <q-card-section>
            <div class="row">
                <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="slide = 2" />
              <div class="q-mt-xs q-ml-md text-h6">Carro de compra/Checkout</div>
              </div>
            </q-card-section>
            <q-card-section class="">
                <q-card-section class="q-pt-xs">
                  <div class="row">
                    <div class="q-mt-md text-h6">Pedido</div>
                  </div>
                  <div class="column">
                    <div class="row q-mt-md items-center">
                      <div class="text-subtitle1 text-grey-8">Membresia de tienda:</div>
                      <q-space />
                      <div class="text-subtitle1 text-bold">{{cantidad}}</div>
                    </div>
                    <div class="row q-mt-md items-center">
                      <div class="text-subtitle1 text-grey-8">Total a pagar:</div>
                      <q-space />
                      <div class="text-subtitle1 text-bold">€{{totalPagar}}</div>
                    </div>
                  </div>
                </q-card-section>

            </q-card-section>

            <div class="absolute-bottom">
              <q-card-section class="q-pt-xs">
                <div class="row">
                  <div class="q-mt-md text-h6 text-grey text-bold">Precio total:</div>
                  <q-space />
                  <div class="q-mt-md text-h6 text-blue text-bold">€{{totalPagar}}</div>
                </div>
              </q-card-section>

              <q-card-actions class="q-py-md" align="center">
                <div class="q-pb-md">
                  <q-btn v-close-popup rounded no-caps color="primary" text-color="white" label="Pagar ahora" size="lg" style="width:200px" @click="redirPay()" />
                  <!-- <pago-membresia :monto="totalPagar" :apiUrl="apiUrl" :cantMeses="cantidad" /> -->
                </div>
              </q-card-actions>
            </div>
          </q-card>
        </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
import env from '../../env'
import { openURL } from 'quasar'
// import PagoMembresia from '../../components/StripeBoton'
export default {
  components: {
    // PagoMembresia
  },
  data () {
    return {
      tienda: false,
      costoMembresia: 15,
      slide: 1,
      id: this.$route.params.id,
      cantidad: 1,
      apiUrl: ''
    }
  },
  mounted () {
    if (this.$route.params.slide === '2') {
      this.slide = 2
      this.tienda = true
    }
    this.apiUrl = env.apiUrl + '/redireccionar_pago?user_id=' + this.$route.params.id
    console.log(this.apiUrl, 'API URLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL')
  },
  computed: {
    totalPagar () {
      return this.costoMembresia * this.cantidad
    }
  },
  methods: {
    siguiente () {
      this.slide = 3
    },
    resta () {
      if (this.cantidad > 1) {
        this.cantidad = this.cantidad - 1
      }
    },
    async redirPay () {
      const ruta = `${this.apiUrl}&costoM=${this.costoMembresia}&cantMeses=${this.cantidad}&type=mobile`
      await openURL(ruta)
      navigator.app.exitApp()
    }
  }
}
</script>
