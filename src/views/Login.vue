<template>
<div>
    <!-- 导航头 -->
<van-nav-bar
  title="登录"
/>
<!-- 输入框 -->
<van-cell-group>
  <van-field v-model="user.mobile"   left-icon="like"  placeholder="请输入手机号" />
   <van-field v-model="user.code"   left-icon="fire-o" placeholder="请输入验证码" >
   <van-button slot="button" size="small" type="primary">发送验证码</van-button>
   </van-field>
</van-cell-group>
<!-- 登录按钮 -->
<div class="login-btn">
<van-button  class="btn" type="info" @click="handleLogin">登录</van-button>
</div>
</div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  methods: {
    // 点击按钮，处理登录
    async  handleLogin () {
      try {
        // data 就是接口返回数据的data(应为响应拦截器做了处理)
        const data = await login(this.user)
        // 存储登录的状态
        // 1. vuex
        this.$store.commit('setUser', data)
        // 2 本地存储
        
        // 跳转到首页
        this.$router.push('/')
        this.$toast.success('登陆成功')
      } catch (err) {
        this.$toast.fail('登录失败')
      }
    }

  }
}
</script>

<style lang="less" scoped>
.login-btn {
 padding: 20px;
 .btn {
   width:100%;
 }
 }
</style>
