<template>
  <div class="login-warpper">
    <div class="login_form">
      <h2>登录</h2>
      <el-form :model="formCustom" ref="formCustom">
        <el-form-item label="asd">
          <el-input v-model="formCustom.userName"></el-input>
        </el-form-item>
        <el-form-item label="qwe">
          <el-input type="password" v-model="formCustom.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.native="handleSubmit('formCustom')" :disabled="loading">
            {{ loading ? ($t('login.loading') + '...') : $t('login.logIn') }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  components: {},
  data () {
    return {
      loading: false,
      formCustom: {
        userName: 'admin',
        password: 'asdasd'
      }
    }
  },
  computed: {},
  methods: {
    handleSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.formCustom).then((res) => {
            this.loading = false
            if (res) {
              console.log(0)
              this.$message({
                showClose: true,
                message: res,
                type: 'error'
              })
            } else {
              console.log(1)
              this.$router.push({ path: '/console' })
            }
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
