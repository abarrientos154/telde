<template>
  <div>
    <q-img :src="'nopublicidad.jpg'" style="height: 150px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px">
      <div class="absolute-full">
        <div class="absolute-center full-width text-bold text-h5 text-center"></div>
      </div>
    </q-img>

      <div class="text-h6 q-ma-lg text-grey-8">Resumen de ventas</div>
      <q-scroll-area horizontal style="height: 190px;">
        <div class="row no-wrap">
          <q-card class="bg-blue-14 column justify-between q-mx-md" style="height: 175px; width: 275px; border-radius: 30px;">
            <q-card-section class="col">
            </q-card-section>
            <q-card-section>
              <div class="text-h6 text-white text-bold">Ventas Diarias</div>
              <div class="text-h4 text-bold text-white">€{{ventas.diarias}}</div>
            </q-card-section>
          </q-card>
          <q-card class="bg-blue-14 column justify-between" style="height: 175px; width: 275px; border-radius: 30px;">
            <q-card-section class="col">
            </q-card-section>
            <q-card-section>
              <div class="text-h6 text-white text-bold">Ventas Mensuales</div>
              <div class="text-h4 text-bold text-white">€{{ventas.mensuales}}</div>
            </q-card-section>
          </q-card>
        </div>
      </q-scroll-area>

      <div class="text-h6 q-ma-lg text-grey-8">Ultimas tiendas registradas</div>
      <div v-if="tiendas.length" class="row q-pa-sm">
        <div v-for="(item, index) in tiendas"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
          <q-card bordered style="width: 100%; border-radius:25px;">
            <q-card-section horizontal>
              <q-card-section>
                <div class="column items-center justify-center full-height">
                  <q-img style="height: 140px; width: 120px; border-radius:25px;" :src=" baseuTienda + item._id"/>
                </div>
              </q-card-section>

              <q-card-section class="q-pl-xs column justify-between col">
                <div>
                  <div class="text-h6 text-bold">{{item.nombre}}</div>
                  <div class="text-bold text-subtitle2">Fecha de vencimiento</div>
                </div>
                <div class="text-subtitle4 text-grey">01/08/2021</div>
                <q-btn color="primary" label="Cambiar estado" style="border-radius:10px;" @click="estadoUser(item)" no-caps/>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div v-else class="text-center text-h6 q-my-lg">No existen tiendas registradas</div>
      <div v-if="tiendas.length > 2" class="row justify-center q-ma-md">
        <q-btn rounded class="q-pa-xs" color="primary" @click="verMasTiendas()" :label="ver1 ? 'Ver menos' : 'Ver más'" style="width: 80%;" no-caps/>
      </div>

      <div class="text-h6 q-ma-lg text-grey-8">Pendientes por aprobar</div>
      <div v-if="pendientes.length">
        <div class="q-py-sm row justify-center" v-for="(card, index) in pendientes" :key="index">
          <q-card clickable v-ripple class="column justify-between" style="height: 175px; width: 80%; border-radius: 30px; min-width: 300px"
          @click="selecRetiro = card, verRetiro = true">
            <q-card-section>
              <div class="row justify-around">
                <div>
                  <div class="row">
                    <div class="text-h6 text-black q-mr-sm text-weight-bolder">Estado: </div>
                    <div class="text-orange text-h6 text-weight-bolder">{{card.status}}</div>
                  </div>
                  <div class="column">
                    <div class="text-h6 text-black q-mr-sm text-weight-bolder">Fecha de solicitud</div>
                    <div class="text-caption text-grey-7">{{formatData(card.created_at)}}</div>
                  </div>
                  <div class="row">
                    <div class="text-h6 text-black q-mr-sm text-weight-bolder">Saldo retirado </div>
                    <div class="text-h6 text-grey-7 text-weight-bolder">€{{card.monto}}</div>
                  </div>
                </div>
                <div class="row justify-center items-center">
                  <q-btn color="orange" text-color="white" icon="remove" style="border-radius: 10px; height: 55px; width: 100%;" no-caps
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
      </div>
      </div>
      <div v-else class="text-center text-h6 q-my-lg">No tienes solicitudes</div>
      <div v-if="pendientes.length > 2" class="row justify-center q-ma-md">
        <q-btn rounded class="q-pa-xs" color="primary" text-color="white" @click="verMasRetiros()" :label="ver2 ? 'Ver menos' : 'Ver más'" style="width: 80%;" no-caps/>
      </div>

      <div class="text-h6 q-ma-lg text-grey-8">Reporte de ventas</div>
      <div class="row justify-center q-px-sm">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-sm">
          <q-select borderless v-model="report" @input="vaciar()" color="black" :options="typeReport" label="Seleccione el tipo de reporte" />
        </div>
        <div v-if="report == 'Anual' || report == 'Mensual'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-md q-px-xs">
          <q-input borderless readonly v-model="fecha" :label="report == 'Anual' ? 'Seleccione el año' : 'Seleccione el mes'" :mask="report == 'Anual' ? '####' : '##'">
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
        <q-btn :disable="fecha === null ? true : false" rounded class="q-pa-xs" color="primary" label="Ver estadística" style="width: 90%;" no-caps
        @click="getReport()"/>
      </div>

      <div class="column items-center">
        <div class="bg-primary q-pa-xs" style="width: 90%;">
          <div class="text-white text-center text-caption">Ventas</div>
          <div class="text-white text-center text-caption">Diarias</div>
        </div>
        <div class="bg-blue-14 q-pa-xs" style="width: 90%;">
          <GChart v-if="verEstadistica" type="ColumnChart" :data="chartData" :options="chartOptions"/>
        </div>
      </div>

      <div class="text-h6 q-ma-lg text-grey-8 text-center">Cambia tu publicidad</div>
      <div style="height: 200px; width: 100%;">
        <q-img style="height: 100%; width:100%" :src="!principal.nuevo ? baseuPublicidad + principal.fileName : principal.fileName">
          <q-icon name="mode_edit" class="absolute-top-right q-ma-sm" size="30px" color="black" @click="editPublicidad(principal)"/>
          <div class="absolute-bottom">
            <div class="text-white text-h6">PUBLICIDAD PRINCIPAL</div>
          </div>
        </q-img>
      </div>

      <q-scroll-area horizontal style="height: 210px;" class="q-my-md">
        <div class="row no-wrap q-gutter-md q-px-md">
          <q-card v-for="(img, index) in publicidad1" :key="index" style="border-radius: 24px; height: 200px; width: 300px;">
            <q-img style="height: 100%; width:100%" :src="!img.nuevo ? baseuPublicidad + img.fileName : img.fileName">
              <q-btn round flat icon="mode_edit" class="absolute-top-right" size="20px" color="black"  @click="editPublicidad(img)"/>
              <div class="absolute-bottom">
                <div class="text-white text-h6">PUBLICIDAD {{index + 1}}</div>
              </div>
            </q-img>
          </q-card>
        </div>
      </q-scroll-area>

      <q-scroll-area horizontal style="height: 210px;" class="q-mb-md">
        <div class="row no-wrap q-gutter-md q-px-md">
          <q-card v-for="(img, index) in publicidad2" :key="index" style="border-radius: 24px; height: 200px; width: 300px;">
            <q-img style="height: 100%; width:100%" :src="!img.nuevo ? baseuPublicidad + img.fileName : img.fileName">
              <q-btn round flat icon="mode_edit" class="absolute-top-right" size="20px" color="black"  @click="editPublicidad(img)"/>
              <div class="absolute-bottom">
                <div class="text-white text-h6">PUBLICIDAD {{index + 3}}</div>
              </div>
            </q-img>
          </q-card>
        </div>
      </q-scroll-area>

    <q-dialog v-model="estado">
        <q-card style="width: 300px; border-radius:25px;">
          <q-card-section>
            <div class="text-h6 text-center">Administración Usuarios</div>
          </q-card-section>
          <q-separator inset />
          <q-card-section>
            <div class="text-subtitle1 text-bold q-mb-sm">Datos del usuario</div>
            <div class="row items-center">
              <div class="col">
                <div>Nombre de usuario</div>
                <div class="text-caption text-grey-8">{{user.nombre}}</div>
                <div>Correo de contacto</div>
                <div class="text-caption text-grey-8">{{user.email}}</div>
                <div>Telefono de contacto</div>
                <div class="text-caption text-grey-8">{{user.telefono}}</div>
              </div>
              <div class="col-5">
                <q-img style="height: 100px; width: 100px; border-radius:25px;" :src=" baseuTienda + user._id"/>
              </div>
            </div>
          </q-card-section>
          <q-separator inset />
          <q-card-section class="col">
            <div class="q-mb-xl">
              <div class="text-subtitle1 text-bold q-mb-sm">Suspensión de ingreso</div>
              <div>
                <div class="row justify-between q-mb-sm">
                  <div>
                    <div>Suspensión</div>
                    <div class="text-caption text-grey-8" style="width: 200px">El usuario no podrá ingresar con su cuenta al sistema</div>
                  </div>
                  <q-toggle v-model="user.enable" checked-icon="lock_open" color="green" unchecked-icon="lock"/>
                </div>
                <div class="row items-center justify-between">
                <div>
                  <div>Fecha vencimiento membresia</div>
                  <div class="text-caption text-grey-8">12/08/2021</div>
                  <q-chip :color="user.status === 2 ? 'positive' : 'red'" text-color="white">
                    {{user.status === 2 ? 'Membresia activa' : 'Membresia vencida'}}
                  </q-chip>
                </div>
                <q-icon class="q-mr-sm" size="md" name="event" />
              </div>
              </div>
            </div>
            <div class="column items-center">
              <q-btn rounded class="q-pa-xs" color="primary" label="Guardar" @click="modificarEstado()" style="width: 60%" no-caps/>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

    <q-dialog v-model="publicidad">
      <q-card class="q-py-md" style="width: 100%; border-radius:25px;">
        <q-card-section>
          <q-q-card style="height: 200px; width: 100%; border-radius:25px;">
            <q-img style="height: 200px; width: 100%" :src="mostrarImg">
              <q-file borderless class="absolute-top-right button-camera q-mt-md" v-model="publicidadFile" @input="publicidad_img()" accept=".jpg, image/*">
                <q-icon name="mode_edit" size="30px" color="black" />
              </q-file>
            </q-img>
          </q-q-card>
        </q-card-section>
        <q-card-section class="q-mt-md">
          <q-input v-model="form.ruta" label="Ingrese URL" error-message="Requerido" :error="$v.form.ruta.$error" @blur="$v.form.ruta.$touch()">
            <template v-slot:append>
              <q-icon name="language" />
            </template>
          </q-input>
          <div class="row justify-center q-mt-md">
            <q-btn rounded class="q-pa-xs" color="primary" label="Guardar" style="width: 75%;" @click="actualizarP()" no-caps/>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="verRetiro">
        <q-card class="q-py-md" style="width: 100%; border-radius: 30px">
          <q-card-section>
            <div class="text-h6 text-center text-bold q-mb-lg">Estado de solicitud</div>
            <div class="row justify-between items-start">
              <div>
                <div class="row">
                  <div class="text-h6 text-black q-mr-sm text-bold">Estado: </div>
                  <div :class="selecRetiro.status === 'Aprobado' ? 'text-blue' : 'text-orange'" class="text-h6 text-bold">{{selecRetiro.status}}</div>
                </div>
                <div class="text-h6 text-black q-mr-sm text-bold">Fecha de solicitud</div>
                <div class="text-subtitle1 text-grey-7">{{formatData(selecRetiro.created_at)}}</div>
                <div class="text-h6 text-black q-mr-sm text-bold">Fecha de aprobación</div>
                <div class="text-subtitle1 text-grey-7">{{selecRetiro.status === 'Aprobado' ? selecRetiro.updated_at : 'Aún no hay fecha disponible'}}</div>
                <div class="row q-mt-xl">
                  <div class="text-h6 text-black q-mr-sm text-bold">Saldo solicitado </div>
                  <div class="text-h6 text-grey-7 text-bold">€{{selecRetiro.monto}}</div>
                </div>
              </div>
              <div class="row justify-center items-center">
                  <q-btn :color="selecRetiro.status === 'Aprobado' ? 'blue' : 'orange'" text-color="white" :icon="selecRetiro.status === 'Aprobado' ? 'north' : 'remove'" style="border-radius: 10px; height: 55px; width: 100%;" no-caps/>
              </div>
            </div>
            <div class="row justify-center items-center q-mt-md">
              <q-btn color="primary" style="width: 80%;" label="Aprobar" no-caps rounded
              @click="aprobar()"/>
            </div>
          </q-card-section>
        </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { GChart } from 'vue-google-charts'
import env from '../../env'
import moment from 'moment'
export default {
  components: {
    GChart
  },
  data () {
    return {
      verRetiro: false,
      verEstadistica: false,
      estado: false,
      ver1: false,
      ver2: false,
      publicidad: false,
      publicidadFile: null,
      mostrarImg: null,
      baseuTienda: '',
      baseuPublicidad: '',
      report: '',
      fecha: null,
      selecRetiro: {},
      user: {},
      ventas: {},
      form: {},
      fechaSemanal: {},
      chartOptions: {
        height: 200,
        legend: { position: 'none' },
        bar: { groupWidth: '20%' },
        isStacked: true,
        colors: ['blue']
      },
      chartData: [
        ['Genre', 'Ventas', { role: 'annotation' }]
      ],
      allTiendas: [],
      tiendas: [],
      allPendientes: [],
      pendientes: [],
      typeReport: ['Semanal', 'Mensual', 'Anual'],
      principal: [],
      publicidad1: [],
      publicidad2: []
    }
  },
  validations: {
    form: {
      ruta: { required }
    }
  },
  mounted () {
    this.baseuTienda = env.apiUrl + '/perfil_img/'
    this.baseuPublicidad = env.apiUrl + '/publicidad_img/'
    this.getVentas()
    this.getTiendas()
    this.getRetiros()
    this.getPublicidad()
  },
  methods: {
    getVentas () {
      this.$api.get('ventas_dia_mes').then(res => {
        if (res) {
          this.ventas = res
          console.log(this.ventas)
        }
      })
    },
    getTiendas () {
      this.$api.get('proveedores').then(res => {
        if (res) {
          this.allTiendas = res.reverse()
          this.tiendas = this.allTiendas.slice(0, 2)
        }
      })
    },
    getRetiros () {
      this.$api.get('retiros_admin').then(res => {
        if (res) {
          this.allPendientes = res.filter(v => v.status === 'Pendiente')
          this.pendientes = this.allPendientes.slice(0, 2)
        }
      })
    },
    getPublicidad () {
      this.$api.get('publicidad').then(res => {
        if (res) {
          this.principal = res.find(v => v.tipo === 'principal')
          this.publicidad1 = res.filter(v => v.tipo === 'publicidad1')
          this.publicidad2 = res.filter(v => v.tipo === 'publicidad2')
        }
      })
    },
    getReport () {
      this.$q.loading.show({
        message: 'Construyendo datos'
      })
      this.$api.post('estadistica_admin', { type: this.report, fecha: this.fecha }).then(res => {
        if (res) {
          this.chartData = res
          this.verEstadistica = true
          this.$q.loading.hide()
        } else {
          this.$q.loading.hide()
        }
      })
    },
    estadoUser (item) {
      this.estado = true
      this.user = { ...item }
    },
    modificarEstado () {
      this.$q.dialog({
        title: 'Confirma',
        message: '¿Seguro deseas guardar esta configuración?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$api.put('update_enable/' + this.user._id, { enable: this.user.enable }).then(res => {
          if (res) {
            this.estado = false
            this.getTiendas()
          }
        })
      }).onCancel(() => {
        // cancel
        this.estado = false
      })
    },
    aprobar () {
      this.$q.dialog({
        title: 'Confirma',
        message: '¿Seguro deseas aprobar esta solicitud?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$api.get('aprobar_retiro/' + this.selecRetiro._id).then(res => {
          if (res) {
            this.getRetiros()
            this.verRetiro = false
          }
        })
      }).onCancel(() => {
        // cancel
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
    formatData (dat) {
      var data = moment(dat).format('DD/MM/YYYY')
      return data
    },
    editPublicidad (item) {
      this.form = { ...item }
      this.$v.form.$reset()
      this.publicidadFile = null
      this.mostrarImg = !this.form.nuevo ? this.baseuPublicidad + item.fileName : item.fileName
      this.publicidad = true
    },
    publicidad_img () {
      var img = ''
      var cc = {}
      cc = this.publicidadFile
      img = URL.createObjectURL(cc)
      this.mostrarImg = img
    },
    async actualizarP () {
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        this.$q.loading.show({
          message: 'Actualizando publicidad'
        })
        var formData = new FormData()
        if (this.publicidadFile) {
          this.form.buscar_file = true
          formData.append('files', this.publicidadFile)
        }
        formData.append('dat', JSON.stringify(this.form))
        await this.$api.put('publicidad/' + this.form._id, formData, {
          headers: {
            'Content-Type': undefined
          }
        }).then((res) => {
          this.$q.notify({
            message: 'La publicidad se actualizo con exito',
            color: 'positive'
          })
          this.getPublicidad()
          this.$q.loading.hide()
          this.publicidad = false
        })
      }
    },
    verMasTiendas () {
      if (!this.ver1) {
        this.tiendas = this.allTiendas
      } else {
        this.tiendas = this.allTiendas.slice(0, 2)
      }
      this.ver1 = !this.ver1
    },
    verMasRetiros () {
      if (!this.ver2) {
        this.pendientes = this.allPendientes
      } else {
        this.pendientes = this.allPendientes.slice(0, 2)
      }
      this.ver2 = !this.ver2
    }
  }
}
</script>

<style lang="scss" scoped>
.button-camera {
  text-decoration: none;
  padding: 10px;
  font-weight: 540;
  font-size: 0px;
  color: white;
  background-color: none;
  border-radius: 100%;
  height:50px;
  width:50px;
}
</style>
