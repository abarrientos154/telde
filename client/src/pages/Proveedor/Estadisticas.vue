<template>
  <div>
    <div class="q-mb-lg">
      <q-img :src="'nopublicidad.jpg'" style="height: 300px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px" basic>
        <div class="absolute-full">
          <div class="absolute-center full-width text-bold text-h5 text-center">
            Reporte y Estadística
          </div>
        </div>
      </q-img>
    </div>
    <div>
      <div class="q-py-lg row justify-center">
        <q-card class="bg-blue-14 column justify-between" style="height: 175px; width: 75%; border-radius: 30px;">
          <q-card-section class="col">
          </q-card-section>
          <q-card-section>
            <div class="text-caption text-grey-5">Dinero de tu monedero</div>
            <div class="row items-center justify-between">
              <div class="text-h4 text-bold text-white q-mr-sm">€35,291</div>
              <q-btn class="q-pa-xs col" color="light-green-13" text-color="white" label="Solicitar" style="border-radius: 15px; max-width: 200px" no-caps/>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="q-pa-lg text-center text-h6 text-grey-8">Estadísticas de ventas</div>
      <div class="row justify-center q-px-lg q-mb-lg">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-sm">
          <q-select v-model="report" :options="typeReport" label="Seleccione el tipo de reporte" />
        </div>
        <div v-if="report == 'Reporte mensual' || report == 'Reporte anual'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-select v-model="fecha" :options="report == 'Reporte mensual' ? meces : años" :label="report == 'Reporte mensual' ? 'Seleccione el mes' : report == 'Reporte anual' ? 'Seleccione el año' : ''">
            <template v-slot:append>
              <q-icon name="event" />
            </template>
          </q-select>
        </div>
        <div v-else-if="report == 'Reporte semanal'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-input @click="fch = !fch" v-model="fecha" label="Ingrese la semana">
            <template v-slot:append>
              <q-icon name="event" />
            </template>
          </q-input>
          <q-dialog v-model="fch">
            <div>
              <q-date v-model="fechaReport" @input="selecFecha()" range />
            </div>
          </q-dialog>
        </div>
      </div>
      <div class="row justify-center q-mb-lg">
        <q-btn rounded class="q-pa-xs" color="light-green-13" text-color="white" label="Ver estadísticas" style="width: 90%;" no-caps/>
      </div>
      <div class="column items-center q-mb-lg">
        <div class="bg-light-green-13 q-pa-xs" style="width: 90%;">
          <div class="text-white text-center text-caption">Ventas</div>
          <div class="text-white text-center text-caption">Diarias</div>
        </div>
        <div class="bg-blue-14 q-pa-xs" style="width: 90%;">
          <GChart type="ColumnChart" :data="chartData" :options="chartOptions"/>
        </div>
      </div>
      <div class="text-center text-h6 text-grey-8 q-mb-sm">Ultimos productos vendidos</div>
      <div class="row justify-center full-width q-mb-xl">
        <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3 q-mb-md q-px-sm" v-for="index in prod" :key="index">
          <q-img src="nopublicidad.jpg" style="height: 175px; width: 100%;" basic/>
          <div>
            <div class="row items-center justify-between">
              <q-rating max="5" size="16px" v-model="rating" color="yellow-8" icon="star_border" icon-selected="star" icon-half="star_half" no-dimming />
              <div style="font-size: 8px">Fecha de venta</div>
            </div>
            <div class="text-caption">Producto</div>
            <div class="row items-center justify-between">
              <div class="text-caption">Cant. Vendidos</div>
              <div class="text-blue-14 text-bold">€120.00</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-center q-mb-md">
        <q-btn rounded class="q-pa-xs" color="light-green-13" text-color="white" @click="ver()" :label="verProd ? 'Ver menos productos' : 'Ver más productos'" style="width: 90%;" no-caps/>
      </div>
    </div>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  components: {
    GChart
  },
  data () {
    return {
      chartData: [
        ['Genre', 'Ganancia', 'Presupuesto', { role: 'annotation' }],
        ['01', 20, 5, ''],
        ['02', 25, 8, ''],
        ['03', 15, 5, ''],
        ['04', 35, 4, ''],
        ['05', 10, 35, '']
      ],
      chartOptions: {
        height: 200,
        legend: { position: 'none' },
        bar: { groupWidth: '20%' },
        isStacked: true,
        colors: ['yellow', 'blue']
      },
      typeReport: ['Reporte semanal', 'Reporte mensual', 'Reporte anual'],
      meces: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      años: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
      fechaReport: { from: '2021/07/08', to: '2021/07/17' },
      fch: false,
      report: '',
      fecha: '',
      prod: 4,
      verProd: false,
      rating: 4
    }
  },
  mounted () {
  },
  methods: {
    selecFecha () {
      this.fecha = this.fechaReport.from + ' - ' + this.fechaReport.to
    },
    ver () {
      this.verProd = !this.verProd
      if (this.verProd) {
        this.prod = 8
      } else {
        this.prod = 4
      }
    }
  }
}
</script>
