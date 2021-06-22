import request from '~/utils/request'

export default{

  getList() {
    return request({
      url: '/api/edu/teacher/list',
      method: 'get'
    })
  },

  getById(id) {
    return request({
      url: `/api/edu/teacher/get/${id}`,
      method: 'get'
    })
  },

  evaluatePage(page, limit, id) {
    return request({
      url: `/api/edu/teacher/evaluate-page/${page}/${limit}/${id}`,
      method: 'get'
    })
  },
  evaluateList(id) {
    return request({
      url: `/api/edu/teacher/evaluate-list/${id}`,
      method: 'get'
    })
  },
  addTeacherEvaluate(teacherEvaluate) {
    return request({
      url: `/api/edu/teacher/evaluate-add`,
      method: 'put',
      data: teacherEvaluate
    })
  }
}
