<template>
  <div>
    <q-img :src="'nopublicidad.jpg'" style="height: 150px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px">
      <div class="absolute-full">
        <div class="absolute-center full-width text-bold text-h5 text-center">Reporte y Estadística</div>
      </div>
    </q-img>

    <div class="q-pt-lg row justify-center">
        <q-card class="bg-blue column justify-between" style="height: 175px; width: 80%; border-radius: 30px">
          <q-card-section class="col">
          </q-card-section>
          <q-card-section>
            <div class="text-caption text-white">Dinero de tu monedero</div>
            <div class="row items-center justify-between">
              <div class="text-h4 text-bold text-white q-mr-sm">€{{saldo_actual}}</div>
              <div>
                <q-btn :disable="saldo_actual > 0 ? false : true" class="q-px-sm col" color="primary" label="Solicitar" style="border-radius: 10px;" no-caps
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="text-h6 q-ma-lg text-grey-8">Estadísticas de ventas</div>
      <div class="row justify-center q-px-lg q-mb-lg">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-sm">
          <q-select borderless v-model="report" @input="vaciar()" color="black" :options="typeReport" label="Seleccione el tipo de reporte" />
        </div>

        <div v-if="report == 'Anual' || report == 'Mensual'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-input borderless readonly v-model="fecha" :label="report == 'Anual' ? 'Seleccione el año' : 'Seleccione el mes'" :mask="report == 'Anual' ? '####' : '#'">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="fecha" text-color="black" :mask="report == 'Anual' ? 'YYYY' : 'M'" minimal emit-immediately :default-view="report == 'Anual' ? 'Years' : 'Months'"
                  @input="selecFecha(1)">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Cerrar" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div v-if="report == 'Semanal'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-input borderless readonly v-model="fechaTex" label="Seleccione la semana" hint="Selecciona el inicio y el fin de la semana">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="fechaSemanal" text-color="black" range
                  @input="selecFecha(2)">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup @click="selecFecha(2)" label="Aceptar" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <div class="row justify-center q-mb-lg">
        <q-btn rounded class="q-pa-xs" color="primary" label="Ver estadísticas" style="width: 90%;" no-caps
        @click="getReport()"/>
      </div>

      <div class="column items-center q-mb-lg">
        <div class="bg-primary q-pa-xs" style="width: 90%;">
          <div class="text-white text-center text-caption">Ventas</div>
          <div class="text-white text-center text-caption">Diarias</div>
        </div>
        <div class="bg-blue q-pa-xs" style="width: 90%;">
          <GChart v-if="verEstadistica" type="ColumnChart" :data="chartData" :options="chartOptions"/>
        </div>
      </div>

      <div class="text-center q-mb-sm text-h6 text-grey-8">Últimos productos vendidos</div>
      <div v-if="productos.length" class="row justify-around">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 row justify-center q-mt-md" v-for="(card, index) in productos" :key="index">
            <q-card flat class="my-card" style="height: 330px; width: 160px">
                <q-img
                  :src="baseuProducto + card.producto_id"
                  spinner-color="white"
                  style="height: 160px; width: 100%">
                </q-img>

                <q-card-section>
                  <div class="row no-wrap items-center q-mt-xs">
                    <div class="col-12 text-subtitle2 ellipsis"> {{card.nombre}} </div>
                  </div>
                  <div class="text-caption text-black"> {{card.producto.descripcion}} </div>
                </q-card-section>

                <q-card-section class="absolute-bottom">
                  <div v-if="!card.oferta" class="text-h6 text-blue q-my-sm">€{{formatPrice(card.valor)}}</div>
                  <div v-if="card.oferta" class="text-h6 text-blue q-my-sm">€<strike>{{formatPrice(card.valor)}}</strike> - {{formatPrice(card.ofertaVal)}}</div>
                </q-card-section>
            </q-card>
          </div>
          <div class="col-12 row justify-center q-mb-md">
            <q-btn rounded class="q-pa-xs" color="primary" text-color="white" @click="ver()" :label="verMas ? 'Ver menos productos' : 'Ver más productos'" style="width: 90%;" no-caps/>
          </div>
        </div>
        <div v-else class="text-center text-h6 q-my-lg">Aún no tienes productos vendidos</div>
  </div>
</template>

<script>
import moment from 'moment'
import { GChart } from 'vue-google-charts'
import env from '../../env'
export default {
  components: {
    GChart
  },
  data () {
    return {
      verMas: false,
      verFecha: false,
      verEstadistica: false,
      fecha: null,
      fechaTex: '',
      report: '',
      baseuProducto: '',
      saldo_actual: 0,
      fechaSemanal: {},
      chartOptions: {
        height: 200,
        legend: { position: 'none' },
        bar: { groupWidth: '30%' },
        isStacked: true,
        colors: ['blue']
      },
      chartData: [
        ['Genre', 'Ventas', { role: 'annotation' }]
      ],
      allProductos: [],
      productos: [],
      typeReport: ['Semanal', 'Mensual', 'Anual']
    }
  },
  mounted () {
    this.baseuProducto = env.apiUrl + '/producto_files/'
    this.getSaldo()
    this.getProductos()
  },
  methods: {
    getSaldo () {
      this.$api.get('saldo_actual').then(res => {
        if (res) {
          this.saldo_actual = res
        }
      })
    },
    getProductos () {
      this.$api.get('productos_vendidos').then(res => {
        if (res) {
          this.allProductos = res
          this.productos = this.allProductos.slice(0, 4)
        }
      })
    },
    getReport () {
      this.$api.post('estadistica', { type: this.report, fecha: this.fecha }).then(res => {
        if (res) {
          this.chartData = res
          this.verEstadistica = true
        }
      })
    },
    vaciar () {
      this.fecha = null
      this.fechaTex = ''
      this.fechaSemanal = {
        from: moment().subtract(6, 'days').format('YYYY/MM/DD'),
        to: moment().format('YYYY/MM/DD')
      }
    },
    selecFecha (val) {
      if (val === 1) {
        this.$refs.qDateProxy.hide()
      } else {
        var resta = moment(this.fechaSemanal.to).diff(moment(this.fechaSemanal.from), 'days')
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
          this.vaciar()
        } else {
          this.fechaTex = this.fechaSemanal.from + ' - ' + this.fechaSemanal.to
          this.fecha = this.fechaSemanal
        }
      }
    },
    ver () {
      this.productos = this.allProductos
      this.verMas = !this.verMas
    },
    formatPrice (value) {
      const val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
}
</script>
