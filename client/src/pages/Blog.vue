<template>
  <div>
  <q-page class="q-pa-md">
      <div class="column items-center justify-center">
        <q-img :src="'nopublicidad.jpg'" style="border-radius:12px;height: 500px; width: 90%">
          <div class="column absolute-top-right">
            <q-icon name="share" class="q-mb-md" size="20px" color="white" />
            <q-icon name="favorite" size="20px" color="white" />
          </div>
        </q-img>
          <div class="q-mt-xl text-h7 text-light-green-13 text-bold">OCTOBER 3, 2018 IN GRAPHIC DESIGN</div>
          <div class="q-mt-xl text-h3 text-center text-bold">Nova Telde ya tiene su primer Post en su aplicación web</div>
      </div>
      <div class="column items-center justify-center q-py-xl">
        <q-separator class="q-mt-md" color="light-green-13" style="height:10px; width:130px" inset />
      </div>
      <div class="column items-center justify-center q-mt-md">
        <q-card flat style="width:50%">
          <div class="text-h8">{{'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor'}}</div>
        </q-card>
        <q-card class="q-mt-md" flat style="width:50%" >
          <q-card-section horizontal>
          <div class="column">
            <div class="text-h6 text-bold q-mb-md">{{'Nova Telde'}}</div>
            <div class="text-h8">{{'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor'}}</div>
            </div>
            <q-img
              class="col-5"
              :src="'nopublicidad.jpg'"
            />
          </q-card-section>
         </q-card>

        <div class="q-mt-xl full-width bg-grey-4 row q-py-xl q-gutter-x-xl items-center justify-center q-pa-md">
          <q-card v-for="(card, index) in ejemplos" :key="index">
              <div class="column" style="width:250px">
                <q-img :src="'nopublicidad.jpg'" style="height:250px; width:100%">
                </q-img>
              <q-card-section>
                  <div class="items-center justify-center">
                    <div class="q-py-md text-caption text-light-green-13 text-bold">11 de diciembre 2021</div>
                    <div class="text-h5 text-bold">Nova Telde ahora tiene su propia app</div>
                    <div class="q-mt-xl text-caption text-light-green-13 text-bold">Leer más></div>
                  </div>
              </q-card-section>
              </div>
          </q-card>
          </div>
        </div>

  </q-page>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {},
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
        }
      ],
      lorem: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor'
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>
