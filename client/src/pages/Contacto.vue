<template>
  <div>
  <q-page class="q-pa-md">
      <div class="column items-center justify-center">
        <q-img class="col-5" :src="'nopublicidad.jpg'" style="border-radius:12px;height: 300px; width: 90%">
          <q-icon name="share" class="bg-grey q-pa-md absolute-top-right" size="20px" color="white" />
        </q-img>
      </div>
      <q-card flat class="q-pt-xl q-px-xl">
        <div class="q-ml-sm text-h4 text-bold">149 Avenida Grecia, Región de Bilbao, España</div>
        <div class="row">
          <div class="q-ml-sm q-mt-md text-subtitle1">{{'contacto@novatelde.com'}} </div>
          <div class="q-ml-sm q-pl-xl q-mt-md text-subtitle1">{{'+53 32 123 1234'}} </div>
        </div>
       <div class="q-ml-sm q-mt-md text-subtitle1">{{'Contatactanos'}} </div>
       <div class="q-ml-sm q-mt-md text-h4 text-bold">{{'Como podemos'}} </div>
      </q-card>
      <q-card class="q-pa-xl" flat>
        <div class="row">
          <q-input class="col-xs-11 col-sm-12 col-md-12 col-lg-6 q-pb-md" v-model="form.email" outlined label="Email"/>
            <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pb-md">
              <q-input class="q-mr-xs" v-model="form.name" outlined label="Nombre"/>
            </div>
            <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pb-md">
              <q-input class="q-mr-xs" v-model="form.lastName" outlined label="Apellido"/>
            </div>
            <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pb-md">
              <q-input class="q-mr-xs" v-model="form.phone" outlined label="Telefono"/>
            </div>
            <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pb-md">
              <q-input class="q-mr-xs" v-model="form.motivo" outlined label="Motivo"/>
            </div>
            <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 q-pb-md" style="width: 100%">
              <q-input
                label="Mensaje"
                outlined
                v-model="form.text"
                type="textarea"
              />
            </div>
          </div>
              <q-btn color="primary" label="Contactar" style="width:150px" />

      </q-card>
  </q-page>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {}
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>
