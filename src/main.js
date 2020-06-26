import Vue from "vue";
import App from "@/App.vue";
import "@/style/index.scss";
import api from "@/api";

// 请求挂载到全局vue上
Vue.prototype.$api = api;

Vue.config.productionTip = false;

new App().$mount();
