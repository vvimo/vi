<template>
  <div class="l-header">
    <div class="container">
      <div>
        <a href="">
          logo
        </a>
        <ul class="f-r">
          <li class="f-l" v-for="(item, index) in list" :key="index">
            <router-link class="m-l-dl" :to="item.serf">{{ $t(item.name) }}</router-link>
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
          name: 'routes.gallery',
          serf: '/gallery'
        },
        {
          name: 'routes.article',
          serf: '/article'
        },
        {
          name: 'routes.work',
          serf: '/work'
        },
        {
          name: 'routes.about',
          serf: '/about'
        }
      ]
    }
  },
  computed: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
