<template>
  <div class="window-height window-width column bg-primary">
    <div class="fit column items-center justify-center">
      <div class="logo-splash"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {},
      timer: ''
    }
  },
  mounted () {
  },
  methods: {
    ejecutar () {
      this.$router.push('/inicio')
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  created () {
    this.timer = setInterval(this.ejecutar, 4000)
  },
  cancelAutoUpdate () { clearInterval(this.timer) }
}
</script>

<style>
.logo-splash {
  background: url('../../public/logo_nova_telde.png');
  width:100%;
  height:350px;
  background-size: 100% 100%;
}
</style>
