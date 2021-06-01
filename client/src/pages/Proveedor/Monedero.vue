<template>
  <div>
    <q-img :src="'nopublicidad.jpg'" style="height: 150px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px">
      <div class="absolute-full">
        <div class="absolute-center full-width text-bold text-h5 text-center">Monedero</div>
      </div>
    </q-img>

      <div class="q-pt-lg row justify-center">
        <q-card class="bg-blue column justify-between" style="height: 175px; width: 75%; border-radius: 30px">
          <q-card-section class="col">
          </q-card-section>
          <q-card-section>
            <div class="text-caption text-white">Dinero de tu monedero</div>
            <div class="row items-center justify-between">
              <div class="text-h4 text-bold text-white q-mr-sm">€{{saldo_actual}}</div>
              <div>
                <q-btn class="q-px-sm col" color="primary" label="Solicitar" style="border-radius: 10px;" no-caps/>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="text-h6 q-ma-lg text-grey-8">Ultimas solicitudes</div>
      <div v-if="ultimas.length">
        <div class="q-py-sm row justify-center" v-for="(card, index) in ultimas" :key="index">
          <q-card class="column justify-between" style="height: 175px; width: 75%; border-radius: 30px; min-width: 300px">
            <q-card-section>
              <div class="row justify-around">
                <div>
                  <div class="row">
                    <div class="text-h6 text-black q-mr-sm text-weight-bolder">Estado: </div>
                    <div :class="card.status === 'Aprobado' ? 'text-blue' : card.status === 'Pendiente' ? 'text-orange' : 'text-red'" class="text-h6 text-weight-bolder">{{card.status}}</div>
                  </div>
                  <div class="column">
                    <div class="text-h6 text-black q-mr-sm text-weight-bolder">Fecha de solicitud</div>
                    <div class="text-caption text-grey-7">01/08/2021</div>
                  </div>
                  <div class="row">
                    <div class="text-h6 text-black q-mr-sm text-weight-bolder">Saldo retirado </div>
                    <div class="text-h6 text-grey-7 text-weight-bolder">€0</div>
                  </div>
                </div>
                <div class="row justify-center items-center">
                  <q-btn :color="card.status === 'Aprobado' ? 'blue' : card.status === 'Pendiente' ? 'orange' : 'red'" text-color="white" :icon="card.status === 'Aprobado' ? 'north' : card.status === 'Pendiente' ? 'remove' : 'south'" style="border-radius: 10px; height: 55px; width: 100%;" no-caps/>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="row justify-center q-mb-lg q-my-sm">
          <q-btn rounded class="q-pa-xs" color="primary" label="Ver más" style="width: 90%;" no-caps/>
        </div>
      </div>
      <div v-else class="text-center text-h6 q-my-lg">No tienes solicitudes</div>

      <div class="text-center text-h6 q-my-lg text-grey-8">Busca tus retiros</div>
      <div class="q-py-sm row justify-center">
        <q-input borderless readonly dense v-model="form.fecha_inicio" label="Fecha inicio" color="black" mask="date" :rules="['date']" style="width:85%">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer" size="md">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="form.fecha_inicio">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input borderless readonly dense v-model="form.fecha_fin" label="Fecha fin" color="black" mask="date" :rules="['date']" style="width:85%">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer" size="md">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="form.fecha_fin">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-separator inset style="width:85%" />
      </div>

      <div v-if="retiros.length">
        <div class="q-py-sm row justify-center" v-for="(card, index) in retiros" :key="index">
          <q-card class="column justify-between" style="height: 175px; width: 75%; border-radius: 30px; min-width: 300px">
            <q-card-section>
              <div class="row justify-around">
                <div>
                  <div class="row">
                    <div class="text-h6 text-black q-mr-sm text-weight-bolder">Estado: </div>
                    <div :class="card.status === 'Aprobado' ? 'text-blue' : card.status === 'Pendiente' ? 'text-orange' : 'text-red'" class="text-h6 text-weight-bolder">{{card.status}}</div>
                  </div>
                  <div class="column">
                    <div class="text-h6 text-black q-mr-sm text-weight-bolder">Fecha de solicitud</div>
                    <div class="text-caption text-grey-7">01/08/2021</div>
                  </div>
                  <div class="row">
                    <div class="text-h6 text-black q-mr-sm text-weight-bolder">Saldo retirado </div>
                    <div class="text-h6 text-grey-7 text-weight-bolder">€0</div>
                  </div>
                </div>
                <div class="row justify-center items-center">
                  <q-btn :color="card.status === 'Aprobado' ? 'blue' : card.status === 'Pendiente' ? 'orange' : 'red'" text-color="white" :icon="card.status === 'Aprobado' ? 'north' : card.status === 'Pendiente' ? 'remove' : 'south'" style="border-radius: 10px; height: 55px; width: 100%;" no-caps/>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div v-else class="text-center text-h6 q-my-lg">No tienes solicitudes</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      saldo_actual: 0,
      form: {},
      ultimas: [],
      retiros: []
    }
  },
  mounted () {
    this.getSaldo()
  },
  methods: {
    getSaldo () {
      this.$api.get('saldo_actual').then(res => {
        if (res) {
          this.saldo_actual = res
        }
      })
    }
  }
}
</script>
