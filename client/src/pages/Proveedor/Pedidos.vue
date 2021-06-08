<template>
  <div>
    <q-img :src="'nopublicidad.jpg'" style="height: 150px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px">
      <div class="absolute-full">
        <div class="absolute-center full-width text-bold text-h5 text-center">Pedidos</div>
      </div>
    </q-img>

    <div class="text-h6 q-ma-lg text-grey-8">Pedidos pendientes</div>
    <q-scroll-area
      v-if="pendientes.length"
      horizontal
      style="height: 170px; width: 100%;"
    >
    <div class="row no-wrap q-gutter-md q-px-md">
      <q-card v-for="(item, index) in pendientes" :key="index" style="width: 330px;border-radius:25px;">
        <q-card-section horizontal>
            <q-card-section>
              <div class="column items-center justify-center">
                <q-img
                  style="height: 110px;width: 100px; border-radius:25px;"
                  :src="'nopublicidad.jpg'"
                />
              </div>
            </q-card-section>

            <q-card-section class="q-pt-xs">
            <div class="row">
              <div class="q-mt-md text-h7 text-bold">Estado:</div>
              <div class="text-h6 q-mt-sm q-ml-sm text-bold text-blue">{{item.status}}</div>
            </div>
            <div class="column">
              <div class="text-h7 text-bold">Fecha de solicitud:</div>
              <div class="text-h8 q-ml-sm text-grey">{{item.created_at}}</div>
              <q-btn no-caps color="primary" label="Cambiar estado" @click="pedidoSelec = item, numberP = index+1, verPedido=true"/>
            </div>
            </q-card-section>

          </q-card-section>
      </q-card>
    </div>
    </q-scroll-area>
    <div v-else class="q-my-lg">
      <div class="text-center text-subtitle1">No tienes pedidos pendientes</div>
    </div>

    <div class="text-h6 q-ma-lg text-grey-8">Pedidos Enviados</div>
    <div v-if="enviados.length" class="column items-center justify-center no-wrap q-gutter-md">
      <q-card v-for="(item, index) in enviados" :key="index" style="width: 90%;border-radius:25px;">
        <q-card-section horizontal>
          <q-card-section>
            <div class="column items-center justify-center">
              <q-img
                  style="height: 120px;width: 110px; border-radius:25px;"
                  :src="'nopublicidad.jpg'"
              />
            </div>
          </q-card-section>

          <q-card-section class="q-pt-xs">
            <div class="row no-wrap">
              <div class="q-mt-md text-h7 text-bold">Estado:</div>
              <div class="text-h6 q-mt-sm q-ml-sm text-bold text-blue ellipsis">{{item.status}}</div>
            </div>
            <div class="column">
              <div class="text-h7 text-bold">Fecha de solicitud:</div>
              <div class="text-h8 q-ml-sm text-grey">{{item.created_at}}</div>
              <div>
                <q-btn no-caps color="primary" label="Ver pedido" @click="pedidoSelec = item, numberP = index+1, verPedido=true" />
              </div>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
      <q-btn rounded no-caps color="primary" label="Ver mas" style="width:80%;" />
    </div>
    <div v-else class="q-my-lg">
      <div class="text-center text-subtitle1">No tienes pedidos enviados</div>
    </div>

    <div class="text-h6 q-ma-lg text-grey-8">Pedidos Finalizados</div>
    <div v-if="completados.length" class="column items-center justify-center no-wrap q-gutter-md">
      <q-card v-for="(item, index) in completados" :key="index" style="width: 90%;border-radius:25px;">
        <q-card-section horizontal>
          <q-card-section>
            <div class="column items-center justify-center">
              <q-img
                  style="height: 120px;width: 110px; border-radius:25px;"
                  :src="'nopublicidad.jpg'"
              />
            </div>
          </q-card-section>

          <q-card-section class="q-pt-xs">
            <div class="row no-wrap">
              <div class="q-mt-md text-h7 text-bold">Estado:</div>
              <div class="text-h6 q-mt-sm q-ml-sm text-bold text-blue ellipsis">{{item.status}}</div>
            </div>
            <div class="column">
              <div class="text-h7 text-bold">Fecha de solicitud:</div>
              <div class="text-h8 q-ml-sm text-grey">{{item.created_at}}</div>
              <div>
                <q-btn no-caps color="primary" label="Ver pedido" @click="pedidoSelec = item, numberP = index+1, verPedido=true" />
              </div>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
      <q-btn rounded no-caps color="primary" label="Ver mas" style="width:80%;" />
    </div>
    <div v-else class="q-my-lg">
      <div class="text-center text-subtitle1">No tienes pedidos finalizados</div>
    </div>

    <q-dialog v-model="verPedido">
      <q-card class="q-py-md" style="width: 100%; border-radius: 30px">

        <q-card-section class="q-pt-none">
          <div class="row">
            <div class="text-h6 text-bold">Pedido</div>
            <div class="q-ml-sm text-h6 text-bold text-blue">#{{numberP}}</div>
            <div class="row q-pr-md absolute-right">
            <div class="q-ml-xl q-mt-sm text-h7 text-bold">Estado:</div>
            <div class="q-ml-sm q-mt-sm text-h7 text-bold">{{pedidoSelec.status}}</div>
            </div>
          </div>
        </q-card-section>

        <q-separator />
        <q-card-section class="q-pt-none">
          <div class="text-h6 text-bold">Productos adquiridos</div>
        </q-card-section>
        <q-card flat style="width: 100%;border-radius:25px;">
          <q-card-section horizontal v-for="(item, index) in pedidoSelec.productos" :key="index">
              <q-card-section>
                <div class="column items-center justify-center">
                  <q-img
                    style="height: 80px;width: 80px; border-radius:25px;"
                    class="rounded-borders"
                    :src="baseuProducto + item.image"
                  />
                  </div>
              </q-card-section>

              <q-card-section class="q-pt-xs">
                  <div class="row">
                    <div class="q-mt-md text-h7 text-bold">{{item.nombre}}</div>
                  </div>
                  <div class="column">
                    <div class="text-h8 text-bold text-grey">{{item.proveedor_name}}</div>
                    <div class="row">
                      <div class="text-h6 q-mt-xs text-bold text-primary">€ {{item.oferta ? item.ofertaVal : item.valor}}</div>
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
                <div class="q-mt-md text-h6 text-grey text-bold">Cantidad de productos</div>
                <q-space />
                <div class="q-mt-md text-h6 text-grey text-bold">{{pedidoSelec.totalProductos}}</div>
              </div>
              <div class="row">
                <div class="q-mt-md text-h6 text-grey text-bold">Total a pagar</div>
                <q-space />
                <div class="q-mt-md text-h6 text-primary text-bold">€ {{pedidoSelec.totalValor}}</div>
              </div>
          </q-card-section>
        </q-card>

        <q-card-actions class="q-py-md" align="center">
          <div class="q-pb-md">
            <q-btn rounded no-caps color="primary" :label="pedidoSelec.status === 'En Local' ? 'Cambiar estado' : 'Cerrar'" style="width:200px;"
            @click="inicioCambio(pedidoSelec.status)" />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="stadosPedido">
        <q-card class="q-py-md" style="width: 100%; border-radius: 30px">

          <q-card-section class="q-pt-none">
            <div class="row">
              <div class="text-h6 text-bold">Pedido</div>
              <div class="q-ml-sm text-h6 text-bold text-blue">#{{numberP}}</div>
                <div class="row q-pr-md absolute-right">
                  <div class="q-ml-xl q-mt-sm text-h7 text-bold">Estado:</div>
                  <div class="q-ml-sm q-mt-sm text-h7 text-bold">{{pedidoSelec.status}}</div>
                </div>
            </div>
          </q-card-section>

            <q-separator />
            <q-card-section class="q-pt-none">
              <div class="text-h6 text-bold">Estado de pedido</div>
              <div class="text-h8 text-bold text-grey">{{pedidoSelec.cliente}}</div>
            </q-card-section>
          <q-card flat style="width: 100%;">
            <q-card-section horizontal>
                <q-card-section>
                  <div class="column items-center justify-center">
                    <q-img
                      style="height: 80px;width: 80px; border-radius:25px;"
                      class="rounded-borders"
                      :src="'nopublicidad.jpg'"
                    />
                    </div>
                </q-card-section>

                <q-card-section class="q-pt-xs">
                  <div class="row">
                    <div class="q-mt-md text-subtitle1">EN LOCAL</div>
                  </div>
                  <div class="column">
                    <div class="text-caption text-grey-8">Tu producto ha sido comprado en la plataforma, pero aún no haz hecho el envío.</div>
                  </div>
                </q-card-section>
            </q-card-section>
            <q-card-section class="bg-grey-4 q-mx-xs" style="border-radius:20px" horizontal>
              <q-card-section>
                <div class="column items-center justify-center">
                  <q-img
                    style="height: 80px;width: 80px; border-radius:25px;"
                    class="rounded-borders"
                    :src="'nopublicidad.jpg'"
                  />
                  </div>
                </q-card-section>

              <q-card-section class="q-pt-xs">
              <div class="row">
                <div class="q-mt-md text-subtitle1">ENVIADO</div>
              </div>
              <div class="column">
                <div class="text-caption text-grey-8">Ya enviaste el producto a su lugar de destino.</div>
              </div>
              </q-card-section>
            </q-card-section>
            <q-card-actions class="q-py-md" align="center">
            <div class="q-pb-md">
              <q-btn rounded no-caps color="primary" label="Cambiar estado" style="width:200px;"
              @click="stadosPedido = false, confirmCambio = true" />
            </div>
          </q-card-actions>
          </q-card>
        </q-card>
      </q-dialog>

      <q-dialog v-model="confirmCambio">
        <q-card class="q-py-md" style="width: 100%; border-radius: 30px">

          <q-card-section class="q-pt-none">
            <div class="row">
              <div class="text-h6 text-bold">Pedido</div>
              <div class="q-ml-sm text-h6 text-bold text-blue">#{{numberP}}</div>
                <div class="row q-pr-md absolute-right">
                  <div class="q-ml-xl q-mt-sm text-h7 text-bold">Estado:</div>
                  <div class="q-ml-sm q-mt-sm text-h7 text-bold">{{pedidoSelec.status}}</div>
                </div>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section class="q-my-xl q-py-xl">
            <div>
              <div class="text-h6 text-center text-bold">¿Estas seguro que quieres cambiar el estado del pedido?</div>
              <div class="text-caption text-center text-grey-8">El nuevo estado de tu producto es: Enviado</div>
            </div>
          </q-card-section>
          <q-card-actions class="q-py-md" align="center">
            <div class="q-pb-md">
              <q-btn rounded no-caps color="primary" label="Finalizar" style="width:200px;"
              @click="cambiarStatus(pedidoSelec._id)" />
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
  </div>
</template>
<script>
import env from '../../env'
export default {
  data () {
    return {
      baseuProducto: '',
      verPedido: false,
      stadosPedido: false,
      confirmCambio: false,
      val: true,
      numberP: 0,
      pedidoSelec: {},
      pendientes: [],
      enviados: [],
      completados: []
    }
  },
  mounted () {
    this.baseuProducto = env.apiUrl + '/producto_files/'
    this.getPedidos()
  },
  methods: {
    getPedidos () {
      this.$api.get('reportes/2').then(res => {
        if (res) {
          console.log(res)
          this.pendientes = res.filter(v => v.status === 'En Local')
          this.enviados = res.filter(v => v.status === 'Enviado')
          this.completados = res.filter(v => v.status === 'Completado')
        }
      })
    },
    inicioCambio (stu) {
      if (stu === 'En Local') {
        this.verPedido = false
        this.stadosPedido = true
      } else {
        this.verPedido = false
      }
    },
    cambiarStatus (id) {
      this.$api.put('compra_status/' + id, { status: 'Enviado' }).then(res => {
        if (res) {
          this.getPedidos()
          this.confirmCambio = false
        }
      })
    }
  }
}
</script>
