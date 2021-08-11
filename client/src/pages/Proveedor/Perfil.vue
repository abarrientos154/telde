<template>
  <div>
    <q-carousel
      class="window-height"
      animated
      v-model="slide"
      infinite
    >
      <q-carousel-slide :name="1" class="q-pa-none">
        <q-img :src="baseuPortada" style="height: 250px; width: 100%; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px" >
            <div class="bg-transparent">
                <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="$router.go(-1)" />
            </div>
            <div class="column justify-center items-center bg-transparent absolute-center" style="width:100%">
                <q-avatar size="90px">
                <div style="z-index:1">
                    <q-file borderless v-model="portada" class="button-camera" @input="changePortada()" accept=".jpg, image/*"
                    >
                      <q-icon name="file_upload" class="absolute-center" size="30px" color="white" />
                    </q-file>
                </div>
                </q-avatar>
            </div>
        </q-img>

        <div class="column items-center justify-center q-ma-md">
          <div class="row justify-center" style="width: 100%">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 row justify-between items-start">
                <div class="col-xs-4 col-sm-12 col-md-5 col-lg-5 col-xl-5 column items-center justify-center">
                    <div class="q-mb-xs row justify-center">
                        <q-img :src="baseu" style="width:110px;height:110px;border-radius:25px" >
                            <div class="absolute-center bg-transparent text-center" style="width: 100%">
                            <div class="absolute-center" style="z-index:1">
                                <q-file borderless v-model="perfil" class="button-subir" @input="changePerfil()" accept=".jpg, image/*"
                                >
                                <q-avatar class="absolute-center cursor-pointer">
                                  <q-icon name="file_upload" color="white" class="absolute-center" />
                                </q-avatar>
                                </q-file>
                            </div>
                            </div>
                        </q-img>
                    </div>
                </div>
            </div>

                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 q-py-md">
                  <q-btn no-caps :color="!$v.horarios.$error ? 'primary' : 'negative'" label="Agregar horario de atención"
                  @click="horario = {dias: []}, $v.horario.$reset(), addHorario = true" />
                </div>
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 q-pb-md">
                  <q-scroll-area
                    v-if="horarios.length"
                    horizontal
                    style="height: 240px"
                  >
                    <div class="row no-wrap q-py-md q-px-md q-gutter-md">
                      <div v-for="(hora, index) in horarios" :key="index" >
                        <q-card class="q-pa-md" style="width:400px; height:100%; border-radius: 15px">
                          <div class="row justify-between items-center">
                            <div class="text-bold text-subtitle1 col-10 ellipsis">{{hora.title}}</div>
                            <q-btn round dense flat color="negative" icon="clear" @click="deleteHora(index)" />
                          </div>
                          <div class="row justify-around q-py-md">
                            <div style="width:45%">
                              <div>Apertura</div>
                              <q-field filled dense stack-label>
                                <template v-slot:prepend>
                                  <q-icon name="schedule" />
                                </template>
                                <template v-slot:control>
                                  <div class="self-center full-width no-outline" tabindex="0">{{hora.hapertura}}</div>
                                </template>
                              </q-field>
                            </div>
                            <div style="width:45%">
                              <div>Cierre</div>
                              <q-field filled dense stack-label>
                                <template v-slot:prepend>
                                  <q-icon name="schedule" />
                                </template>
                                <template v-slot:control>
                                  <div class="self-center full-width no-outline" tabindex="0">{{hora.hcierre}}</div>
                                </template>
                              </q-field>
                            </div>
                          </div>
                          <q-field filled dense stack-label>
                            <template v-slot:prepend>
                              <q-icon name="date_range" />
                            </template>
                            <template v-slot:control>
                              <div class="self-center full-width no-outline row" tabindex="0">
                                <div v-for="(item, index2) in hora.dias" :key="index2">{{item === 0 ? 'Lunes' : item === 1 ? 'Martes' : item === 2 ? 'Miércoles' : item === 3 ? 'Jueves' : item === 4 ? 'Viernes' : item === 5 ? 'Sábado' : 'Domingo'}}{{index2 === (hora.dias.length - 1) ? '' : ', '}}</div>
                              </div>
                            </template>
                          </q-field>
                        </q-card>
                      </div>
                    </div>
                  </q-scroll-area>
                </div>

                <q-dialog v-model="addHorario">
                  <q-card class="q-pa-md" style="width:100%">
                      <div style="width:100%">
                          <div class="text-subtitle1 text-bold">Horario de atención</div>
                          <div class="q-pt-sm">
                            <div class="text-subtitle2 text-grey-8">Título del horario</div>
                            <q-input dense v-model="horario.title" filled
                              :error="$v.horario.title.$error" @blur="$v.horario.title.$touch()"
                            />
                          </div>
                          <div class="row justify-between">
                              <q-input borderless readonly dense v-model="horario.hapertura" mask="time" :rules="['time']" style="width:45%" label="Apertura"
                              error-message="Requerido" :error="$v.horario.hapertura.$error" @blur="$v.horario.hapertura.$touch()">
                              <template v-slot:prepend>
                                <q-icon name="access_time" class="cursor-pointer">
                                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                                      <q-time v-model="horario.hapertura">
                                      <div class="row items-center justify-between">
                                        <div class="text-black text-bold">Hora de apertura</div>
                                        <q-btn v-close-popup label="Guardar" color="primary" flat />
                                      </div>
                                      </q-time>
                                  </q-popup-proxy>
                                </q-icon>
                              </template>
                              </q-input>
                              <q-input borderless readonly dense v-model="horario.hcierre" mask="time" :rules="['time']" style="width:45%" class="q-ml-sm" label="Cierre"
                              error-message="Requerido" :error="$v.horario.hcierre.$error" @blur="$v.horario.hcierre.$touch()">
                              <template v-slot:prepend>
                                <q-icon name="access_time" class="cursor-pointer">
                                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                                      <q-time v-model="horario.hcierre">
                                      <div class="row items-center justify-between">
                                        <div class="text-black text-bold">Hora de cierre</div>
                                        <q-btn v-close-popup label="Guardar" color="primary" flat />
                                      </div>
                                      </q-time>
                                  </q-popup-proxy>
                                </q-icon>
                              </template>
                              </q-input>
                          </div>
                      </div>
                      <div style="width:100%">
                          <q-select borderless dense v-model="horario.dias" :options="optionsDias" label="Días de atencion" multiple emit-value map-options
                          error-message="Requerido" :error="$v.horario.dias.$error" @blur="$v.horario.dias.$touch()" >
                            <template v-slot:option="{ itemProps, itemEvents, opt, selected, toggleOption }">
                              <q-item
                                  v-bind="itemProps"
                                  v-on="itemEvents"
                              >
                                  <q-item-section>
                                  <q-item-label v-html="opt.label" ></q-item-label>
                                  </q-item-section>
                                  <q-item-section side>
                                  <q-checkbox :value="selected" @input="toggleOption(opt)" />
                                  </q-item-section>
                              </q-item>
                            </template>
                            <template v-slot:prepend>
                              <q-icon name="event" />
                            </template>
                          </q-select>
                      </div>
                      <div class="row justify-center">
                        <q-btn no-caps color="primary" label="Agregar" @click="arrHorario()" style="width:70%" />
                      </div>
                  </q-card>
                </q-dialog>
          </div>
          <div class="row justify-center" style="width: 100%">
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Nombre de tienda</div>
              <q-input v-model="form.nombre" filled
                :error="$v.form.nombre.$error" @blur="$v.form.nombre.$touch()"
              />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Reseña de tu tienda</div>
              <q-input v-model="form.descripcion" filled type="textarea"
                :error="$v.form.descripcion.$error" @blur="$v.form.descripcion.$touch()"
              />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Selecciona tu categoria</div>
              <q-select @input="form.categoria === 'Comida' ? optionsSubCategorias = subCategoria1 : '', form.subCategoria = []" filled v-model="form.categoria" :options="optionsCategoria" emit-value map-options
                :error="$v.form.categoria.$error" @blur="$v.form.categoria.$touch()" >
              </q-select>
            </div>
            <div v-if="form.categoria === 'Comida'" :class="!$v.form.subCategoria.$error ? 'text-grey-8' : 'text-negative'" class="col-xs-11 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-subtitle2">Selecciona tu subcategoria</div>
            <q-scroll-area
              v-if="form.categoria === 'Comida'"
              class="col-12"
              horizontal
              style="height: 80px"
            >
              <div class="row no-wrap q-py-md q-px-md q-gutter-md">
                <div v-for="(btn, index) in optionsSubCategorias" :key="index" >
                  <q-btn no-caps class="q-px-md" :label="btn" :color="form.subCategoria.find(v => v === btn) ? 'primary' : 'blue-grey-11'" text-color="blue-grey-9"
                  @click="addSubCategoria(btn)" />
                </div>
              </div>
            </q-scroll-area>
            <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 row items-center justify-center q-my-lg">
              <q-btn no-caps label="Siguiente" color="primary" size="lg" style="border-radius: 25px; width: 80%"
              @click="siguiente()" />
            </div>
          </div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="2" >
          <div class="q-pt-md q-px-md">
            <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="slide = 1" />
          </div>
          <div class="text-center text-h6 q-mb-md">Información tienda</div>
          <div class="row justify-center">
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
                  <div class="text-subtitle2 text-grey-8">Ciudad</div>
                  <q-select @input="ciudadesOpt(form.provincia.id)" filled v-model="form.provincia" :options="optionsProvincias" map-options option-label="nombre"
                    :error="$v.form.provincia.$error" @blur="$v.form.provincia.$touch()" >
                      <template v-slot:option="scope">
                        <q-item
                          v-bind="scope.itemProps"
                          v-on="scope.itemEvents"
                        >
                          <q-item-section>
                            <q-item-label v-html="scope.opt.nombre" />
                          </q-item-section>
                        </q-item>
                      </template>
                  </q-select>
                </div>
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 q-mb-sm">
                  <div class="text-subtitle2 text-grey-8">Localidad</div>
                    <q-select :disable="ciudadesFilter.length ? false : true" filled v-model="form.ciudad" :options="optionsCiudad" map-options option-label="nombre" use-input @filter="filterFn"
                    :error="$v.form.ciudad.$error" @blur="$v.form.ciudad.$touch()" >
                      <template v-slot:option="scope">
                        <q-item
                          v-bind="scope.itemProps"
                          v-on="scope.itemEvents"
                        >
                          <q-item-section>
                            <q-item-label v-html="scope.opt.nombre" />
                            <q-item-label caption>{{ scope.opt.cp }}</q-item-label>
                          </q-item-section>
                        </q-item>
                      </template>
                  </q-select>
                    <q-input dense v-if="form.ciudad" v-model="form.ciudad.cp" filled readonly label="Código postal"
                    />
                </div>
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
                  <div class="text-subtitle2 text-grey-8">Dirección</div>
                    <q-input v-model="form.direccion" filled
                        error-message="Requerido" :error="$v.form.direccion.$error" @blur="$v.form.direccion.$touch()"
                    />
                </div>
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
                  <div class="text-subtitle2 text-grey-8">CIF</div>
                    <q-input v-model="form.cif" filled
                        error-message="Requerido" :error="$v.form.cif.$error" @blur="$v.form.cif.$touch()"
                    />
                </div>
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
                  <div class="text-subtitle2 text-grey-8">Teléfono de contacto</div>
                    <q-input v-model="form.telefono" filled
                        error-message="Requerido" :error="$v.form.telefono.$error" @blur="$v.form.telefono.$touch()"
                    />
                </div>
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
                  <div class="text-subtitle2 text-grey-8">Correo de contacto</div>
                    <q-input v-model="form.email" filled type="email" readonly
                    />
                </div>
                <div v-if="form.categoria === 'Comida'" class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 q-my-md">
                  <div class="text-subtitle2 text-grey-8">Localidades en las que atenderá</div>
                    <q-select multiple use-chips hide-selected filled v-model="form.ciudades_atendera" :options="optionsCiudad" map-options option-label="nombre" use-input @filter="filterFn"
                    :error="$v.form.ciudades_atendera.$error" @blur="$v.form.ciudades_atendera.$touch()" >
                      <template v-slot:option="scope">
                        <q-item
                          v-bind="scope.itemProps"
                          v-on="scope.itemEvents"
                        >
                          <q-item-section>
                            <q-item-label v-html="scope.opt.nombre" />
                            <q-item-label caption>{{ scope.opt.cp }}</q-item-label>
                          </q-item-section>
                        </q-item>
                      </template>
                  </q-select>
                </div>
                <q-scroll-area
                  v-if="form.categoria === 'Comida' && form.ciudades_atendera"
                  class="col-12"
                  horizontal
                  style="height: 80px"
                >
                  <div class="row no-wrap q-py-md q-px-md q-gutter-md">
                    <div v-for="(btn, index) in form.ciudades_atendera" :key="index" >
                      <q-btn no-caps class="q-px-md" :label="btn.nombre" color="primary" text-color="blue-grey-9">
                      <div class="absolute-right row items-center q-px-sm">
                        <q-icon name="clear" v-ripple clickable @click="deleteCiudad(btn)"></q-icon>
                      </div>
                      </q-btn>
                    </div>
                  </div>
                </q-scroll-area>
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 text-subtitle1 q-mb-md">Imagenes de la Tienda (hasta 5 imagenes)</div>
                <q-scroll-area horizontal style="height:120px; width: 100%;"
                :thumb-style="thumbStyle" :bar-style="barStyle"
                >
                    <div class="no-wrap q-px-md q-gutter-md row items-center">
                        <q-card class="bg-grey column justify-center items-center" style="height:110px;border-radius:12px;width:110px">
                            <q-file borderless :disable="form.images && form.images.length < 5 ? false : true" v-model="img" class="button-camera" @input="addImg()" accept=".jpg, image/*">
                                <q-icon name="add_a_photo" class="absolute-center" size="30px" color="white" />
                            </q-file>
                        </q-card>
                        <q-img v-for="(item, index) in form.images" :key="index" :src="rutaCargarImgs + item" style="height:110px;border-radius:12px;width:110px" >
                            <q-btn @click="confirmEliminar(item)" flat class="absolute all-pointer-events" size="15px" dense icon="clear" color="negative" style="top: 0px; right: 0px" rounded />
                        </q-img>
                    </div>
                </q-scroll-area>
                <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7 row items-center justify-center q-my-lg">
                    <q-btn no-caps label="Siguiente" color="primary" size="lg" style="border-radius: 25px; width: 80%"
                    @click="siguiente2()" />
                </div>
          </div>
      </q-carousel-slide>

      <q-carousel-slide :name="3" >
          <div class="q-pa-md">
            <q-btn icon="keyboard_backspace" round color="grey-4" text-color="grey" @click="slide = 2" />
          </div>
          <div class="text-center text-h6 text-bold q-mb-md">Donde quieres recibir tus pagos</div>
          <div class="text-center text-subtitle1">Esta información es utilizada para realizar los pagos una vez aprobada la solicitud de retiro</div>
          <div class="row justify-center q-gutter-xs q-mt-lg">
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Titular del banco</div>
              <q-input v-model="form.titular" filled
                error-message="Requerido" :error="$v.form.titular.$error" @blur="$v.form.titular.$touch()"
              />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Código IBAN</div>
              <q-input v-model="form.codigo_iban" filled
                error-message="Requerido" :error="$v.form.codigo_iban.$error" @blur="$v.form.codigo_iban.$touch()"
              />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <div class="text-subtitle2 text-grey-8">Banco</div>
              <q-input v-model="form.banco" filled
                error-message="Requerido" :error="$v.form.banco.$error" @blur="$v.form.banco.$touch()"
              />
            </div>
            <div class="col-xs-11 col-sm-11 col-md-7 col-lg-7 col-xl-7">
              <q-checkbox v-model="confirma_datos" :class="textColorBanco" @input="confirma_datos ? textColorBanco = 'text-black' : ''" label="Confirmo que estos datos son reales" />
            </div>
            <div class="col-xs-11 col-sm-6 col-md-6 col-lg-6 row items-center justify-center q-my-lg">
              <q-btn no-caps label="Guardar" color="primary" size="lg" style="border-radius: 25px; width: 80%"
                @click="guardar()" />
            </div>
          </div>
      </q-carousel-slide>

      <q-carousel-slide :name="4" >
        <div class="absolute-center" style="width:100%">
          <div class="q-mb-md row justify-center">
            <q-img src="nova_telde-06.png" style="width:100%" >
            </q-img>
          </div>
          <div class="row items-center justify-center q-mt-lg" style="width:100%">
            <q-btn no-caps label="Ir a Nova Telde" color="primary" size="lg" style="border-radius: 25px; width: 80%"
            @click="$router.go(-1)" />
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { required, requiredIf } from 'vuelidate/lib/validators'
import env from '../../env'
export default {
  data () {
    return {
      slide: 1,
      id: '',
      textColorBanco: 'text-black',
      baseuPortada: '',
      rutaCargarImgs: '',
      baseu: '',
      img: null,
      perfil: null,
      perfilImg: null,
      portada: null,
      portadaImg: null,
      confirma_datos: true,
      addHorario: false,
      horario: {
        dias: []
      },
      form: {
        subCategoria: [],
        ciudades_atendera: []
      },
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0
      },
      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0
      },
      horarios: [],
      images: [],
      optionsCategoria: ['Comida', 'Desayunos', 'Meriendas', 'Tienda'],
      optionsSubCategorias: [],
      subCategoria1: ['Americana', 'Italiana', 'Mediterránea', 'Asiática', 'Latina'],
      optionsProvincias: [],
      optionsCiudad: [],
      ciudadesFilter: [],
      optionsDias: [
        { label: 'Lunes', value: 0 },
        { label: 'Martes', value: 1 },
        { label: 'Miercoles', value: 2 },
        { label: 'Jueves', value: 3 },
        { label: 'Viernes', value: 4 },
        { label: 'Sabado', value: 5 },
        { label: 'Domingo', value: 6 }
      ]
    }
  },
  validations: {
    horario: {
      title: { required },
      dias: { required },
      hapertura: { required },
      hcierre: { required }
    },
    horarios: { required },
    form: {
      nombre: { required },
      descripcion: { required },
      categoria: { required },
      subCategoria: {
        required: requiredIf(function (nestedModel) {
          return this.form.categoria === 'Comida'
        })
      },
      ciudad: { required },
      direccion: { required },
      provincia: { required },
      ciudades_atendera: {
        required: requiredIf(function (nestedModel) {
          return this.form.categoria === 'Comida'
        })
      },
      cif: { required },
      telefono: { required },
      titular: { required },
      codigo_iban: { required },
      banco: { required }
    },
    confirma_datos: { required }
  },
  async mounted () {
    this.rutaCargarImgs = env.apiUrl + '/tienda_files/'
    this.getInfo()
    this.getProvincia()
  },
  methods: {
    async getInfo () {
      this.$q.loading.show({
        message: 'Cargando datos'
      })
      await this.$api.get('user_info').then(res => {
        if (res) {
          this.form = res
          if (res.horarios) {
            this.horarios = res.horarios
          }
          if (this.form.categoria === 'Comida') {
            this.optionsSubCategorias = this.subCategoria1
          }
          this.baseu = env.apiUrl + '/perfil_img/' + this.form._id
          this.baseuPortada = env.apiUrl + '/perfil_img/portada' + this.form._id
          this.ciudadesOpt(this.form.provincia.id, true)
          this.$q.loading.hide()
        }
      })
    },
    arrHorario () {
      this.$v.horario.title.$touch()
      this.$v.horario.dias.$touch()
      this.$v.horario.hapertura.$touch()
      this.$v.horario.hcierre.$touch()
      if (!this.$v.horario.title.$error && !this.$v.horario.dias.$error && !this.$v.horario.hapertura.$error && !this.$v.horario.hcierre.$error) {
        this.horarios.push(this.horario)
        this.addHorario = false
      }
    },
    deleteHora (index) {
      this.horarios.splice(index, 1)
    },
    siguiente () {
      this.$v.horarios.$touch()
      this.$v.form.nombre.$touch()
      this.$v.form.descripcion.$touch()
      this.$v.form.categoria.$touch()
      this.$v.form.subCategoria.$touch()
      if (!this.$v.horarios.$error && !this.$v.form.nombre.$error && !this.$v.form.descripcion.$error && !this.$v.form.categoria.$error && !this.$v.form.subCategoria.$error) {
        this.form.horarios = this.horarios
        this.slide = 2
      }
    },
    siguiente2 () {
      this.$v.form.ciudad.$touch()
      this.$v.form.provincia.$touch()
      this.$v.form.direccion.$touch()
      this.$v.form.ciudades_atendera.$touch()
      this.$v.form.cif.$touch()
      this.$v.form.telefono.$touch()
      if (!this.$v.form.ciudad.$error && !this.$v.form.provincia.$error && !this.$v.form.direccion.$error && !this.$v.form.ciudades_atendera.$error && !this.$v.form.cif.$error && !this.$v.form.telefono.$error) {
        this.form.ciudad_id = this.form.ciudad._id
        this.slide = 3
      }
    },
    guardar () {
      this.$v.form.titular.$touch()
      this.$v.form.codigo_iban.$touch()
      this.$v.form.banco.$touch()
      if (!this.$v.form.titular.$error && !this.$v.form.codigo_iban.$error && !this.$v.form.banco.$error) {
        if (this.form.categoria !== 'Comida') {
          this.form.subCategoria = []
          this.form.ciudades_atendera = []
        }
        this.$q.loading.show()
        this.$api.put('editar_proveedor', this.form).then(res => {
          if (res) {
            this.slide = 4
          }
        })
        this.$q.loading.hide()
      }
    },
    addSubCategoria (btn) {
      if (!this.form.subCategoria.find(v => v === btn)) {
        this.form.subCategoria.push(btn)
      } else {
        this.form.subCategoria = this.form.subCategoria.filter(v => v !== btn)
      }
    },
    getProvincia () {
      this.$api.get('provincias').then(res => {
        if (res) {
          this.optionsProvincias = res
        }
      })
    },
    async ciudadesOpt (id, bool) {
      this.$q.loading.show({
        message: 'Buscando localidades'
      })
      if (this.form.ciudad && !bool) {
        this.form.ciudad = null
      }
      this.$api.get('ciudades/' + id).then(res => {
        if (res) {
          this.ciudadesFilter = res
          this.optionsCiudad = res
          this.$q.loading.hide()
        }
      })
    },
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.optionsCiudad = this.ciudadesFilter
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.optionsCiudad = this.ciudadesFilter.filter(v => v.nombre.toLowerCase().indexOf(needle) > -1)
      })
    },
    async changePerfil () {
      this.$q.loading.show()
      var formData = new FormData()
      formData.append('perfil', this.perfil)
      await this.$api.post('subir_foto_perfil/' + this.form._id, formData, {
        headers: {
          'Content-Type': undefined
        }
      }).then(res => {
        if (res) {
          this.$q.notify({
            message: 'Haz Cambiado tu foto de perfil',
            color: 'positive'
          })
          this.$q.loading.hide()
          location.reload()
        }
        this.$q.loading.hide()
      })
    },
    async changePortada () {
      this.$q.loading.show()
      var formData = new FormData()
      formData.append('portada', this.portada)
      await this.$api.post('subir_foto_portada/' + this.form._id, formData, {
        headers: {
          'Content-Type': undefined
        }
      }).then(res => {
        if (res) {
          this.$q.notify({
            message: 'Haz Cambiado tu foto de Portada',
            color: 'positive'
          })
          this.$q.loading.hide()
          location.reload()
        }
        this.$q.loading.hide()
      })
    },
    async addImg () {
      this.$q.loading.show()
      if (this.img) {
        var formData = new FormData()
        formData.append('files', this.img)
        await this.$api.post('subir_archivo_proveedor/' + this.form._id, formData, {
          headers: {
            'Content-Type': undefined
          }
        }).then((res) => {
          this.$q.loading.hide()
          this.form.images = res.images
        })
      }
    },
    eliminarImg (nameFile) {
      this.$q.loading.show()
      this.$api.delete('eliminar_archivo_proveedor/' + nameFile).then(res => {
        this.$q.loading.hide()
        if (res) {
          this.form.images = res.images
        }
      })
    },
    confirmEliminar (nameFile) {
      this.$q.dialog({
        title: '¡Atención!',
        message: '¿Esta seguro que Quiere Eliminar Esta Imagen?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.eliminarImg(nameFile)
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.button-subir {
  text-decoration: none;
  padding: 10px;
  font-weight: 540;
  font-size: 0px;
  color: white;
  background-color: $grey;
  border-radius: 100%;
  height:40px;
  width:40px;
  cursor: pointer;
}
.button-camera {
  text-decoration: none;
  padding: 10px;
  font-weight: 540;
  font-size: 0px;
  color: white;
  background-color: $grey;
  border-radius: 100%;
  height:80px;
  width:80px;
  cursor: pointer;
}
</style>
