<template>
  <div class="cl-main">
    <happy-scroll hide-horizontal scroll-top size="8">
      <router-view></router-view>
    </happy-scroll>
  </div>
</template>

<script>
export default {
  name: 'cMain',
  components: {},
  data () {
    return {
      list: []
    }
  },
  computed: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
