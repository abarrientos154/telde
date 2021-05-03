<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <q-carousel
          class="window-height"
          animated
          v-model="slide"
          navigation
          infinite
        >
          <q-carousel-slide :name="1" img-src="fondo1.jpg" >
            <div class="q-pa-md">
              <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="$router.go(-1)" />
            </div>
            <div class="absolute-center" style="width:100%">
              <div class="text-center text-h4 text-bold">Registrarme como</div>
              <div class="row items-center justify-center q-mt-xl">
                <q-btn label="CLIENTE" color="primary" text-color="blue-grey-10" size="xl" style="border-radius: 15px; width: 230px"
                @click="$router.push('/registro-cliente')" />
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" img-src="fondo1.jpg" >
            <div class="q-pa-md">
              <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="$router.go(-1)" />
            </div>
            <div class="absolute-center" style="width:100%">
              <div class="text-center text-h4 text-bold">Registrarme como</div>
              <div class="row items-center justify-center q-mt-xl">
                <q-btn label="TIENDA" color="primary" text-color="blue-grey-10" size="xl" style="border-radius: 15px; width: 230px"
                @click="$router.push('/registro-tienda')" />
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      slide: 1
    }
  },
  methods: {
    async registrar () {
    }
  }
}
</script>

<style>
</style>
