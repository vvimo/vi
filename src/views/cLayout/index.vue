<template>
  <div class="cl-wrapper">
    <c-sidebar></c-sidebar>
    <div class="cl-content">
      <c-toolbar></c-toolbar>
      <c-main></c-main>
    </div>
  </div>
</template>

<script>
import { cToolbar, cSidebar, cMain } from './components'

export default {
  name: 'cLayout',
  components: {
    cToolbar,
    cSidebar,
    cMain
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    isCollapseFun (val) {
      this.isCollapse = val
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
