<template>
  <div class="l-header">
    <div class="container">
      <div>
        <a class="a" href="">
          logo
        </a>
        <ul class="f-r">
          <li class="f-l" v-for="(item, index) in list" :key="index">
            <a class="a" style="margin-left: 30px" :href="item.serf">{{ $t(item.name) }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lHeader',
  components: {},
  data () {
    return {
      list: [
        {
          name: 'routes.home',
          serf: '/'
        },
        {
          name: 'routes.html',
          serf: '/html'
        },
        {
          name: 'routes.javascript',
          serf: '/js'
        },
        {
          name: 'routes.css',
          serf: '/css'
        },
        {
          name: 'routes.case',
          serf: '/case'
        }
      ]
    }
  },
  computed: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
