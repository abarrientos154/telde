<template>
  <div>
    <div>
      <q-img :src="'nopublicidad.jpg'" style="height: 200px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px" basic>
        <div class="absolute-full">
          <div class="absolute-center full-width text-bold text-h5 text-center">
            Monedero
          </div>
        </div>
      </q-img>
    </div>
    <div class="q-pa-md text-h5 text-grey text-bold">Pendientes por aprobar</div>
    <div v-if="pendientes.length <= 2" class="row q-py-sm q-px-lg">
      <div v-for="(item, index) in pendientes"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
        <q-card bordered style="width: 100%; border-radius:25px;">
          <div class="row justify-between items-center q-py-sm  q-px-md">
            <div>
              <div class="row q-mb-xs">
                <div>Estado: </div>
                <div :class="item.status ? 'text-blue-14 q-ml-xs' : 'text-amber-9 q-ml-xs'">{{item.status ? 'APROBADO' : 'PENDIENTE'}}</div>
              </div>
              <div class="q-mb-xs">
                <div>Fecha de solicitud</div>
                <div class="text-caption text-grey">12/08/2021</div>
              </div>
              <div class="row">
                <div>Saldo retirado</div>
                <div class="text-grey q-ml-xs">€0</div>
              </div>
            </div>
            <q-btn size="20px" class="q-pa-xs" @click="aprobar(item)" :icon="item.status ? 'arrow_upward' : 'remove'" :color="item.status ? 'blue-14' : 'amber-9'" text-color="white" style="border-radius:10px;" no-caps/>
          </div>
        </q-card>
      </div>
    </div>
    <div v-else-if="ver" class="row q-py-sm q-px-lg">
      <div v-for="(item, index) in pendientes"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
        <q-card bordered style="width: 100%; border-radius:25px;">
          <div class="row justify-between items-center q-pa-sm q-px-md">
            <div>
              <div class="row q-mb-xs">
                <div>Estado:</div>
                <div :class="item.status ? 'text-blue-14 q-ml-xs' : 'text-amber-9 q-ml-xs'">{{item.status ? 'APROBADO' : 'PENDIENTE'}}</div>
              </div>
              <div  class="q-mb-xs">
                <div>Fecha de solicitud</div>
                <div class="text-caption text-grey">12/08/2021</div>
              </div>
              <div class="row">
                <div>Saldo retirado</div>
                <div class="text-grey q-ml-xs">€0</div>
              </div>
            </div>
            <q-btn size="20px" class="q-pa-xs" @click="aprobar(item)" :icon="item.status ? 'arrow_upward' : 'remove'" :color="item.status ? 'blue-14' : 'amber-9'" text-color="white" style="border-radius:10px;" no-caps/>
          </div>
        </q-card>
      </div>
    </div>
    <div v-else class="row q-py-sm q-px-lg">
      <div v-for="index in 2"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
        <q-card bordered style="width: 100%; border-radius:25px;">
          <div class="row justify-between items-center q-pa-sm q-px-md">
            <div>
              <div class="row q-mb-xs">
                <div>Estado: </div>
                <div :class="pendientes[index - 1].status ? 'text-blue-14 q-ml-xs' : 'text-amber-9 q-ml-xs'">{{pendientes[index - 1].status ? 'APROBADO' : 'PENDIENTE'}}</div>
              </div>
              <div  class="q-mb-xs">
                <div>Fecha de solicitud</div>
                <div class="text-caption text-grey">12/08/2021</div>
              </div>
              <div class="row">
                <div>Saldo retirado</div>
                <div class="text-grey q-ml-xs">€0</div>
              </div>
            </div>
            <q-btn size="20px" class="q-pa-xs" @click="aprobar(pendientes[index - 1])" :icon="pendientes[index - 1].status ? 'arrow_upward' : 'remove'" :color="pendientes[index - 1].status ? 'blue-14' : 'amber-9'" text-color="white" style="border-radius:10px;" no-caps/>
          </div>
        </q-card>
      </div>
    </div>
    <div v-if="pendientes.length > 2" class="row justify-center q-ma-md">
      <q-btn rounded class="q-pa-xs" color="light-green-13" text-color="white" @click="ver = !ver" :label="ver ? 'Ver menos' : 'Ver más'" style="width: 75%;" no-caps/>
    </div>
    <div class="q-pa-md text-h5 text-grey text-bold text-center">Buscar tus retiros</div>
    <div class="q-mb-md q-px-lg">
      <q-input @click="fch = !fch" v-model="fecha" label="Fecha inicio - Fecha fin">
        <template v-slot:append>
          <q-icon name="event" />
        </template>
      </q-input>
      <q-dialog v-model="fch">
        <div>
          <q-date v-model="fechaRequests" @input="selecFecha()" range />
        </div>
      </q-dialog>
    </div>
    <div class="row q-py-sm q-px-lg">
      <div v-for="(item, index) in pendientes"  :key="index" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mb-md q-px-sm">
        <q-card bordered style="width: 100%; border-radius:25px;">
          <div class="row justify-between items-center q-pa-sm q-px-md">
            <div>
              <div class="row q-mb-xs">
                <div>Estado:</div>
                <div :class="item.status ? 'text-blue-14 q-ml-xs' : 'text-amber-9 q-ml-xs'">{{item.status ? 'APROBADO' : 'PENDIENTE'}}</div>
              </div>
              <div  class="q-mb-xs">
                <div>Fecha de solicitud</div>
                <div class="text-caption text-grey">12/08/2021</div>
              </div>
              <div class="row">
                <div>Saldo retirado</div>
                <div class="text-grey q-ml-xs">€0</div>
              </div>
            </div>
            <q-btn size="20px" class="q-pa-xs" @click="aprobar(item)" :icon="item.status ? 'arrow_upward' : 'remove'" :color="item.status ? 'blue-14' : 'amber-9'" text-color="white" style="border-radius:10px;" no-caps/>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fch: false,
      fecha: '',
      fechaRequests: { from: '2021/07/08', to: '2021/07/17' },
      pendientes: [{ status: true }, { status: false }, { status: false }, { status: false }],
      ver: false
    }
  },
  mounted () {
  },
  methods: {
    selecFecha () {
      this.fecha = this.fechaRequests.from + ' - ' + this.fechaRequests.to
    },
    aprobar (itm) {
      this.$q.dialog({
        title: 'Confirma',
        message: '¿Seguro deseas aprobar esta solicitud?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        itm.status = !itm.status
      }).onCancel(() => {
        // cancel
      })
    }
  }
}
</script>
