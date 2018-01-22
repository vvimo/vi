<template>
  <div class="c-input-wrapper">
    <template v-if="type !== 'textarea'">
      <div v-if="prepend"><slot name="prepend"></slot></div>
      <input type="text"
      :value="currentValue"
      :class="inputClasses"
      @focus="handleFocus"
      @input="handleInput"
      @blur="handleBlur"
      @change="handleChange"
      @keyup.enter="handleEnter"
      ref="input">
      <div v-if="append"><slot name="append"></slot></div>
    </template>
    <textarea
    v-else
    :value="currentValue"
    :class="inputClasses"
    @focus="handleFocus"
    @input="handleInput"
    @blur="handleBlur"
    @change="handleChange"
    @keyup.enter="handleEnter"
    ref="textarea"></textarea>
  </div>
</template>
<script>
import { oneOf } from '@/utils/assist'
import Emitter from '@/mixins/emitter'

const prefixCls = 'c-input'

export default {
  name: 'cInput',
  mixins: [ Emitter ],
  props: {
    type: {
      validator (val) {
        return oneOf(val, ['text', 'textarea', 'password', 'url', 'email', 'date'])
      },
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      currentValue: this.value,
      prepend: true,
      append: true
    }
  },
  computed: {
    inputClasses () {
      return [
        {
          [`${prefixCls}-type`]: this.type,
          [`${prefixCls}-textarea`]: (this.type === 'textarea'),
          [`${prefixCls}-prepend`]: this.prepend,
          [`${prefixCls}-append`]: this.append
        }
      ]
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
      this.$emit('on-change', event)
    },
    setCurrentValue (val) {
      if (val === this.currentValue) return
      this.currentValue = val
      this.focus()
    },
    handleBlur (event) {
      this.$emit('on-blur', event)
    },
    handleChange (event) {
      this.$emit('on-change', event)
    },
    handleEnter (event) {
      this.$emit('on-enter', event)
    },
    focus () {
      if (this.type === 'textarea') {
        this.$refs.textarea.focus()
      } else {
        this.$refs.input.focus()
      }
    },
    blur () {
      if (this.type === 'textarea') {
        this.$refs.textarea.blur()
      } else {
        this.$refs.input.blur()
      }
    }
  },
  watch: {
    value (val) {
      this.setCurrentValue(val)
    }
  },
  mounted () {
    if (this.type !== 'textarea') {
      this.prepend = this.$slots.prepend !== undefined
      this.append = this.$slots.append !== undefined
    } else {
      this.prepend = false
      this.append = false
    }
  }
}
</script>

<style></style>
