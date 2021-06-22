import request from '@/utils/request'

export default {

  getMessageById(id) {
    return request({
      url: `/api/edu/message/message-info/${id}`,
      method: 'get'
    })
  },

  getPageList(page, limit) {
    return request({
      url: `/api/edu/message/list/${page}/${limit}`,
      method: 'get'
    })
  }

}
