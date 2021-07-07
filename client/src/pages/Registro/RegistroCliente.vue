<template>
  <div>
    <q-carousel
      class="window-height"
      animated
      v-model="slide"
      infinite
    >
      <q-carousel-slide :name="1" >
        <div class="q-pt-md q-px-md">
          <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="$router.go(-1)" />
        </div>
        <div class="column items-center justify-center q-mx-md">
          <div class="column items-center justify-center">
            <div class="row justify-center">
              <q-img :src="perfil ? perfilImg : 'nopublicidad.jpg'" style="width:130px;height:130px;border-radius:25px" >
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
          <div class="row justify-center q-mt-md">
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Nombre</div>
              <q-input v-model="form.name" filled
                error-message="Requerido" :error="$v.form.name.$error" @blur="$v.form.name.$touch()"
              />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Apellidos</div>
              <q-input v-model="form.lastName" filled
                error-message="Requerido" :error="$v.form.lastName.$error" @blur="$v.form.lastName.$touch()"
              />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Número de contacto</div>
              <q-input v-model="form.telefono" filled
                error-message="Requerido" :error="$v.form.telefono.$error" @blur="$v.form.telefono.$touch()"
              />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Correo de contacto</div>
              <q-input v-model="form.email" filled type="email"
                error-message="Requerido" :error="$v.form.email.$error" @blur="$v.form.email.$touch()"
              />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Contraseña</div>
              <q-input :type="isPwd ? 'password' : 'text'" v-model="password" filled
                error-message="ingrese una contraseña valida, minimo 6 caracteres" :error="$v.password.$error" @blur="$v.password.$touch()">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility' : 'visibility_off'" class="cursor-pointer q-pa-sm" color="primary" @click="isPwd = !isPwd" />
                </template>
              </q-input>
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Confirmar Contraseña</div>
              <q-input :type="isPwd ? 'password' : 'text'" v-model="repeatPassword" filled
                error-message="ingrese una contraseña valida, minimo 6 caracteres" :error="$v.repeatPassword.$error" @blur="$v.repeatPassword.$touch()">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility' : 'visibility_off'" class="cursor-pointer q-pa-sm" color="primary" @click="isPwd = !isPwd" />
                </template>
              </q-input>
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <q-checkbox v-model="terminos_condiciones" :class="textColor" @input="terminos_condiciones ? textColor = 'text-black' : ''" label="Acepto término y condiciones de uso*" />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 row items-center justify-center q-my-lg">
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
        <div class="column items-center justify-center q-mx-md">
          <div class="row justify-center" style="width:100%">
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 row justify-center">
              <q-img src="fondo1.jpg" style="width:100%;height:210px;border-radius:25px" >
              </q-img>
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 q-mt-xl">
              <div class="text-h6">Nueva dirección</div>
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 q-mb-md">
              <q-separator />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Ciudad</div>
              <q-select @input="ciudadesOpt(direccion.provincia.id)" filled v-model="direccion.provincia" :options="optionsProvincias" map-options option-label="nombre"
                :error="$v.direccion.provincia.$error" @blur="$v.direccion.provincia.$touch()" >
                  <template v-slot:option="scope">
                    <q-item
                      v-bind="scope.itemProps"
                      v-on="scope.itemEvents"
                    >
                      <q-item-section>
                        <q-item-label v-html="scope.opt.nombre" />
                      </q-item-section>
                    </q-item>
                  </template>
              </q-select>
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 q-mb-sm">
              <div class="text-subtitle2 text-grey-8">Localidad</div>
              <q-select :disable="ciudadesFilter.length ? false : true" filled v-model="direccion.ciudad" :options="optionsCiudad" map-options option-label="nombre" use-input @filter="filterFn"
                :error="$v.direccion.ciudad.$error" @blur="$v.direccion.ciudad.$touch()" >
                  <template v-slot:option="scope">
                    <q-item
                      v-bind="scope.itemProps"
                      v-on="scope.itemEvents"
                    >
                      <q-item-section>
                        <q-item-label v-html="scope.opt.nombre" />
                        <q-item-label caption>{{ scope.opt.cp }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </template>
              </q-select>
              <q-input dense v-if="direccion.ciudad" v-model="direccion.ciudad.cp" filled readonly label="Código postal"
              />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Dirección</div>
              <q-input v-model="direccion.direccion" filled
                error-message="Requerido" :error="$v.direccion.direccion.$error" @blur="$v.direccion.direccion.$touch()"
              />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 row items-center justify-center q-my-lg">
              <q-btn no-caps label="Finalizar" color="primary" size="lg" style="border-radius: 25px; width: 80%"
              @click="registrar()" />
            </div>
          </div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="3" >
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
import { required, email, sameAs, maxLength, minLength } from 'vuelidate/lib/validators'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      form: {},
      direccion: {},
      perfil: null,
      perfilImg: null,
      isPwd: true,
      terminos_condiciones: false,
      password: '',
      repeatPassword: '',
      textColor: 'text-black',
      slide: 1,
      optionsProvincias: [],
      optionsCiudad: [],
      ciudadesFilter: []
    }
  },
  validations: {
    form: {
      name: { required },
      lastName: { required },
      telefono: { required },
      email: { email, required }
    },
    direccion: {
      direccion: { required },
      provincia: { required },
      ciudad: { required }
    },
    terminos_condiciones: { required },
    repeatPassword: { sameAsPassword: sameAs('password') },
    password: { required, maxLength: maxLength(256), minLength: minLength(6) },
    perfil: { required }
  },
  mounted () {
    this.getProvincia()
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
      this.$v.form.$touch()
      this.$v.terminos_condiciones.$touch()
      this.$v.repeatPassword.$touch()
      this.$v.password.$touch()
      this.$v.perfil.$touch()
      if (!this.terminos_condiciones) {
        this.textColor = 'text-red'
      }
      if (!this.$v.form.$error && !this.$v.password.$error && !this.$v.repeatPassword.$error && !this.$v.perfil.$error && this.terminos_condiciones) {
        this.form.password = this.password
        this.slide = 2
      } else {
        this.$q.notify({
          message: 'Faltan campos por llenar',
          color: 'negative'
        })
      }
    },
    async registrar () {
      this.form.enable = true
      this.$v.direccion.$touch()
      if (!this.$v.direccion.$error) {
        this.$q.loading.show({
          message: 'Registrando datos'
        })
        this.direccion.principal = true
        var formData = new FormData()
        formData.append('perfil', this.perfil)
        formData.append('dat', JSON.stringify(this.form))
        formData.append('dir', JSON.stringify(this.direccion))
        await this.$api.post('registrar_cliente', formData, {
          headers: {
            'Content-Type': undefined
          }
        }).then(res => {
          if (res) {
            this.slide = 3
            this.$q.loading.hide()
          } else {
            this.$q.loading.hide()
          }
        })
      } else {
        this.$q.notify({
          message: 'Faltan campos por llenar',
          color: 'negative'
        })
      }
    },
    getProvincia () {
      this.$api.get('provincias').then(res => {
        if (res) {
          this.optionsProvincias = res
        }
      })
    },
    ciudadesOpt (id) {
      this.$q.loading.show({
        message: 'Buscando localidades'
      })
      if (this.direccion.ciudad) {
        this.direccion.ciudad = null
      }
      this.$api.get('ciudades/' + id).then(res => {
        if (res) {
          this.ciudadesFilter = res
          this.optionsCiudad = res
          this.$q.loading.hide()
        }
      })
    },
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.optionsCiudad = this.ciudadesFilter
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.optionsCiudad = this.ciudadesFilter.filter(v => v.nombre.toLowerCase().indexOf(needle) > -1)
      })
    },
    changePerfil () {
      if (this.perfil) { this.perfilImg = URL.createObjectURL(this.perfil) }
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
</style>
