<template>
  <q-page>
    <q-img :src="images.length > 0 ? imagesSubir[0] : 'nopublicidad.jpg'" style="height: 500px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px" >
      <div class="bg-transparent">
        <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="$router.go(-1)" />
      </div>
      <div class="row justify-center bg-transparent absolute-center" style="width:100%">
        <q-avatar v-if="images.length < 3" size="90px">
          <div style="z-index:1">
            <q-file borderless v-model="img" class="button-camera" @input="insertarImagen()" accept=".jpg, image/*">
              <q-icon name="add_a_photo" class="absolute-center" size="30px" color="white" />
            </q-file>
          </div>
        </q-avatar>
      </div>
    </q-img>
    <div :class="$v.images.$error ? 'text-red text-center' : 'text-grey-7 text-center'">Imagenes del producto (hasta 3 imagenes)</div>
    <q-scroll-area v-if="images.length > 0" horizontal style="height:120px; width: 100%;"
      :thumb-style="thumbStyle" :bar-style="barStyle"
    >
      <div class="no-wrap q-px-md q-gutter-md row">
        <q-img v-for="(item, index) in imagesSubir" :key="index" :src="item" style="height:100px;border-radius:12px;width:140px" >
          <q-btn @click="images.splice(index, 1), imagesSubir.splice(index, 1)" flat class="absolute all-pointer-events" size="15px" dense icon="clear" color="negative" style="top: 0px; right: 0px" rounded />
        </q-img>
      </div>
    </q-scroll-area>

      <div class="row q-pa-sm justify-around">
        <div class="col-xs-10 col-sm-10 col-md-9 col-lg-9 col-xl-9 q-pa-sm">
          <div class="text-subtitle1">Nombre del producto</div>
          <q-input v-model="form.nombre" label="Nombre del producto" outlined
          error-message="Requerido" :error="$v.form.nombre.$error" @blur="$v.form.nombre.$touch()"
          />
        </div>
        <div class="col-12 row justify-center">
          <div class="col-xs-10 col-sm-10 col-md-9 col-lg-9 col-xl-9 text-subtitle1 q-mt-md">Selecciona tus categorias</div>
          <q-scroll-area
            class="col-12"
            horizontal
            style="height: 80px;"
          >
            <div class="row no-wrap q-py-md q-px-md q-gutter-md">
              <div v-for="(btn, index) in 10" :key="index" >
                <q-btn no-caps class="q-px-md" label="Categoria" color="blue-grey-11" text-color="blue-grey-9" />
              </div>
            </div>
          </q-scroll-area>
        </div>
        <div class="col-xs-10 col-sm-10 col-md-9 col-lg-9 col-xl-9 q-pa-sm">
          <div class="text-subtitle1">Precio</div>
          <q-input v-model.number="form.valor" label="Precio del producto" outlined type="number"
          error-message="Requerido" :error="$v.form.valor.$error" @blur="$v.form.valor.$touch()"
          />
        </div>
        <div class="col-xs-10 col-sm-10 col-md-9 col-lg-9 col-xl-9 q-pa-sm">
          <div class="text-subtitle1">Reseña del articulo</div>
          <q-input v-model="form.descripcion" label="Descripcion" outlined type="textarea"
          error-message="Requerido" :error="$v.form.descripcion.$error" @blur="$v.form.descripcion.$touch()"
          />
        </div>
        <div class="col-xs-10 col-sm-10 col-md-9 col-lg-9 col-xl-9 q-pa-sm">
          <div class="row justify-between items-center">
            <div>Control stock</div>
            <q-input class="col-6" v-model.number="form.cantidad" label="Cantidad disponible" outlined type="number"
            error-message="Requerido" :error="$v.form.cantidad.$error" @blur="$v.form.cantidad.$touch()"
            />
          </div>
        </div>
      </div>

      <div class="row items-center justify-center" style="width:100%">
        <q-btn no-caps rounded label="Guardar" color="primary" size="lg" style="width: 50%"
        @click="guardar()" />
      </div>
  </q-page>
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
