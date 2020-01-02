import Vue from 'vue'
import App from './App.vue'
//引入element-ui库
import "./plugins/element"

//时间总线
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')