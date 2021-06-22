<template>
  <article class="col-7 fl">
    <div class="u-r-cont">
      <section>
        <div>
          <section class="c-infor-tabTitle c-tab-title">
            <a href="javascript: void(0)" title="Wo的资料" style="cursor: default;">Wo的资料</a>
            <a :class="[flag==1?'current':'','clickAvailable']" title="基本资料" style="cursor: default;" @click="changeFlag(1)" >基本资料</a>
            <a :class="[flag==2?'current':'','clickAvailable']" title="个人头像" style="cursor: default;" @click="changeFlag(2)">个人头像</a>
            <a :class="[flag==3?'current':'','clickAvailable']" title="密码设置" style="cursor: default;" @click="changeFlag(3)">密码设置</a>
          </section>
        </div>
        <div id="p_tCont" class="mt40">

          <!-- 基本信息 -->
          <div :class="[flag==1?'':'undis','u-account-box']">
            <form id="updateForm" method="post">

              <ol class="u-account-li">
                <li>
                  <label class="u-a-title">
                    <span class="fsize16 c-999">用户名</span>
                  </label>
                  <input v-if="flag2==1" v-model="member.nickname" type="text" class="u-a-inpt" placeholder="" >
                  <span v-else class="fsize16 c-999">{{ member.nickname }}</span>
                  <!-- <span class="u-a-error"><em class="u-a-cw icon16">&nbsp;</em>请输入正确的账 号</span> -->

                </li>
                <li>
                  <label class="u-a-title">
                    <span class="fsize16 c-999">邮 箱</span>
                  </label>
                  <!-- <input v-if="flag2==1" v-model="member.email" type="text" class="u-a-inpt" placeholder="" readonly="readonly" disabled="disabled"> -->
                  <input v-if="flag2==1" v-model="member.email" type="text" class="u-a-inpt" placeholder="">
                  <span v-else class="fsize16 c-999">{{ member.email }}</span>
                  <!-- <span class="u-a-error"><em class="u-a-zq icon16">&nbsp;</em></span> -->
                </li>
                <li>
                  <label class="u-a-title">
                    <span class="fsize16 c-999">手机号</span>
                  </label>
                  <input v-if="flag2==1" v-model="member.mobile" type="text" class="u-a-inpt" placeholder="" >
                  <span v-else class="fsize16 c-999">{{ member.mobile }}</span>
                  <!-- <a href="">绑定手机号</a> -->
                  <!-- <span class="u-a-error"><em class="u-a-zq icon16">&nbsp;</em></span> -->
                </li>

                <li>
                  <label class="u-a-title">
                    <span class="fsize16 c-999">签名</span>
                  </label>
                  <input v-if="flag2==1" v-model="member.sign" type="text" class="u-a-inpt" placeholder="请输入你的个性签名" >
                  <span v-else class="fsize16 c-999">{{ member.sign }}</span>
                  <!-- <span class="u-a-error"><em class="u-a-zq icon16">&nbsp;</em></span> -->
                </li>
                <li>
                  <label class="u-a-title">
                    <span class="fsize16 c-999">年 龄</span>
                  </label>
                  <label class="">
                    <input v-if="flag2==1" v-model="member.age" type="text" class="u-a-inpt" placeholder="请输入你的年龄" >
                    <span v-else class="fsize16 c-999">{{ member.age }}</span>岁
                  </label>
                  <!-- <span class="u-a-error"><em class="u-a-cw icon16">&nbsp;</em></span> -->
                </li>
              </ol>
            </form>
            <div class="ml20 mt20 pl20">
              <a v-if="flag2==0" href="javascript:void(0)" title="" class="comm-btn c-btn-2" @click="edit(1)">编辑</a>
              <a v-else href="javascript:void(0)" title="" class="comm-btn c-btn-2" @click="updateMember()">提 交</a>
            </div>
          </div>

          <!-- 基本信息结束 -->

          <!--修改头像，开始-->
          <!-- <div class="u-account-box undis"> -->
          <div :class="[flag==2?'':'undis','u-account-box']">
            <div id="app-container">
              <section>
                <!-- 文章封面  -->
                <el-form label-width="120px">
                  <el-form-item label="">
                    <el-upload
                      :show-file-list="false"
                      :on-success="handleCoverSuccess"
                      :before-upload="beforeCoverUpload"
                      :on-error="handleCoverError"
                      :action="baseURL+'/admin/oss/file/upload?module=avatar'"
                      class="cover-uploader">
                      <img v-if="member.avatar" :src="member.avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"/>
                    </el-upload>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="changeAvatar()">确定</el-button>
                    <!-- <el-button :disabled="saveBtnDisabled" type="primary" @click="changeAvatar()">确定</el-button> -->
                  </el-form-item>
                </el-form>
              </section>
              <!-- /修改个人头像 -->
            </div>
          </div>
          <!--修改密码，开始-->
          <div :class="[flag==3?'':'undis','u-account-box']">
            <section>
              <div class="sign-up-container">
                <el-form ref="member" >
                  <el-form-item >
                    <el-input
                      v-model="member.nickname"
                      type="text"
                      class="u-input"
                      readonly="true"
                      placeholder="你的昵称"/>
                    <i class="iconfont icon-user"/>
                  </el-form-item>

                  <el-form-item>
                    <el-input
                      v-model="member.email"
                      type="text"
                      class="u-input"
                      readonly="true"
                      placeholder="邮箱"/>
                    <i class="iconfont icon-email"/>
                    <!-- <a
                      href="javascript:"
                      type="button"
                      @click="changeKey(0)">手机验证</a> -->
                  </el-form-item>
                  <!-- <el-form-item v-if="key==0">
                    <el-input
                      v-model="member.mobile"
                      type="text"
                      class="u-input"
                      readonly="true"
                      placeholder="手机号"/>
                    <i class="iconfont icon-phone"/>
                    <a
                      href="javascript:"
                      type="button"
                      @click="changeKey(1)">邮箱验证</a>
                  </el-form-item> -->
                  <el-form-item >
                    <el-input
                      v-model="member.code"
                      type="text"
                      class="u-input"
                      placeholder="验证码"/>
                    <i class="iconfont icon-yanzhengma"/>
                    <el-button
                      :disabled="disable"
                      size="small"
                      type="primary"
                      @click="getCodeFun()">
                      {{ codeText }}
                    </el-button>
                  </el-form-item>
                  <el-form-item>
                    <el-input
                      v-model="member.oldPassword"
                      type="password"
                      class="u-input"
                      placeholder="older 密码"/>
                    <i class="iconfont icon-password"/>
                  </el-form-item>
                  <el-form-item>
                    <el-input
                      v-model="member.newPassword"
                      type="password"
                      class="u-input"
                      placeholder="younger 密码"/>
                    <i class="iconfont icon-password"/>
                  </el-form-item>
                </el-form>
                <div class="btn">
                  <el-button
                    type="primary"
                    style="margin-left: 32%; "
                    value="保存更改"
                    @click="updatePassword()">
                    保存更改
                  </el-button>
                </div>
              </div>
            </section>
          </div>
  </div></section></div></article>
</template>

<script>
import '~/assets/css/sign.css'
import '~/assets/css/iconfont.css'
import registerApi from '~/api/register'
import loginApi from '~/api/login'
import ucenterApi from '~/api/ucenter'
import cookie from 'js-cookie'

export default {
  layout: 'sign',
  data() {
    return {
      refreshToken: '',
      memberToken: {},
      member: {},
      sending: false, // 是否发送验证码
      second: 60, // 倒计时间
      codeText: '获取验证码',
      disable: false,
      baseURL: process.env.baseUrl,

      flag: 1,
      flag2: 0,

      key: 0
    }
  },

  created() {
    this.getUserInfo()
  },

  methods: {

    // 修改标志位
    changeFlag(flag) {
      this.flag = flag
    },
    edit(flag) {
      this.flag2 = flag
    },
    changeKey(key) {
      this.key = key
    },
    // 获取验证码
    // getCodeFun() {
    //   // 防止多次点击
    //   if (this.disable) return
    //   this.disable = true
    //   registerApi.sendSms(this.member.mobile).then(response => {
    //     // 倒计时
    //     this.timeDown()
    //     this.$message.success(response.message)
    //   }).catch(() => {
    //     this.disable = false
    //   })
    // },
    // 发送验证码
    getCodeFun() {
      if (this.sending) return // 如果已点击则退出，防止多次重复提交

      if (this.member.mobile === '' && this.member.email === '') {
        this.$message.error('邮箱不能为空')
        return
      }
      this.$message.warning('正在校验数据')
      if (this.member.email !== '') {
        registerApi.sendMessageByEmail(this.member.email).then(response => {
          this.sending = true // 用户已点击
          // 倒计时
          this.timeDown()
          // 提示发送成功
          this.$message.success(response.message)
        }).catch(error => {
          this.$message.success(error.message)
        })
      }
    },

    // 倒计时
    timeDown() {
      this.codeText = this.second
      const timer = setInterval(() => {
        this.codeText--
        if (this.codeText < 1) {
          clearInterval(timer)
          this.codeText = '获取验证码'
          this.second = 60
          this.sending = false
          this.disable = false
        }
      }, 1000)
    },

    updateMember() {
      ucenterApi.updateMember(this.member).then(response => {
        console.log(cookie.get('jwt_token'))
        cookie.set('jwt_token', response.data.token)
        console.log(response.data.token)
        this.$message.success(response.message)
        this.flag2 = 0
        // 跳转到首页
        // window.location.href = '/'
      })
    },

    updatePassword() {
      ucenterApi.updatePassword(this.member).then(response => {
        console.log(cookie.get('jwt_token'))
        cookie.set('jwt_token', response.data.token)
        console.log(response.data.token)
        this.$message.success(response.message)
        this.member.code = ''
        this.member.oldPassword = ''
        this.member.newPassword = ''
        // 跳转到首页
        // window.location.href = '/'
        this.logout()
      })
    },

    changeAvatar() {
      ucenterApi.changeAvatar(this.member).then(response => {
        this.refreshToken = response.data.token

        if (this.refreshToken) {
          cookie.set('jwt_token', this.refreshToken)
        }
        this.$message.success(response.message)
        // 跳转到首页
        window.location.href = '/'
      })
    },
    getUserInfo() {
      if (!cookie.get('jwt_token')) {
        return
      }
      console.log(cookie.get('jwt_token'))

      loginApi.getLoginInfo().then(response => {
        this.memberToken = response.data.userInfo
        this.refreshToken = response.data.token
        ucenterApi.getById(this.memberToken.id).then(response => {
          this.member = response.data.member
        })
        // console.log('你好')
        // console.log(this.refreshToken)
        if (this.refreshToken) {
          cookie.set('jwt_token', this.refreshToken)

          console.log(cookie.get('jwt_token'))
        }
      })
    },

    // 上传成功回调
    handleCoverSuccess(res, file) {
      if (res.success) {
        // console.log(res)
        this.member.avatar = res.data.url
        // 强制重新渲染
        this.$forceUpdate()
      } else {
        this.$message.error('上传失败1（非20000）')
      }
    },

    // 上传校验
    beforeCoverUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像只能是 JPG / PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },

    // 错误处理
    handleCoverError() {
      console.log('error')
      this.$message.error('上传失败（http错误）')
    },
    logout() {
      cookie.set('jwt_token', '')
      this.$message.success('请重新登录')
      // 跳转页面
      window.location.href = '/login'
    }

  }
}

</script>

<style>
  .u-input{
    width:300px;
    margin-left: 20%;
  }
  .cover-uploader img{
    width: 200px;
    height: 200px;
  }

.app-container{
  margin:0 auto;

}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
