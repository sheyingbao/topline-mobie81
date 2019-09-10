<template>
  <div>
      <!-- 导航头 -->
      <van-nav-bar
      fixed
      title="黑马头条"
      />
      <van-tabs>
  <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
<!-- 文章列表  不同的标签页下有不同的列表 -->
   <van-list
     v-model="loading"
     :finished="finished"
     finished-text="没有更多了"
     @load="onLoad"
   >
     <van-cell
       v-for="item in list"
       :key="item"
       :title="item"
     />
</van-list>
 </van-tab>
</van-tabs>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },

  methods: {
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
// 在scope中书写的样式，动态生成的标签或则子组件中不可用
// 深度作用选择器  /deep/
.van-tabs /deep/ .van-tabs__content{
margin-top:46px;
margin-bottom: 50px;
}
</style>
