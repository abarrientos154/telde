<template>
  <q-layout>
    <q-page-container class="bg-grey-2">
      <q-page class="column justify-center items-center">
            <div class="column items-center justify-center">
                <div class="row justify-center q-my-md">
                  <img src="logo.png" alt="logo" style="width: 90px">
                </div>
                <div class="q-mt-sm text-black text-h4">NOVA TELDE</div>
                <div class="text-blue text-subtitle1">A tu alcance</div>
                <div class="q-mt-sm text-black text-h6">Inicio de Sesión</div>
            </div>

            <q-form @submit="onSubmit" class="q-gutter-sm q-ma-sm q-mt-sm">
              <div>
                <q-input class="text-bold" type="email" v-model="form.email" label="Correo electrónico" filled>
                </q-input>
              </div>

              <div>
                <q-input class="text-bold q-mt-lg" :type="isPwd ? 'password' : 'text'" v-model="form.password" label="Contraseña" filled>
                  <template v-slot:append>
                    <q-icon :name="isPwd ? 'visibility' : 'visibility_off'" class="cursor-pointer" color="primary" @click="isPwd = !isPwd"/>
                  </template>
                </q-input>
              </div>
              <div class="text-center text-body2 text-grey-7">¿Olvidaste tu contraseña?</div>

              <div class="row justify-center q-mt-lg">
                <q-btn rounded no-caps color="primary" style="width:200px" label="Iniciar sesión" :loading="loading" type="submit">
                  <template v-slot:loading>
                    <q-spinner-hourglass class="on-left" />
                    Cargando...
                  </template>
                </q-btn>
              </div>

              <div class="row justify-center">
                <div class="col-12 text-center text-body2 text-grey-7 q-mt-md">¿Aún no tienes una cuenta?</div>
                <q-btn no-caps flat color="black" label="¡Regístrate ahora!" size="lg" @click="$router.push('/registro')">
                </q-btn>
              </div>
              <!-- <q-separator inset class="q-mt-lg q-mb-lg" />

              <div class="text-center text-primary text-bold cursor-pointer" @click="$router.push('registro')"> ¿Eres Nuevo? Registrate </div> -->
            </q-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      form: {},
      isPwd: true,
      loading: false
    }
  },
  methods: {
    ...mapMutations('generals', ['login']),
    onSubmit () {
      this.$q.loading.show({
        message: 'Iniciando sesión'
      })
      this.$api.post('login', this.form).then(res => {
        if (res) {
          if (res.TELDE_SESSION_INFO.roles[0] === 3) {
            this.$router.push('/tienda/' + res.TELDE_SESSION_INFO._id)
          } else {
            this.$router.push('/inicio')
          }
          this.login(res)
        } else {
          console.log('hubo un error')
        }
      })
      this.$q.loading.hide()
    }
  }
}
</script>
<style lang="css" scoped>

</style>
