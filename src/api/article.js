/* eslint-disable camelcase */
/* eslint-disable no-undef */
import request from '@/utils/request'

/**
 * 获取文章列表(登录和不登陆)
 * @param {*} 参数 channel_id, timestamp, with_top
 */
export const getArticles = ({
  // 频道的id
  channel_id,
  // 时间戳
  timestamp,
  //   是否包含置顶1， 0不包含
  // eslint-disable-next-line camelcase
  with_top
}) => {
  return request.get('/app/v1_1/articles', {
    params: {
      channel_id,
      timestamp,
      with_top
    }
  })
}
