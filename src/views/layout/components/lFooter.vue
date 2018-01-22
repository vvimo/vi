<template>
  <div class="l-footer">
    <div class="container">
      <div class="l-footer-nav">
        <a class="a a-l-f m-r-md" :href="item.serf" v-for="(item, index) in navList" :key="index">{{ item.name }}</a>
      </div>
      <div class="l-footer-msg">
        <span v-for="(item, index) in msg" :key="index">
            <span v-if='item.serf == ""'>{{ item.name }}</span>
            <a class="a a-l-f m-r-md" :href="item.serf" v-if='item.serf != ""'>{{ item.name }}</a>
        </span>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lFooter',
  components: {},
  data () {
    return {
      navList: [
        {
          name: '关于我们',
          serf: '/about'
        }, {
          name: '加入我们',
          serf: '/joinus'
        }, {
          name: '合作伙伴',
          serf: '/links'
        }, {
          name: '广告及服务',
          serf: '/contact'
        }, {
          name: '常见问题解答',
          serf: '/help'
        }, {
          name: '防网络诈骗专题',
          serf: '/10340'
        }
      ],
      msg: [
        {
          name: 'Copyright ©',
          serf: ''
        }, {
          name: '微墨网',
          serf: 'http://www.vvimo.com'
        }, {
          name: '沪ICP备15022950号-1',
          serf: 'http://www.miitbeian.gov.cn/'
        }
      ]
    }
  },
  computed: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
