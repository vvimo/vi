<template>
  <div class="cl-sidebar transition" :class="isCollapse ? 'cl-sidebar-collapse' : ''">
    <div style="height: 60px;">
      <router-link to="/console">logo</router-link>
    </div>
    <div class="cl-menu">
      <happy-scroll hide-horizontal hide-vertical scroll-top size="8">
        <el-menu router :default-active="active" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-menu-item :index="item.serf" v-for="(item, index) in list" :key="index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </happy-scroll>
    </div>
    <div class="cl-collapse">
      <el-button type="text" @click="isCollapseFun">
        <c-icon class="icon-view-list" style="font-size: 18px"></c-icon>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cSidebar',
  components: {},
  props: {},
  data () {
    return {
      isCollapse: false,
      active: '',
      list: [
        {
          icon: 'el-icon-menu',
          serf: '/console/user',
          name: '个人管理'
        }, {
          icon: 'el-icon-setting',
          serf: '/console/article',
          name: '内容管理'
        }
      ]
    }
  },
  computed: {},
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    isCollapseFun () {
      this.isCollapse = !this.isCollapse
    }
  },
  mounted () {
    this.active = this.$route.path
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
