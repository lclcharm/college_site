import request from '@/utils/request'

export default {

  getArticleById(id) {
    return request({
      url: `/api/edu/article/article-info/${id}`,
      method: 'get'
    })
  },

  getPageList(page, limit, searchObj) {
    return request({
      url: `/api/edu/article/list/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },

  getRanklist() {
    return request({
      url: `/api/edu/article/ranklist`,
      method: 'get'
    })
  },
  //   getPageList(searchObj) {
  //     return request({
  //       url: `/api/edu/article/list`,
  //       method: 'get',
  //       params: searchObj
  //     })
  //   }
  addPraise(article) {
    return request({
      url: `/api/edu/article/phraise-add`,
      method: 'post',
      data: article
    })
  },

  reducePraise(article) {
    return request({
      url: `/api/edu/article/phraise-reduce`,
      method: 'post',
      data: article
    })
  },

  addCommentCount(id) {
    return request({
      url: `/api/edu/article/comment-addcount/${id}`,
      method: 'put'
    })
  }
}
