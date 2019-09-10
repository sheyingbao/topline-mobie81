import request from '@/utils/request'

/**
 * 获取文章列表(登录和不登陆)
 * @param {*} 参数 channel_id, timestamp, with_top
 */
export const getArticles = ({
  // 频道的id
  channelId,
  // 事件戳
  timestamp,
  //   是否包含置顶1， 0不包含
  withtop
}) => {
  return request.get('/app/v1_1/articles', {
    params: {
      channelId,
      timestamp,
      withtop
    }
  })
}
