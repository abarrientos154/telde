<template>
  <div>
    <q-card flat class="bg-white">
      <q-img
        :src="'nopublicidad.jpg'"
        style="height: 200px;width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px"
        basic
      >
        <div class="absolute-full">
          <div class="absolute-center text-bold text-h5 text-center" style="width:100%">
            Conoce Nuestras Tiendas
          </div>
        </div>
      </q-img>
    </q-card>
    <div class="q-pa-md text-h5 text-grey text-bold">Categoria</div>
    <q-scroll-area horizontal style="height: 80px;">
      <div class="row no-wrap q-py-md q-px-md q-gutter-md">
        <div v-for="(btn, index) in categorias" :key="index" >
          <q-btn no-caps class="q-px-md" :label="btn" :color="form.categoria === btn ? 'primary' : 'blue-grey-11'" text-color="blue-grey-9" @click="filterCategoria(btn, 'cat')" />
        </div>
      </div>
    </q-scroll-area>
    <div v-if="subCategorias.length" class="q-pa-md text-h5 text-grey text-bold">Selecciona tu SubCategoria</div>
    <q-scroll-area v-if="subCategorias.length" horizontal style="height: 80px;">
      <div class="row no-wrap q-py-md q-px-md q-gutter-md">
        <div v-for="(btn, index) in subCategorias" :key="index" >
          <q-btn no-caps class="q-px-md" :label="btn" :color="form.subCategoria === btn ? 'primary' : 'blue-grey-11'" text-color="blue-grey-9" @click="filterCategoria(btn, 'sub')" />
        </div>
      </div>
    </q-scroll-area>
    <div class="q-mt-md row justify-center">
      <q-btn style="width:50%" rounded no-caps color="primary" label="Buscar" @click="getTiendas()"/>
    </div>
    <div v-if="tiendas.length <= 6" class="row justify-center full-width q-mt-md">
      <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3 q-mb-md q-px-sm" v-for="(item, index) in tiendas" :key="index">
        <q-card bordered style="width: 100%; height:250px; border-radius:25px;" class="my-card">
          <q-img :src="baseuTiendas + item._id" style="height: 250px; width: 100%">
            <div class="absolute-full">
              <q-btn position="top-left" round icon="favorite" color="primary" size="10px" class=""/>
              <div class="absolute-bottom q-mb-sm text-subtitle2">
                <div class="q-px-sm q-ml-sm">{{item.nombre}}</div>
                <div class="q-mb-xs q-px-sm row">
                  <q-icon size="xs" name="place" />
                  <div class="q-pl-sm text-caption">{{item.direccion + ', ' + item.ciudad}}</div>
                </div>
                <div class="text-center">
                  <q-btn color="primary" label="Ir Tienda" no-caps/>
                </div>
              </div>
            </div>
          </q-img>
        </q-card>
      </div>
    </div>
    <div v-else-if="verTiendas" class="row justify-center full-width q-mt-md">
      <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3 q-mb-md q-px-sm" v-for="(item, index) in tiendas" :key="index">
        <q-card bordered style="width: 100%; height:250px; border-radius:25px;" class="my-card">
          <q-img :src="baseuTiendas + item._id" style="height: 250px; width: 100%">
            <div class="absolute-full">
              <q-btn position="top-left" round icon="favorite" color="primary" size="10px" class=""/>
              <div class="absolute-bottom q-mb-sm text-subtitle2">
                <div class="q-px-sm q-ml-sm">{{item.nombre}}</div>
                <div class="q-mb-xs q-px-sm row">
                  <q-icon size="xs" name="place" />
                  <div class="q-pl-sm text-caption">{{item.direccion + ', ' + item.ciudad}}</div>
                </div>
                <div class="text-center">
                  <q-btn color="primary" label="Ir Tienda" no-caps/>
                </div>
              </div>
            </div>
          </q-img>
        </q-card>
      </div>
    </div>
    <div v-else class="row justify-center full-width q-mt-md">
      <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3 q-mb-md q-px-sm" v-for="index in 6" :key="index">
        <q-card bordered style="width: 100%; height:250px; border-radius:25px;" class="my-card">
          <q-img :src="baseuTiendas + tiendas[index - 1]._id" style="height: 250px; width: 100%">
            <div class="absolute-full">
              <q-btn position="top-left" round icon="favorite" color="primary" size="10px" class=""/>
              <div class="absolute-bottom q-mb-sm text-subtitle2">
                <div class="q-px-sm q-ml-sm">{{tiendas[index - 1].nombre}}</div>
                <div class="q-mb-xs q-px-sm row">
                  <q-icon size="xs" name="place" />
                  <div class="q-pl-sm text-caption">{{tiendas[index - 1].direccion + ', ' + tiendas[index - 1].ciudad}}</div>
                </div>
                <div class="text-center">
                  <q-btn color="primary" label="Ir Tienda" no-caps/>
                </div>
              </div>
            </div>
          </q-img>
        </q-card>
      </div>
    </div>
    <div v-if="tiendas.length > 6" class="row justify-center q-ma-md">
      <q-btn rounded class="q-pa-xs" color="light-green-13" text-color="white" @click="verTiendas = !verTiendas" :label="verTiendas ? 'Ver menos tiendas' : 'Ver más tiendas'" style="width: 90%;" no-caps/>
    </div>
    <!-- <div class="q-mt-md row items-center justify-center q-gutter-md">
      <q-card v-for="(item, n) in tiendas"   bordered style="width: 150px;height:250px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px" :key="n" class="my-card">
        <q-img
          :src="'nopublicidad.jpg'"
          style="height: 250px;width: 150px">
          <div class="absolute-full">
            <q-btn position="top-left" round icon="favorite" color="primary" size="10px" class=""/>
            <div class="absolute-bottom q-mb-sm text-subtitle2">
              <div class="q-px-sm q-ml-sm">{{item.nombre}}</div>
              <div class="q-pl-sm row">
                <q-icon size="xs" name="place" />
                <div class="q-pl-sm">{{item.direccion + ', ' + item.ciudad}}</div>
              </div>
              <div class="text-center">
                <q-btn color="primary" label="Ir Tienda" />
              </div>
            </div>
          </div>
        </q-img>
      </q-card>
      <q-btn rounded color="light-green-13" text-color="white" label="Ver mas tiendas" style="width:300px; height:50px"/>
    </div> -->
  </div>
</template>

<script>
import env from '../../env'
export default {
  data () {
    return {
      baseuTiendas: '',
      tiendas: [],
      verTiendas: false,
      form: {},
      categorias: ['Comida', 'Tienda'],
      subCategoria1: ['Americana', 'Italiana', 'Mediterránea', 'Asiática', 'Latina'],
      subCategorias: [],
      filtrar: false
    }
  },
  methods: {
    filterCategoria (btn, text) {
      this.filtrar = true
      if (text === 'cat') {
        this.form.categoria = btn
        if (btn === 'Comida') {
          this.subCategorias = this.subCategoria1
        } else {
          this.subCategorias = []
        }
      } else {
        this.form.subCategoria = btn
      }
    },
    getTiendas () {
      this.$api.get('proveedores').then(res => {
        if (res) {
          this.tiendas = res
          if (this.filtrar) {
            this.tiendas = this.tiendas.filter(v => {
              if (v.categoria === this.form.categoria) {
                if (v.categoria === 'Comida') {
                  for (var i of v.subCategoria) {
                    if (i === this.form.subCategoria) {
                      return v
                    }
                  }
                } else if (v.categoria === 'Tienda') {
                  return v
                }
              }
            })
          }
        }
      })
    }
  },
  mounted () {
    this.baseuTiendas = env.apiUrl + 'perfil_img/'
    this.getTiendas()
  }
}
</script>
