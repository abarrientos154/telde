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
              <div class="text-h4 text-bold text-white">€35,291</div>
            </q-card-section>
          </q-card>
          <q-card class="bg-blue-14 column justify-between" style="height: 175px; width: 275px; border-radius: 30px;">
            <q-card-section class="col">
            </q-card-section>
            <q-card-section>
              <div class="text-h6 text-white text-bold">Ventas Mensuales</div>
              <div class="text-h4 text-bold text-white">€35,291</div>
            </q-card-section>
          </q-card>
        </div>
      </q-scroll-area>

      <div class="text-h6 q-ma-lg text-grey-8">Ultimas tiendas registradas</div>
      <div v-if="tiendas.length <= 2" class="row q-pa-sm">
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
                <q-btn color="light-green-13" text-color="white" label="Cambiar estado" style="border-radius:10px;" @click="estadoUser(item)" no-caps/>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div v-else-if="ver1" class="row q-pa-sm">
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
                <q-btn color="light-green-13" text-color="white" label="Cambiar estado" style="border-radius:10px;" @click="estadoUser(item)" no-caps/>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div v-else class="row q-pa-sm">
        <div v-for="index in 2"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
          <q-card bordered style="width: 100%; border-radius:25px;">
            <q-card-section horizontal>
              <q-card-section>
                <div class="column items-center justify-center full-height">
                  <q-img style="height: 140px; width: 120px; border-radius:25px;" :src=" baseuTienda + tiendas[index - 1]._id"/>
                </div>
              </q-card-section>

              <q-card-section class="q-pl-xs column justify-between col">
                <div>
                  <div class="text-h6 text-bold">{{tiendas[index - 1].nombre}}</div>
                  <div class="text-bold text-subtitle2">Fecha de vencimiento</div>
                </div>
                <div class="text-subtitle4 text-grey">01/08/2021</div>
                <q-btn color="light-green-13" text-color="white" label="Cambiar estado" style="border-radius:10px;" @click="estadoUser(tiendas[index - 1])" no-caps/>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div v-if="tiendas.length > 2" class="row justify-center q-ma-md">
        <q-btn rounded class="q-pa-xs" color="light-green-13" text-color="white" @click="ver1 = !ver1" :label="ver1 ? 'Ver menos' : 'Ver más'" style="width: 75%;" no-caps/>
      </div>

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
                <div class="text-caption text-grey">{{user.roles[0] === 2 ? user.name : user.nombre}}</div>
                <div>Correo de contacto</div>
                <div class="text-caption text-grey">{{user.email}}</div>
                <div v-if="user.roles[0] === 2">Telefono de contacto</div>
                <div v-if="user.roles[0] === 2" class="text-caption text-grey">{{user.telefono}}</div>
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
                    <div class="text-caption text-grey" style="width: 200px">El usuario no podrá ingresar con su cuenta al sistema</div>
                  </div>
                  <q-toggle v-model="user.enable" checked-icon="lock_open" color="green" unchecked-icon="lock"/>
                </div>
                <div class="row items-center justify-between">
                  <div>
                    <div>Fecha vencimiento membresia</div>
                    <div class="text-caption text-grey">12/08/2021</div>
                  </div>
                  <q-icon class="q-mr-sm" size="md" name="event" />
                </div>
              </div>
            </div>
            <div class="column items-center">
              <q-btn rounded class="q-pa-xs" color="light-green-13" text-color="white" label="Guardar" @click="modificarEstado()" style="width: 60%" no-caps/>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

    <div>
      <div class="text-h6 q-ma-lg text-grey-8">Pendientes por aprobar</div>
      <div v-if="pendientes.length <= 2" class="row q-pa-sm">
        <div v-for="(item, index) in pendientes"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
          <q-card bordered style="width: 100%; border-radius:25px;">
            <div class="row justify-between items-center q-py-sm  q-px-md">
              <div>
                <div class="row q-mb-xs">
                  <div>Estado: </div>
                  <div :class="item.status ? 'text-blue-14 q-ml-xs' : 'text-amber-9 q-ml-xs'">{{item.status ? 'APROBADO' : 'PENDIENTE'}}</div>
                </div>
                <div class="q-mb-xs">
                  <div>Fecha de solicitud</div>
                  <div class="text-caption text-grey">12/08/2021</div>
                </div>
                <div class="row">
                  <div>Saldo retirado</div>
                  <div class="text-grey q-ml-xs">€0</div>
                </div>
              </div>
              <q-btn size="20px" class="q-pa-xs" @click="aprobar(item)" :icon="item.status ? 'arrow_upward' : 'remove'" :color="item.status ? 'blue-14' : 'amber-9'" text-color="white" style="border-radius:10px;" no-caps/>
            </div>
          </q-card>
        </div>
      </div>
      <div v-else-if="ver2" class="row q-pa-sm">
        <div v-for="(item, index) in pendientes"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
          <q-card bordered style="width: 100%; border-radius:25px;">
            <div class="row justify-between items-center q-pa-sm q-px-md">
              <div>
                <div class="row q-mb-xs">
                  <div>Estado:</div>
                  <div :class="item.status ? 'text-blue-14 q-ml-xs' : 'text-amber-9 q-ml-xs'">{{item.status ? 'APROBADO' : 'PENDIENTE'}}</div>
                </div>
                <div  class="q-mb-xs">
                  <div>Fecha de solicitud</div>
                  <div class="text-caption text-grey">12/08/2021</div>
                </div>
                <div class="row">
                  <div>Saldo retirado</div>
                  <div class="text-grey q-ml-xs">€0</div>
                </div>
              </div>
              <q-btn size="20px" class="q-pa-xs" @click="aprobar(item)" :icon="item.status ? 'arrow_upward' : 'remove'" :color="item.status ? 'blue-14' : 'amber-9'" text-color="white" style="border-radius:10px;" no-caps/>
            </div>
          </q-card>
        </div>
      </div>
      <div v-else class="row q-pa-sm">
        <div v-for="index in 2"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
          <q-card bordered style="width: 100%; border-radius:25px;">
            <div class="row justify-between items-center q-pa-sm q-px-md">
              <div>
                <div class="row q-mb-xs">
                  <div>Estado: </div>
                  <div :class="pendientes[index - 1].status ? 'text-blue-14 q-ml-xs' : 'text-amber-9 q-ml-xs'">{{pendientes[index - 1].status ? 'APROBADO' : 'PENDIENTE'}}</div>
                </div>
                <div  class="q-mb-xs">
                  <div>Fecha de solicitud</div>
                  <div class="text-caption text-grey">12/08/2021</div>
                </div>
                <div class="row">
                  <div>Saldo retirado</div>
                  <div class="text-grey q-ml-xs">€0</div>
                </div>
              </div>
              <q-btn size="20px" class="q-pa-xs" @click="aprobar(pendientes[index - 1])" :icon="pendientes[index - 1].status ? 'arrow_upward' : 'remove'" :color="pendientes[index - 1].status ? 'blue-14' : 'amber-9'" text-color="white" style="border-radius:10px;" no-caps/>
            </div>
          </q-card>
        </div>
      </div>
      <div v-if="pendientes.length > 2" class="row justify-center q-ma-md">
        <q-btn rounded class="q-pa-xs" color="light-green-13" text-color="white" @click="ver2 = !ver2" :label="ver2 ? 'Ver menos' : 'Ver más'" style="width: 75%;" no-caps/>
      </div>
    </div>

    <div>
      <div class="row justify-center q-px-lg q-mt-xl q-mb-sm">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-my-xs">
          <q-select v-model="report" :options="typeReport" label="Seleccione el tipo de reporte" />
        </div>
        <div v-if="report == 'Reporte mensual' || report == 'Reporte anual'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-sm q-px-xs">
          <q-select v-model="fecha" :options="report == 'Reporte mensual' ? meces : años" :label="report == 'Reporte mensual' ? 'Seleccione el mes' : report == 'Reporte anual' ? 'Seleccione el año' : ''">
            <template v-slot:append>
              <q-icon name="event" />
            </template>
          </q-select>
        </div>
        <div v-else-if="report == 'Reporte semanal'" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 q-mb-sm q-px-xs">
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
      <div class="column items-center q-mb-xs">
        <div class="bg-light-green-13 q-pa-xs" style="width: 100%;">
          <div class="text-white text-center text-caption">Ventas</div>
          <div class="text-white text-center text-caption">Diarias</div>
        </div>
        <div class="bg-blue-14 q-pa-xs" style="width: 100%;">
          <GChart type="ColumnChart" :data="chartData" :options="chartOptions"/>
        </div>
      </div>
    </div>

    <div>
      <div class="text-h6 q-ma-lg text-grey-8 text-center">Cambia tu publicidad</div>
      <div>
        <q-avatar square style="height: 200px; width: 100%;" :class="slidePrincipal !=  null ? 'q-mb-md':'bg-secondary q-mb-md'">
          <q-img style="height: 100%;" :src="slidePrincipal !=  null ? slidePrincipal : ''">
            <q-icon name="mode_edit" class="absolute-top-right q-ma-sm" size="30px" color="black" />
          </q-img>
        </q-avatar>
      </div>
      <q-scroll-area horizontal style="height: 200px;" class="q-mb-md">
        <div class="row no-wrap">
          <q-avatar rounded style="height: 200px; width: 300px;" class="bg-secondary q-mx-sm" v-for="(img, index) in publicidad1" :key="index">
            <q-img style="height: 100%;" :src="img.fileName != 'nopublicidad.jpg' ? baseuPublicidad + img.fileName : img.fileName">
              <q-btn round flat icon="mode_edit" class="absolute-top-right" size="20px" color="black"  @click="editPublicidad(img)"/>
            </q-img>
          </q-avatar>
        </div>
      </q-scroll-area>
      <q-scroll-area horizontal style="height: 200px;">
        <div class="row no-wrap">
          <q-avatar rounded style="height: 200px; width: 300px;" class="bg-secondary q-mx-sm" v-for="(img, index) in publicidad2" :key="index">
            <q-img style="height: 100%;" :src="img.fileName != 'nopublicidad.jpg' ? baseuPublicidad + img.fileName.src : img.fileName">
              <q-btn round flat icon="mode_edit" class="absolute-top-right" size="20px" color="black"  @click="editPublicidad(img)"/>
            </q-img>
          </q-avatar>
        </div>
      </q-scroll-area>
    </div>

    <q-dialog v-model="publicidad">
      <q-card style="width: 300px; border-radius:25px;">
        <q-card-section>
          <q-avatar rounded style="height: 200px; width: 100%; border-radius:25px;" class="bg-secondary">
            <q-img style="height: 100%;" :src="mostrarImg">
              <q-file borderless v-model="publicidadFile" @input="publicidad_img()" class="q-ma-sm button-camera" accept=".jpg, image/*" style="z-index:1; width: 100%; height: 100%;"/>
              <q-icon name="mode_edit" class="absolute-top-right q-ma-sm" size="30px" color="black" />
            </q-img>
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <q-input v-model="form.ruta" label="Ingrese URL" error-message="Requerido" :error="$v.form.ruta.$error" @blur="$v.form.ruta.$touch()">
            <template v-slot:append>
              <q-icon name="language" />
            </template>
          </q-input>
          <div class="row justify-center q-mt-md">
            <q-btn rounded class="q-pa-xs" color="light-green-13" text-color="white" label="Guardar" style="width: 75%;" @click="actualizarP()" no-caps/>
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
export default {
  components: {
    GChart
  },
  data () {
    return {
      baseuTienda: '',
      baseuPublicidad: '',
      slidePrincipal: null,
      tiendas: [],
      user: { roles: [] },
      estado: false,
      ver1: false,
      pendientes: [{ status: true }, { status: false }, { status: false }, { status: false }],
      ver2: false,
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
      publicidad1: [],
      publicidad2: [],
      publicidad: false,
      form: {},
      publicidadFile: null,
      mostrarImg: null
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
    this.getTiendas()
    this.getPublicidad()
  },
  methods: {
    getTiendas () {
      this.$api.get('proveedores').then(res => {
        if (res) {
          this.tiendas = res
        }
      })
    },
    estadoUser (itm) {
      this.estado = true
      this.user = { ...itm }
      console.log(this.user)
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
    selecFecha () {
      this.fecha = this.fechaReport.from + ' - ' + this.fechaReport.to
    },
    aprobar (itm) {
      this.$q.dialog({
        title: 'Confirma',
        message: '¿Seguro deseas aprobar esta solicitud?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        itm.status = !itm.status
      }).onCancel(() => {
        // cancel
      })
    },
    getPublicidad () {
      this.$api.get('publicidad').then(res => {
        if (res) {
          this.publicidad1 = res.filter(v => v.tipo === 'publicidad1' && v.enable)
          this.publicidad2 = res.filter(v => v.tipo === 'publicidad2' && v.enable)
        }
      })
    },
    async actualizarP () {
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        var formData = new FormData()
        formData.append('dat', JSON.stringify(this.form))
        await this.$api.put('publicidad/' + this.form._id, formData, {
          headers: {
            'Content-Type': undefined
          }
        }).then((res) => {
          this.$q.notify({
            message: 'La publicidad se actualizo con exito',
            color: 'primary'
          })
          this.$q.loading.hide()
        })
      }
    },
    editPublicidad (itm) {
      console.log(itm)
      this.publicidad = !this.publicidad
      this.form = { ...itm }
      this.mostrarImg = this.form.fileName
      console.log(this.mostrarImg)
    },
    convertImg (img) {
      try {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.readAsDataURL(img)
          reader.onload = () => resolve(reader.result)
          reader.onerror = error => reject(error)
        })
      } catch (error) {
        console.log(error)
      }
    },
    publicidad_img () {
      this.form.fileName = { file: this.publicidadFile, src: this.convertImg(this.publicidadFile) }
      this.mostrarImg = URL.createObjectURL(this.publicidadFile)
      this.publicidadFile = null
    }
  }
}
</script>
