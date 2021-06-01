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
          <q-select borderless v-model="report" :options="typeReport" label="Seleccione el tipo de reporte" />
        </div>
        <div v-if="report == 'Reporte Mensual' || report == 'Reporte Anual'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-select v-model="fecha" :options="report == 'Reporte Mensual' ? meses : años" :label="report == 'Reporte Mensual' ? 'Seleccione el Mes' : report == 'Reporte Anual' ? 'Seleccione el Año' : ''">
            <template v-slot:append>
              <q-icon name="event" />
            </template>
          </q-select>
        </div>
        <div v-else-if="report == 'Reporte Semanal'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-input @click="verFecha = !verFecha" v-model="fecha" label="Seleccione la Semana">
            <template v-slot:append>
              <q-icon name="event" />
            </template>
          </q-input>
          <q-dialog v-model="verFecha">
            <div>
              <q-date v-model="fechaReport" @input="selecFecha()" range />
            </div>
          </q-dialog>
        </div>
      </div>
      <div class="row justify-center q-mb-lg">
        <q-btn rounded class="q-pa-xs" color="primary" label="Ver estadísticas" style="width: 90%;" no-caps/>
      </div>

      <div class="column items-center q-mb-lg">
        <div class="bg-primary q-pa-xs" style="width: 90%;">
          <div class="text-white text-center text-caption">Ventas</div>
          <div class="text-white text-center text-caption">Diarias</div>
        </div>
        <div class="bg-blue-14 q-pa-xs" style="width: 90%;">
          <GChart type="ColumnChart" :data="chartData" :options="chartOptions"/>
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
        </div>
        <div v-else class="text-center text-h6 q-my-lg">Aún no tienes productos vendidos</div>
      <div class="row justify-center q-mb-md">
        <q-btn rounded class="q-pa-xs" color="primary" text-color="white" @click="ver()" :label="verMas ? 'Ver menos productos' : 'Ver más productos'" style="width: 90%;" no-caps/>
      </div>
  </div>
</template>

<script>
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
      report: '',
      fecha: '',
      baseuProducto: '',
      rating: 4,
      saldo_actual: 0,
      fechaReport: { from: '2021/07/08', to: '2021/07/17' },
      chartOptions: {
        height: 200,
        legend: { position: 'none' },
        bar: { groupWidth: '20%' },
        isStacked: true,
        colors: ['yellow', 'blue']
      },
      chartData: [
        ['Genre', 'Ganancia', 'Presupuesto', { role: 'annotation' }],
        ['01', 20, 5, ''],
        ['02', 25, 8, ''],
        ['03', 15, 5, ''],
        ['04', 35, 4, ''],
        ['05', 10, 35, '']
      ],
      allProductos: [],
      productos: [],
      typeReport: ['Reporte Semanal', 'Reporte Mensual', 'Reporte Anual'],
      meses: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      años: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
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
          console.log('vendidos', this.productos)
        }
      })
    },
    selecFecha () {
      this.fecha = this.fechaReport.from + ' - ' + this.fechaReport.to
    },
    ver () {
      this.verMas = !this.verMas
    },
    formatPrice (value) {
      const val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
}
</script>
