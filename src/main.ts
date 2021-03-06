import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './plugins/element.js'               // import ui framework

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');
