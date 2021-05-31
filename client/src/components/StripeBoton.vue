<template>
  <div class="column">
    <form :action="apiUrl" method="POST" id="formAction" class="column">
      <input type="hidden" name="monto" :value="monto" />
      <input type="hidden" name="cantMeses" :value="cantMeses" />
      <q-btn id="buttonSub" color="primary" > Pagar
        <button id="buttonSub2" class="button-invisible">      </button >
      </q-btn>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        referencia: 'esto es una referencia'
      }
    }
  },
  props: [
    'monto', 'apiUrl', 'cantMeses'
  ],
  async mounted () {
    const montoc = this.monto + '00'
    console.log(this.$stripeKey, 'monto completo')
    console.log(document.forms.item(0))
    var sc = document.createElement('script')
    var formId = document.getElementById('formAction')
    sc.setAttribute('src', 'https://checkout.stripe.com/checkout.js')
    sc.setAttribute('class', 'stripe-button')
    sc.setAttribute('data-key', this.$stripeKey)
    sc.setAttribute('data-name', 'Esto es una Compra')
    sc.setAttribute('data-description', 'Esta es la descripcion de mi producto')
    sc.setAttribute('data-amount', montoc)
    sc.setAttribute('data-currency', 'eur')
    // sc.setAttribute('data-image', 'data:image/png;base64,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')
    sc.setAttribute('id', 'scStripe')
    formId.appendChild(sc)
    sc.addEventListener('load', function () {
      var eles = document.getElementsByClassName('stripe-button-el')
      eles[0].style.display = 'none'
    })

    // var btn = document.getElementById('buttonSub')
    // btn.click()
  },
  methods: {
    test () {

    }
  }
}
</script>

<style>
.prueba {
  background-color: red;
}
.button-invisible {
  background: transparent;
  border: none !important;
  font-size:0;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
</style>
