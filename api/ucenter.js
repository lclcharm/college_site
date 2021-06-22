import request from '~/utils/request'

export default{

  getById(id) {
    return request({
      url: `/api/ucenter/member/inner/get-member/${id}`,
      method: 'get'
    })
  },
  updateMember(memberObj) {
    return request({
      url: `/api/ucenter/member/auth/update-member`,
      method: 'post',
      data: memberObj
    })
  },
  changeAvatar(memberObj) {
    return request({
      url: `/api/ucenter/member/auth/update-avatar`,
      method: 'post',
      data: memberObj
    })
  },

  updatePassword(memberObj) {
    return request({
      url: `/api/ucenter/member/auth/update-password`,
      method: 'post',
      data: memberObj
    })
  }

}
