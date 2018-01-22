<template>
  <div class="l-wrapper">
    <l-header></l-header>
    <l-main></l-main>
    <l-footer></l-footer>
  </div>
</template>

<script>
import { lHeader, lMain, lFooter } from './components'

export default {
  name: 'layout',
  components: {
    lHeader,
    lMain,
    lFooter
  },
  data () {
    return {}
  },
  computed: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
