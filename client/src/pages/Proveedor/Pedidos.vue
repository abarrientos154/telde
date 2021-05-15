<template>
  <div>
    <div>
     <q-card flat class="bg-white">
      <q-img
        :src="'nopublicidad.jpg'"
        style="height: 300px;width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px"
        basic
      >
      <div class="absolute-full">
        <div class="absolute-center text-bold text-h4 text-center">
          Pedidos
        </div>
      </div>
      </q-img>
    </q-card>
    <div class="q-pa-md text-h5 text-grey text-bold">Pedidos pendientes</div>
    <q-scroll-area
      horizontal
      style="height: 210px; width: 100%;"
      class="bg-grey-1 rounded-borders"
    >
    <div class="row no-wrap q-gutter-xl">
      <q-card v-for="(item, index) in data"   bordered style="width: 380px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px" :key="index">
        <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center">
                <q-img
                  style="height: 120px;width: 120px; border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px"
                  class="rounded-borders"
                  :src="'nopublicidad.jpg'"
                />
                </div>
              </q-card-section>

            <q-card-section class="q-pt-xs">
            <div class="row">
              <div class="q-mt-md text-h6 text-bold">Estado:</div>
              <div class="text-h5 q-mt-md q-ml-sm text-bold text-blue">{{item.name}}</div>
            </div>
            <div class="column">
              <div class="text-h6 text-bold">Fecha de solicitud:</div>
              <div class="text-h7 q-ml-sm text-grey">{{item.name2}}</div>
              <q-btn rounded color="light-green-13" text-color="white" label="Cambiar estado" />
            </div>
            </q-card-section>

          </q-card-section>
      </q-card>
    </div>
    </q-scroll-area>
    <div class="q-pa-md text-h5 text-grey text-bold">Pedidos Enviados</div>
    <div class="column items-center justify-center no-wrap q-gutter-xl">
    <q-card v-for="(item, index) in data2"   bordered style="width: 380px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px" :key="index">
        <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center">
                <q-img
                  style="height: 120px;width: 120px; border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px"
                  class="rounded-borders"
                  :src="'nopublicidad.jpg'"
                />
                </div>
              </q-card-section>

            <q-card-section class="q-pt-xs">
            <div class="row">
              <div class="q-mt-md text-h6 text-bold">Estado:</div>
              <div class="text-h5 q-mt-md q-ml-sm text-bold text-blue">{{item.name}}</div>
            </div>
            <div class="column">
              <div class="text-h6 text-bold">Fecha de solicitud:</div>
              <div class="text-h7 q-ml-sm text-grey">{{item.name2}}</div>
              <q-btn rounded  color="light-green-13" text-color="white" label="Ver pedido" @click="card=true" />
            </div>
            </q-card-section>
          </q-card-section>
      </q-card>
      <q-btn rounded color="light-green-13" text-color="white" label="Ver mas" style="width:350px;height:40px" />
      </div>
      <div class="q-pa-md q-mt-xl text-h5 text-grey text-bold">Pedidos Finalizados</div>
    <div class="column items-center justify-center no-wrap q-gutter-xl">
    <q-card v-for="(item, index) in data3"   bordered style="width: 380px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px" :key="index">
        <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center">
                <q-img
                  style="height: 120px;width: 120px; border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px"
                  class="rounded-borders"
                  :src="'nopublicidad.jpg'"
                />
                </div>
              </q-card-section>

            <q-card-section class="q-pt-xs">
            <div class="row">
              <div class="q-mt-md text-h6 text-bold">Estado:</div>
              <div class="text-h5 q-mt-md q-ml-sm text-bold text-blue">{{item.name}}</div>
            </div>
            <div class="column">
              <div class="text-h6 text-bold">Fecha de solicitud:</div>
              <div class="text-h7 q-ml-sm text-grey">{{item.name2}}</div>
              <q-btn rounded  color="light-green-13" text-color="white" label="Ver pedido" @click="card2=true" />
            </div>
            </q-card-section>
          </q-card-section>
      </q-card>
      <q-btn rounded color="light-green-13" text-color="white" label="Ver mas" style="width:350px;height:40px" />
      </div>
    </div>

    <q-dialog v-model="card">
      <q-card flat class="my-card" style="width: 400px">

        <q-card-section class="q-pt-none">
          <div class="row">
            <div class="text-h6 text-bold">Pedido</div>
            <div class="q-ml-sm text-h6 text-bold text-blue">#112</div>
              <div class="row q-pr-md absolute-right">
                <div class="q-ml-xl q-mt-sm text-h7 text-bold">Estado:</div>
                <div class="q-ml-sm q-mt-sm text-h7 text-bold">En local</div>
              </div>
          </div>
        </q-card-section>

          <q-separator />
          <q-card-section class="q-pt-none">
            <div class="text-h6 text-bold">Estado de pedido</div>
            <div class="text-h8 text-bold text-grey">tienda donde compramos</div>
          </q-card-section>
        <q-card flat style="width: 400px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px">
          <q-card-section horizontal>
              <q-card-section>
                <div class="column items-center justify-center">
                  <q-img
                    style="height: 80px;width: 80px; border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px"
                    class="rounded-borders"
                    :src="'nopublicidad.jpg'"
                  />
                  </div>
              </q-card-section>

              <q-card-section class="q-pt-xs">
                <div class="row">
                  <div class="q-mt-md text-h6 text-bold">En local</div>
                </div>
                <div class="column">
                  <div class="text-h7 text-grey">Tu producto ha sido comprado en la plataforma, pero aun no haz hecho el envio</div>
                </div>
              </q-card-section>
          </q-card-section>
          <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center">
                <q-img
                  style="height: 80px;width: 80px; border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px"
                  class="rounded-borders"
                  :src="'nopublicidad.jpg'"
                />
                </div>
              </q-card-section>

            <q-card-section class="q-pt-xs">
            <div class="row">
              <div class="q-mt-md text-h6 text-bold">Enviado</div>
            </div>
            <div class="column">
              <div class="text-h7 text-grey">Ya enviaste el producto a su lugar de destino</div>
            </div>
            </q-card-section>
          </q-card-section>
        </q-card>

        <q-card-actions class="q-py-md" align="center">
          <div class="q-pb-md">
            <q-btn rounded color="light-green-13" text-color="white" label="Cambiar estado" style="width:200px;height:40px" />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="card2">
      <q-card flat class="my-card" style="width: 400px">

        <q-card-section class="q-pt-none">
          <div class="row">
            <div class="text-h6 text-bold">Pedido</div>
            <div class="q-ml-sm text-h6 text-bold text-blue">#112</div>
            <div class="row q-pr-md absolute-right">
            <div class="q-ml-xl q-mt-sm text-h7 text-bold">Estado:</div>
            <div class="q-ml-sm q-mt-sm text-h7 text-bold">En local</div>
            </div>
          </div>
        </q-card-section>

          <q-separator />
          <q-card-section class="q-pt-none">
            <div class="text-h6 text-bold">Productos adquiridos</div>
          </q-card-section>
        <q-card flat style="width: 400px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px">
          <q-card-section horizontal>
              <q-card-section>
                <div class="column items-center justify-center">
                  <q-img
                    style="height: 80px;width: 80px; border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px"
                    class="rounded-borders"
                    :src="'nopublicidad.jpg'"
                  />
                  </div>
              </q-card-section>

              <q-card-section class="q-pt-xs">
                <div class="row">
                  <div class="q-mt-md text-h7 text-bold">Nombre del producto</div>
                </div>
                <div class="column">
                  <div class="text-h8 text-bold text-grey">tienda donde compramos</div>
                  <div class="text-h6 text-bold text-light-green-13">959€</div>
                </div>
              </q-card-section>
          </q-card-section>
          <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center">
                <q-img
                  style="height: 80px;width: 80px; border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px"
                  class="rounded-borders"
                  :src="'nopublicidad.jpg'"
                />
                </div>
              </q-card-section>

            <q-card-section class="q-pt-xs">
                <div class="row">
                  <div class="q-mt-md text-h7 text-bold">Nombre del producto</div>
                </div>
                <div class="column">
                  <div class="text-h8 text-bold text-grey">tienda donde compramos</div>
                  <div class="text-h6 text-bold text-light-green-13">959€</div>
                </div>
              </q-card-section>
          </q-card-section>
          <q-card-section style="width:100%" class="q-pt-xs">
            <div class="row">
              <div class="q-mt-md text-h6 text-grey text-bold">cantidad de productos:</div>
              <q-space />
              <div class="q-mt-md text-h6 text-grey text-bold">3</div>
            </div>
            <div class="row">
              <div class="q-mt-md text-h6 text-grey text-bold">total a pagar:</div>
              <q-space />
              <div class="q-mt-md text-h6 text-light-green-13 text-bold">€2.689</div>
            </div>
          </q-card-section>
        </q-card>

        <q-card-actions class="q-py-md" align="center">
          <div class="q-pb-md">
            <q-btn rounded color="light-green-13" text-color="white" label="Cerrar" style="width:200px;height:40px" />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          name: 'En local',
          name2: '01/08/2021'
        },
        {
          name: 'En local',
          name2: '01/08/2021'
        },
        {
          name: 'En local',
          name2: '01/08/2021'
        },
        {
          name: 'En local',
          name2: '01/08/2021'
        }
      ],
      data2: [
        {
          name: 'Enviado',
          name2: '01/08/2021'
        },
        {
          name: 'Enviado',
          name2: '01/08/2021'
        }
      ],
      data3: [
        {
          name: 'Finalizado',
          name2: '01/08/2021'
        },
        {
          name: 'Finalizado',
          name2: '01/08/2021'
        }
      ],
      card: false,
      card2: false
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>
