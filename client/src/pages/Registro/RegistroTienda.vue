<template>
  <div>
    <q-carousel
      class="window-height"
      animated
      v-model="slide"
      infinite
    >
      <q-carousel-slide :name="1" class="q-pa-none">
        <q-img :src="portada ? portadaImg : 'nopublicidad.jpg'" style="height: 250px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px" >
            <div class="bg-transparent">
                <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="$router.go(-1)" />
            </div>
            <div class="column justify-center items-center bg-transparent absolute-center" style="width:100%">
                <q-avatar size="90px">
                <div style="z-index:1">
                    <q-file borderless v-model="portada" class="button-camera" @input="changePortada()" accept=".jpg, image/*"
                    @blur="$v.portada.$touch()">
                      <q-icon name="file_upload" class="absolute-center" size="30px" color="white" />
                    </q-file>
                </div>
                </q-avatar>
                <div :class="!$v.portada.$error ? 'text-white' : 'text-negative'" class="text-bold text-caption"> SUBE UNA FOTO </div>
            </div>
        </q-img>
        <div class="column items-center justify-center q-ma-md">
          <div class="row justify-center" style="width: 100%">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 row justify-between items-start">
                <div class="col-xs-4 col-sm-12 col-md-5 col-lg-5 col-xl-5 column items-center justify-center">
                    <div class="q-mb-xs row justify-center">
                        <q-img :src="perfil ? perfilImg : 'nopublicidad.jpg'" style="width:110px;height:110px;border-radius:25px" >
                            <div class="absolute-center bg-transparent text-center" style="width: 100%">
                            <div class="absolute-center" style="z-index:1">
                                <q-file borderless v-model="perfil" class="button-subir" @input="changePerfil()" accept=".jpg, image/*"
                                @blur="$v.perfil.$touch()"
                                >
                                <q-avatar class="absolute-center cursor-pointer">
                                  <q-icon name="file_upload" color="white" class="absolute-center" />
                                </q-avatar>
                                </q-file>
                            </div>
                            </div>
                        </q-img>
                    </div>
                    <div :class="!$v.perfil.$error ? 'text-grey-7' : 'text-negative'" class="text-bold text-caption"> SUBE UNA FOTO </div>
                </div>
                <div class="col-xs-7 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                    <div style="width:100%">
                        <div class="text-subtitle2">Horario de atención</div>
                        <div class="row justify-between">
                            <q-input borderless readonly dense v-model="form.hapertura" mask="time" :rules="['time']" style="width:45%" label="Apertura"
                            error-message="Requerido" :error="$v.form.hapertura.$error" @blur="$v.form.hapertura.$touch()">
                            <template v-slot:prepend>
                              <q-icon name="access_time" class="cursor-pointer">
                                <q-popup-proxy transition-show="scale" transition-hide="scale">
                                    <q-time v-model="form.hapertura">
                                    <div class="row items-center justify-between">
                                      <div class="text-black text-bold">Hora de apertura</div>
                                      <q-btn v-close-popup label="Guardar" color="primary" flat />
                                    </div>
                                    </q-time>
                                </q-popup-proxy>
                              </q-icon>
                            </template>
                            </q-input>
                            <q-input borderless readonly dense v-model="form.hcierre" mask="time" :rules="['time']" style="width:45%" class="q-ml-sm" label="Cierre"
                            error-message="Requerido" :error="$v.form.hcierre.$error" @blur="$v.form.hcierre.$touch()">
                            <template v-slot:prepend>
                              <q-icon name="access_time" class="cursor-pointer">
                                <q-popup-proxy transition-show="scale" transition-hide="scale">
                                    <q-time v-model="form.hcierre">
                                    <div class="row items-center justify-between">
                                      <div class="text-black text-bold">Hora de cierre</div>
                                      <q-btn v-close-popup label="Guardar" color="primary" flat />
                                    </div>
                                    </q-time>
                                </q-popup-proxy>
                              </q-icon>
                            </template>
                            </q-input>
                        </div>
                    </div>
                    <div style="width:100%">
                        <q-select borderless dense v-model="form.dias" :options="optionsDias" label="Días de atencion" multiple emit-value map-options
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
                          <template v-slot:prepend>
                            <q-icon name="event" />
                          </template>
                        </q-select>
                    </div>
                </div>
            </div>
          </div>
          <div class="row justify-center" style="width: 100%">
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Nombre de tienda</div>
              <q-input v-model="form.nombre" label="" filled
                :error="$v.form.nombre.$error" @blur="$v.form.nombre.$touch()"
              />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Reseña de tu tienda</div>
              <q-input v-model="form.descripcion" label="" filled type="textarea"
                :error="$v.form.descripcion.$error" @blur="$v.form.descripcion.$touch()"
              />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Selecciona tu categoria</div>
              <q-select @input="form.categoria === 'Comida' ? optionsSubCategorias = subCategoria1 : '', form.subCategoria = []" filled v-model="form.categoria" :options="optionsCategoria" label="" emit-value map-options
                :error="$v.form.categoria.$error" @blur="$v.form.categoria.$touch()" >
              </q-select>
            </div>
            <div v-if="form.categoria === 'Comida'" :class="!$v.form.subCategoria.$error ? 'text-grey-8' : 'text-negative'" class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-subtitle2">Selecciona tu subcategoria</div>
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
            <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 row items-center justify-center q-my-lg">
              <q-btn no-caps label="Siguiente" color="primary" size="lg" style="border-radius: 25px; width: 80%"
              @click="siguiente()" />
            </div>
          </div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="2" >
          <div class="q-pt-md q-px-md">
            <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="slide = 1" />
          </div>
          <div class="text-center text-h6 q-mb-md">Información tienda</div>
          <div class="row justify-center">
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
                  <div class="text-subtitle2 text-grey-8">Provincia</div>
                    <q-input v-model="form.provincia" label="" filled
                        error-message="Requerido" :error="$v.form.provincia.$error" @blur="$v.form.provincia.$touch()"
                    />
                </div>
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
                  <div class="text-subtitle2 text-grey-8">Ciudad</div>
                    <q-input v-model="form.ciudad" label="" filled
                        error-message="Requerido" :error="$v.form.ciudad.$error" @blur="$v.form.ciudad.$touch()"
                    />
                </div>
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
                  <div class="text-subtitle2 text-grey-8">Dirección</div>
                    <q-input v-model="form.direccion" label="" filled
                        error-message="Requerido" :error="$v.form.direccion.$error" @blur="$v.form.direccion.$touch()"
                    />
                </div>
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
                  <div class="text-subtitle2 text-grey-8">CIF</div>
                    <q-input v-model="form.cif" label="" filled
                        error-message="Requerido" :error="$v.form.cif.$error" @blur="$v.form.cif.$touch()"
                    />
                </div>
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
                  <div class="text-subtitle2 text-grey-8">Teléfono de contacto</div>
                    <q-input v-model="form.telefono" label="" filled
                        error-message="Requerido" :error="$v.form.telefono.$error" @blur="$v.form.telefono.$touch()"
                    />
                </div>
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
                  <div class="text-subtitle2 text-grey-8">Correo de contacto</div>
                    <q-input v-model="form.email" label="" filled type="email"
                        error-message="Requerido" :error="$v.form.email.$error" @blur="$v.form.email.$touch()"
                    />
                </div>
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
                  <div class="text-subtitle2 text-grey-8">Contraseña</div>
                    <q-input :type="isPwd ? 'password' : 'text'" v-model="password" label="" filled
                        error-message="ingrese una contraseña valida, minimo 6 caracteres" :error="$v.password.$error" @blur="$v.password.$touch()">
                        <template v-slot:append>
                        <q-icon :name="isPwd ? 'visibility' : 'visibility_off'" class="cursor-pointer q-pa-sm" color="primary" @click="isPwd = !isPwd" />
                        </template>
                    </q-input>
                </div>
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
                  <div class="text-subtitle2 text-grey-8">Confirmar Contraseña</div>
                    <q-input :type="isPwd ? 'password' : 'text'" v-model="repeatPassword" label="" filled
                        error-message="ingrese una contraseña valida, minimo 6 caracteres" :error="$v.repeatPassword.$error" @blur="$v.repeatPassword.$touch()">
                        <template v-slot:append>
                        <q-icon :name="isPwd ? 'visibility' : 'visibility_off'" class="cursor-pointer q-pa-sm" color="primary" @click="isPwd = !isPwd" />
                        </template>
                    </q-input>
                </div>
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 text-subtitle1 q-mb-md">Agrega fotos de tu local comercial (hasta 5 imagenes)</div>
                <q-scroll-area horizontal style="height:150px; width: 100%;"
                :thumb-style="thumbStyle" :bar-style="barStyle"
                >
                    <div class="no-wrap q-px-md q-gutter-md row items-center">
                        <q-card class="bg-grey column justify-center items-center" style="height:140px;border-radius:12px;width:140px">
                            <q-file borderless :disable="images.length < 5 ? false : true" v-model="img" class="button-camera" @input="insertarImagen()" accept=".jpg, image/*">
                                <q-icon name="add_a_photo" class="absolute-center" size="30px" color="white" />
                            </q-file>
                        </q-card>
                        <q-img v-for="(item, index) in imagesSubir" :key="index" :src="item" style="height:140px;border-radius:12px;width:140px" >
                            <q-btn @click="images.splice(index, 1), imagesSubir.splice(index, 1)" flat class="absolute all-pointer-events" size="15px" dense icon="clear" color="negative" style="top: 0px; right: 0px" rounded />
                        </q-img>
                    </div>
                </q-scroll-area>
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 row items-center justify-center q-my-lg">
                    <q-btn no-caps label="Siguiente" color="primary" size="lg" style="border-radius: 25px; width: 80%"
                    @click="siguiente2()" />
                </div>
          </div>
      </q-carousel-slide>

      <q-carousel-slide :name="3" >
          <div class="q-pa-md">
            <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="slide = 2" />
          </div>
          <div class="text-center text-h6 text-bold q-mb-md">Información de transferencia</div>
          <div class="text-center text-subtitle1">Esta información es utilizada para realizar los pagos una vez aprobada la solicitud de retiro</div>
          <div class="row justify-center q-gutter-xs q-mt-lg">
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Titular del banco</div>
              <q-input v-model="form.titular" label="" filled
                error-message="Requerido" :error="$v.form.titular.$error" @blur="$v.form.titular.$touch()"
              />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Código IBAN</div>
              <q-input v-model="form.codigo_iban" label="" filled
                error-message="Requerido" :error="$v.form.codigo_iban.$error" @blur="$v.form.codigo_iban.$touch()"
              />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Banco</div>
              <q-input v-model="form.banco" label="" filled
                error-message="Requerido" :error="$v.form.banco.$error" @blur="$v.form.banco.$touch()"
              />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <q-checkbox v-model="confirma_datos" :class="textColorBanco" @input="confirma_datos ? textColorBanco = 'text-black' : ''" label="Confirmo que estos datos son reales" />
            </div>
            <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 row items-center justify-center q-my-lg">
              <q-btn no-caps label="Finalizar" color="primary" size="lg" style="border-radius: 25px; width: 80%"
                @click="registrar()" />
            </div>
          </div>
      </q-carousel-slide>

      <q-carousel-slide :name="4" >
        <div class="absolute-center" style="width:100%">
          <div class="q-mb-md row justify-center">
            <q-img src="fondo1.jpg" style="width:200px;height:170px;border-radius:25px" >
            </q-img>
          </div>
          <div class="text-center text-subtitle1">¡Registro Exitoso!</div>
          <div class="row items-center justify-center q-mt-lg" style="width:100%">
            <q-btn no-caps label="Ir a Nova Telde" color="primary" size="lg" style="border-radius: 25px; width: 80%"
            @click="onSubmit()" />
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { required, requiredIf, email, sameAs, maxLength, minLength } from 'vuelidate/lib/validators'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      slide: 1,
      id: '',
      password: '',
      repeatPassword: '',
      textColorBanco: 'text-black',
      img: null,
      perfil: null,
      perfilImg: null,
      portada: null,
      portadaImg: null,
      isPwd: true,
      confirma_datos: false,
      form: {
        dias: [],
        subCategoria: []
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
      },
      images: [],
      imagesSubir: [],
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
      ]
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
      provincia: { required },
      cif: { required },
      email: { email, required },
      telefono: { required },
      titular: { required },
      codigo_iban: { required },
      banco: { required }
    },
    confirma_datos: { required },
    repeatPassword: { sameAsPassword: sameAs('password') },
    password: { required, maxLength: maxLength(256), minLength: minLength(6) },
    portada: { required },
    perfil: { required }
  },
  methods: {
    ...mapMutations('generals', ['login']),
    onSubmit () {
      this.$q.loading.show()
      this.$api.post('login', this.form).then(res => {
        if (res) {
          this.$router.push('/tienda/' + this.id)
          this.login(res)
        } else {
          console.log('hubo un error')
        }
      })
      this.$q.loading.hide()
    },
    siguiente () {
      this.$v.portada.$touch()
      this.$v.perfil.$touch()
      this.$v.form.dias.$touch()
      this.$v.form.hapertura.$touch()
      this.$v.form.hcierre.$touch()
      this.$v.form.nombre.$touch()
      this.$v.form.descripcion.$touch()
      this.$v.form.categoria.$touch()
      this.$v.form.subCategoria.$touch()
      if (!this.$v.portada.$error && !this.$v.perfil.$error && !this.$v.form.dias.$error && !this.$v.form.hapertura.$error && !this.$v.form.hcierre.$error && !this.$v.form.nombre.$error && !this.$v.form.descripcion.$error && !this.$v.form.categoria.$error && !this.$v.form.subCategoria.$error) {
        this.slide = 2
      }
    },
    siguiente2 () {
      this.$v.form.ciudad.$touch()
      this.$v.form.provincia.$touch()
      this.$v.form.direccion.$touch()
      this.$v.form.cif.$touch()
      this.$v.form.email.$touch()
      this.$v.form.telefono.$touch()
      this.$v.password.$touch()
      this.$v.repeatPassword.$touch()
      if (!this.$v.form.ciudad.$error && !this.$v.form.provincia.$error && !this.$v.form.direccion.$error && !this.$v.form.cif.$error && !this.$v.form.telefono.$error && !this.$v.form.email.$error && !this.$v.password.$error && !this.$v.repeatPassword.$error) {
        this.form.password = this.password
        this.slide = 3
      }
    },
    addSubCategoria (btn) {
      if (!this.form.subCategoria.find(v => v === btn)) {
        this.form.subCategoria.push(btn)
      } else {
        this.form.subCategoria = this.form.subCategoria.filter(v => v !== btn)
      }
    },
    async registrar () {
      this.$v.$touch()
      this.form.enable = true
      if (!this.confirma_datos) {
        this.textColorBanco = 'text-red'
      }
      if (!this.$v.form.$error && this.confirma_datos) {
        this.form.metodoPago = []
        var formData = new FormData()
        formData.append('perfil', this.perfil)
        formData.append('portada', this.portada)
        if (this.images.length > 0) {
          for (let i = 0; i < this.images.length; i++) {
            formData.append('files' + i, this.images[i])
          }
          this.form.cantidadFiles = this.images.length
        } else { this.form.cantidadFiles = 0 }
        formData.append('dat', JSON.stringify(this.form))
        this.$q.loading.show()
        await this.$api.post('registrar_tienda', formData, {
          headers: {
            'Content-Type': undefined
          }
        }).then(res => {
          if (res) {
            this.$q.notify({
              message: 'Ya formas parte de Nova Telde, Bienvenido',
              color: 'positive'
            })
            this.id = res._id
            this.slide = 4
            this.$q.loading.hide()
          }
          this.$q.loading.hide()
        })
      }
    },
    changePerfil () {
      if (this.perfil) { this.perfilImg = URL.createObjectURL(this.perfil) }
    },
    changePortada () {
      if (this.portada) { this.portadaImg = URL.createObjectURL(this.portada) }
    },
    insertarImagen () {
      this.images.push(this.img)
      this.imagesSubir.push(URL.createObjectURL(this.img))
      this.img = null
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
  color: white;
  background-color: $grey;
  border-radius: 100%;
  height:40px;
  width:40px;
  cursor: pointer;
}
.button-camera {
  text-decoration: none;
  padding: 10px;
  font-weight: 540;
  font-size: 0px;
  color: white;
  background-color: $grey;
  border-radius: 100%;
  height:80px;
  width:80px;
  cursor: pointer;
}
</style>
