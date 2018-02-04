var qiniu = require('qiniu')

// 需要填写你的 Access Key 和 Secret Key
var accessKey = 'kZY2r49FJ0dGC3r0XgIHkLfsj1f6jIu39a2sLjW9'
var secretKey = '6bzMHq188W_78iCmNmD-EOS67lN_R-ttdQAN24M8'

// 要上传的空间
const bucket = 'vvimo'
var options = {
  scope: bucket,
}

var mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
var putPolicy = new qiniu.rs.PutPolicy(options)
var uploadToken = putPolicy.uploadToken(mac)

var config = new qiniu.conf.Config()
// 空间对应的机房
config.zone = qiniu.zone.Zone_z0


var formUploader = new qiniu.form_up.FormUploader(config)
var putExtra = new qiniu.form_up.PutExtra()

var localFile = "./1.png"
var key='text.png'

// 文件上传
formUploader.putFile(uploadToken, key, localFile, putExtra, function(respErr, respBody, respInfo) {
  if (respErr) throw respErr
  if (respInfo.statusCode == 200) {
    console.log(respBody)
  } else {
    console.log(respInfo.statusCode)
    console.log(respBody)
  }
})
