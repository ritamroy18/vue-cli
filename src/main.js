import Vue from 'vue'
import App from './App.vue'

//Component setup globally

Vue.component("Home",require('./components/Home.vue').default);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
