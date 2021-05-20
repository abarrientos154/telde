<template>
  <q-page>
    <q-img :src="baseuPortada" style="height: 500px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px" >
      <div class="bg-transparent">
        <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="$router.go(-1)" />
      </div>
      <div class="column justify-center items-center bg-transparent absolute-center" style="width:100%">
        <q-avatar size="90px">
          <div style="z-index:1">
            <q-file borderless v-model="portada" class="button-camera" @input="changePortada()" accept=".jpg, image/*"
              >
                <q-icon name="add_a_photo" class="absolute-center" size="30px" color="white" />
            </q-file>
          </div>
        </q-avatar>
      </div>
    </q-img>

    <div class="column items-center justify-center q-ma-md">
      <div class="row justify-center" style="width: 100%">
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 row justify-between">
          <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 column items-center justify-center">
            <div class="q-mb-md row justify-center">
              <q-img :src="baseu" style="width:150px;height:150px;border-radius:25px" >
                <div class="absolute-center bg-transparent text-center" style="width: 100%">
                  <div class="absolute-center" style="z-index:1">
                    <q-file borderless v-model="perfil" class="button-subir" @input="changePerfil()" accept=".jpg, image/*"
                      @blur="$v.perfil.$touch()"
                      >
                        <q-avatar class="absolute-center cursor-pointer">
                          <q-icon name="cloud_upload" color="white" class="absolute-center" />
                        </q-avatar>
                    </q-file>
                  </div>
                </div>
              </q-img>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
            <div style="width:100%">
              <div class="text-subtitle1">Días de atencion</div>
              <q-select outlined v-model="form.dias" :options="optionsDias" label="Selecciona los días de atención" multiple emit-value map-options
                error-message="Requerido" :error="$v.form.dias.$error" @blur="$v.form.dias.$touch()" >
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
            <div class="q-mt-md" style="width:100%">
              <div class="text-subtitle1">Horario de atención</div>
              <div class="row justify-between">
                <q-input outlined v-model="form.hapertura" mask="time" :rules="['time']" style="width:45%" label="Apertura"
                  error-message="Requerido" :error="$v.form.hapertura.$error" @blur="$v.form.hapertura.$touch()">
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
                <q-input outlined v-model="form.hcierre" mask="time" :rules="['time']" style="width:45%" class="q-ml-sm" label="Cierre"
                  error-message="Requerido" :error="$v.form.hcierre.$error" @blur="$v.form.hcierre.$touch()">
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
          </div>
        </div>
      </div>

      <div class="row justify-center q-gutter-xs q-mt-md" style="width: 100%">
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-subtitle1 q-mb-md">Imagenes de la Tienda (hasta 5 imagenes)</div>
        <q-scroll-area class="col-12" horizontal style="height:150px;"
            :thumb-style="thumbStyle" :bar-style="barStyle"
          >
            <div class="no-wrap q-px-md q-gutter-md row items-center">
              <q-card class="bg-grey column justify-center items-center" style="height:140px;border-radius:12px;width:140px">
                <q-file borderless :disable="form.images && form.images.length < 5 ? false : true" v-model="img" class="button-camera" @input="addImg()" accept=".jpg, image/*">
                  <q-icon name="add_a_photo" class="absolute-center" size="30px" color="white" />
                </q-file>
              </q-card>
              <q-img v-for="(item, index) in form.images" :key="index" :src="rutaCargarImgs + item" style="height:140px;border-radius:12px;width:140px" >
                <q-btn @click="confirmEliminar(item)" flat class="absolute all-pointer-events" size="15px" dense icon="clear" color="negative" style="top: 0px; right: 0px" rounded />
              </q-img>
            </div>
        </q-scroll-area>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <q-input v-model="form.nombre" label="Nombre de la tienda" outlined
            error-message="Requerido" :error="$v.form.nombre.$error" @blur="$v.form.nombre.$touch()"
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <q-input v-model="form.descripcion" label="Reseña de la tienda" outlined type="textarea"
            error-message="Requerido" :error="$v.form.descripcion.$error" @blur="$v.form.descripcion.$touch()"
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <q-input v-model="form.ciudad" label="Ciudad" outlined
            error-message="Requerido" :error="$v.form.ciudad.$error" @blur="$v.form.ciudad.$touch()"
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <q-input v-model="form.direccion" label="Dirección" outlined
            error-message="Requerido" :error="$v.form.direccion.$error" @blur="$v.form.direccion.$touch()"
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <q-select @input="form.categoria === 'Comida' ? optionsSubCategorias = subCategoria1 : optionsSubCategorias = []" outlined v-model="form.categoria" :options="optionsCategoria" label="Selecciona tu categoria" emit-value map-options
            error-message="Requerido" :error="$v.form.categoria.$error" @blur="$v.form.categoria.$touch()" >
          </q-select>
        </div>
        <div v-if="form.categoria === 'Comida'" :class="!$v.form.subCategoria.$error ? 'text-black' : 'text-negative'" class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-subtitle1">Selecciona tu subcategoria</div>
        <q-scroll-area
          v-if="form.categoria === 'Comida'"
          class="col-12"
          horizontal
          style="height: 80px"
        >
          <div class="row no-wrap q-py-md q-px-md q-gutter-md">
            <div v-for="(btn, index) in optionsSubCategorias" :key="index" >
              <q-btn no-caps class="q-px-md" :label="btn" :color="form.subCategoria.find(v => v === btn) ? 'primary' : 'blue-grey-11'" text-color="blue-grey-9"
                @click="addSubCategoria(btn)" />
            </div>
          </div>
        </q-scroll-area>

        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <q-separator />
        </div>

        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-h6 q-mt-md">Datos bancarios</div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-subtitle1 q-mt-xs text-grey">Puedes actualizar tu cuenta en donde recibes Tus pagos.</div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <q-input v-model="form.titular" label="Titular del banco" outlined
            error-message="Requerido" :error="$v.form.titular.$error" @blur="$v.form.titular.$touch()"
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <q-input v-model="form.codigo_iban" label="Código IBAN" outlined
            error-message="Requerido" :error="$v.form.codigo_iban.$error" @blur="$v.form.codigo_iban.$touch()"
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <q-input v-model="form.banco" label="Banco" outlined
            error-message="Requerido" :error="$v.form.banco.$error" @blur="$v.form.banco.$touch()"
          />
        </div>

        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 row items-center justify-center q-my-lg">
          <q-btn no-caps label="Guardar" color="primary" size="lg" style="border-radius: 25px; width: 80%"
          @click="guardar()" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { required, requiredIf } from 'vuelidate/lib/validators'
import env from '../../env'
export default {
  data () {
    return {
      rutaCargarImgs: '',
      baseuPortada: '',
      baseu: '',
      textColor: 'text-black',
      img: null,
      perfil: null,
      perfilImg: null,
      portada: null,
      portadaImg: null,
      optionsCuentas: ['Cuenta corriente', 'Cuenta de ahorro'],
      optionsCategoria: ['Comida', 'Tienda'],
      optionsSubCategorias: [],
      subCategoria1: ['Americana', 'Italiana', 'Mediterránea', 'Asiática', 'Latina'],
      optionsDias: [
        { label: 'Lunes', value: 0 },
        { label: 'Martes', value: 1 },
        { label: 'Miercoles', value: 2 },
        { label: 'Jueves', value: 3 },
        { label: 'Viernes', value: 4 },
        { label: 'Sabado', value: 5 },
        { label: 'Domingo', value: 6 }
      ],
      form: {
        dias: []
      },
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0
      },
      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0
      }
    }
  },
  validations: {
    form: {
      nombre: { required },
      descripcion: { required },
      dias: { required },
      hapertura: { required },
      hcierre: { required },
      categoria: { required },
      subCategoria: {
        required: requiredIf(function (nestedModel) {
          return this.form.categoria === 'Comida'
        })
      },
      ciudad: { required },
      direccion: { required },
      titular: { required },
      codigo_iban: { required },
      banco: { required }
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
    addSubCategoria (btn) {
      if (!this.form.subCategoria.find(v => v === btn)) {
        this.form.subCategoria.push(btn)
      } else {
        this.form.subCategoria = this.form.subCategoria.filter(v => v !== btn)
      }
    },
    guardar () {
      var paso = true
      this.$v.form.$touch()
      if (!this.$v.form.$error && paso) {
        if (this.form.categoria !== 'Comida') {
          this.form.subCategoria = []
        }
        this.$q.loading.show()
        this.$api.put('editar_proveedor', this.form).then(res => {
          if (res) {
            this.$router.push('/tienda/' + this.form._id)
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
          if (this.form.categoria === 'Comida') {
            this.optionsSubCategorias = this.subCategoria1
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
          if (this.form.categoria === 'Comida') {
            this.optionsSubCategorias = this.subCategoria1
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
  border-radius: 100%;
  height:80px;
  width:80px;
  cursor: pointer;
}
</style>
