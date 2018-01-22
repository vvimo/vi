<template>
  <div :class="wrapClasses">
    <slot name="input">
      <c-input
        class="c-search-input"
        v-model="currentValue"
        @on-focus="handleFocus"
        @on-input="handleInput"
        @on-blur="handleBlur"
        @on-change="handleChange"
        @on-enter="handleEnter">
        <c-icon class="icon-search" slot="prepend"></c-icon>
        <c-icon class="icon-close pointer" slot="append" v-show="showCloseIcon" @click.native.stop="clearValue"></c-icon>
      </c-input>
    </slot>
    <slot>
      <c-search-dropdown :data="data" :show="showDropdown"></c-search-dropdown>
    </slot>
  </div>
</template>

<script>
// import { oneOf } from '@/utils/assist'
import Emitter from '@/mixins/emitter'

const prefixCls = 'c-search'

export default {
  name: 'cSearch',
  mixins: [Emitter],
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentValue: this.value,
      showCloseIcon: false,
      showDropdown: false
    }
  },
  computed: {
    wrapClasses () {
      return [
        `${prefixCls}-wrapper`
      ]
    }
  },
  watch: {
    value (val) {
      this.setCurrentValue(val)
    }
  },
  methods: {
    handleFocus (event) {
      this.$emit('on-focus', event)
    },
    handleInput (event) {
      let value = event.target.value
      this.$emit('input', value)
      this.setCurrentValue(value)
      this.setShowDropdown(value)
      this.$emit('on-change', event)
    },
    setCurrentValue (val) {
      this.setShowDropdown(val)
      if (val === this.currentValue) return
      this.currentValue = val
    },
    handleBlur (event) {
      this.$emit('on-blur', event)
    },
    handleChange (event) {
      let value = event.target.value
      this.setCurrentValue(value)
      this.$emit('on-change', event)
    },
    handleEnter (event) {
      this.$emit('on-enter', event)
    },
    setShowDropdown (val) {
      if (val === '') {
        this.showCloseIcon = false
        this.showDropdown = false
      } else {
        this.showCloseIcon = true
        this.showDropdown = true
      }
    },
    clearValue () {
      this.setCurrentValue('')
      this.handleFocus()
    }
  },
  mounted () {
    if (this.value === '') {
      this.showCloseIcon = false
      this.showDropdown = false
    } else {
      this.showCloseIcon = true
      this.showDropdown = true
    }
  }
}
</script>

<style></style>
