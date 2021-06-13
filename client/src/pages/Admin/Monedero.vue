<template>
  <div>
    <q-img :src="'nopublicidad.jpg'" style="height: 150px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px">
      <div class="absolute-full">
        <div class="absolute-center full-width text-bold text-h5 text-center">Monedero</div>
      </div>
    </q-img>

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
                    <div :class="card.status === 'Aprobado' ? 'text-blue' : 'text-orange'" class="text-h6 text-weight-bolder">{{card.status}}</div>
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
                  <q-btn :color="card.status === 'Aprobado' ? 'blue' : 'orange'" text-color="white" :icon="card.status === 'Aprobado' ? 'north' : 'remove'" style="border-radius: 10px; height: 55px; width: 100%;" no-caps
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
      </div>
    </div>
    <div v-else class="text-center text-h6 q-my-lg">No tienes solicitudes</div>
    <div v-if="pendientes.length > 2" class="row justify-center q-ma-md">
      <q-btn rounded class="q-pa-xs" color="primary" @click="verMas()" :label="ver ? 'Ver menos' : 'Ver más'" style="width: 90%;" no-caps/>
    </div>

    <div class="text-center text-h6 q-my-lg text-grey-8">Busca tus retiros</div>
      <div class="q-py-sm row justify-center">
        <q-input borderless readonly dense v-model="form.fecha_inicio" label="Fecha inicio" color="black" mask="date" :rules="['date']" style="width:85%"
        :error="$v.form.fecha_inicio.$error" @blur="$v.form.fecha_inicio.$touch()">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer" size="md">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="form.fecha_inicio">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Cerrar" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input borderless readonly dense v-model="form.fecha_fin" label="Fecha fin" color="black" mask="date" :rules="['date']" style="width:85%"
        :error="$v.form.fecha_fin.$error" @blur="$v.form.fecha_fin.$touch()">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer" size="md">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="form.fecha_fin">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Cerrar" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-separator inset style="width:85%" />
      </div>
        <div class="row justify-end q-mx-lg">
          <q-btn rounded class="q-px-md" color="primary" label="Buscar" no-caps
          @click="filtrar()"/>
        </div>

      <div v-if="retirosFilter.length">
        <div class="q-py-sm row justify-center" v-for="(card, index) in retirosFilter" :key="index">
          <q-card clickable v-ripple class="column justify-between" style="height: 175px; width: 80%; border-radius: 30px; min-width: 300px"
          @click="selecRetiro = card, verRetiro = true">
            <q-card-section>
              <div class="row justify-around">
                <div>
                  <div class="row">
                    <div class="text-h6 text-black q-mr-sm text-weight-bolder">Estado: </div>
                    <div :class="card.status === 'Aprobado' ? 'text-blue' : 'text-orange'" class="text-h6 text-weight-bolder">{{card.status}}</div>
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
                  <q-btn :color="card.status === 'Aprobado' ? 'blue' : 'orange'" text-color="white" :icon="card.status === 'Aprobado' ? 'north' : 'remove'" style="border-radius: 10px; height: 55px; width: 100%;" no-caps
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div v-else class="text-center text-h6 q-my-lg">No tienes solicitudes</div>

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
            <div v-if="selecRetiro.status === 'Pendiente'" class="row justify-center items-center q-mt-md">
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
import moment from 'moment'
export default {
  data () {
    return {
      verRetiro: false,
      ver: false,
      selecRetiro: {},
      form: {},
      retiros: [],
      allPendientes: [],
      pendientes: [],
      retirosFilter: []
    }
  },
  validations: {
    form: {
      fecha_inicio: { required },
      fecha_fin: { required }
    }
  },
  mounted () {
    this.getRetiros()
  },
  methods: {
    getRetiros () {
      this.$api.get('retiros_admin').then(res => {
        if (res) {
          this.retiros = res
          this.allPendientes = res.filter(v => v.status === 'Pendiente')
          this.pendientes = this.allPendientes.slice(0, 2)
        }
      })
    },
    formatData (dat) {
      var data = moment(dat).format('DD/MM/YYYY')
      return data
    },
    filtrar () {
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        if (moment(this.form.fecha_inicio) < moment(this.form.fecha_fin)) {
          this.retirosFilter = this.retiros.filter(v => moment(v.created_at) >= moment(this.form.fecha_inicio) && moment(v.created_at) <= moment(this.form.fecha_fin))
        } else {
          this.$q.dialog({
            title: 'Atención',
            message: 'La fecha de inicio debe ser menor a la fecha final de búsqueda',
            cancel: false
          }).onOk(() => {
            // console.log('>>>> Ok')
          }).onCancel(() => {
            // console.log('>>>> Cancel')
          })
        }
      }
    },
    verMas () {
      if (!this.ver) {
        this.pendientes = this.allPendientes
      } else {
        this.pendientes = this.allPendientes.slice(0, 2)
      }
      this.ver = !this.ver
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
    }
  }
}
</script>
