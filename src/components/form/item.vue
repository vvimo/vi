<template>
  <div class="c-form-item">
    <label class="c-form-item-label" v-if="label || $slots.label">
      <slot name="label">{{ label }}</slot>
    </label>

    <div class="c-form-item-content">
      <slot></slot>
      <transition name="fade">
        <div class="c-form-item-error-tip" v-if="false">
          error
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cFormItem',
  props: {
    label: {
      type: [String, Number]
    }
  },
  data () {
    return {}
  }
}
</script>

<style></style>
