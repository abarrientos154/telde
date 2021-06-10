<template>
  <div>
        <div class="q-pt-md q-px-md">
          <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="$router.go(-1)" />
        </div>
        <div class="column items-center justify-center q-mx-md">
          <div class="column items-center justify-center">
            <div class="row justify-center">
              <q-img :src="baseu" style="width:130px;height:130px;border-radius:25px" >
                <div class="absolute-center bg-transparent text-center" style="width: 100%">
                  <div class="absolute-center" style="z-index:1">
                    <q-file borderless v-model="perfil" class="button-subir" @input="changePerfil()" accept=".jpg, image/*"
                    >
                      <q-avatar class="absolute-center cursor-pointer">
                        <q-icon name="file_upload" color="white" class="absolute-center" />
                      </q-avatar>
                    </q-file>
                  </div>
                </div>
              </q-img>
            </div>
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
              <q-input v-model="form.email" filled type="email" readonly
              />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 row items-center justify-center q-mt-lg">
              <q-btn no-caps rounded label="Guardar" color="primary" size="lg" style="width: 80%"
              @click="save()" />
            </div>
          </div>
        </div>

        <div class="column items-center justify-center q-mx-md">
          <div class="row justify-center" style="width:100%">
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 q-mt-xl q-mb-sm row justify-between">
              <div class="text-h6">Mis direcciones</div>
              <div class="">
                <q-btn no-caps rounded color="primary" label="Agregar nueva"
                @click="actionDir(2)" />
              </div>
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 q-mb-md">
              <q-separator />
            </div>
            <div class="column items-center q-gutter-md">
              <q-card v-for="(card, index) in form.direccionC" :key="index" class="shadow-10" style="width: 90%;height:120px;border-radius:25px;">
                <q-card-section class="row items-start justify-between">
                  <div class="col-8 no-wrap">
                    <div class="text-h6 text-bold ellipsis">Dirección Registrada</div>
                    <div class="text-h8">{{card.provincia.nombre}}</div>
                    <div class="text-h8 ellipsis">{{card.ciudad.nombre + ' - ' + card.ciudad.cp}}</div>
                    <div class="text-h8 ellipsis">{{card.direccion}}</div>
                  </div>
                  <q-card-actions vertical class="col-4 justify-around">
                    <q-btn no-caps color="primary" label="Eliminar" style="width:80px" @click="eliminarD(card._id)"/>
                    <div class="q-mt-sm">
                      <q-btn no-caps color="primary" label="Editar" style="width:80px" @click="actionDir(1, card)"/>
                    </div>
                  </q-card-actions>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>

      <q-dialog v-model="miDireccion">
        <q-card class="my-card" style="width: 100%; border-radius: 30px">
          <q-card-section>
              <q-img
                :src="'nopublicidad.jpg'"
                style="height: 200px;width: 100%; border-radius: 30px"
              >
              </q-img>
          </q-card-section>

          <q-card-section class="q-py-none">
            <div class="text-h6">{{!editD ? 'Nueva dirección' : 'Mi dirección'}}</div>
            <q-separator inset />
            <div class="q-pa-sm">
              <div class="text-subtitle2 text-grey-8">Provincia</div>
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
              <div class="text-subtitle2 text-grey-8">Ciudad</div>
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
              <div class="text-subtitle2 text-grey-8 q-mt-sm">Dirección</div>
              <q-input v-model="direccion.direccion" filled
                error-message="Requerido" :error="$v.direccion.direccion.$error" @blur="$v.direccion.direccion.$touch()"
              />
            </div>
          </q-card-section>

          <q-card-actions class="q-py-sm" align="center">
            <div class="q-pb-md">
              <q-btn v-close-popup rounded no-caps color="primary" size="lg" label="Guardar" style="width:200px"
              @click="editD ? actualizarD(direccion._id) : crearD()" />
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import env from '../../env'
// import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      baseu: '',
      perfil: null,
      miDireccion: false,
      editD: false,
      form: {},
      direccion: {},
      optionsProvincias: [],
      optionsCiudad: [],
      ciudadesFilter: []
    }
  },
  validations: {
    form: {
      name: { required },
      lastName: { required },
      telefono: { required }
    },
    direccion: {
      direccion: { required },
      provincia: { required },
      ciudad: { required }
    }
  },
  mounted () {
    this.getUser()
    this.getProvincia()
  },
  methods: {
    async getUser () {
      this.$q.loading.show({
        message: 'Cargando datos'
      })
      await this.$api.get('user_info').then(res => {
        if (res) {
          this.form = res
          this.baseu = env.apiUrl + '/perfil_img/' + res._id
          this.$q.loading.hide()
        } else {
          this.$q.loading.hide()
        }
      })
    },
    getProvincia () {
      this.$api.get('provincias').then(res => {
        if (res) {
          this.optionsProvincias = res
        }
      })
    },
    async save () {
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        this.$q.loading.show({
          message: 'Actualizando datos'
        })
        await this.$api.put('editar_cliente', this.form).then(res => {
          if (res) {
            this.$q.notify({
              message: 'Perfil Actualizado Correctamente',
              color: 'positive'
            })
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
    async changePerfil () {
      this.$q.loading.show()
      var formData = new FormData()
      formData.append('perfil', this.perfil)
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
          location.reload()
          this.$q.loading.hide()
        } else {
          this.$q.loading.hide()
        }
      })
    },
    actionDir (val, data) {
      if (val === 1) {
        this.direccion = JSON.parse(JSON.stringify(data))
        this.ciudadesOpt(this.direccion.provincia_id, true)
        this.editD = true
        this.miDireccion = true
      } else {
        this.direccion = {}
        this.$v.direccion.$reset()
        this.editD = false
        this.miDireccion = true
      }
    },
    ciudadesOpt (id, bool) {
      this.$q.loading.show({
        message: 'Buscando ciudades'
      })
      if (this.direccion.ciudad && !bool) {
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
    crearD () {
      this.$v.direccion.$touch()
      if (!this.$v.direccion.$error) {
        this.$q.loading.show({
          message: 'Creando dirección'
        })
        this.$api.post('nueva_direccion', this.direccion).then(res => {
          if (res) {
            this.getUser()
            this.miDireccion = false
            this.$q.loading.hide()
          }
        })
      }
    },
    actualizarD (id) {
      this.$v.direccion.$touch()
      if (!this.$v.direccion.$error) {
        this.$q.loading.show({
          message: 'Actualizando dirección'
        })
        this.$api.put('direccion/' + id, this.direccion).then(res => {
          if (res) {
            this.getUser()
            this.miDireccion = false
            this.$q.loading.hide()
          }
        })
      }
    },
    eliminarD (id) {
      this.$q.dialog({
        title: '¡Atención!',
        message: '¿Esta seguro que desea eliminar esta dirección?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$q.loading.show({
          message: 'Eliminando dirección'
        })
        this.$api.delete('direccion/' + id).then(res => {
          if (res) {
            this.getUser()
            this.$q.loading.hide()
          }
        })
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
  color: white;
  background-color: $grey;
  border-radius: 100%;
  height:40px;
  width:40px;
  cursor: pointer;
}
</style>
