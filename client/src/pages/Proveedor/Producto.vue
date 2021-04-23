<template>
  <div class="q-px-xl q-pb-xl">
      <div class="text-h6 text-grey-7 text-center"> Agregar Producto </div>

      <div class="row q-pa-sm justify-around">
        <div class="full-width q-pa-sm">
          <q-input v-model="form.nombre" label="Nombre" outlined
          error-message="Requerido" :error="$v.form.nombre.$error" @blur="$v.form.nombre.$touch()"
          />
        </div>
        <div class="full-width q-pa-sm">
          <q-input v-model="form.descripcion" label="Descripcion" outlined type="textarea"
          error-message="Requerido" :error="$v.form.descripcion.$error" @blur="$v.form.descripcion.$touch()"
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pa-sm">
          <q-input v-model.number="form.cantidad" label="Cantidad" outlined type="number"
          error-message="Requerido" :error="$v.form.cantidad.$error" @blur="$v.form.cantidad.$touch()"
          />
        </div>
        <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pa-sm">
          <q-input v-model.number="form.valor" label="Valor" outlined type="number"
          error-message="Requerido" :error="$v.form.valor.$error" @blur="$v.form.valor.$touch()"
          />
        </div>
      </div>

      <div class="column q-mb-md">
        <div :class="$v.images.$error ? 'text-red q-ma-md' : 'text-grey-7 q-ma-md'">Imagenes del producto (hasta 3 imagenes)</div>
        <div class="row full-width q-pa-md items-center">
          <q-scroll-area horizontal style="height:120px; width: 100%;"
            :thumb-style="thumbStyle" :bar-style="barStyle"
          >
            <div class="no-wrap q-gutter-xs row">
              <div class="column shadow-3 justify-center items-center q-ma-sm q-ml-sm bg-grey-2" style="height:100px;border-radius:12px;width:140px">
                <q-avatar size="90px">
                  <div style="z-index:1">
                    <q-file borderless v-model="img" class="button-camera" :disable="images.length > 2" @input="insertarImagen()" accept=".jpg, image/*">
                      <q-icon name="add_a_photo" class="absolute-center" size="30px" color="white" />
                    </q-file>
                  </div>
                </q-avatar>
              </div>
              <div class="q-gutter-xs row" v-if="images.length > 0">
                <q-img v-for="(item, index) in imagesSubir" :key="index" :src="item" style="height:100px;border-radius:12px;width:140px" >
                  <q-btn @click="images.splice(index, 1), imagesSubir.splice(index, 1)" flat class="absolute all-pointer-events" size="15px" dense icon="clear" color="negative" style="top: 0px; right: 0px" rounded />
                </q-img>
              </div>
            </div>
          </q-scroll-area>
        </div>
      </div>

      <div class="row justify-center" style="width:100%">
        <q-btn label="guardar" @click="guardar()" color="primary" push style="width:50%" />
      </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
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
      categorias: [],
      subnivelunoOpciones: [],
      subniveldosOpciones: [],
      subniveltresOpciones: [],
      form: {
      },
      images: [],
      imagesSubir: [],
      img: null
    }
  },
  validations: {
    form: {
      nombre: { required },
      descripcion: { required },
      cantidad: { required },
      valor: { required }
    },
    images: { required, maxLength: maxLength(3), minLength: minLength(1) }
  },
  computed: {
    optionNivelUno () {
      return this.subnivelunoOpciones.filter(v => v.categoria_id === this.form.categoria_id)
    },
    optionNivelDos () {
      return this.subniveldosOpciones.filter(v => v.subniveluno_id === this.form.subniveluno_id)
    },
    optionNivelTres () {
      return this.subniveltresOpciones.filter(v => v.subniveldos_id === this.form.subniveldos_id)
    }
  },
  mounted () {
    this.getCategorias()
  },
  methods: {
    reiniciarCat (ind) {
      if (ind === 1) {
        delete this.form.subniveluno_id
        delete this.form.subniveldos_id
        delete this.form.subniveltres_id
      } else if (ind === 2) {
        delete this.form.subniveldos_id
        delete this.form.subniveltres_id
      } else if (ind === 3) {
        delete this.form.subniveltres_id
      }
    },
    async guardar () {
      this.$v.$touch()
      if (!this.$v.form.$error && !this.$v.images.$error) {
        this.$q.loading.show()
        var formData = new FormData()
        var files = this.images
        if (files.length > 0) {
          for (let i = 0; i < this.images.length; i++) {
            formData.append('files' + i, files[i])
          }
          this.form.cantidadFiles = files.length
        } else { this.form.cantidadFiles = 0 }
        formData.append('dat', JSON.stringify(this.form))
        await this.$api.post('producto', formData, {
          headers: {
            'Content-Type': undefined
          }
        }).then(res => {
          if (res) {
            this.$q.notify({
              message: 'Producto agregado Correctamente',
              color: 'positive'
            })
            this.$router.go(-1)
            this.$q.loading.hide()
          } else {
            this.$q.loading.hide()
          }
        })
      }
    },
    insertarImagen () {
      this.images.push(this.img)
      this.imagesSubir.push(URL.createObjectURL(this.img))
      this.img = null
    },
    getCategorias () {
      this.$api.get('categorias_y_sub').then(res => {
        if (res) {
          this.categorias = res.categoria
          this.subnivelunoOpciones = res.subniveluno
          this.subniveldosOpciones = res.subniveldos
          this.subniveltresOpciones = res.subniveltres
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
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
