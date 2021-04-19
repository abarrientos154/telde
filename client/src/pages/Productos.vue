<template>
  <q-page>
    <div class="bg-grey-8" style="height: 500px">
      <div class="row justify-between q-pa-md">
        <div class="row q-ml-xl">
          <q-img class="q-ml-md" src="logo.png" style="width:50px" />
          <div class="column">
            <div class="text-h5 q-ml-sm q-mt-xs text-bold">Nova Telde</div>
            <div class="text-subtitle text-blue q-ml-sm text-bold">a tu alcance</div>
          </div>
        </div>
        <q-tabs
          v-model="tab"
          dense
        >
            <q-tab class="text-white" name="Inicio" label="Inicio" />
            <q-separator vertical dark />
            <q-tab class="text-white" name="Nosotros" label="Nosotros" />
            <q-separator vertical dark />
            <q-tab class="text-white" name="Tienda" label="Tienda" />
            <q-separator vertical dark />
            <q-tab class="text-white" name="Blog" label="Blog" />
            <q-separator vertical dark />
            <q-tab class="text-white" name="Contacto" label="Contacto" />
        </q-tabs>
      </div>
      <div class="column items-end justify-center q-mr-xl">
        <div class="row q-pt-lg">
          <div class="text-h2 text-white q-mt-sm">Nuestros nuevos</div>
        </div>
        <div class="row q-mr-xl">
          <div class="text-h2 text-white q-mt-sm q-mr-xl">Productos</div>
        </div>
      </div>
      <div class="q-ml-xl q-mt-xl q-pl-lg">
      <div class="column q-pl-lg">
        <div class="row">
          <div class="text-h5 text-white q-mt-sm">Ofertas de hasta</div>
        </div>
        <div class="row">
          <div class="text-h1 text-white text-bold">30%</div>
        </div>
        <div class="row">
          <div class="text-h4 text-white text-bold">descuento</div>
        </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="q-mt-md q-ml-md text-bold text-h5">Mi Tienda</div>
      <q-space />
      <q-breadcrumbs class="q-pt-md q-pl-xl text-h6 q-mr-sm">
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="Tienda" />
        <q-breadcrumbs-el label="Pagina 1 de 1" />
      </q-breadcrumbs>
    </div>
    <div class="row full-width q-ml-md">
      <q-card flat bordered class="column q-mt-md q-ml-md" :style="$q.screen.width > 474 ? 'width: 250px': 'width:90%'" >
        <q-card-section class="bg-blue">
          <div class="column items-center justify-center text-h6 text-white">Filtro de Tienda</div>
        </q-card-section>

        <q-card-section>
          <q-list class="q-mt-sm">
            <div class="q-pl-md text-h6 text-black">Categorias</div>
            <q-item v-for="(item, index) in categorias" :key="index" class="text-black q-mt-xs text-bold">
              <div class="column justify-center items-center" >
              <q-checkbox v-model="right" :label='item' />
              </div>
            </q-item>
          </q-list>
        </q-card-section>

      <q-separator />

      <q-card-section>
        <q-list class="q-mt-sm">
          <div class="q-pl-md text-h6 text-black">Tallas</div>
            <q-item v-for="(item, index) in tallas" :key="index" class="text-black q-mt-xs text-bold">
              <div class="column justify-center items-center" >
              <q-checkbox v-model="right" :label='item' />
              </div>
            </q-item>
        </q-list>
      </q-card-section>
        <q-separator />
      <q-card-section>
            <div class="q-pl-md text-h6 text-black">Productos Recomendados</div>
            <div>
            <q-carousel
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="grey"
            navigation
            arrows
            height="350px"
            class="text-white shadow-1"
          >
            <q-carousel-slide class="column items-center justify-center" :name='index' v-for="(card, index) in ejemplos2" :key="index">
              <q-card style="height: 300px; width: 150px" >
              <div class="column items-center justify-center">
                <q-img
                  :src="card.images ? baseuLogos + card._id : card.perfilEstatico ? 'logos/' + card.id.toString() + '.jpeg' : 'nopublicidad.jpg'"
                  spinner-color="white"
                  style="height: 80px; width: 100px"/>
              </div>
              <q-card-section>
                <q-rating v-model="card.calification" :max="5" size="20px" />
                <div class="row no-wrap items-center q-mt-xs">
                  <div class="col text-subtitle2 text-black ellipsis">{{card.nombre}}</div>
                  <div class="col-auto text-grey text-caption row no-wrap items-center">
                    <q-icon name="favorite_border" size="1.8em" />
                  </div>
                </div>
              </q-card-section>
              <q-separator inset />
              <q-card-section>
                <div class="text-caption text-black">Small plates, salads sandwiches in an intimate setting.</div>
                <div class="text-h7 text-primary q-mt-sm">$ 000</div>
              </q-card-section>
            </q-card>
            </q-carousel-slide>
          </q-carousel>
          </div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-list class="q-mt-sm">
            <div class="q-pl-md text-h6 text-black">Precio</div>
              <q-item v-for="(item, index) in precio" :key="index" class="text-black q-mt-xs text-bold">
                <div class="column justify-center items-center" >
                <q-checkbox v-model="right" :label='item' />
                </div>
              </q-item>
            </q-list>
        </q-card-section>
      </q-card>

      <div class="q-pt-md row justify-center" :style="$q.screen.width > 474 ? 'width: calc(100% - 270px)': 'width:100%'">
        <div class="q-mb-sm full-width bg-grey" style="height:65px">
          <div class="column items-end q-pr-md justify-end q-pt-md">
            <q-icon name="view_list" size="lg">
            </q-icon>
          </div>
        </div>
        <q-card style="height: 400px; width: 250px" v-for="(card, index) in ejemplos" :key="index">
          <div class="column items-center justify-center">
            <q-img
              :src="card.images ? baseuLogos + card._id : card.perfilEstatico ? 'logos/' + card.id.toString() + '.jpeg' : 'nopublicidad.jpg'"
              spinner-color="white"
              style="height: 200px; width: 200px"/>
          </div>

          <q-card-section>
            <q-rating v-model="card.calification" :max="5" size="25px" />

            <div class="row no-wrap items-center q-mt-xs">
              <div class="col text-subtitle2 ellipsis">{{card.nombre}}</div>
              <div class="col-auto text-grey text-caption row no-wrap items-center">
                <q-icon name="favorite_border" size="1.8em" />
              </div>
            </div>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
            <div class="text-caption text-black">Small plates, salads sandwiches in an intimate setting.</div>
            <div class="text-h6 text-primary q-mt-sm">$ 000</div>
          </q-card-section>
        </q-card>
      </div>

    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      rol: 0,
      categorias: ['categorias', 'categorias', 'categorias', 'categorias', 'categorias', 'converse'],
      tallas: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      precio: ['€0-€100', '€110-€300', '€300-€500', '€500-€1000'],
      tab: 'Inicio',
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
      ejemplos2: [
        {
          nombre: 'Producto',
          calification: 5,
          value: 1
        },
        {
          nombre: 'Producto2',
          calification: 5,
          value: 2
        }
      ],
      slide: '1',
      right: false
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
