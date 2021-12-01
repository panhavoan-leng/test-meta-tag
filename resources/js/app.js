require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './components/App.vue'

Vue.component('app-header', () => import('./components/Header.vue'));
Vue.component('signatures', () => import('./components/Signatures.vue'));
Vue.component('signature-form', () => import('./components/SignatureForm.vue'));
Vue.component('paginate', require('vuejs-paginate'));

Vue.use(VueRouter)

const routes = [
  { path: '/', component: () => import('./components/Signatures.vue') },
  { path: '/sign', component: () => import('./components/SignatureForm.vue') }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');