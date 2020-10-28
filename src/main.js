import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Notification.requestPermission().then(res => {
  // denied 或 granted
  console.log(res)
});

Vue.use(VueMaterial)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
