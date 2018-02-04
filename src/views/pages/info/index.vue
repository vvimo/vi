<template>
  <div class="p-t-md p-b-md" style="background: #fafafa">
    <div class="container p-l-md p-r-md p-t-dl p-b-dl" style="background: #fff">
      <div class="h-info-head p-b-sm">
        <h1 class="m-b-sm" style="font-weight: 100">{{ info.title }}</h1>
        <span style="color: #999">
          <span class="m-r-sm">
            网页/设计
          </span>
          <span class="m-r-sm">
            <c-icon class="icon-visible"></c-icon>
            {{ info.read }}
          </span>
          <span class="m-r-sm">
            <c-icon class="icon-time"></c-icon>
            {{ info.push | formatTime }}
          </span>
        </span>
      </div>
      <div class="m-t-sm" style="color: #666; font-size: 16px; line-height: 1.5em" v-html="info.content"></div>
      <div class="m-t-sm" style="overflow: hidden">
        <span class="f-r">
          <c-icon class="icon-link"></c-icon>
          <a href="http://www.baidu.com">http://www.baidu.com</a>
        </span>
      </div>
      <div class="h-info-foot m-t-md p-t-sm p-b-sm">
        <div>
          <el-tag>标签一</el-tag>
          <el-tag>标签一</el-tag>
          <el-tag>标签一</el-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { info } from '@/api/article'

export default {
  name: 'home',
  components: {},
  props: {
    id: {
      type: String
    }
  },
  data () {
    return {
      info: {}
    }
  },
  computed: {},
  methods: {},
  mounted () {
    if (this.$route.params.id === '') {
      this.$route.path('/')
    } else {
      info({id: this.$route.params.id}).then(response => {
        if (response.status === 200) {
          this.info = response.data[0]
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
