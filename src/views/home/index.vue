<template>
  <div>
      <!-- 导航头 -->
      <van-nav-bar
      fixed
      title="黑马头条"
      />
      <!-- 频道列表 -->
      <van-tabs animated>
  <van-tab :sticky="true" :offset-top="46"
  v-for="channel in channels"
  :title="channel.name"
  :key="channel.id">
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
import { getDefaultOrUserChannels } from '@/api/channel'
export default {
  name: 'Home',
  data () {
    return {
    // 列表用的数据
      list: [],
      loading: false,
      finished: false,
      channels: []
    }
  },
  created () {
    // 加载频道列表
    this.loadChannels()
  },
  methods: {
    //   加载频道列表
    async loadChannels () {
      try {
        const data = await getDefaultOrUserChannels()
        this.channels = data.channels
      } catch (err) {
        console.log(err)
      }
    },
    // list组件的load
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
// .van-tabs /deep/ .van-tabs__content{
// margin-top:46px;
// margin-bottom: 50px;
// }
.van-tabs {
  /deep/ .van-tabs__wrap {
    position: fixed;
    top: 46px;
    left: 0;
    right: 10px;
    z-index: 100;
  }
  /deep/ .van-tabs__content {
    margin-top: 90px;
    margin-bottom: 50px;
  }
}
</style>
