<template>
  <form class="c-form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'cForm',
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {
    validate (callback) {
      return new Promise(resolve => {
        let valid = true
        let count = 0
        this.fields.forEach('', errors => {
          if (errors) {
            valid = false
          }
          if (++count === this.fields.length) {
            resolve(valid)
            if (typeof callback === 'function') {
              callback(valid)
            }
          }
        })
      })
    }
  }
}
</script>

<style></style>
