<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <q-img class="window-height" src="fondo1.jpg" style="width: 100%" >
          <div class="absolute-bottom q-mb-lg bg-transparent" style="width:100%">
            <div class="row items-center justify-center q-mt-xl">
              <q-btn label="CLIENTE" color="primary" text-color="blue-grey-10" size="xl" style="border-radius: 28px; width: 230px"
              @click="$router.push('/registro-cliente')" />
            </div>
            <div class="row items-center justify-center q-mt-xl">
              <q-btn label="TIENDA" color="primary" text-color="blue-grey-10" size="xl" style="border-radius: 28px; width: 230px"
              @click="$router.push('/registro-tienda')" />
            </div>
          </div>
        </q-img>
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
