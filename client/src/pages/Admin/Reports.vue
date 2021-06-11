<template>
  <div>
    <div>
      <q-img :src="'nopublicidad.jpg'" style="height: 200px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px" basic>
        <div class="absolute-full">
          <div class="absolute-center full-width text-bold text-h5 text-center">
            Reporte y Estadistica
          </div>
        </div>
      </q-img>
    </div>

    <div>
      <div class="text-h6 q-ma-sm text-grey-8">Estadísticas de ventas</div>
      <div class="row justify-center q-px-sm">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-sm">
          <q-select borderless v-model="reportV" @input="fechaVentas = ''" color="black" :options="typeReport" label="Seleccione el tipo de reporte" />
        </div>
        <div v-if="reportV == 'Mensual' || reportV == 'Anual'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-select v-model="fechaVentas" color="black" :options="reportV == 'Mensual' ? meses : años" :label="reportV == 'Mensual' ? 'Seleccione el Mes' : reportV == 'Anual' ? 'Seleccione el Año' : ''">
            <template v-slot:append>
              <q-icon name="event" />
            </template>
          </q-select>
        </div>
        <div v-else-if="reportV == 'Semanal'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-input @click="fchRepotV()" v-model="fechaVentas" label="Seleccione la Semana">
            <template v-slot:append>
              <q-icon name="event" />
            </template>
          </q-input>
        </div>
      </div>

      <div class="column items-center q-mb-lg">
        <div class="bg-primary q-pa-xs" style="width: 100%;">
          <div class="text-white text-center text-caption">Ventas</div>
          <div class="text-white text-center text-caption">Diarias</div>
        </div>
        <div class="bg-blue-14 q-pa-xs" style="width: 100%;">
          <GChart type="ColumnChart" :data="chartData" :options="chartOptions"/>
        </div>
      </div>
    </div>

    <div>
      <div class="text-h6 q-ma-sm text-grey-8">Estadística de membresias vendidas</div>
      <div class="row justify-center q-px-sm">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-sm">
          <q-select borderless v-model="reportM" @input="fechaMembresias = ''" color="black" :options="typeReport" label="Seleccione el tipo de reporte" />
        </div>
        <div v-if="reportM == 'Mensual' || reportM == 'Anual'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-select v-model="fechaMembresias" color="black" :options="reportM == 'Mensual' ? meses : años" :label="reportM == 'Mensual' ? 'Seleccione el Mes' : reportM == 'Anual' ? 'Seleccione el Año' : ''">
            <template v-slot:append>
              <q-icon name="event" />
            </template>
          </q-select>
        </div>
        <div v-else-if="reportM == 'Semanal'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-input @click="fchRepotM()" v-model="fechaMembresias" label="Seleccione la Semana">
            <template v-slot:append>
              <q-icon name="event" />
            </template>
          </q-input>
        </div>
      </div>

      <div class="column items-center q-mb-lg">
        <div class="bg-primary q-pa-xs" style="width: 100%;">
          <div class="text-white text-center text-caption">Ventas</div>
          <div class="text-white text-center text-caption">Diarias</div>
        </div>
        <div class="bg-blue-14 q-pa-xs" style="width: 100%;">
          <GChart type="ColumnChart" :data="chartData" :options="chartOptions"/>
        </div>
      </div>
    </div>

    <div>
      <div class="text-h6 q-ma-sm text-grey-8">Estadísticas de retiros</div>
      <div class="row justify-center q-px-sm">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-sm">
          <q-select borderless v-model="reportR" @input="fechaRetiros = ''" color="black" :options="typeReport" label="Seleccione el tipo de reporte" />
        </div>
        <div v-if="reportR == 'Mensual' || reportR == 'Anual'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-select v-model="fechaRetiros" color="black" :options="reportR == 'Mensual' ? meses : años" :label="reportR == 'Mensual' ? 'Seleccione el Mes' : reportR == 'Anual' ? 'Seleccione el Año' : ''">
            <template v-slot:append>
              <q-icon name="event" />
            </template>
          </q-select>
        </div>
        <div v-else-if="reportR == 'Semanal'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-input @click="fchRepotR()" v-model="fechaRetiros" label="Seleccione la Semana">
            <template v-slot:append>
              <q-icon name="event" />
            </template>
          </q-input>
        </div>
      </div>

      <div class="column items-center">
        <div class="bg-primary q-pa-xs" style="width: 100%;">
          <div class="text-white text-center text-caption">Ventas</div>
          <div class="text-white text-center text-caption">Diarias</div>
        </div>
        <div class="bg-blue-14 q-pa-xs" style="width: 100%;">
          <GChart type="ColumnChart" :data="chartData" :options="chartOptions"/>
        </div>
      </div>
    </div>

    <q-dialog v-model="fecha">
      <div>
        <q-date v-model="fechaReport" @input="selecFecha()" range />
      </div>
    </q-dialog>
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
      fecha: false,
      fechaV: false,
      fechaM: false,
      fechaR: false,
      reportV: '',
      reportM: '',
      reportR: '',
      fechaVentas: '',
      fechaMembresias: '',
      fechaRetiros: '',
      fechaReport: { from: '2021/07/08', to: '2021/07/17' },
      typeReport: ['Semanal', 'Mensual', 'Anual'],
      meses: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      años: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
    }
  },
  mounted () {
  },
  methods: {
    selecFecha () {
      if (this.fechaV) {
        this.fechaVentas = this.fechaReport.from + ' - ' + this.fechaReport.to
      } else if (this.fechaM) {
        this.fechaMembresias = this.fechaReport.from + ' - ' + this.fechaReport.to
      } else if (this.fechaR) {
        this.fechaRetiros = this.fechaReport.from + ' - ' + this.fechaReport.to
      }
    },
    fchRepotV () {
      this.fecha = !this.fecha
      this.fechaV = true
      this.fechaM = false
      this.fechaR = false
    },
    fchRepotM () {
      this.fecha = !this.fecha
      this.fechaM = true
      this.fechaV = false
      this.fechaR = false
    },
    fchRepotR () {
      this.fecha = !this.fecha
      this.fechaR = true
      this.fechaV = false
      this.fechaM = false
    }
  }
}
</script>
