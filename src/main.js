import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
var vueOpts = {}
var vuetify = new Vuetify(vueOpts)

new Vue({
  render: h => h(App),
  vuetify
}).$mount('#app')
