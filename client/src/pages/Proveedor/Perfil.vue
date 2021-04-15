<template>
  <q-page>
    <q-card class="shadow-3 q-ma-sm" style="border-radius:12px">
      <div class="q-pt-md q-pl-md">
        <q-btn round dense flat icon="keyboard_backspace" color="black" @click="$router.go(-1)"/>
      </div>
      <div class="column items-center justify-center q-mt-lg">
        <div class="q-mb-md row justify-center">
          <q-img :src="form.portada ? baseuPortada : 'noimg.png'" style="width:250px;height:150px" >
            <div class="absolute-center bg-transparent text-center" style="width: 100%">
              <div class="absolute-center" style="z-index:1">
                <q-file borderless v-model="portada" class="button-subir" @input="changePortada()" accept=".jpg, image/*"
                >
                  <q-avatar class="absolute-center cursor-pointer" square>
                    <q-icon name="cloud_upload" color="white" class="absolute-center" />
                  </q-avatar>
                </q-file>
              </div>
            </div>
          </q-img>
        </div>
        <div class="text-bold text-grey-7"> SUBE UNA FOTO DE PORTADA </div>
      </div>
      <div class="column items-center justify-center q-mt-lg">
        <div class="q-mb-md row justify-center">
          <q-img :src="form.perfil ? baseu : form.perfilEstatico ? 'logos/' + form.id.toString() + '.jpeg' : 'noimg.png'" style="width:150px;height:150px;border-radius:100%" >
            <div class="absolute-center bg-transparent text-center" style="width: 100%">
              <div class="absolute-center" style="z-index:1">
                <q-file borderless v-model="perfil" class="button-subir" @input="changePerfil()" accept=".jpg, image/*"
                >
                  <q-avatar class="absolute-center cursor-pointer">
                    <q-icon name="cloud_upload" color="white" class="absolute-center" />
                  </q-avatar>
                </q-file>
              </div>
            </div>
          </q-img>
        </div>
        <div class="text-bold text-grey-7"> SUBE UNA FOTO DE PERFIL </div>
      </div>
      <div class="row q-pa-xs q-gutter-xs justify-center">
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-mt-md">
          <q-input v-model="form.nombreEmpresa" label="Nombre Empresa" outlined
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-mt-md">
          <q-input disable readonly v-model="form.email" label="Email" outlined
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-mt-md">
          <q-select outlined v-model="form.dias" :options="optionsDias" label="Dias" multiple emit-value map-options >
            <template v-slot:option="{ itemProps, itemEvents, opt, selected, toggleOption }">
              <q-item
                v-bind="itemProps"
                v-on="itemEvents"
              >
                <q-item-section>
                  <q-item-label v-html="opt.label" ></q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-checkbox :value="selected" @input="toggleOption(opt)" />
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-mt-md">
          <div class="row justify-center">
            <q-input outlined v-model="form.hapertura" mask="time" :rules="['time']" style="width:45%" label="hora apertura">
              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time v-model="form.hapertura">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-input outlined v-model="form.hcierre" mask="time" :rules="['time']" style="width:45%" class="q-ml-sm" label="hora cierre">
              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time v-model="form.hcierre">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6">
          <q-input v-model="form.rut" label="RUT" outlined
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-mt-md">
          <q-input v-model="form.direccionFisica" label="Direccion Fisica" outlined
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-mt-md">
          <q-input v-model="form.telefono" label="Telefono" outlined
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-mt-md">
          <div class="row full-width justify-around">
            <q-checkbox v-model="form.delivery" label="Delivery" />
            <q-checkbox v-model="form.regiones" label="Despacho a Regiones" />
            <div class="q-ml-lg full-width" v-if="form.delivery">
              <q-input v-model.number="form.deliveryPrice" label="Valor Delivery" outlined style="width:100%" type="number"
              />
            </div>
          </div>
        </div>
        <q-card class="row col-xs-11 col-sm-6 col-md-6 col-lg-6 q-mt-md q-pa-md shadow-5">
          <div class="text-subtitle2 text-weight-bolder q-mr-md q-mb-md">Método de pago</div>
          <div class="column justify-around q-gutter-sm">
            <q-checkbox @input="selecMetodo()" v-model="form.metodoPago" val="1" label="Efectivo" color="primary" />
            <q-checkbox @input="selecMetodo()" v-model="form.metodoPago" val="2" label="Transferencia Bancaria" color="primary" />
            <q-checkbox @input="selecMetodo(), getDataFlow(form._id)" v-model="form.metodoPago" val="3" label="Transferencia Electrónica" color="primary" />
          </div>
        </q-card>
        <div v-if="metodo3" class="col-xs-11 col-sm-6 col-md-6 col-lg-6">
          <div v-if="confiFlowData" class="text-positive text-bold">Flow ya se encuentra configurado</div>
          <div v-else class="text-red text-bold">Debes configurar Flow</div>
          <q-btn style="width:200px" color="positive" label="Configurar Flow" push no-caps @click="flow = {}, $v.flow.$reset(), dialogFlow = true" />
        </div>
        <div v-if="metodo2" class="col-xs-11 col-sm-6 col-md-6 col-lg-6">
          <div class="text-weight-bolder q-mt-md text-subtitle1">Datos para transferencia bancaria</div>
          <q-select class="q-mt-md" outlined v-model="form.banco" :options="optionsBancos" label="Banco" :error="$v.form.banco.$error" error-message="Este campo es requerido" @blur="$v.form.banco.$touch()">
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-italic text-grey">
                  No existen bancos registrados
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-select class="q-mt-md" outlined v-model="form.tipoCuenta" :options="optionsCuentas" label="Tipo de cuenta" :error="$v.form.tipoCuenta.$error" error-message="Este campo es requerido" @blur="$v.form.tipoCuenta.$touch()">
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-italic text-grey">
                  No existen tipos de cuentas registrados
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-input class="q-mt-md" v-model.number="form.cuenta" type="number" label="Número de cuenta" outlined :error="$v.form.cuenta.$error" error-message="Este campo es requerido" @blur="$v.form.cuenta.$touch()"/>
          <q-input class="q-mt-md" v-model="form.rutTitular" label="RUT del titular" outlined :error="$v.form.rutTitular.$error" error-message="Este campo es requerido" @blur="$v.form.rutTitular.$touch()"/>
          <q-input class="q-mt-md" v-model="form.titular" label="Nombre del titular" outlined :error="$v.form.titular.$error" error-message="Este campo es requerido" @blur="$v.form.titular.$touch()"/>
          <q-input class="q-mt-md" v-model="form.correoDestino" type="email" label="Correo destino del comprobante" outlined :error="$v.form.correoDestino.$error" error-message="Este campo es requerido" @blur="$v.form.correoDestino.$touch()"/>
        </div>
      </div>
      <div class="column shadow-3 q-mt-md">
        <div class="text-center text-grey-6 q-mt-lg">Imagenes de la Tienda</div>
        <div class="row full-width q-pa-md items-center">
          <div class="q-gutter-xs row" v-if="form.images && form.images.length > 0">
            <q-img v-for="(item, index) in form.images" :key="index" :src="rutaCargarImgs + item" style="height:100px;border-radius:12px;width:140px" >
              <q-btn @click="confirmEliminar(item)" flat class="absolute all-pointer-events" size="15px" dense icon="delete" color="negative" style="top: 0px; left: 0px" rounded />
            </q-img>
          </div>
          <div v-if="form.images && form.images.length < 5"  class="column shadow-3 justify-center items-center q-ma-sm q-ml-sm bg-grey-2" style="height:100px;border-radius:12px;width:140px">
            <div class="text-center text-primary q-mb-sm" style="text-decoration: underline">Agregar Imagen</div>
            <q-avatar size="50px">
              <div style="z-index:1">
                <q-file borderless v-model="img" class="button-camera" @input="addImg()" accept=".jpg, image/*">
                  <q-icon name="add" class="absolute-center" size="20px" color="white" />
                </q-file>
              </div>
            </q-avatar>
          </div>
        </div>
      </div>
      <q-card-actions align="center">
        <q-btn style="width:200px;height:50px" color="primary" label="Guardar" push @click="guardar()" />
      </q-card-actions>
    </q-card>

    <q-dialog v-model="dialogFlow">
      <q-card style="width:100%">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Configuración de Flow</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div class="row items-center" style="width: 100%">
            <q-icon class="col-1" name="warning" size="sm" />
            <div class="col q-ml-xs text-caption">Estos datos están protegidos</div>
          </div>

          <q-input class="q-mt-md" v-model="flow.apiKey" label="ApiKey" outlined :error="$v.flow.apiKey.$error" error-message="Este campo es requerido" @blur="$v.flow.apiKey.$touch()">
            <template v-if="confiFlowData" v-slot:append>
              <q-icon name="check" color="positive" />
            </template>
          </q-input>
          <q-input class="q-mt-md" v-model="flow.secretKey" label="SecretKey" outlined :error="$v.flow.secretKey.$error" error-message="Este campo es requerido" @blur="$v.flow.secretKey.$touch()">
            <template v-if="confiFlowData" v-slot:append>
              <q-icon name="check" color="positive" />
            </template>
          </q-input>

          <div class="row justify-center q-mt-md">
            <q-btn style="width:200px" color="positive" label="Guardar" push no-caps @click="dataFlow()" />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { required, requiredIf } from 'vuelidate/lib/validators'
import env from '../../env'
export default {
  data () {
    return {
      rutaCargarImgs: '',
      apiKey: '',
      secretKey: '',
      baseuPortada: '',
      baseu: '',
      dialogFlow: false,
      confiFlowData: false,
      metodo2: false,
      metodo3: false,
      img: null,
      perfil: null,
      perfilImg: null,
      portada: null,
      portadaImg: null,
      model: [],
      optionsBancos: ['Banco Santander', 'Banco Consorcio', 'Banco Corpbanca', 'Banco Credito e inversiones', 'Banco Estado', 'Banco Falabella', 'Banco Internacional', 'Banco Paris', 'Banco Ripley', 'Banco Security', 'Banco de Chile / Edwards-Citi'],
      optionsCuentas: ['Cuenta corriente', 'Cuenta vista', 'Cuenta de ahorro'],
      optionsDias: [
        { label: 'Lunes', value: 0 },
        { label: 'Martes', value: 1 },
        { label: 'Miercoles', value: 2 },
        { label: 'Jueves', value: 3 },
        { label: 'Viernes', value: 4 },
        { label: 'Sabado', value: 5 },
        { label: 'Domingo', value: 6 }
      ],
      flow: {},
      form: {
        dias: [],
        delivery: false,
        regiones: false
      }
    }
  },
  validations: {
    form: {
      banco: {
        required: requiredIf(function (nestedModel) {
          return this.metodo2
        })
      },
      tipoCuenta: {
        required: requiredIf(function (nestedModel) {
          return this.metodo2
        })
      },
      cuenta: {
        required: requiredIf(function (nestedModel) {
          return this.metodo2
        })
      },
      rutTitular: {
        required: requiredIf(function (nestedModel) {
          return this.metodo2
        })
      },
      titular: {
        required: requiredIf(function (nestedModel) {
          return this.metodo2
        })
      },
      correoDestino: {
        required: requiredIf(function (nestedModel) {
          return this.metodo2
        })
      }
    },
    flow: {
      apiKey: { required },
      secretKey: { required }
    }
  },
  async mounted () {
    this.rutaCargarImgs = env.apiUrl + '/tienda_files/'
    if (this.$route.params.id) {
      this.getProvEdit(this.$route.params.id)
    } else {
      this.getInfo()
    }
  },
  methods: {
    selecMetodo () {
      if (this.form.metodoPago) {
        if (this.form.metodoPago.find(v => v === '3')) {
          this.metodo3 = true
        } else {
          this.metodo3 = false
        }
        if (this.form.metodoPago.find(v => v === '2')) {
          this.metodo2 = true
        } else {
          this.metodo2 = false
        }
      }
    },
    getDataFlow (id) {
      this.$api.post('flow_by_id/' + id).then(res => {
        if (res) {
          this.confiFlowData = true
        }
      })
    },
    dataFlow () {
      this.$v.flow.$touch()
      if (!this.$v.flow.$error) {
        this.$q.loading.show()
        this.flow.tienda_id = this.form._id
        this.$api.put('configuracion_flow', this.flow).then(res => {
          if (res) {
            this.flow = {}
            this.dialogFlow = false
            this.$v.flow.$reset()
            this.getDataFlow(this.form._id)
            this.$q.loading.hide()
            this.$q.notify({
              message: 'Guardado Correctamente',
              positive: 'positive'
            })
          }
        })
      }
    },
    guardar () {
      var paso = false
      this.$v.form.$touch()
      if (this.form.metodoPago.find(v => v === '3')) {
        if (this.confiFlowData) {
          paso = true
        } else {
          paso = false
        }
      } else {
        paso = true
      }
      if (!this.$v.form.$error && paso) {
        this.$q.loading.show()
        this.$api.put('editar_proveedor', this.form).then(res => {
          if (res) {
            this.getProvEdit(this.form._id)
            this.$q.notify({
              message: 'Guardado Correctamente',
              positive: 'positive'
            })
          }
        })
        this.$q.loading.hide()
      }
    },
    async changePerfil () {
      this.$q.loading.show()
      var formData = new FormData()
      var files = []
      files[0] = this.perfil
      formData.append('perfil', files[0])
      await this.$api.post('subir_foto_perfil/' + this.form._id, formData, {
        headers: {
          'Content-Type': undefined
        }
      }).then(res => {
        if (res) {
          this.$q.notify({
            message: 'Haz Cambiado tu foto de perfil',
            color: 'positive'
          })
          this.$q.loading.hide()
          location.reload()
        }
        this.$q.loading.hide()
      })
    },
    async changePortada () {
      this.$q.loading.show()
      var formData = new FormData()
      var files = []
      files[0] = this.portada
      formData.append('portada', files[0])
      await this.$api.post('subir_foto_portada/' + this.form._id, formData, {
        headers: {
          'Content-Type': undefined
        }
      }).then(res => {
        if (res) {
          this.$q.notify({
            message: 'Haz Cambiado tu foto de Portada',
            color: 'positive'
          })
          this.$q.loading.hide()
          location.reload()
        }
        this.$q.loading.hide()
      })
    },
    async getInfo () {
      this.$q.loading.show()
      await this.$api.get('user_info').then(res => {
        if (res) {
          this.form = res
          if (this.form.metodoPago.length) {
            if (this.form.metodoPago.find(v => v === '3')) {
              this.metodo3 = true
              this.getDataFlow(this.form._id)
            } else {
              this.metodo3 = false
            }
            if (this.form.metodoPago.find(v => v === '2')) {
              this.metodo2 = true
            } else {
              this.metodo2 = false
            }
          }
          this.baseu = env.apiUrl + '/perfil_img/' + this.form._id
          this.baseuPortada = env.apiUrl + '/perfil_img/portada' + this.form._id
          this.$q.loading.hide()
        }
      })
    },
    async getProvEdit (id) {
      this.$q.loading.show()
      await this.$api.post('user_by_id/' + id).then(res => {
        if (res) {
          this.form = res
          if (this.form.metodoPago.length) {
            if (this.form.metodoPago.find(v => v === '3')) {
              this.metodo3 = true
              this.getDataFlow(this.form._id)
            } else {
              this.metodo3 = false
            }
            if (this.form.metodoPago.find(v => v === '2')) {
              this.metodo2 = true
            } else {
              this.metodo2 = false
            }
          }
          this.baseu = env.apiUrl + '/perfil_img/' + this.form._id
          this.baseuPortada = env.apiUrl + '/perfil_img/portada' + this.form._id
          this.$q.loading.hide()
        }
      })
    },
    async addImg () {
      this.$q.loading.show()
      if (this.img) {
        var formData = new FormData()
        var files = []
        files[0] = this.img
        formData.append('files', files[0])
        await this.$api.post('subir_archivo_proveedor/' + this.form._id, formData, {
          headers: {
            'Content-Type': undefined
          }
        }).then((res) => {
          this.$q.loading.hide()
          this.form.images = res.images
        })
      }
    },
    eliminarImg (nameFile) {
      this.$q.loading.show()
      this.$api.delete('eliminar_archivo_proveedor/' + nameFile).then(res => {
        this.$q.loading.hide()
        if (res) {
          this.form.images = res.images
        }
      })
    },
    confirmEliminar (nameFile) {
      this.$q.dialog({
        title: '¡Atención!',
        message: '¿Esta seguro que Quiere Eliminar Esta Imagen?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.eliminarImg(nameFile)
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.button-subir {
  text-decoration: none;
  padding: 10px;
  font-weight: 540;
  font-size: 0px;
  color: #0016b0;
  background-color: $primary;
  border-radius: 30px;
  border: 1px solid #7e7e7e;
  height:40px;
  width: 40px;
}
.button-camera {
  text-decoration: none;
  padding: 10px;
  font-weight: 540;
  font-size: 0px;
  color: white;
  background-color: $primary;
  border-radius: 30px;
  border: 1px solid #6a6a6a;
  height:40px;
  width:40px;
  cursor: pointer;
}
</style>
