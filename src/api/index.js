import axios from "@/utils/axios";

const api = {
  // 获取预约信息
  getBookingInfo() {
    return axios({
      url: "/api/pm/rb/getBookingInfo",
      method: "post",
      data,
    });
  },
};
export default api;