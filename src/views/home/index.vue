<template>
  <div>
      <!-- 导航头 -->
      <van-nav-bar
      fixed
      title="黑马头条"
      />
      <!-- 频道列表 -->
      <van-tabs animated v-model="activeIndex">
  <van-tab
  v-for="channel in channels"
  :title="channel.name"
  :key="channel.id.toString()">
<!-- 文章列表  不同的标签页下有不同的列表 -->
   <van-list
     v-model="loading"
     :finished="finished"
     finished-text="没有更多了"
     @load="onLoad"
   >
     <van-cell
       v-for="article in currentChannel.articles"
       :key="article.art_id.toString()"
       :title="article.title"
     />
</van-list>
 </van-tab>
</van-tabs>
  </div>
</template>

<script>
import { getDefaultOrUserChannels } from '@/api/channel'
import { getArticles } from '@/api/article'
export default {
  name: 'Home',
  data () {
    return {
    // 列表用的数据
      list: [],
      loading: false,
      finished: false,
      channels: [],
      // tab 是组件中默认显示的tab项的索引
      //  通过该index， 可以找到当前的频道对象
      activeIndex: 0
    }
  },
  created () {
    // 加载频道列表
    this.loadChannels()
  },
  computed: {
    // 返回当前的频道对象
    currentChannel () {
      return this.channels[this.activeIndex]
    }
  },
  methods: {
    //   加载频道列表
    async loadChannels () {
      try {
        const data = await getDefaultOrUserChannels()
        // 给所有的频道设置，时间戳和文章数组
        data.channels.forEach((channel) => {
          channel.timestamp = null
          channel.articles = []
        })
        this.channels = data.channels
      } catch (err) {
        console.log(err)
      }
    },
    // list组件的load
    async onLoad () {
      // 发送请求
      // 获取当前频道对象
      // const currentChannel = this.channels[this.activeIndex]
      // 当前频道对象 时间戳
      // 当前频道对象  文章数组
      const data = await getArticles({
        // 频道的id
        channel_id: this.currentChannel.id,
        // 时间戳
        timestamp: this.currentChannel.timestamp || Date.now(),
        //   是否包含置顶1， 0不包含
        with_top: 1
      })
      // 记录文章列表，记录最后一条数据的时间戳
      this.currentChannel.timestamp = data.pre_timestamp
      this.currentChannel.articles.push(...data.results)
      this.loading = false
      // 异步更新数据
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1)
      //   }
      //   // 加载状态结束
      //   this.loading = false

      //   // 数据全部加载完成s
      //   if (this.list.length >= 40) {
      //     this.finished = true
      //   }
      // }, 500)
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
