import Vue from 'vue'
import App from './App'
import "@/style/index.scss";
import store from "@/store";
import api from "@/api";
import '@/utils/filter.js' //定义全局指令

Vue.prototype.$store = store;

Vue.prototype.$api = api;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
