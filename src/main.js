import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import router from './routes'
import VueResource from 'vue-resource'
import store from './store'

import App from './App.vue'

Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:3000/';

Vue.http.interceptors.push(request => {
    request.headers.set('Auth', 'RAND TOKEN ' + Math.random())
});

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
