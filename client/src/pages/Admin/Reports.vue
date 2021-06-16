<template>
  <div>
    <q-img :src="'nopublicidad.jpg'" style="height: 150px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px">
      <div class="absolute-full">
        <div class="absolute-center full-width text-bold text-h5 text-center">Reporte y Estadística</div>
      </div>
    </q-img>

      <div class="text-h6 q-mx-sm q-my-md text-grey-8">Estadísticas de ventas</div>
      <div class="row justify-center q-px-sm">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-sm">
          <q-select borderless v-model="reportVentas" @input="vaciar(1)" color="black" :options="typeReport" label="Seleccione el tipo de reporte" />
        </div>
        <div v-if="reportVentas == 'Anual' || reportVentas == 'Mensual'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-input borderless readonly v-model="fechaVentas" :label="reportVentas == 'Anual' ? 'Seleccione el año' : 'Seleccione el mes'" :mask="reportVentas == 'Anual' ? '####' : '##'">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                  <q-date v-model="fechaVentas" text-color="black" :mask="reportVentas == 'Anual' ? 'YYYY' : 'M'" minimal emit-immediately :default-view="reportVentas == 'Anual' ? 'Years' : 'Months'"
                  @input="selecFecha(1, 1)">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Cerrar" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div v-if="reportVentas == 'Semanal'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-input borderless readonly v-model="fechaTexVentas" label="Seleccione la semana" hint="Selecciona el inicio y el fin de la semana">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="fechaSemanalVentas" text-color="black" range
                  @input="selecFecha(1, 2)">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup @click="selecFecha(1, 2)" label="Aceptar" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <div class="row justify-center q-mb-lg">
        <q-btn :disable="fechaVentas === null ? true : false" rounded class="q-pa-xs" color="primary" label="Ver estadística" style="width: 90%;" no-caps
        @click="getReportVentas()"/>
      </div>

      <div class="column items-center q-mb-lg">
        <div class="bg-primary q-pa-xs" style="width: 90%;">
          <div class="text-white text-center text-caption">Ventas</div>
          <div class="text-white text-center text-caption">Diarias</div>
        </div>
        <div class="bg-blue-14 q-pa-xs" style="width: 90%;">
          <GChart v-if="verEstadistica1" type="ColumnChart" :data="chartData1" :options="chartOptions"/>
        </div>
      </div>

      <div class="text-h6 q-mx-sm q-my-md text-grey-8">Estadística de membresias vendidas</div>
      <div class="row justify-center q-px-sm">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-sm">
          <q-select borderless v-model="reportMembresias" @input="vaciar(2)" color="black" :options="typeReport" label="Seleccione el tipo de reporte" />
        </div>
        <div v-if="reportMembresias == 'Anual' || reportMembresias == 'Mensual'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-input borderless readonly v-model="fechaMembresias" :label="reportMembresias == 'Anual' ? 'Seleccione el año' : 'Seleccione el mes'" :mask="reportMembresias == 'Anual' ? '####' : '##'">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy2" transition-show="scale" transition-hide="scale">
                  <q-date v-model="fechaMembresias" text-color="black" :mask="reportMembresias == 'Anual' ? 'YYYY' : 'M'" minimal emit-immediately :default-view="reportMembresias == 'Anual' ? 'Years' : 'Months'"
                  @input="selecFecha(2, 1)">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Cerrar" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div v-if="reportMembresias == 'Semanal'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-input borderless readonly v-model="fechaTexMembresias" label="Seleccione la semana" hint="Selecciona el inicio y el fin de la semana">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="fechaSemanalMembresias" text-color="black" range
                  @input="selecFecha(2, 2)">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup @click="selecFecha(2, 2)" label="Aceptar" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <div class="row justify-center q-mb-lg">
        <q-btn :disable="fechaMembresias === null ? true : false" rounded class="q-pa-xs" color="primary" label="Ver estadística" style="width: 90%;" no-caps
        @click="getReportMembresias()"/>
      </div>

      <div class="column items-center q-mb-lg">
        <div class="bg-primary q-pa-xs" style="width: 90%;">
          <div class="text-white text-center text-caption">Ventas</div>
          <div class="text-white text-center text-caption">Diarias</div>
        </div>
        <div class="bg-blue-14 q-pa-xs" style="width: 90%;">
          <GChart v-if="verEstadistica2" type="ColumnChart" :data="chartData2" :options="chartOptions"/>
        </div>
      </div>

      <div class="text-h6 q-mx-sm q-my-md text-grey-8">Estadísticas de retiros</div>
      <div class="row justify-center q-px-sm">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-sm">
          <q-select borderless v-model="reportRetiros" @input="vaciar(3)" color="black" :options="typeReport" label="Seleccione el tipo de reporte" />
        </div>
        <div v-if="reportRetiros == 'Anual' || reportRetiros == 'Mensual'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-input borderless readonly v-model="fechaRetiros" :label="reportRetiros == 'Anual' ? 'Seleccione el año' : 'Seleccione el mes'" :mask="reportRetiros == 'Anual' ? '####' : '##'">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy3" transition-show="scale" transition-hide="scale">
                  <q-date v-model="fechaRetiros" text-color="black" :mask="reportRetiros == 'Anual' ? 'YYYY' : 'M'" minimal emit-immediately :default-view="reportRetiros == 'Anual' ? 'Years' : 'Months'"
                  @input="selecFecha(3, 1)">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Cerrar" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div v-if="reportRetiros == 'Semanal'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-input borderless readonly v-model="fechaTexRetiros" label="Seleccione la semana" hint="Selecciona el inicio y el fin de la semana">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="fechaSemanalRetiros" text-color="black" range
                  @input="selecFecha(3, 2)">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup @click="selecFecha(3, 2)" label="Aceptar" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <div class="row justify-center q-mb-lg">
        <q-btn :disable="fechaRetiros === null ? true : false" rounded class="q-pa-xs" color="primary" label="Ver estadística" style="width: 90%;" no-caps
        @click="getReportRetiros()"/>
      </div>

      <div class="column items-center">
        <div class="bg-primary q-pa-xs" style="width: 90%;">
          <div class="text-white text-center text-caption">Ventas</div>
          <div class="text-white text-center text-caption">Diarias</div>
        </div>
        <div class="bg-blue-14 q-pa-xs" style="width: 90%;">
          <GChart v-if="verEstadistica3" type="ColumnChart" :data="chartData3" :options="chartOptions"/>
        </div>
      </div>
  </div>
</template>

<script>
import moment from 'moment'
import { GChart } from 'vue-google-charts'
export default {
  components: {
    GChart
  },
  data () {
    return {
      verEstadistica1: false,
      verEstadistica2: false,
      verEstadistica3: false,
      fechaVentas: null,
      fechaMembresias: null,
      fechaRetiros: null,
      fechaTexVentas: '',
      fechaTexMembresias: '',
      fechaTexRetiros: '',
      reportVentas: '',
      reportMembresias: '',
      reportRetiros: '',
      fechaSemanalVentas: {},
      fechaSemanalMembresias: {},
      fechaSemanalRetiros: {},
      chartOptions: {
        height: 200,
        legend: { position: 'none' },
        bar: { groupWidth: '20%' },
        isStacked: true,
        colors: ['blue']
      },
      chartData1: [
        ['Genre', 'Ventas', { role: 'annotation' }]
      ],
      chartData2: [
        ['Genre', 'Ventas', { role: 'annotation' }]
      ],
      chartData3: [
        ['Genre', 'Ventas', { role: 'annotation' }]
      ],
      typeReport: ['Semanal', 'Mensual', 'Anual']
    }
  },
  mounted () {
  },
  methods: {
    getReportVentas () {
      this.$q.loading.show({
        message: 'Construyendo datos'
      })
      this.$api.post('estadistica', { modelo: 'Compra', campo: 'totalValor', type: this.reportVentas, fecha: this.fechaVentas }).then(res => {
        if (res) {
          this.chartData1 = res
          this.verEstadistica1 = true
          this.$q.loading.hide()
        } else {
          this.$q.loading.hide()
        }
      })
    },
    getReportMembresias () {
      this.$q.loading.show({
        message: 'Construyendo datos'
      })
      this.$api.post('estadisticaMembresias', { type: this.reportMembresias, fecha: this.fechaMembresias }).then(res => {
        if (res) {
          this.chartData2 = res
          this.verEstadistica2 = true
          this.$q.loading.hide()
        } else {
          this.$q.loading.hide()
        }
      })
    },
    getReportRetiros () {
      this.$q.loading.show({
        message: 'Construyendo datos'
      })
      this.$api.post('estadistica', { modelo: 'Monedero', campo: 'monto', type: this.reportRetiros, fecha: this.fechaRetiros }).then(res => {
        if (res) {
          this.chartData3 = res
          this.verEstadistica3 = true
          this.$q.loading.hide()
        } else {
          this.$q.loading.hide()
        }
      })
    },
    vaciar (val) {
      if (val === 1) {
        this.fechaVentas = null
        this.fechaTexVentas = ''
        this.fechaSemanalVentas = {
          from: moment().subtract(6, 'days').format('YYYY/MM/DD'),
          to: moment().format('YYYY/MM/DD')
        }
      } else if (val === 2) {
        this.fechaMembresias = null
        this.fechaTexMembresias = ''
        this.fechaSemanalMembresias = {
          from: moment().subtract(6, 'days').format('YYYY/MM/DD'),
          to: moment().format('YYYY/MM/DD')
        }
      } else {
        this.fechaRetiros = null
        this.fechaTexRetiros = ''
        this.fechaSemanalRetiros = {
          from: moment().subtract(6, 'days').format('YYYY/MM/DD'),
          to: moment().format('YYYY/MM/DD')
        }
      }
    },
    selecFecha (type, val) {
      if (val === 1) {
        if (type === 1) {
          this.$refs.qDateProxy1.hide()
        } else if (type === 2) {
          this.$refs.qDateProxy2.hide()
        } else {
          this.$refs.qDateProxy3.hide()
        }
      } else {
        var resta
        if (type === 1) {
          resta = moment(this.fechaSemanalVentas.to).diff(moment(this.fechaSemanalVentas.from), 'days')
        } else if (type === 2) {
          resta = moment(this.fechaSemanalMembresias.to).diff(moment(this.fechaSemanalMembresias.from), 'days')
        } else {
          resta = moment(this.fechaSemanalRetiros.to).diff(moment(this.fechaSemanalRetiros.from), 'days')
        }
        if (resta !== 6) {
          this.$q.dialog({
            title: 'Atención',
            message: 'Debes seleccionar el rango de una semana (7 días)',
            cancel: false
          }).onOk(() => {
            // console.log('>>>> Ok')
          }).onCancel(() => {
            // console.log('>>>> Cancel')
          })
          this.vaciar(type, val)
        } else {
          if (type === 1) {
            this.fechaTexVentas = this.fechaSemanalVentas.from + ' - ' + this.fechaSemanalVentas.to
            this.fechaVentas = this.fechaSemanalVentas
          } else if (type === 2) {
            this.fechaTexMembresias = this.fechaSemanalMembresias.from + ' - ' + this.fechaSemanalMembresias.to
            this.fechaMembresias = this.fechaSemanalMembresias
          } else {
            this.fechaTexRetiros = this.fechaSemanalRetiros.from + ' - ' + this.fechaSemanalRetiros.to
            this.fechaRetiros = this.fechaSemanalRetiros
          }
        }
      }
    }
  }
}
</script>
