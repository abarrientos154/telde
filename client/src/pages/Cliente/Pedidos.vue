<template>
  <div>
    <div>
      <q-card flat class="bg-white">
        <q-img
          :src="'nopublicidad.jpg'"
          style="height: 250px;width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px"
          basic
        >
        <div class="absolute-full">
          <div class="absolute-center text-bold text-h4 text-center">
            Pedidos
          </div>
        </div>
        </q-img>
      </q-card>
      <div class="q-pl-md">
        <div class="q-pl-md q-mt-md text-h7 text-bold">Nombre completo</div>
        <div class="q-pl-md text-h7">{{form.name}} {{form.lastName}}</div>
        <div class="q-pl-md q-mt-md text-h7 text-bold">Numero de Contacto</div>
        <div class="q-pl-md text-h7">{{form.telefono}}</div>
        <div class="row">
        <div class="column">
          <div class="q-pl-md q-mt-md text-h7 text-bold">Correo de Contacto</div>
          <div class="q-pl-md text-h7">{{form.email}}</div>
          </div>
          <q-space />
          <div class="q-mt-md">
            <q-btn rounded color="light-green-13" text-color="white" label="Editar Perfil" style="height:40px"/>
          </div>
        </div>
      </div>

      <div class="q-pa-md text-h5 text-grey text-bold">Mis direcciones</div>
      <div class="q-pl-md">
          <q-card bordered style="width: 330px;height:120px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px">
            <q-card-section class="items-center justify-center" horizontal>
            <div class="q-pl-md q-mt-md">
            <div class="text-h6 text-bold">Direccion Registrada</div>
            <div class="text-h8">Nombre comunidad</div>
            <div class="text-h8">Ciudad</div>
            <div class="text-h8">Direccion #123</div>
            </div>
              <q-space />
              <q-card-actions vertical class="justify-around">
                <q-btn rounded color="light-green-13" text-color="white" label="Eliminar" style="height:30px"/>
                <div class="q-mt-md">
                  <q-btn rounded color="light-green-13" text-color="white" label="Editar" style="height:30px;width:80px" @click="card2=true"/>
                </div>
              </q-card-actions>
            </q-card-section>
          </q-card>
          <q-card class="q-mt-md" bordered style="width: 330px;height:120px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px">
            <q-card-section class="items-center justify-center" horizontal>
            <div class="q-pl-md q-mt-md">
            <div class="text-h6 text-bold">Direccion Registrada</div>
            <div class="text-h8">Nombre comunidad</div>
            <div class="text-h8">Ciudad</div>
            <div class="text-h8">Direccion #123</div>
            </div>
              <q-space />
              <q-card-actions vertical class="justify-around">
                <q-btn rounded color="light-green-13" text-color="white" label="Eliminar" style="height:30px"/>
                <div class="q-mt-md">
                  <q-btn rounded color="light-green-13" text-color="white" label="Editar" style="height:30px;width:80px" @click="card2=true"/>
                </div>
              </q-card-actions>
            </q-card-section>
          </q-card>
      </div>
        <div class="column items-center justify-center q-py-md">
          <q-btn rounded color="light-green-13" text-color="white" label="Agregar Nueva" style="width:220px;height:50px" />
        </div>
      <div class="column items-center justify-center">
        <div class="q-pa-md text-h6 text-grey text-bold">Pedidos pendientes por recibir</div>
      </div>
      <q-scroll-area
        horizontal
        style="height: 180px; width: 100%;"
        class="bg-grey-1 rounded-borders"
      >
      <div class="row no-wrap q-gutter-xl q-pl-md">
        <q-card v-for="(item, index) in data" bordered style="width: 330px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px" :key="index">
          <q-card-section horizontal>
              <q-card-section>
                <div class="column items-center justify-center">
                  <q-img
                    style="height: 110px;width: 100px; border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px"
                    class="rounded-borders"
                    :src="'nopublicidad.jpg'"
                  />
                  </div>
                </q-card-section>

              <q-card-section class="q-pt-xs">
              <div class="row">
                <div class="q-mt-md text-h7 text-bold">Estado:</div>
                <div class="text-h6 q-mt-sm q-ml-sm text-bold text-blue">{{item.name}}</div>
              </div>
              <div class="column">
                <div class="text-h7 text-bold">Fecha de solicitud:</div>
                <div class="text-h8 q-ml-sm text-grey">{{item.name2}}</div>
                <q-btn rounded color="light-green-13" text-color="white" label="Cambiar estado" @click="card3=true"/>
              </div>
              </q-card-section>

            </q-card-section>
        </q-card>
      </div>
      </q-scroll-area>
      <div class="column items-center justify-center">
        <div class="q-pa-md text-h6 text-grey text-bold">Historial de pedidos completados</div>
      </div>
    <div class="column items-center justify-center no-wrap q-gutter-xl">
    <q-card v-for="(item, index) in data2"   bordered style="width: 330px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px" :key="index">
        <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center">
                <q-img
                  style="height: 120px;width: 110px; border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px"
                  class="rounded-borders"
                  :src="'nopublicidad.jpg'"
                />
                </div>
              </q-card-section>

            <q-card-section class="q-pt-xs">
            <div class="row">
              <div class="q-mt-md text-h7 text-bold">Estado:</div>
              <div class="text-h7 q-mt-md q-ml-sm text-bold text-blue">{{item.name}}</div>
            </div>
            <div class="column">
              <div class="text-h7 text-bold">Fecha de solicitud:</div>
              <div class="text-h8 q-ml-sm text-grey">{{item.name2}}</div>
              <q-btn rounded  color="light-green-13" text-color="white" label="Ver pedido" @click="card=true" />
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
                <div class="q-ml-sm q-mt-sm text-h7 text-bold">Enviado</div>
              </div>
          </div>
        </q-card-section>

          <q-separator />
          <q-card-section class="q-pt-none">
            <div class="text-h6 text-bold">Estado de pedido</div>
            <div class="text-h8 text-bold text-grey">tienda donde compramos</div>
          </q-card-section>
        <q-card flat style="width: 300px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px">
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
                  <div class="text-h7 text-grey">Tu producto ha sido enviado.</div>
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
              <div class="q-mt-md text-h6 text-bold">Completado</div>
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
        <q-card-section class="">
            <q-img
              :src="'nopublicidad.jpg'"
              style="height: 200px;width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px;border-top-left-radius: 30px; border-top-right-radius: 30px"
              basic
            >
            </q-img>
        </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h6 text-bold">Tus direcciones</div>
          </q-card-section>
          <q-separator />
        <q-card flat style="width: 300px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px">
           <div class="q-pa-md">
              <div class="q-mt-md text-h7 text-bold">Direccion</div>
              <q-input filled v-model="text" label="Mi direccion #1234" />
              <div class="q-mt-md text-h7 text-bold">Codigo postal</div>
              <q-input filled v-model="text" label="Codigo postal donde" />
            </div>
        </q-card>

        <q-card-actions class="q-py-md" align="center">
          <div class="q-pb-md">
            <q-btn v-close-popup rounded color="light-green-13" text-color="white" label="Guardar" style="width:200px;height:40px" />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="card3">
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
        <q-card flat style="width: 300px;border-bottom-right-radius:25px;border-bottom-left-radius:25px;border-top-right-radius:25px;border-top-left-radius:25px">
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
                  <div class="row">
                    <div class="text-h6 q-mt-xs text-bold text-light-green-13">959€</div>
                    <div class="q-pl-md q-mt-xs text-h6 text-bold">|</div>
                    <div class="q-pl-md q-mt-sm">
                     <div style="width:20px;height:20px" class="bg-black"></div>
                    </div>
                    <div class="q-mt-sm q-pl-sm text-h7 text-bold">Black</div>
                  </div>
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
                  <div class="row">
                    <div class="text-h6 q-mt-xs text-bold text-light-green-13">959€</div>
                    <div class="q-pl-md q-mt-xs text-h6 text-bold">|</div>
                    <div class="q-pl-md q-mt-sm">
                     <div style="width:20px;height:20px" class="bg-black"></div>
                    </div>
                    <div class="q-mt-sm q-pl-sm text-h7 text-bold">Black</div>
                  </div>
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
            <q-btn v-close-popup rounded color="light-green-13" text-color="white" label="Recibi conforme" style="width:200px;height:40px" />
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
          name: 'Completado',
          name2: '01/08/2021'
        },
        {
          name: 'Completado',
          name2: '01/08/2021'
        },
        {
          name: 'Completado',
          name2: '01/08/2021'
        },
        {
          name: 'Completado',
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
      card2: false,
      card3: false,
      val: true,
      rol: 0,
      text: '',
      form: {}
    }
  },
  methods: {
    getInfo () {
      this.$api.get('user_info').then(res => {
        if (res) {
          this.rol = res.roles[0]
          if (this.rol === 2) {
            this.form = res
            console.log(this.form, 'formmm')
          }
        }
      })
    }

  },
  mounted () {
    this.getInfo()
  }
}
</script>
