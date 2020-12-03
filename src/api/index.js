import axios from '@/utils/axios'

// https://dataapi.joinquant.com/docs#welcome-to-jqdata-apidoc
// 账号密码
const obj = {
  mob: '13733443259',
  pwd: '443259'
}

const api = {
  // 获取预约信息
  getData(data) {
    return axios({
      method: 'post',
      data: { ...obj, ...data }
    })
  }
}
export default api
