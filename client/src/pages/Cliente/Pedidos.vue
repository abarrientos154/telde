<template>
  <div>
      <div class="bg-secondary column justify-center" style="height: 150px; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px">
        <div class="text-center text-h5 text-white text-bold">Pedidos</div>
      </div>

      <div class="q-px-lg q-mt-lg">
        <div class="q-mt-sm text-subtitle1">Nombre completo</div>
        <div class="text-subtitle2">{{form.name}} {{form.lastName}}</div>
        <div class="q-mt-sm text-subtitle1">Numero de Contacto</div>
        <div class="text-subtitle2 text-grey-7">{{form.telefono}}</div>
        <div class="row justify-between items-center q-mt-sm">
          <div>
            <div class="text-subtitle1">Correo de Contacto</div>
            <div class="text-subtitle2">{{form.email}}</div>
          </div>
          <div>
            <q-btn no-caps color="primary" label="Editar Perfil"/>
          </div>
        </div>
      </div>

      <div class="text-h6 q-ma-lg text-grey-8">Mis direcciones</div>
      <div class="q-px-md q-gutter-md">
          <q-card v-for="(card, index) in form.direcciones" :key="index" class="shadow-10" style="width: 90%;height:120px;border-radius:25px;">
            <q-card-section class="items-center justify-center" horizontal>
            <div class="q-pl-md q-mt-md">
            <div class="text-h6 text-bold">Dirección Registrada</div>
            <div class="text-h8">{{card.provincia}}</div>
            <div class="text-h8">{{card.ciudad}}</div>
            <div class="text-h8">{{card.direccion}}</div>
            </div>
              <q-space />
              <q-card-actions vertical class="justify-around">
                <q-btn no-caps color="primary" label="Eliminar" style="width:80px"/>
                <div class="q-mt-md">
                  <q-btn no-caps color="primary" label="Editar" style="width:80px" @click="editDireccion=true"/>
                </div>
              </q-card-actions>
            </q-card-section>
          </q-card>
      </div>
      <div class="column items-center justify-center q-py-md">
        <q-btn no-caps rounded color="primary" label="Agregar nueva" size="lg" style="width:70%" />
      </div>

      <div class="q-ma-lg text-h6 text-grey-8">Pedidos pendientes por recibir</div>
      <q-scroll-area
        v-if="pendientes.length"
        horizontal
        style="height: 180px; width: 100%;"
      >
      <div class="row no-wrap q-gutter-md q-px-md">
        <q-card v-for="(item, index) in pendientes" :key="index" class="shadow-10" style="width: 330px;border-radius:25px;" >
          <q-card-section horizontal>
              <q-card-section>
                <div class="column items-center justify-center">
                  <q-img
                    style="height: 110px;width: 100px; border-radius:25px"
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
                <q-btn no-caps color="primary" :label="item.status === 'Enviado' ? 'Cambiar estado' : 'Ver pedido'" @click="pedidoSelec = item, numberP = index+1, verPedido = true"/>
              </div>
              </q-card-section>

            </q-card-section>
        </q-card>
      </div>
      </q-scroll-area>
      <div v-else class="q-my-lg">
        <div class="text-center text-subtitle1">No tienes pedidos pendientes</div>
      </div>

      <div class="q-py-md text-center text-h6 text-grey-8">Historial de pedidos completados</div>
      <div v-if="completados.length" class="column items-center justify-center no-wrap q-gutter-md">
        <q-card v-for="(item, index) in completados" :key="index" class="shadow-10" style="width: 90%;border-radius:25px;">
          <q-card-section horizontal>
              <q-card-section>
                <div class="column items-center justify-center">
                  <q-img
                    style="height: 120px;width: 110px; border-radius:25px"
                    :src="'nopublicidad.jpg'"
                  />
                  </div>
                </q-card-section>

              <q-card-section class="q-pt-xs">
              <div class="row">
                <div class="q-mt-md text-h7 text-bold">Estado:</div>
                <div class="text-h7 q-mt-md q-ml-sm text-bold text-blue">{{item.status}}</div>
              </div>
              <div class="column">
                <div class="text-h7 text-bold">Fecha de solicitud:</div>
                <div class="text-h8 q-ml-sm text-grey">{{item.created_at}}</div>
                <q-btn no-caps color="primary" label="Ver pedido" @click="pedidoSelec = item, numberP = index+1, verPedido=true" />
              </div>
              </q-card-section>
            </q-card-section>
        </q-card>
        <q-btn no-caps rounded color="primary" label="Ver mas" style="width:350px;height:40px" />
      </div>
      <div v-else class="q-my-lg">
        <div class="text-center text-subtitle1">No tienes pedidos completados</div>
      </div>

      <!-- <q-dialog v-model="editDireccion">
        <q-card class="my-card" style="width: 100%; border-radius: 30px">
          <q-card-section>
              <q-img
                :src="'nopublicidad.jpg'"
                style="height: 200px;width: 100%; border-radius: 30px"
              >
              </q-img>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h6">Tus direcciones</div>
            <q-separator inset />
            <div class="q-pa-sm">
              <div class="q-mt-md text-subtitle2 text-grey-8">Direccion</div>
              <q-input filled v-model="text" label="Mi direccion #1234" />
              <div class="q-mt-md text-subtitle2 text-grey-8">Codigo postal</div>
              <q-input filled v-model="text" label="Codigo postal donde" />
            </div>
          </q-card-section>

          <q-card-actions class="q-py-md" align="center">
            <div class="q-pb-md">
              <q-btn v-close-popup rounded no-caps color="primary" size="lg" label="Guardar" style="width:200px" />
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog> -->

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
                    :src="'nopublicidad.jpg'"
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
                      <div class="text-h6 q-mt-xs text-bold text-primary">$ {{item.oferta ? item.ofertaVal : item.valor}}</div>
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
                <div class="q-mt-md text-h6 text-primary text-bold">$ {{pedidoSelec.totalValor}}</div>
              </div>
          </q-card-section>
        </q-card>

        <q-card-actions class="q-py-md" align="center">
          <div class="q-pb-md">
            <q-btn rounded no-caps color="primary" :label="pedidoSelec.status === 'Enviado' ? 'Recibí conforme' : 'Cerrar'" style="width:200px;"
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
              <div class="text-h8 text-bold text-grey">{{pedidoSelec.tienda_id}}</div>
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
                    <div class="q-mt-md text-subtitle1">ENVIADO</div>
                  </div>
                  <div class="column">
                    <div class="text-caption text-grey-8">Tu producto ha sido enviado.</div>
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
                <div class="q-mt-md text-subtitle1">COMPLETADO</div>
              </div>
              <div class="column">
                <div class="text-caption text-grey-8">El producto ha llegado a su lugar de destino.</div>
              </div>
              </q-card-section>
            </q-card-section>
            <q-card-actions class="q-py-md" align="center">
              <div class="q-pb-md">
                <q-btn rounded no-caps color="primary" label="Cambiar estado" style="width:200px;"
                @click="stadosPedido = false, calificacion = true" />
              </div>
            </q-card-actions>
          </q-card>
        </q-card>
      </q-dialog>

      <q-dialog v-model="calificacion">
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
          <q-card-section>
            <div class="text-h6 text-bold">Compartenos tu opinión</div>
            <div class="text-caption text-grey-8 q-mb-md">Recuerda que los comentarios son moderados</div>
            <div class="text-subtitle2 text-grey-8">Pon una calificacón al servicio</div>
            <q-rating v-model="comentario.rating" icon-selected="star" icon="star_border" color="orange" :max="5" size="40px" />
            <div class="text-subtitle2 text-grey-8">Comparte una reseña en el perfil de la tienda</div>
            <q-input v-model="comentario.comentario" filled type="textarea"
            :error="$v.comentario.comentario.$error" @blur="$v.comentario.comentario.$touch()"
            />
          </q-card-section>
          <q-card-actions class="q-py-md column" align="center">
            <div>
              <q-btn rounded no-caps color="primary" label="Comentar" style="width:200px;"
              @click="calificarPedido(true)"/>
            </div>
            <div>
              <q-btn flat no-caps color="white" text-color="grey-8" label="Omitir"
              @click="calificarPedido(false)"/>
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="confirmCambio">
        <q-card class="q-py-md" style="width: 100%; border-radius: 30px">

          <q-card-section class="q-pt-xl">
            <div class="q-mb-md row justify-center">
              <q-img src="fondo1.jpg" style="width:80%;height:170px;" >
              </q-img>
            </div>
          </q-card-section>
          <q-card-section class="q-my-md">
            <div>
              <div class="text-h6 text-center text-bold">{{text1}}</div>
              <div class="text-caption text-center text-grey-8">{{text2}}</div>
            </div>
          </q-card-section>
          <q-card-actions class="q-py-md" align="center">
            <div class="q-pb-md">
              <q-btn rounded no-caps color="primary" label="Finalizar" style="width:200px;"
              @click="confirmCambio = false" />
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
  </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      verPedido: false,
      editDireccion: false,
      stadosPedido: false,
      confirmCambio: false,
      calificacion: false,
      publicarCali: false,
      cali: true,
      rol: 0,
      numberP: 0,
      text1: '',
      text2: '',
      form: {},
      comentario: {
        rating: 0
      },
      pedidoSelec: {},
      pedidos: [],
      pendientes: [],
      completados: []
    }
  },
  validations: {
    comentario: {
      rating: { required },
      comentario: { required }
    }
  },
  mounted () {
    this.getInfo()
    this.getPedidos()
  },
  methods: {
    getInfo () {
      this.$api.get('user_info').then(res => {
        if (res) {
          this.rol = res.roles[0]
          this.form = res
        }
      })
    },
    getPedidos () {
      this.$api.get('reportes/1').then(res => {
        if (res) {
          this.pedidos = res
          this.pendientes = res.filter(v => v.status === 'En Local' || v.status === 'Enviado')
          this.completados = res.filter(v => v.status === 'Completado')
          console.log('pedidos', this.pedidos)
        }
      })
    },
    inicioCambio (stu) {
      if (stu === 'Enviado') {
        this.verPedido = false
        this.stadosPedido = true
      } else {
        this.verPedido = false
      }
    },
    calificarPedido (bool) {
      if (bool) {
        this.$v.$touch()
        if (!this.$v.comentario.$error) {
          this.cali = true
          this.text1 = 'Hemos publicado tu comentario'
          this.text2 = 'Recuerda que puedes añadir a favoritos tus tiendas favoritas'
          this.comentario.tienda_id = this.pedidoSelec.tienda_id
          this.comentario.cliente_id = this.pedidoSelec.cliente_id
          this.comentario.pedido_id = this.pedidoSelec._id
          this.$api.post('calificar_tienda', this.comentario).then(res => {
            if (res) {
              this.cambiarStatus(this.pedidoSelec._id)
            }
          })
        }
      } else {
        this.cali = false
        this.text1 = 'Pedido completado correctamente'
        this.text2 = 'Recuerda que puedes añadir a favoritos tus tiendas favoritas'
        this.cambiarStatus(this.pedidoSelec._id)
      }
    },
    cambiarStatus (id) {
      this.$api.put('compra_status/' + id, { status: 'Completado' }).then(res => {
        if (res) {
          this.getPedidos()
          this.calificacion = false
          this.confirmCambio = true
        }
      })
    }
  }
}
</script>
