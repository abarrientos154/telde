<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div>
          <div class="q-px-md q-pt-md">
            <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="$router.go(-1)" />
          </div>
          <div class="row justify-center absolute-center" style="width:100%">
            <q-img src="nova_telde-04.png" style="width:100%" >
            </q-img>
          </div>
          <div class="absolute-bottom q-mb-xl" style="width:100%">
            <div class="row items-center justify-center">
              <q-btn label="CLIENTE" color="primary" size="lg" style="border-radius: 28px; width: 230px"
              @click="$router.push('/registro-cliente')" />
            </div>
            <div class="row items-center justify-center q-mt-md">
              <q-btn label="TIENDA" color="primary" size="lg" style="border-radius: 28px; width: 230px"
              @click="$router.push('/registro-tienda')" />
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
