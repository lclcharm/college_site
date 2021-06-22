import request from '@/utils/request'

export default {
  saveComments(comment) {
    return request({
      url: `/api/edu/comment/save-comment`,
      method: 'put',
      data: comment
    })
  },

  getComment(searchObj) {
    return request({
      url: `/api/edu/comment/list-comment`,
      method: 'get',
      params: searchObj
    })
  },

  getCommentBack(searchObj) {
    return request({
      url: `/api/edu/comment/list-comment-back`,
      method: 'get',
      params: searchObj
    })
  },

  getPageList(page, limit, searchObj) {
    return request({
      url: `/api/edu/comment/list/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  }
}
