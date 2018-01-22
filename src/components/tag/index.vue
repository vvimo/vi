<template>
  <div
  :class="wrapperClasses"
  @click.stop="check">
    <span>{{ currentValue }}</span>
    <c-icon
    v-if="closable"
    class="icon-close"
    @click.native.stop="close"></c-icon>
  </div>
</template>

<script>
import { oneOf } from '@/utils/assist'

const prefixCls = 'c-tag'

export default {
  name: 'cTag',
  props: {
    text: {
      type: [String, Number]
    },
    size: {
      validator (val) {
        return oneOf(val, ['border', 'dot'])
      }
    },
    color: {
      validator (val) {
        return oneOf(val, ['default', 'blue', 'green', 'red', 'yellow'])
      },
      default: 'default'
    },
    closable: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number]
    }
  },
  data () {
    return {
      currentValue: this.text,
      isChecked: this.checked
    }
  },
  computed: {
    wrapperClasses () {
      return [`${prefixCls}-wrapper`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-${this.color}`]: !!this.color,
          [`${prefixCls}-closable`]: this.closable,
          [`${prefixCls}-checked`]: this.isChecked
        }
      ]
    }
  },
  methods: {
    close (event) {
      if (this.name === undefined) {
        this.$emit('on-close', event)
      } else {
        this.$emit('on-close', event, this.name)
      }
    },
    check () {
      if (!this.checkable) return
      const checked = !this.isChecked
      this.isChecked = checked
      if (this.name === undefined) {
        this.$emit('on-change', checked)
      } else {
        this.$emit('on-change', checked, this.name)
      }
    }
  }
}
</script>

<style></style>
