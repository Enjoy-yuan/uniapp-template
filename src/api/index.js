import axios from '@/utils/axios'

// https://dataapi.joinquant.com/docs#welcome-to-jqdata-apidoc

const api = {
  // 开盘状态
  getStatus() {
    return axios({
      url: `/agucha/t-market-status/status`,
      method: 'get'
    })
  },

  // 大盘指数，type为1查全球，不传或0查国内
  getIndexInfo(date) {
    return axios({
      url: `/agucha/t-market-index1-d/queryLatestIndexInfo/${date}`,
      method: 'get'
    })
  },

  // 涨跌分布
  getDistribute(date) {
    return axios({
      url: `/agucha/t-stock-pchange-distribute/${date}`,
      method: 'get'
    })
  },
  // 获取预约信息
  getData() {
    return axios({
      url: `/agucha/industry/queryIndustryOnDay/20201029`,
      method: 'get'
    })
  }
}
export default api
