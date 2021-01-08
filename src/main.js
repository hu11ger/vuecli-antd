import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import echarts from "echarts";

import ant from "ant-design-vue/es";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;
Vue.use(ant);
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
