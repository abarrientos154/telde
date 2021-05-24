<template>
  <q-page>
    <q-img :src="imagePerfil !== '' ? imagePerfil : 'nopublicidad.jpg'" style="height: 400px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px" >
      <div class="bg-transparent">
        <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="$router.go(-1)" />
      </div>
      <div class="row justify-center bg-transparent absolute-center" style="width:100%">
        <q-avatar size="90px">
          <div style="z-index:1">
            <q-file borderless v-model="imgPerfil" class="button-camera" @input="!edit ? insertarImagenP() : addImgP()" accept=".jpg, image/*"
            :error="$v.imgPerfil.$error" @blur="$v.imgPerfil.$touch()">
              <q-icon name="file_upload" class="absolute-center" size="30px" color="white" />
            </q-file>
          </div>
        </q-avatar>
      </div>
    </q-img>

      <div class="row q-pa-sm justify-around q-mt-md">
        <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
          <div class="text-subtitle2 text-grey-8">Nombre del producto</div>
          <q-input v-model="form.nombre" label="" filled
          error-message="Requerido" :error="$v.form.nombre.$error" @blur="$v.form.nombre.$touch()"
          />
        </div>
        <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
          <div :class="$v.images.$error ? 'text-red text-center text-subtitle2 q-mb-md' : 'text-grey-8 text-center text-subtitle2 q-mb-md'">Agregar las imagenes del producto, hasta 3 fotos</div>
          <q-scroll-area horizontal style="height:130px; width: 100%"
            :thumb-style="thumbStyle" :bar-style="barStyle"
          >
            <div class="no-wrap q-px-md q-gutter-md row items-center">
              <q-card class="bg-grey column justify-center items-center" style="height:100px;border-radius:12px;width:100px">
                <q-file borderless :disable="images.length < 3 ? false : true" v-model="img" class="button-camera" @input="!edit ? insertarImagen() : addImg()" accept=".jpg, image/*">
                  <q-icon name="file_upload" class="absolute-center" size="30px" color="white" />
                </q-file>
              </q-card>
              <q-img v-for="(item, index) in imagesSubir" :key="index" :src="item" style="height:100px;border-radius:12px;width:100px" >
                <q-btn @click="!edit ? borrarImg(index, 1) : eliminarImg(images[index])" flat class="absolute all-pointer-events" size="15px" dense icon="clear" color="negative" style="top: 0px; right: 0px" rounded />
              </q-img>
            </div>
          </q-scroll-area>
        </div>
        <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
          <div class="text-subtitle2 text-grey-8">Precio</div>
          <q-input v-model.number="form.valor" label="" filled type="number"
          error-message="Requerido" :error="$v.form.valor.$error" @blur="$v.form.valor.$touch()"
          />
        </div>
        <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
          <div class="text-subtitle2 text-grey-8">Reseña del articulo</div>
          <q-input v-model="form.descripcion" filled type="textarea"
          error-message="Requerido" :error="$v.form.descripcion.$error" @blur="$v.form.descripcion.$touch()"
          />
        </div>
        <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
          <div class="row justify-between items-center">
            <div class="col-6 row items-center">
              <q-icon class="col-1" name="add_box" size="sm" />
              <div class="col text-subtitle1 q-ml-xs ellipsis"> Control Stock </div>
            </div>
            <q-input class="col-6" v-model.number="form.cantidad" label="Cantidad disponible" filled type="number"
            error-message="Requerido" :error="$v.form.cantidad.$error" @blur="$v.form.cantidad.$touch()"
            />
          </div>
        </div>
        <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
          <q-checkbox v-model="oferta" label="¿Oferta?" @input="form.oferta = oferta" />
          <div v-if="form.oferta" class="row justify-between items-center">
            <div class="col-6 row items-start">
              <q-icon class="col-1" name="add_box" size="sm" />
              <div class="col text-subtitle1 q-ml-xs ellipsis"> Precio Oferta </div>
            </div>
            <div class="col-6">
              <q-input v-model.number="form.ofertaVal" label="Precio de oferta" filled type="number"
              />
            </div>
          </div>
          <div v-if="form.oferta">
            <div class="row justify-end items-center">
              <div class="col-6">
                <q-input class="q-mt-md" filled v-model="form.ofertaDate" label="Fecha de término" readonly>
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer" color="primary">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-date v-model="form.ofertaDate" mask="YYYY-MM-DD HH:mm">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Cerrar" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </div>
            <div class="row justify-end items-center">
              <div class="col-6">
                <q-input class="q-mt-md" filled v-model="form.ofertaTime" label="Hora de término" readonly>
                  <template v-slot:prepend>
                    <q-icon name="access_time" class="cursor-pointer" color="primary">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-time v-model="form.ofertaTime" mask="YYYY-MM-DD HH:mm" format24h>
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Cerrar" color="primary" flat />
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

      <div class="row items-center justify-center q-mt-md" style="width:100%">
        <q-btn no-caps rounded label="Guardar" color="primary" size="lg" style="width: 50%"
        @click="edit ? actualizar() : guardar()" />
      </div>

      <q-dialog v-model="modal" persistent>
        <q-card style="width:100%; height: 300px; border-radius: 20px">
          <div class="absolute-center" style="width:100%">
            <div class="text-h6 text-center">Producto creado con éxito</div>
            <div class="text-subtitle1 text-grey-7 text-center">Te estamos redirigiendo a tu tienda</div>
            <div class="row items-center justify-center q-mt-lg" style="width:100%">
              <q-btn no-caps rounded label="Aceptar" color="primary" size="lg" style="width: 50%"
              @click="$router.go(-1)"/>
            </div>
          </div>
        </q-card>
      </q-dialog>
  </q-page>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import env from '../../env'
export default {
  data () {
    return {
      img: null,
      imgPerfil: null,
      edit: false,
      oferta: false,
      modal: false,
      baseuProducto: '',
      productoId: '',
      imagePerfil: '',
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
      form: {},
      images: [],
      imagesSubir: []
    }
  },
  validations: {
    form: {
      nombre: { required },
      descripcion: { required },
      cantidad: { required },
      valor: { required }
    },
    imgPerfil: { required },
    images: { required, maxLength: maxLength(3), minLength: minLength(1) }
  },
  computed: {},
  mounted () {
    this.getCategorias()
    this.baseuProducto = env.apiUrl + '/producto_files/'
    if (this.$route.params.producto_id) {
      this.edit = true
      this.productoId = this.$route.params.producto_id
      this.getProducto(this.productoId)
    }
  },
  methods: {
    getProducto (id) {
      this.$api.get('producto/' + id).then(res => {
        if (res) {
          this.form = res
          if (!res.oferta) {
            this.oferta = false
          } else {
            this.oferta = true
          }
          this.images = res.images
          this.imagePerfil = this.baseuProducto + res._id
          for (let i = 0; i < this.images.length; i++) {
            this.imagesSubir.push(this.baseuProducto + this.images[i])
          }
        }
      })
    },
    getCategorias () {
      this.$api.get('categorias_y_sub').then(res => {
        if (res) {
          this.categorias = res.categoria
        }
      })
    },
    async guardar () {
      this.$v.$touch()
      if (!this.$v.form.$error && !this.$v.images.$error && !this.$v.imgPerfil.$error) {
        this.$q.loading.show()
        var formData = new FormData()
        var files = this.images
        if (files.length > 0) {
          for (let i = 0; i < this.images.length; i++) {
            formData.append('files' + i, files[i])
          }
          this.form.cantidadFiles = files.length
        } else { this.form.cantidadFiles = 0 }
        formData.append('perfil', this.imgPerfil)
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
            this.$q.loading.hide()
            this.modal = true
          } else {
            this.$q.loading.hide()
          }
        })
      }
    },
    async actualizar () {
      this.$v.$touch()
      if (!this.$v.form.$error && !this.$v.images.$error) {
        this.$q.loading.show()
        await this.$api.put('producto/' + this.productoId, this.form).then(res => {
          if (res) {
            this.$q.notify({
              message: 'Guardado Correctamente',
              positive: 'positive'
            })
            this.$q.loading.hide()
            this.$router.go(-1)
          } else {
            this.$q.loading.hide()
          }
        })
      }
    },
    async addImgP () {
      this.$q.loading.show()
      if (this.imgPerfil) {
        var formData = new FormData()
        formData.append('perfil', this.imgPerfil)
        await this.$api.post('subir_perfil_producto/' + this.productoId, formData, {
          headers: {
            'Content-Type': undefined
          }
        }).then((res) => {
          if (res) {
            this.$q.notify({
              message: 'Foto actualizada',
              color: 'positive'
            })
            this.$q.loading.hide()
            location.reload()
          }
          this.$q.loading.hide()
        })
      }
    },
    async addImg () {
      this.$q.loading.show()
      if (this.img) {
        var formData = new FormData()
        var files = []
        files[0] = this.img
        formData.append('files', files[0])
        await this.$api.post('subir_archivo_producto/' + this.productoId, formData, {
          headers: {
            'Content-Type': undefined
          }
        }).then((res) => {
          this.images = res.images
          this.imagesSubir = []
          for (let i = 0; i < this.images.length; i++) {
            this.imagesSubir.push(this.baseuProducto + this.images[i])
          }
          this.$q.loading.hide()
        })
      }
    },
    eliminarImg (nameFile) {
      this.$q.loading.show()
      this.$api.delete('eliminar_archivo_producto/' + nameFile + '/' + this.productoId).then(res => {
        if (res) {
          this.images = res.images
          this.imagesSubir = []
          for (let i = 0; i < this.images.length; i++) {
            this.imagesSubir.push(this.baseuProducto + this.images[i])
          }
          this.$q.loading.hide()
        }
      })
    },
    borrarImg (index, val) {
      this.images.splice(index, val)
      this.imagesSubir.splice(index, val)
    },
    insertarImagenP () {
      this.imagePerfil = URL.createObjectURL(this.imgPerfil)
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
