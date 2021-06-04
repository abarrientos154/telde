<template>
  <div>
    <div class="column items-center justify-center q-mx-md q-mt-xl">
      <div class="text-h6">Editar Perfil</div>
      <div class="column items-center justify-center">
        <div class="row justify-center">
          <q-img :src="perfil ? perfilImg : baseu" style="width:130px;height:130px;border-radius:25px" >
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
          <div class="text-subtitle2 text-grey-8">Nombres</div>
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
      </div>
    </div>
    <div class="column items-center justify-center q-mx-md">
      <div class="row justify-center" style="width:100%">
        <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 q-mb-md">
          <q-separator />
        </div>
        <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
          <div class="text-subtitle2 text-grey-8">Provincia</div>
          <q-input v-model="direcciones.provincia" filled
            error-message="Requerido" :error="$v.direcciones.provincia.$error" @blur="$v.direcciones.provincia.$touch()"
          />
        </div>
        <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
          <div class="text-subtitle2 text-grey-8">Ciudad</div>
          <q-input v-model="direcciones.ciudad" filled
            error-message="Requerido" :error="$v.direcciones.ciudad.$error" @blur="$v.direcciones.ciudad.$touch()"
          />
        </div>
        <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
          <div class="text-subtitle2 text-grey-8">Dirección</div>
          <q-input v-model="direcciones.direccion" filled
            error-message="Requerido" :error="$v.direcciones.direccion.$error" @blur="$v.direcciones.direccion.$touch()"
          />
        </div>
        <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 row items-center justify-center q-my-lg">
          <q-btn no-caps label="Guardar Cambios" color="primary" size="lg" style="border-radius: 25px; width: 80%"
          @click="save()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import env from '../../env'
// import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      form: {},
      direcciones: {},
      perfil: null,
      perfilImg: null,
      textColor: 'text-black',
      baseu: ''
    }
  },
  validations: {
    form: {
      name: { required },
      lastName: { required },
      telefono: { required },
      email: { email, required }
    },
    direcciones: {
      direccion: { required },
      provincia: { required },
      ciudad: { required }
    },
    perfil: { required }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    async getUser () {
      await this.$api.get('user_info').then(res => {
        if (res) {
          this.form = res
          this.baseu = env.apiUrl + '/perfil_img/' + res._id
          this.direcciones = res.direcciones[0]
          console.log('this.form.direcciones[0] :>> ', res)
        }
      })
    },
    async save () {
      if (!this.$v.form.$error && !this.$v.perfil.$error && !this.$v.direcciones.$error) {
        var formData = new FormData()
        formData.append('perfil', this.perfil)
        formData.append('dat', JSON.stringify(this.form))
        console.log('formData :>> ', this.perfil)
        await this.$api.put('updatePerfil/' + this.form._id, formData, {
          headers: {
            'Content-Type': undefined
          }
        }).then(res => {
          if (res) {
            this.$q.notify({
              message: 'Perfil Actualizado Correctamente',
              color: 'positive'
            })
            this.$q.loading.hide()
          }
          this.$q.loading.hide()
        })
      }
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
