<template>
  <q-page>
    <div class="row q-mb-md">
    <div class="q-ml-xl">
      <div class="q-mt-md q-ml-xl text-bold text-h4">Producto</div>
      </div>
      <q-space />
      <q-breadcrumbs class="q-pt-md q-pl-xl text-h6 q-mr-sm">
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="Tienda" />
        <q-breadcrumbs-el label="Pagina 1 de 1" />
        <q-breadcrumbs-el label="Producto" />
      </q-breadcrumbs>
    </div>
  <q-separator inset />
   <q-card class="my-card" flat bordered v-for="(card, index) in ejemplos2" :key="index">
      <q-card-section horizontal>
      <img
          class="col-5"
          :src="card.images ? baseuLogos + card._id : card.perfilEstatico ? 'logos/' + card.id.toString() + '.jpeg' : 'nopublicidad.jpg'" style="height:300px; width:500px">

        <q-card-section>
        <div class="row">
        <q-card-section>
          <div class="text-h6">{{card.nombre}}</div>
        </q-card-section>
        </div>
          <div class="q-pa-md text-h7 text-grey-9 text-bold">Descripcion del lugar:</div>
            <q-card-section class="q-pt-none">
              {{ card.descripcion }}
            </q-card-section>
              <div class="q-ml-md text-h7 text-grey-9 text-bold">Popularidad del lugar:</div>
              <q-rating class="q-pa-sm" v-model="card.calification" max="5" size="3.5em" color="yellow" disable icon="star_border" icon-selected="star" icon-half="star_half" no-dimming />
              <div>
                {{ lorem }}
              </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      rol: 0,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      ejemplos2: [
        {
          nombre: 'Producto',
          calification: 5,
          descripcion: '2aw'
        }
      ],
      ejemplos: [
        {
          nombre: 'Producto',
          calification: 5
        },
        {
          nombre: 'Producto',
          calification: 5
        },
        {
          nombre: 'Producto',
          calification: 5
        },
        {
          nombre: 'Producto',
          calification: 5
        },
        {
          nombre: 'Producto',
          calification: 5
        },
        {
          nombre: 'Producto',
          calification: 5
        },
        {
          nombre: 'Producto',
          calification: 5
        },
        {
          nombre: 'Producto',
          calification: 5
        },
        {
          nombre: 'Producto',
          calification: 5
        },
        {
          nombre: 'Producto',
          calification: 5
        },
        {
          nombre: 'Producto',
          calification: 5
        },
        {
          nombre: 'Producto',
          calification: 5
        },
        {
          nombre: 'Producto',
          calification: 5
        },
        {
          nombre: 'Producto',
          calification: 5
        }
      ],
      slide: 0,
      catego: [],
      talla: [],
      preci: []
    }
  },
  mounted () {
    console.log(this.$q.screen.lt, 'lt', this.$q.screen, 'xs')
    const value = localStorage.getItem('FLAAG_SESSION_INFO')
    if (value) {
      this.getInfo()
    } else {
      this.login = false
    }
  },
  methods: {
    getInfo () {
      this.$api.get('user_info').then(res => {
        if (res) {
          this.rol = res.roles[0]
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.bordes {
  border-top: 6px solid $primary
}
</style>
