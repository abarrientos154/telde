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
        <div class="column items-center justify-center">
          <q-img class="col-5" :src="card.images ? baseuLogos + card._id : card.perfilEstatico ? 'logos/' + card.id.toString() + '.jpeg' : 'noimgproducto.png'" style="height: 400px; width: 500px">
            <q-icon name="favorite" class="bg-grey q-pa-md absolute-top-right" size="20px" color="primary" />
            <q-icon name="share" class="bg-grey q-pa-md q-mt-xl absolute-top-right" size="20px" color="primary" />
          </q-img>
            <div class="items-center justify-center">
              <q-avatar rounded v-for="(item, index) in botones" :key="index" style="height:200px; width:100px">
                <q-img :src="cargarImagen(index)" :class="item.select ? 'seleccionado':''" @click="seleccionar(index)">
                </q-img>
              </q-avatar>
            </div>
        </div>
        <q-card-section>
        <div class="row">
        <q-card-section>
          <div class="text-h6">{{card.nombre}}</div>
          <div>
            <q-rating v-model="card.calification" max="5" size="2.5em" color="yellow" disable icon="star_border" icon-selected="star" icon-half="star_half" no-dimming />
          </div>
        </q-card-section>
        </div>
          <div class="q-pl-md q-pb-md text-h7 text-grey text-bold">OVERVIEW</div>
            <q-card-section class="q-pt-none ">
              {{ card.over }}
            </q-card-section>

            <q-card-section class="column items-center justify-end" style="height:70%">
                        <q-separator />
            <div class="text-h3 text-bold">{{ '€' }}{{ card.precio }}</div>
              <div class="q-pt-md">
                  <q-input v-model.number="cantidad" outlined class="q-pr-sm" type="number" dense style="width: 200px">
                  <template v-slot:append>
                    <q-btn color="grey" dense icon="add" style="height: 30px;width:30px" @click="cantidad++"/>
                  </template>
                  </q-input>
              </div>
              <div class="q-pa-md column items-center justify-center">
                <q-btn outline icon="shopping_cart" color="primary" label="AGREGAR" style="height: 50px;width:200px" />
              </div>
            </q-card-section>
        </q-card-section>
      </q-card-section>
          <q-separator />
        <div class="q-pa-md">
          <div class="text-h5 text-bold">DETALLE DEL PRODUCTO</div>
          <div class="text-subtitle1">{{ card.descripcion }}</div>
        </div>
                  <q-separator />
        <div class="q-pa-md">
          <div class="text-h5 text-bold">OTROS PRODUCTOS</div>
        </div>

      <div class="q-my-md row justify-center">
        <q-carousel
        v-model="slide2"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="black"
        arrows
        height="380px"
        class="col-xs-11 col-sm-11 col-md-9 col-lg-9 col-xl-9"
      >
        <q-carousel-slide :name="index + 1" class="column no-wrap" v-for="(value, index) in ejemplos" :key="index">
          <div class="row justify-center items-center q-gutter-md no-wrap">
            <div v-for="(card, index2) in value" :key="index2">
              <q-card class="my-card">
              <div class="column items-center justify-center">
                <q-img
                  :src="card.perfil ? baseuLogos + card._id : card.perfilEstatico ? 'logos/' + card.id.toString() + '.jpeg' : 'noimgproducto.png'"
                  spinner-color="white"
                  style="height: 150px; width: 150px"/>
              </div>
                <q-card-section>
                <q-rating v-model="value.calification" :max="5" size="20px" />
                <div class="row no-wrap items-center q-mt-xs">
                  <div class="col text-subtitle2 text-black ellipsis">{{value.nombre}}</div>
                  <div class="col-auto text-grey text-caption row no-wrap items-center">
                    <q-icon name="favorite_border" size="1.8em" />
                  </div>
                </div>
              </q-card-section>
              <q-separator inset />
              <q-card-section>
                <div class="text-caption text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                <div class="text-h5 text-primary q-mt-sm">$ 100</div>
              </q-card-section>
              </q-card>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      rol: 0,
      ejemplos: [
        {
          nombre: 'Producto',
          calification: 5,
          descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          nombre: 'Producto',
          calification: 5,
          descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          nombre: 'Producto',
          calification: 5,
          descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          nombre: 'Producto',
          calification: 5,
          descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          nombre: 'Producto',
          calification: 5,
          descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          nombre: 'Producto',
          calification: 5,
          descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          nombre: 'Producto',
          calification: 5,
          descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          nombre: 'Producto',
          calification: 5,
          descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          nombre: 'Producto',
          calification: 5,
          descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          nombre: 'Producto',
          calification: 5,
          descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          nombre: 'Producto',
          calification: 5,
          descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          nombre: 'Producto',
          calification: 5,
          descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          nombre: 'Producto',
          calification: 5,
          descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          nombre: 'Producto',
          calification: 5,
          descrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      ],
      rating: 2,
      slide2: 1,
      form: {},
      cantidad: 1,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      ejemplos2: [
        {
          nombre: 'Producto',
          calification: 5,
          descripcion: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis amet voluptas assumenda est, omnis dolor repellendus quis nostrum. Temporibus autem quibusdam et aut officiis debitis aut rerum dolorem necessitatibus saepe eveniet ut et neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, ut aliquid ex ea commodi consequatur. ',
          over: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
          precio: '200.00'
        }
      ],
      botones: [
        {
          file: null,
          select: true
        },
        {
          file: null,
          select: false
        },
        {
          file: null,
          select: false
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
    const value = localStorage.getItem('TELDE_SESSION_INFO')
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
    },
    cargarImagen (ind) {
      console.log(ind, 'filee')
      if (this.botones[ind].file) {
        return URL.createObjectURL(this.botones[ind].file)
      } else {
        return 'noimgproducto.png'
      }
    },

    seleccionar (ind) {
      const data = this.botones
      const indexSelect = data.findIndex(v => v.select)
      data[indexSelect].select = false
      data[ind].select = true
      this.botones = data
      if (data[ind].file) {
        this.mostrarImg = URL.createObjectURL(data[ind].file)
      } else {
        this.mostrarImg = 'noimgproducto.png'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.bordes {
  border-top: 6px solid $primary
}
.seleccionado {
  border-radius: 5px;
  background: $grey-4;
}
</style>
