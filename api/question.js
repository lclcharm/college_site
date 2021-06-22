import request from '@/utils/request'

export default {

  getQuestionInfoById(id) {
    return request({
      url: `/api/edu/question/getbyId/${id}`,
      method: 'get'
    })
  },

  getPageList(page, limit, searchObj) {
    return request({
      url: `/api/edu/question/page-list/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },

  getHotlist() {
    return request({
      url: `/api/edu/question/list-side`,
      method: 'get'
    })
  },

  addCommentCount(id) {
    return request({
      url: `/api/edu/question/comment-addcount/${id}`,
      method: 'put'
    })
  },

  getAllTags() {
    return request({
      url: `/api/edu/question/list-tags`,
      method: 'get'
    })
  },
  addQuestions(questionVo) {
    return request({
      url: `/api/edu/question/question-add`,
      method: 'put',
      data: questionVo
    })
  },

  addQuestionComment(questionComment) {
    return request({
      url: `/api/edu/question/comment-add`,
      method: 'put',
      data: questionComment
    })
  },

  getQuestionByMember(page, limit) {
    return request({
      url: `/api/edu/question/page-member-list/${page}/${limit}`,
      method: 'get'
    })
  },
  getQuestionCommentByMember() {
    return request({
      url: `/api/edu/question/get-member-questionComment`,
      method: 'get'
    })
  },
  setBest(questionComment) {
    return request({
      url: `/api/edu/question/comment-best`,
      method: 'put',
      data: questionComment
    })
  }
}
