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
  getIndexInfo(date,type) {
    return axios({
      url: `/agucha/t-market-index1-d/queryLatestIndexInfo/${date}?type=${type}`,
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
  // 概念
  getConcept(date) {
    return axios({
      url: `/agucha/t-market-concept/queryConceptOnDay/${date}`,
    })
  },
  // 行业
  getIndustry(date) {
    return axios({
      url: `/agucha/industry/queryIndustryOnDay/${date}`,
    })
  },
  // 板块
  getArea(date) {
    return axios({
      url: `/agucha/t-market-area/queryAreaOnDay/${date}`,
    })
  }
}
export default api
