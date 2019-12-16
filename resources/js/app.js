
require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {path: '/dashboard', component:require ('./component/dashboard.vue')}
]
const router = new VueRouter({
    routes
})



//Vue.component('example-component', require('./components/ExampleComponent.vue').default);



const app = new Vue({
    el: '#app',
    router
});
