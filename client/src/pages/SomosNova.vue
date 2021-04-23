<template>
  <div>
    <div class="q-pa-md">
      <div class="column items-center justify-center">
        <q-card flat style="width:65%">
          <q-card-section horizontal>
            <q-img style="height: 350px;width:900px"
              :src="'nopublicidad.jpg'"
            />
            <q-card-section>
                <div class="column justify-center">
                  <div class="row justify-center">
                    <q-img class="q-ml-md" src="flaagfooter.png" style="width:50px" />
                  </div>
                  <div class="text-center text-h6">NOVA TELDE</div>
                  <div class="text-center text-primary">A tu alcance</div>
                    <div class="row justify-center">
                      <q-card flat style="width:60%">
                        <div class="text-body1">{{'Una multi tienda virtual'}}</div>
                        <div class="text-blue text-h5 text-bold">{{'Calidad de'}}</div>
                        <div class="text-blue text-h5 text-bold">{{'nuestros'}}</div>
                        <div class="text-h8">{{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.'}}</div>
                      </q-card>
                  </div>
                  </div>
            </q-card-section>
          </q-card-section>
        </q-card>
        <div class="q-mt-xl column items-center justify-center">
          <q-card flat>
            <q-card-section horizontal>
            <div class="column">
              <q-card-section>
                <q-img
                  :src="'nopublicidad.jpg'"
                  style="height: 200px;width: 400px"
                />
              </q-card-section>
              <q-card-section>
                <q-img
                  :src="'nopublicidad.jpg'"
                  style="height: 200px;width: 400px"
                />
              </q-card-section>
            </div>
              <q-img class="q-mt-md"
                style="height: 430px;width: 400px"
                :src="'nopublicidad.jpg'"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="q-mt-xl full-width bg-grey-4 row q-py-xl q-gutter-x-xl items-center justify-center q-pa-md">
              <div class="column" style="width:500px">
                  <div class="q-pa-md column items-center justify-center">
                    <div class="text-center text-h4 text-bold">Aun Estamos</div>
                    <div class="text-center text-h4 text-bold">Escribiendo Nuestra Historia</div>
                    <div class="text-center text-caption">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                  </div>
              </div>
          </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>
