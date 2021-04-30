import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import VueAnalytics from 'vue-analytics'
import '../src/assets/style/tailwind.css'

Vue.config.productionTip = false

Vue.use(VueMeta, {
  keyName: 'page'
})

Vue.use(VueAnalytics, {id: 'G-D138ZV1FSR'})

new Vue({
  render: h => h(App),
}).$mount('#app')
