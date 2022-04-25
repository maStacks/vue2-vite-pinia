import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import App from './App.vue'
import router from './router'
import '@/icons' // icon
import '@/permission' // permission control

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

import { createPinia, PiniaVuePlugin } from 'pinia'
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

Vue.config.productionTip = false

new Vue({
  router,
  pinia,
  render: (h) => h(App)
}).$mount('#app')
