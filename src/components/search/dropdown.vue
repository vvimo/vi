<template>
  <div class="c-search-dropdown animated" v-show="isShow" style="height: 100px">
    <slot></slot>
  </div>
</template>

<script>
import { addClass, removeClass } from '@/utils/assist'
import Emitter from '@/mixins/emitter'

export default {
  name: 'cSearchDropdown',
  mixins: [Emitter],
  props: {
    data: {
      type: Array,
      default: () => []
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShow: this.show
    }
  },
  computed: {
  },
  watch: {
    show (val) {
      if (val) {
        this.showFun(val)
      } else {
        this.hideFun(val)
      }
    }
  },
  methods: {
    showFun (val) {
      this.isShow = val
      addClass(this.$el, 'fadeInUp')
      setTimeout(() => {
        removeClass(this.$el, 'fadeInUp')
      }, 1000)
    },
    hideFun (val) {
      addClass(this.$el, 'fadeOutDown')
      setTimeout(() => {
        removeClass(this.$el, 'fadeOutDown')
        this.isShow = val
      }, 1000)
    }
  },
  mounted () {
    if (this.show) {
      this.showFun()
    }
  }
}
</script>

<style></style>
