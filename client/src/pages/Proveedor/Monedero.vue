<template>
  <div>
    <div class="q-mb-lg">
      <q-img :src="'nopublicidad.jpg'" style="height: 200px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px" basic>
        <div class="absolute-full">
          <div class="absolute-center full-width text-bold text-h5 text-center">
            Monedero
          </div>
        </div>
      </q-img>
    </div>
    <div>
      <div class="q-py-lg row justify-center">
        <q-card class="bg-blue-14 column justify-between" style="height: 175px; width: 75%; border-radius: 30px; min-width: 300px">
          <q-card-section class="col">
          </q-card-section>
          <q-card-section>
            <div class="text-caption text-grey-5">Dinero de tu monedero</div>
            <div class="row items-center justify-between">
              <div class="text-h4 text-bold text-white q-mr-sm">€35,291</div>
              <q-btn class="q-pa-xs col" color="light-green-13" text-color="white" label="Solicitar" style="border-radius: 15px;" no-caps/>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="q-pa-lg text-h5 text-grey-8">Ultimas solicitudes</div>
      <div class="q-py-sm row justify-center">
        <q-card class="column justify-between" style="height: 175px; width: 75%; border-radius: 30px; min-width: 300px">
          <q-card-section>
            <div class="row justify-around">
              <div>
                <div class="row">
                  <div class="text-h6 text-black q-mr-sm text-weight-bolder">Estado: </div>
                  <div class="text-h6 text-blue-14 text-weight-bolder">APROBADO</div>
                </div>
                <div class="column">
                  <div class="text-h6 text-black q-mr-sm text-weight-bolder">Fecha de solicitud</div>
                  <div class="text-caption text-grey-7">01/08/2021</div>
                </div>
                <div class="row">
                  <div class="text-h6 text-black q-mr-sm text-weight-bolder">Saldo retirado </div>
                  <div class="text-h6 text-grey-7 text-weight-bolder">€0</div>
                </div>
              </div>
              <div class="row justify-center items-center">
                <q-btn color="light-blue-13" text-color="white" icon="north" style="border-radius: 10px; height: 55px; width: 100%;" no-caps/>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="q-py-sm row justify-center">
        <q-card class="column justify-between" style="height: 175px; width: 75%; border-radius: 30px; min-width: 300px">
          <q-card-section>
            <div class="row justify-around">
              <div>
                <div class="row">
                  <div class="text-h6 text-black q-mr-sm text-weight-bolder">Estado: </div>
                  <div class="text-h6 text-orange-14 text-weight-bolder">PENDIENTE</div>
                </div>
                <div class="column">
                  <div class="text-h6 text-black q-mr-sm text-weight-bolder">Fecha de solicitud</div>
                  <div class="text-caption text-grey-7">01/08/2021</div>
                </div>
                <div class="row">
                  <div class="text-h6 text-black q-mr-sm text-weight-bolder">Saldo retirado </div>
                  <div class="text-h6 text-grey-7 text-weight-bolder">€0</div>
                </div>
              </div>
              <div class="row justify-center items-center">
                <q-btn color="orange-13" text-color="white" icon="remove" style="border-radius: 10px; height: 55px; width: 100%;" no-caps/>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="row justify-center q-mb-lg q-my-sm">
        <q-btn rounded class="q-pa-xs" color="light-green-13" text-color="white" label="Ver más" style="width: 90%;" no-caps/>
      </div>
      <div class="q-pa-lg text-h5 text-center text-grey-8">Busca tus retiros</div>
      <div class="q-py-sm row justify-center">
        <div class="column justify-between" style="height: 50px; width: 85%; min-width: 300px">
            <div class="row justify-between">
              <div>
                <div class="column">
                  <div class="text- text-grey q-mr-sm text-weight-bolder">Fecha inicio</div>
                  <div class="text-caption text-grey-7">01/08/2021</div>
                </div>
              </div>
              <div class="row justify-center items-center">
                <q-btn flat icon="date_range" style="height: 55px; width: 100%;"/>
              </div>
            </div>
        </div>
        <div class="column justify-between" style="height: 50px; width: 85%; min-width: 300px">
            <div class="row justify-between">
              <div>
                <div class="column">
                  <div class="text- text-grey q-mr-sm text-weight-bolder">Fecha fin</div>
                  <div class="text-caption text-grey-7">07/08/2021</div>
                </div>
              </div>
              <div class="row justify-center items-center">
                <q-btn flat icon="date_range" style="height: 55px; width: 100%;"/>
              </div>
            </div>
        </div>
      </div>
      <div class="q-py-sm row justify-center">
        <q-card class="column justify-between" style="height: 175px; width: 75%; border-radius: 30px; min-width: 300px">
          <q-card-section>
            <div class="row justify-around">
              <div>
                <div class="row">
                  <div class="text-h6 text-black q-mr-sm text-weight-bolder">Estado: </div>
                  <div class="text-h6 text-blue-14 text-weight-bolder">APROBADO</div>
                </div>
                <div class="column">
                  <div class="text-h6 text-black q-mr-sm text-weight-bolder">Fecha de solicitud</div>
                  <div class="text-caption text-grey-7">01/08/2021</div>
                </div>
                <div class="row">
                  <div class="text-h6 text-black q-mr-sm text-weight-bolder">Saldo retirado </div>
                  <div class="text-h6 text-grey-7 text-weight-bolder">€0</div>
                </div>
              </div>
              <div class="row justify-center items-center">
                <q-btn color="light-blue-13" text-color="white" icon="north" style="border-radius: 10px; height: 55px; width: 100%;" no-caps/>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="q-py-sm row justify-center">
        <q-card class="column justify-between" style="height: 175px; width: 75%; border-radius: 30px; min-width: 300px">
          <q-card-section>
            <div class="row justify-around">
              <div>
                <div class="row">
                  <div class="text-h6 text-black q-mr-sm text-weight-bolder">Estado: </div>
                  <div class="text-h6 text-orange-14 text-weight-bolder">PENDIENTE</div>
                </div>
                <div class="column">
                  <div class="text-h6 text-black q-mr-sm text-weight-bolder">Fecha de solicitud</div>
                  <div class="text-caption text-grey-7">01/08/2021</div>
                </div>
                <div class="row">
                  <div class="text-h6 text-black q-mr-sm text-weight-bolder">Saldo retirado </div>
                  <div class="text-h6 text-grey-7 text-weight-bolder">€0</div>
                </div>
              </div>
              <div class="row justify-center items-center">
                <q-btn color="orange-13" text-color="white" icon="remove" style="border-radius: 10px; height: 55px; width: 100%;" no-caps/>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="q-py-sm row justify-center">
        <q-card class="column justify-between" style="height: 175px; width: 75%; border-radius: 30px; min-width: 300px">
          <q-card-section>
            <div class="row justify-around">
              <div>
                <div class="row">
                  <div class="text-h6 text-black q-mr-sm text-weight-bolder">Estado: </div>
                  <div class="text-h6 text-pink-13 text-weight-bolder">RECHAZADO</div>
                </div>
                <div class="column">
                  <div class="text-h6 text-black q-mr-sm text-weight-bolder">Fecha de solicitud</div>
                  <div class="text-caption text-grey-7">01/08/2021</div>
                </div>
                <div class="row">
                  <div class="text-h6 text-black q-mr-sm text-weight-bolder">Saldo retirado </div>
                  <div class="text-h6 text-grey-7 text-weight-bolder">€0</div>
                </div>
              </div>
              <div class="row justify-center items-center">
                <q-btn color="pink-13" text-color="white" icon="south" style="border-radius: 10px; height: 55px; width: 100%;" no-caps/>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
