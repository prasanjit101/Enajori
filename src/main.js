import './firebase';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { rtdbPlugin } from 'vuefire'



Vue.use(rtdbPlugin);
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component('navbar',require('./components/navbar.vue').default)
Vue.component('footers',require('./components/footers.vue').default)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
