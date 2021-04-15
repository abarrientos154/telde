<template>
    <div class="q-my-xl">
        <div class="text-h5 estilo-titulos text-center text-weight-bold q-mx-md q-my-xl">Emprendedores</div>

        <div class="row justify-around">
            <div class="col-xs-11 col-sm-6 col-md-4 col-lg-4 col-xl-4 q-mt-md row justify-center q-mb-xl" v-for="(card, index) in proveedores" :key="index">
                <q-card :class="card.status !== 1 ? 'bg-amber-3 shadow-11 bordes' : 'shadow-11 bordes'" style="width: 90%">
                    <q-img :src="card.perfil ? baseu + card._id : card.perfilEstatico ? 'logos/' + card.id.toString() + '.jpeg' : 'noimg.png'" style="width: 100%; height: 300px" @click="$router.push('/proveedor/' + card._id)" />

                    <q-card-section>
                        <div class="row no-wrap items-center">
                            <div class="col text-h6 ellipsis">{{card.nombreEmpresa}}</div>
                        </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div class="row" style="width:100%">
                            <q-icon class="col-1" name="room" color="blak" style="font-size: 1.3rem;"/>
                            <div class="q-pl-xs text-grey-9 text-subtitle2">{{card.direccionFisica ? card.direccionFisica : 'Dirección'}}</div>
                        </div>
                        <div class="row" style="width:100%">
                            <q-icon class="col-1" name="email" color="blak" style="font-size: 1.3rem;"/>
                            <div class="q-pl-xs text-grey-9 text-subtitle2">{{card.email}}</div>
                        </div>
                        <div class="row" style="width:100%">
                            <q-icon class="col-1" name="phone" color="blak" style="font-size: 1.3rem;"/>
                            <div class="q-pl-xs text-grey-9 text-subtitle2">{{card.telefono}}</div>
                        </div>
                        <!-- <div class="row" style="width:100%">
                            <q-icon class="col-1" name="payment" color="blak" style="font-size: 1.3rem;"/>
                            <div class="q-pl-xs text-grey-9 text-subtitle2">{{card.metodoPago === '1' ? 'Efectivo' : card.metodoPago === '2' ? 'Transferencia Bancaria' : card.metodoPago === '3' ? 'Transferencia Electrónica' : 'Método de pago'}}</div>
                        </div> -->
                        <div class="column items-start" style="width: 100%">
                          <div class="row items-center" style="width: 100%">
                            <q-icon class="col-1" name="payment" size="sm" />
                            <div class="col q-ml-xs text-subtitle2"> Recibe pagos:</div>
                          </div>
                          <div style="width: 100%">
                            <div class="q-ml-md" v-for="(item, index) in card.metodoPago" :key="index" style="width: 100%">
                              <div class="row items-center" style="width: 100%">
                                <q-icon class="col-1" name="stop_circle" size="1em" />
                                <div class="col q-ml-xs text-subtitle2">{{item === '1' ? 'Efectivo' : item === '2' ? 'Transferencia Bancaria' : item === '3' ? 'Transferencia Electrónica' : ''}}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </q-card-section>

                    <q-card-actions align="right">
                        <div v-if="card.status === 2" class="row q-gutter-md">
                            <q-btn round icon="clear" color="negative" @click="statusProv(card._id, 3)">
                                <q-tooltip content-class="bg-negative text-white" :offset="[10, 10]">Rechazar</q-tooltip>
                            </q-btn>
                            <q-btn round icon="check" color="positive" @click="statusProv(card._id, 1)">
                                <q-tooltip content-class="bg-positive text-white" :offset="[10, 10]">Aprobar</q-tooltip>
                            </q-btn>
                        </div>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script>
import env from '../../env'
export default {
  data () {
    return {
      baseu: '',
      proveedores: []
    }
  },
  mounted () {
    this.getData()
    this.baseu = env.apiUrl + '/perfil_img/'
  },
  methods: {
    getData () {
      this.$api.get('proveedores').then(res => {
        if (res) {
          this.proveedores = res
        }
      })
    },
    statusProv (id, val) {
      this.$api.post('proveedor_status/' + id, { status: val }).then(res => {
        if (res) {
          this.getData()
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.estilo-titulos {
  background-color: #fff599;
  width: 300px;
  border-radius: 12px
}
.bordes {
  border-left: 8px solid $primary
}
</style>
