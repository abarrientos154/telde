<template>
  <div>
    <q-carousel
        class="window-height"
        animated
        v-model="slide"
        infinite
      >
        <q-carousel-slide :name="1" class="q-pa-none">
           <q-card flat class="my-card window-height">
          <q-card-section>
          <div class="row">
              <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="$router.go(-1)" />
            <div class="q-mt-xs q-ml-md text-h6">Carro de compra</div>
            </div>
          </q-card-section>
          <q-card-section horizontal class="">
              <q-card-section>
                <div class="column items-center justify-center">
                  <q-img
                    style="height: 80px;width: 80px; border-radius:25px"
                    class="rounded-borders"
                    :src="'nopublicidad.jpg'"
                  />
                  </div>
              </q-card-section>

              <q-card-section class="q-pt-xs">
                <div class="row">
                  <div class="q-mt-md text-h7 text-bold">Membresía de tienda</div>
                </div>
                <div class="column">
                  <div class="text-h8 text-bold text-grey">Nova Telde</div>
                  <div class="row">
                    <div class="text-h6 q-pr-sm text-bold text-primary">€{{costoMembresia}}  </div>
                  </div>
                </div>
              </q-card-section>

          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="row">
            <q-space />
              <div class="column">
                <div class="q-mt-md text-h7 text-grey">Cantidad de meses</div>
                <div class="row">
                  <div class="row q-pr-xs">
                    <q-icon class="bg-grey q-mt-sm" size="sm" name="remove" @click="resta()" />
                    <q-input v-model.number="cantidad" borderless class="q-pr-sm q-ml-sm" type="number" dense style="width: 25px" min="0"/>
                    <q-icon class="bg-primary q-mt-sm text-white" size="sm" name="add" @click="cantidad++" />
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>

          <div class="absolute-bottom">
            <q-card-section class="q-pt-xs">
              <div class="row">
                <div class="q-mt-md text-h6 text-grey text-bold">total a pagar:</div>
                <q-space />
                <div class="q-mt-md text-h6 text-primary text-bold">€{{totalPagar}} </div>
              </div>
            </q-card-section>

          <q-card-actions class="q-py-md" align="center">
            <div class="q-pb-md">
              <q-btn v-close-popup rounded color="primary" text-color="white" label="Pagar" style="width:200px;height:40px" @click="siguiente()" />
            </div>
          </q-card-actions>
        </div>
      </q-card>
        </q-carousel-slide>

        <q-carousel-slide :name="2" class="q-pa-none">
           <q-card flat class="my-card window-height">
          <q-card-section>
          <div class="row">
              <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="atras()" />
            <div class="q-mt-xs q-ml-md text-h6">Carro de compra/Checkout</div>
            </div>
          </q-card-section>
          <q-card-section class="">
              <q-card-section class="q-pt-xs">
                <div class="row">
                  <div class="q-mt-md q-ml-xs text-h5 text-bold">Pedido</div>
                </div>
                <div class="column">
                  <div class="row">
                    <div class="q-mt-md text-h7 text-grey text-bold">Membresia de tienda:</div>
                    <q-space />
                    <div class="q-mt-md text-h7 text-bold">{{cantidad}}</div>
                  </div>
                  <div class="row">
                    <div class="q-mt-md text-h7 text-grey text-bold">Total a pagar:</div>
                    <q-space />
                    <div class="q-mt-md text-h7 text-bold">€{{totalPagar}}</div>

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
              <q-btn v-close-popup rounded color="primary" text-color="white" label="Pagar ahora"  style="width:200px;height:40px" @click="siguiente()" />
              <pago-membresia :monto="totalPagar" :apiUrl="apiUrl" :cantMeses="cantidad" />
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
import PagoMembresia from '../../components/StripeBoton'
export default {
  components: {
    PagoMembresia
  },
  data () {
    return {
      costoMembresia: 15,
      slide: 1,
      id: this.$route.params,
      cantidad: 1,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      apiUrl: ''
    }
  },
  mounted () {
    this.apiUrl = env.apiUrl + '/procesar_pago/' + this.$route.params.id
    console.log(this.apiUrl, 'API URLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL')
  },
  computed: {
    totalPagar () {
      return this.costoMembresia * this.cantidad
    }
  },
  methods: {
    siguiente () {
      this.slide = 2
    },
    atras () {
      this.slide = 1
    },
    resta () {
      if (this.cantidad > 1) {
        this.cantidad = this.cantidad - 1
      }
    }
  }
}
</script>
