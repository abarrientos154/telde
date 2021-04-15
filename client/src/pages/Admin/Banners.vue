<template>
  <div>
      <div :class="web ? 'q-my-xl' : 'q-my-sm'">
            <div v-if="web" class="row">
              <div class="text-h5 estilo-titulos text-center text-weight-bold q-ml-md q-mr-sm q-my-xl">Carrusel Principal</div>
              <div class="q-mt-xl">
                <q-btn round color="primary" text-color="black" icon="add" @click="form = {}, $v.form.$reset(), tipo = 'principal', imgPublicidad = '', file = null, $v.file.$reset(), edit = false, addPublicidad = true" />
              </div>
            </div>
            <div v-else class="row justify-between">
              <div class="col-9 text-h5 estilo-titulos text-center text-weight-bold q-ml-md q-mr-xs q-my-md">Carrusel Principal</div>
              <div class="col-2 q-mt-md">
                <q-btn round color="primary" text-color="black" icon="add" @click="form = {}, $v.form.$reset(), tipo = 'principal', imgPublicidad = '', file = null, $v.file.$reset(), edit = false, addPublicidad = true" />
              </div>
            </div>
            <q-scroll-area v-if="slPrincipal.length" horizontal :style="web ? 'height: 310px' : 'height: 200px'" class="q-ma-sm" >
              <div class="row no-wrap">
                <q-card clickable v-ripple :class="web ? 'q-ml-xl' : 'q-ml-sm'" v-for="(card, index) in slPrincipal" :key="index">
                  <q-card-section horizontal>
                    <q-img
                      :src="baseu + card.fileName"
                      :style="web ? 'height: 290px; width: 390px' : 'height: 180px; width: 280px'"
                      @click="form = card, imgPublicidad = baseu + card.fileName, edit = true, addPublicidad = true" />
                    <q-card-actions vertical class="justify-around q-px-xs bg-black">
                        <q-toggle
                          @input="disableEnable(card._id, card.enable, card.tipo)"
                          v-model="card.enable"
                          checked-icon="lock_open"
                          unchecked-icon="lock"
                          :color="card.enable ? 'green-14' : 'red'"
                          keep-color
                          />
                        <q-btn round flat color="white" size="md" icon="delete" @click="deletePublicidad(card._id)"/>
                    </q-card-actions>
                  </q-card-section>
                </q-card>
              </div>
            </q-scroll-area>
            <div v-else class="row">
              <q-card clickable v-ripple class="shadow-11 q-my-sm q-mx-md q-py-xl col-xs-11 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <div class="absolute-center text-weight-bold">Crea una publicidad ...</div>
              </q-card>
            </div>
          </div>

          <div class="q-my-xl">
            <div class="text-h5 estilo-titulos text-center text-weight-bold q-mx-md q-my-xl">Carrusel Publicitario 1</div>
              <div class="row justify-around">
              <q-card clickable class="col-xs-11 col-sm-11 col-md-5 col-lg-5 col-xl-5 bg-black q-mt-md" v-ripple v-for="(card, index) in slPublicidad1" :key="index">
                <q-card-section horizontal>
                    <q-img :src="!card.nuevo ? baseu + card.fileName : card.fileName" :style="web ? 'height: 290px; width: 90%' : 'height: 180px; width: 90%'" @click="!card.nuevo ? irRuta(card.ruta) : ''" />
                    <q-card-actions vertical class="q-px-xs bg-black">
                      <q-btn round flat color="white" size="md" icon="edit" @click="form = card, !card.nuevo ? imgPublicidad = baseu + card.fileName : imgPublicidad = '', card.nuevo ? edit = false : edit = true, $v.form.$reset(), $v.file.$reset(), addPublicidad = true"/>
                    </q-card-actions>
                  </q-card-section>
              </q-card>
            </div>
          </div>

          <div class="q-my-xl">
            <div class="text-h5 estilo-titulos text-center text-weight-bold q-mx-md q-my-xl">Carrusel Publicitario 2</div>
              <div class="row justify-around">
              <q-card clickable class="col-xs-11 col-sm-11 col-md-5 col-lg-5 col-xl-5 bg-black q-mt-md" v-ripple v-for="(card, index) in slPublicidad2" :key="index">
                <q-card-section horizontal>
                    <q-img :src="!card.nuevo ? baseu + card.fileName : card.fileName" :style="web ? 'height: 290px; width: 90%' : 'height: 180px; width: 90%'" @click="!card.nuevo ? irRuta(card.ruta) : ''" />
                    <q-card-actions vertical class="q-px-xs bg-black">
                      <q-btn round flat color="white" size="md" icon="edit" @click="form = card, !card.nuevo ? imgPublicidad = baseu + card.fileName : imgPublicidad = '', card.nuevo ? edit = false : edit = true, $v.form.$reset(), $v.file.$reset(), addPublicidad = true"/>
                    </q-card-actions>
                  </q-card-section>
              </q-card>
            </div>
          </div>

      <q-dialog v-model="addPublicidad">
        <q-card style="width: 100%; height: 90%">
            <q-card-section class="row items-center q-pb-none">
                <div class="text-h6">{{!edit ? 'Nueva Publicidad' : 'Modificar Publicidad'}}</div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup/>
            </q-card-section>

            <q-card-section>
                <q-input class="q-mt-md" outlined rounded v-model="form.ruta" label="Ingrese la ruta redireccional" :error="$v.form.ruta.$error" error-message="Este campo es requerido" @blur="$v.form.ruta.$touch()" />
            </q-card-section>

            <q-card-section>
              <div class="text-weight-bold q-mb-md text-h6 text-primary">Foto Publicitaria</div>
                <div class="row justify-between">
                    <div class="col-10">
                        <q-file style="width: 100%" @input="filePublicidad" accept=".jpg, image/*" v-model="file" outlined label="CLICK AQUÍ" hint="Ingresa una foto para esta publicidad" :error="$v.file.$error" error-message="Este campo es requerido" @blur="$v.file.$touch()">
                        </q-file>
                    </div>
                    <div class="col-2 row justify-center">
                        <q-icon size="md" name="close" color="negative" @click="file = null, !edit ? imgPublicidad = '' : imgPublicidad = baseu + form.fileName" class="cursor-pointer" />
                    </div>
                </div>
            </q-card-section>

            <q-separator />

            <q-card-section class="row justify-around">
                <div v-if="imgPublicidad === ''" class="text-subtitle2 text-grey text-center">Carga una imagen para la publicidad</div>
                <div v-else style="width:100%">
                    <q-img
                        :src="imgPublicidad"
                        style="width:100%"
                    />
                </div>
            </q-card-section>

            <q-card-actions class="column justify-center q-my-md">
              <q-btn color="primary" text-color="black" glossy :label="!edit ? 'Agregar' : 'Guardar'" @click="!edit && !form.nuevo ? addPublicidadPrincipal() : edit && !form.nuevo ? editarPublicidad() : nuevaPublicidad()" />
            </q-card-actions>
        </q-card>
      </q-dialog>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import env from '../../env'
import { openURL } from 'quasar'
export default {
  data () {
    return {
      baseu: '',
      web: true,
      addPublicidad: false,
      edit: false,
      file: null,
      imgPublicidad: '',
      enable: false,
      tipo: '',
      form: {},
      slPrincipal: [],
      slPublicidad1: [],
      slPublicidad2: []
    }
  },
  validations: {
    form: {
      ruta: { required }
    },
    file: { required }
  },
  mounted () {
    this.web = this.$q.platform.is.desktop
    this.getData()
    this.baseu = env.apiUrl + '/publicidad_img/'
  },
  methods: {
    irRuta (ruta) {
      openURL(ruta)
    },
    getData () {
      this.$api.get('publicidad').then(res => {
        if (res) {
          this.slPrincipal = res.filter(v => v.tipo === 'principal')
          this.slPublicidad1 = res.filter(v => v.tipo === 'publicidad1')
          this.slPublicidad2 = res.filter(v => v.tipo === 'publicidad2')
        }
      })
    },
    filePublicidad () {
      var img = ''
      var cc = {}
      cc = this.file
      img = URL.createObjectURL(cc)
      this.imgPublicidad = img
    },
    addPublicidadPrincipal () {
      this.$v.$touch()
      if (!this.$v.form.$error && !this.$v.file.$error) {
        this.form.enable = false
        this.form.tipo = this.tipo
        this.$q.loading.show({
          message: 'Guardando Publicidad, Por Favor Espere...'
        })
        var formData = new FormData()
        formData.append('files', this.file)
        formData.append('dat', JSON.stringify(this.form))
        this.$api.post('publicidad', formData, {
          headers: {
            'Content-Type': undefined
          }
        }).then(res => {
          this.$q.loading.hide()
          this.form = {}
          this.file = null
          this.imgPublicidad = ''
          this.getData()
          this.addPublicidad = false
        })
      }
    },
    editarPublicidad () {
      this.$v.$touch()
      if (!this.$v.form.$error) {
        this.$q.loading.show({
          message: 'Actualizando Publicidad, Por Favor Espere...'
        })
        var formData = new FormData()
        if (this.file) {
          this.form.buscar_file = true
          formData.append('files', this.file)
        } else {
          this.form.buscar_file = false
        }
        formData.append('dat', JSON.stringify(this.form))
        this.$api.put('publicidad/' + this.form._id, formData, {
          headers: {
            'Content-Type': undefined
          }
        }).then(res => {
          this.$q.loading.hide()
          this.form = {}
          this.file = null
          this.imgPublicidad = ''
          this.getData()
          this.addPublicidad = false
        })
      }
    },
    nuevaPublicidad () {
      this.$v.$touch()
      if (!this.$v.form.$error && !this.$v.file.$error) {
        this.$q.loading.show({
          message: 'Guardando Publicidad, Por Favor Espere...'
        })
        var formData = new FormData()
        this.form.buscar_file = true
        this.form.nuevo = false
        formData.append('files', this.file)
        formData.append('dat', JSON.stringify(this.form))
        this.$api.put('publicidad/' + this.form._id, formData, {
          headers: {
            'Content-Type': undefined
          }
        }).then(res => {
          this.$q.loading.hide()
          this.form = {}
          this.file = null
          this.imgPublicidad = ''
          this.getData()
          this.addPublicidad = false
        })
      }
    },
    deletePublicidad (id) {
      this.$q.dialog({
        title: 'Confirma',
        message: '¿Seguro deseas eliminar esta publicidad?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$api.delete('publicidad/' + id).then(res => {
          if (res) {
            this.$q.notify({
              color: 'positive',
              message: 'Eliminado Correctamente'
            })
            this.getData()
          }
        })
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
    },
    disableEnable (id, enable, tipo) {
      this.$api.post('publicidad_enable/' + id, { enable: enable, tipo: tipo }).then(res => {
        if (res) {
          this.getData()
        } else {
          if (enable) {
            this.$q.dialog({
              title: 'Atención',
              message: 'Ya tienes las publicidades activas disponibles, para activar otra debes desactivar alguna de las activas.',
              persistent: false
            }).onOk(() => {

            })
            this.getData()
          } else {
            this.$q.dialog({
              title: 'Atención',
              message: 'No puedes desactivar todas las publicidades de esta categoria.',
              persistent: false
            }).onOk(() => {

            })
            this.getData()
          }
        }
      })
    }
  }
}
</script>

<style>
.estilo-titulos {
  background-color: #fff599;
  border-radius: 12px
}
</style>
