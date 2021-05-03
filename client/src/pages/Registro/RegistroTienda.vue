<template>
  <div>
    <q-carousel
      class="window-height"
      animated
      v-model="slide"
      infinite
    >
      <q-carousel-slide :name="1" class="q-pa-none">
        <q-img :src="portada ? portadaImg : 'nopublicidad.jpg'" style="height: 500px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px" >
            <div class="bg-transparent">
                <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="$router.go(-1)" />
            </div>
            <div class="column justify-center items-center bg-transparent absolute-center" style="width:100%">
                <q-avatar size="90px">
                <div style="z-index:1">
                    <q-file borderless v-model="portada" class="button-camera" @input="changePortada()" accept=".jpg, image/*"
                    @blur="$v.portada.$touch()">
                        <q-icon name="add_a_photo" class="absolute-center" size="30px" color="white" />
                    </q-file>
                </div>
                </q-avatar>
                <div :class="!$v.portada.$error ? 'text-white' : 'text-negative'" class="text-bold"> SUBE UNA FOTO </div>
            </div>
        </q-img>
        <div class="column items-center justify-center q-ma-md">
          <div class="row justify-center" style="width: 100%">
            <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 row justify-between">
                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 column items-center justify-center">
                    <div class="q-mb-md row justify-center">
                        <q-img :src="perfil ? perfilImg : 'noimg.png'" style="width:150px;height:150px;border-radius:25px" >
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
                    <div :class="!$v.perfil.$error ? 'text-grey-7' : 'text-negative'" class="text-bold"> SUBE UNA FOTO </div>
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
            <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-subtitle1 q-mt-md">Selecciona tus categorias</div>
            <q-scroll-area
              class="col-12"
              horizontal
              style="height: 80px"
            >
              <div class="row no-wrap q-py-md q-px-md q-gutter-md">
                <div v-for="(btn, index) in 10" :key="index" >
                  <q-btn no-caps class="q-px-md" label="Categoria" color="blue-grey-11" text-color="blue-grey-9" />
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
          <div class="q-pa-md">
            <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="slide = 1" />
          </div>
          <div class="row justify-center q-gutter-xs q-mt-md">
                <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mt-md">
                    <q-input v-model="form.ciudad" label="Ciudad" outlined
                        error-message="Requerido" :error="$v.form.ciudad.$error" @blur="$v.form.ciudad.$touch()"
                    />
                </div>
                <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mt-md">
                    <q-input v-model="form.codigo_postal" label="Código postal" outlined
                        error-message="Requerido" :error="$v.form.codigo_postal.$error" @blur="$v.form.codigo_postal.$touch()"
                    />
                </div>
                <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mt-md">
                    <q-input v-model="form.direccion" label="Dirección" outlined
                        error-message="Requerido" :error="$v.form.direccion.$error" @blur="$v.form.direccion.$touch()"
                    />
                </div>
                <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mt-md">
                    <q-input v-model="form.cif" label="CIF" outlined
                        error-message="Requerido" :error="$v.form.cif.$error" @blur="$v.form.cif.$touch()"
                    />
                </div>
                <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mt-md">
                    <q-input v-model="form.email" label="Correo de contacto" outlined type="email"
                        error-message="Requerido" :error="$v.form.email.$error" @blur="$v.form.email.$touch()"
                    />
                </div>
                <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <q-input :type="isPwd ? 'password' : 'text'" v-model="password" label="Contraseña" outlined
                        error-message="ingrese una contraseña valida, minimo de caracteres es de 6" :error="$v.password.$error" @blur="$v.password.$touch()">
                        <template v-slot:append>
                        <q-icon :name="isPwd ? 'visibility' : 'visibility_off'" class="cursor-pointer q-pa-sm" color="primary" @click="isPwd = !isPwd" />
                        </template>
                    </q-input>
                </div>
                <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <q-input :type="isPwd ? 'password' : 'text'" v-model="repeatPassword" label="Confirmar Contraseña" outlined
                        error-message="ingrese una contraseña valida, minimo de caracteres es de 6" :error="$v.repeatPassword.$error" @blur="$v.repeatPassword.$touch()">
                        <template v-slot:append>
                        <q-icon :name="isPwd ? 'visibility' : 'visibility_off'" class="cursor-pointer q-pa-sm" color="primary" @click="isPwd = !isPwd" />
                        </template>
                    </q-input>
                </div>
                <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <q-checkbox v-model="terminos_condiciones" :class="textColor" @input="terminos_condiciones ? textColor = 'text-black' : ''" label="Acepto término y condiciones de uso*" />
                </div>
                <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-subtitle1 q-mb-md">Imagenes de la Tienda (hasta 5 imagenes)</div>
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
                <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 row items-center justify-center q-my-lg">
                    <q-btn no-caps label="Finalizar" color="primary" size="lg" style="border-radius: 25px; width: 80%"
                    @click="registrar()" />
                </div>
          </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { required, email, sameAs, maxLength, minLength } from 'vuelidate/lib/validators'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      slide: 1,
      password: '',
      repeatPassword: '',
      textColor: 'text-black',
      img: null,
      perfil: null,
      perfilImg: null,
      portada: null,
      portadaImg: null,
      isPwd: true,
      terminos_condiciones: false,
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
      },
      images: [],
      imagesSubir: [],
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
      ciudad: { required },
      direccion: { required },
      codigo_postal: { required },
      cif: { required },
      email: { email, required }
    },
    terminos_condiciones: { required },
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
          this.$router.push('/inicio')
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
      if (!this.$v.portada.$error && !this.$v.perfil.$error && !this.$v.form.dias.$error && !this.$v.form.hapertura.$error && !this.$v.form.hcierre.$error && !this.$v.form.nombre.$error && !this.$v.form.descripcion.$error) {
        this.slide = 2
      }
    },
    async registrar () {
      this.$v.$touch()
      if (!this.terminos_condiciones) {
        this.textColor = 'text-red'
      }
      if (!this.$v.form.$error && !this.$v.password.$error && !this.$v.repeatPassword.$error && this.terminos_condiciones) {
        this.form.password = this.password
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
            this.onSubmit()
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
