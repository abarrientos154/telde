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
              <q-btn class="q-pa-xs col" color="light-green-13" text-color="white" label="Solicitar" style="border-radius: 15px;" no-caps/>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="q-pa-lg text-center text-h6 text-grey-8">Estadísticas de ventas</div>
      <div class="row q-px-lg q-mb-lg">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md">
          <q-select v-model="report" :options="typeReport" label="Seleccione el tipo de reporte" />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md">
          <q-select v-model="fecha" :options="report == 'Reporte mensual' ? meces : años" label="Seleccione el mes">
            <template v-slot:append>
              <q-icon name="event" />
            </template>
          </q-select>
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
        <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3 q-mb-md q-px-sm" v-for="index in 4" :key="index">
          <q-img src="nopublicidad.jpg" style="height: 175px; width: 100%;" basic/>
          <div>
            <div class="row items-center justify-between">
              <q-rating max="5" size="16px" v-model="rating" color="yellow-8" icon="star_border" icon-selected="star" icon-half="star_half" no-dimming />
              <div style="font-size: 10px">Fecha de venta</div>
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
        <q-btn rounded class="q-pa-xs" color="light-green-13" text-color="white" label="Ver más productos" style="width: 90%;" no-caps/>
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
        ['01', 10, 24, ''],
        ['02', 16, 22, ''],
        ['03', 28, 19, ''],
        ['04', 28, 19, ''],
        ['05', 28, 19, '']
      ],
      chartOptions: {
        height: 200,
        legend: { position: 'none' },
        bar: { groupWidth: '10%' },
        isStacked: true,
        colors: ['yellow', 'blue']
      },
      typeReport: ['Reporte mensual'],
      meces: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      años: [],
      report: '',
      fecha: '',
      rating: 4
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
