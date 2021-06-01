<template>
  <div>
    <q-img :src="'nopublicidad.jpg'" style="height: 150px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px">
      <div class="absolute-full">
        <div class="absolute-center full-width text-bold text-h5 text-center">Monedero</div>
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
                @click="retiro = null, $v.retiro.$reset(), solicitar = true"/>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="text-h6 q-ma-lg text-grey-8">Ultimas solicitudes</div>
      <div v-if="ultimas.length">
        <div class="q-py-sm row justify-center" v-for="(card, index) in ultimas" :key="index">
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
                    <div class="text-caption text-grey-7">{{card.created_at}}</div>
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
        <div v-if="noMas" class="row justify-center q-mb-lg q-my-sm">
          <q-btn rounded class="q-pa-xs" color="primary" label="Ver más" style="width: 90%;" no-caps
          @click="verMas()"/>
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
        <div class="row justify-end q-mx-lg">
          <q-btn rounded class="q-px-md" color="primary" label="Buscar" no-caps
          />
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
                    <div class="text-caption text-grey-7">{{card.created_at}}</div>
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

      <q-dialog v-model="solicitar">
        <q-card style="width: 100%; border-radius: 30px">
          <q-card-section>
            <div class="text-h6 text-center">Solicitud de retiro</div>
          </q-card-section>
          <q-card-section>
            <div class="row justify-center">
              <q-card class="bg-blue column justify-between" style="height: 175px; width: 100%; border-radius: 30px">
                <q-card-section class="col">
                </q-card-section>
                <q-card-section>
                  <div class="text-caption text-white">Dinero de tu monedero</div>
                  <div class="row items-center">
                    <div class="text-h4 text-bold text-white q-mr-sm">€{{saldo_actual}}</div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="text-subtitle2 text-grey-8 q-mt-md">Cuanto desea retirar</div>
            <q-input v-model="retiro" filled
            error-message="Requerido" :error="$v.retiro.$error" @blur="$v.retiro.$touch()"
            />
          </q-card-section>
          <q-card-actions class="q-py-md" align="center">
            <div class="q-pb-md">
              <q-btn rounded no-caps color="primary" label="Solicitar" style="width:200px;"
              @click="retirar()"/>
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="exitoso">
        <q-card class="q-py-md" style="width: 100%; border-radius: 30px">

          <q-card-section class="q-pt-xl">
            <div class="row justify-center">
              <q-img src="fondo1.jpg" style="width:60%;height:170px; border-radius: 20px" >
              </q-img>
            </div>
          </q-card-section>
          <q-card-section>
            <div>
              <div class="text-h6 text-center text-bold">Retiro solicitado con éxito</div>
              <div class="text-caption text-center text-grey-8">Ahora podrás ver todos tus retiros en tu Dashboard principal</div>
            </div>
          </q-card-section>
          <q-card-actions class="q-py-md" align="center">
            <div class="q-pb-md">
              <q-btn rounded no-caps color="primary" label="Finalizar" style="width:200px;"
              @click="exitoso = false" />
            </div>
          </q-card-actions>
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
                <div class="text-subtitle1 text-grey-7">{{selecRetiro.created_at}}</div>
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
          </q-card-section>
        </q-card>
      </q-dialog>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      saldo_actual: 0,
      solicitar: false,
      exitoso: false,
      verRetiro: false,
      noMas: true,
      retiro: null,
      form: {},
      selecRetiro: {},
      ultimas: [],
      retiros: [],
      retirosFilter: []
    }
  },
  validations: {
    retiro: { required }
  },
  mounted () {
    this.getSaldo()
    this.getRetiros()
  },
  methods: {
    getSaldo () {
      this.$api.get('saldo_actual').then(res => {
        if (res) {
          this.saldo_actual = res
        }
      })
    },
    getRetiros () {
      this.$api.get('retiros').then(res => {
        if (res) {
          this.retiros = res
          this.ultimas = []
          var largo = this.retiros.length - 1
          for (let i = 0; i < 2; i++) {
            if (largo >= 0) {
              this.ultimas.push(this.retiros[largo])
              largo = largo - 1
            }
          }
        }
      })
    },
    retirar () {
      this.$v.$touch()
      if (!this.$v.retiro.$error) {
        if (this.retiro <= this.saldo_actual) {
          this.$api.post('solicitar_retiro', { monto: this.retiro }).then(res => {
            if (res) {
              this.getSaldo()
              this.getRetiros()
              this.solicitar = false
              this.exitoso = true
            }
          })
        } else {
          this.$q.dialog({
            title: 'Atención',
            message: 'El monto de la solicitud es mayor a tu saldo actual',
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
      this.ultimas = []
      var largo = this.retiros.length - 1
      for (let i = 0; i < this.retiros.length; i++) {
        if (largo >= 0) {
          this.ultimas.push(this.retiros[largo])
          largo = largo - 1
        }
      }
      this.noMas = false
    }
  }
}
</script>
