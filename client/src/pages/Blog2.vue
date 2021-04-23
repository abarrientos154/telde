<template>
  <div class="column items-center justify-center">
  <div class="row q-pa-xl">
  <div class="q-pr-xl column items-left justify-center">
        <q-card flat class="q-mt-xl q-pl-xl" v-for="(item, index) in ejemplos" :key="index" style="width:500px">
          <q-img :src="'nopublicidad.jpg'" style="border-radius:12px;height: 300px; width: 500px">
            <div class="column absolute-top-right">
              <q-icon name="share" class="q-mb-md" size="20px" color="white" />
              <q-icon name="favorite" size="20px" color="white" />
            </div>
          </q-img>
          <q-card-section>
              <div class="items-center justify-center">
                <div class="q-py-md text-caption text-light-green-13 text-bold">{{item.fecha}}</div>
                <div class="text-h5 text-bold">{{item.nombre}}</div>
                <div class="q-mt-md text-caption text-bold">{{item.lorem}}</div>
              </div>
          </q-card-section>
          <div class="q-pl-md">
          <q-btn color="light-green-13" text-color="black" label="Leer mas" style="width:200px" />
          </div>
        </q-card>
          <div class="q-mt-xl q-pl-xl">
          <q-pagination class="q-pl-xl"
            color="light-green-13"
            v-model="current"
            :max="3"
            direction-links
          />
          </div>
      </div>
      <div class="column">
        <div class="q-mt-xl q-pl-xl items-right justify-right">
          <q-card style="width:300px;height: 400px; border-radius:12px">
            <div class="column items-center justify-center">
            <q-input filled v-model="text" label="Buscar" />
            </div>
            <div class="q-pl-md q-mt-md">
            <div class="text-h5 text-light-green-13 text-bold">{{'Novedades'}}</div>

            <q-list v-for="(item, index) in ejemplos2" :key="index" dark bordered separator>
              <q-item>
                <q-item-section avatar>
                <div class="row q-pl-xs">
                  <q-icon class="awa" color="black" size: name="arrow_right_alt" />
                  <div class="text-black awa">{{item.name}} </div>
                  </div>

                </q-item-section>
              </q-item>
             </q-list>
            </div>
          </q-card>
        </div>
        <div class="q-mt-xl q-pl-xl items-right justify-right">
          <q-card style="width:300px;height: 600px; border-radius:12px">
            <div class="column items-center justify-center">
            <q-input filled v-model="text" label="Buscar" />
            </div>
            <div class="q-pl-md q-mt-md">
            <div class="text-h5 text-light-green-13 text-bold">{{'ULTIMOS POST'}}</div>

            <q-list v-for="(item, index) in ejemplos2" :key="index" dark bordered separator>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar size="70px"  rounded >
                    <q-img :src="'nopublicidad.jpg'"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section class="text-black">Lorem Ipsum is simply dummy text of the printing</q-item-section>
              </q-item>
            </q-list>
            </div>
          </q-card>
        </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ejemplos: [
        {
          nombre: 'NOVA TELDE PRIMER POST DENTRO DE LA APP MOVIL',
          fecha: 'OCTUBRE 3, 2021',
          lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },
        {
          nombre: 'NUEVO POST DE NOVA TELDE EN LA APP WEB',
          fecha: 'DICIEMBRE 5, 2020',
          lorem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
      ],
      ejemplos2: [
        {
          name: 'ultimo post'
        },
        {
          name: 'ultimo post'
        },
        {
          name: 'ultimo post'
        },
        {
          name: 'ultimo post'
        },
        {
          name: 'ultimo post'
        }
      ],
      current: 1,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>
<style>
.awa {
  text-decoration: underline;
}
</style>
