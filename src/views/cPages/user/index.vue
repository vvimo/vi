<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="100px">
      <el-row>
        <el-col :offset="1" :span="16">
          <h3 class="m-b-sm">基础信息</h3>
          <el-form-item label="昵称">
            <el-input v-model="ruleForm.nickname" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <label>{{ ruleForm.number | getIdCardSex }}</label>
          </el-form-item>
          <el-form-item label="出生日期">
            <label>{{ ruleForm.number | getIdCardBirth }}</label>
          </el-form-item>
          <el-form-item label="年龄">
            <label>{{ ruleForm.number | getIdCardAge }}</label>
          </el-form-item>
          <el-form-item label="城市">
            <label>{{ ruleForm.card }}</label>
          </el-form-item>
          <el-form-item label="身份证号码">
            <el-input v-model="ruleForm.number" :disabled="true"></el-input>
          </el-form-item>
          <h3 class="m-b-sm">联系方式</h3>
          <el-form-item label="E-mail">
            <el-input v-model="ruleForm.email" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="ruleForm.phone" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="微信">
            <el-input v-model="ruleForm.wechat" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="QQ">
            <el-input v-model="ruleForm.qq" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :offset="1" :span="6">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="ruleForm.photo" :src="ruleForm.photo" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'cUser',
  components: {},
  data () {
    return {
      ruleForm: {
        nickname: '',
        number: '',
        photo: '',
        email: '',
        phone: '',
        wechat: '',
        qq: '',
        card: ''
      },
      rules: {}
    }
  },
  computed: {
    ...mapGetters([
      'number',
      'card'
    ])
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleAvatarSuccess (res, file) {
      this.ruleForm.photo = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  },
  mounted () {
    this.ruleForm.number = this.number
    if (this.card === '') {
      this.$store.dispatch('CardInfo', this.number.substring(0, 6)).then((res) => {
        this.ruleForm.card = this.card
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.avatar
  width 178px
  height 178px
  display block
  &-uploader
    .el-upload
      border 1px dashed #d9d9d9
      border-radius 6px
      cursor pointer
      position relative
      overflow hidden
      &:hover
        border-color: #409EFF
    &-icon
      font-size 28px
      color #8c939d
      width 178px
      height 178px
      line-height 178px
      text-align center
</style>
