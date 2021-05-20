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
      <div class="row q-pl-sm q-gutter-md">
        <q-btn filled color="secondary" icon-right="delete" label="Comida" />
        <q-btn filled color="secondary" icon-right="delete" label="Tienda" />
      </div>
      <div class="q-pa-md text-h5 text-grey text-bold">Selecciona tu SubCategoria</div>
      <div class="row q-pl-sm q-gutter-md">
        <q-btn filled color="secondary" icon-right="delete" label="Americana" />
        <q-btn filled color="secondary" icon-right="delete" label="Italiana" />
        <q-btn filled color="secondary" icon-right="delete" label="Mediterranea" />
      </div>
        <div class="q-mt-md column items-center justify-center">
          <q-btn rounded color="light-green-13" text-color="white" label="Buscar" style="width:300px; height:50px"/>
        </div>
        <div class="q-mt-md row items-center justify-center q-gutter-md">
        <q-card v-for="(item, n) in 6"   bordered style="width: 150px;height:250px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px" :key="n" class="my-card">
          <q-img
            :src="'nopublicidad.jpg'"
            style="height: 250px;width: 150px">
            <div class="absolute-full">
          <q-btn position="top-left" round icon="favorite" color="primary" size="10px" class=""/>
            <div class="absolute-bottom q-mb-sm text-subtitle2">
              <div class="q-px-sm q-ml-sm">Nombre de tienda</div>
              <div class="q-pl-sm row">
              <q-icon size="xs" name="place" />
              <div class="q-pl-sm">Direccion</div>
              </div>
              <div class="text-center">
                <q-btn color="primary" label="Ir Tienda" />
              </div>

            </div>
            </div>
          </q-img>
        </q-card>
        <q-btn rounded color="light-green-13" text-color="white" label="Ver mas tiendas" style="width:300px; height:50px"/>
      </div>

  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>
