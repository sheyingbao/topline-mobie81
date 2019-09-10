<template>
  <div>
    <router-view></router-view>
    <!-- 换成路由模式 -->
      <van-tabbar route>
      <van-tabbar-item  to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item  to="/qa" icon="search">问答</van-tabbar-item>
      <van-tabbar-item  to="/video" icon="friends-o">视屏</van-tabbar-item>
      <van-tabbar-item  to="/user" icon="setting-o">我的</van-tabbar-item>
     </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'

}
</script>

<style>

</style>
