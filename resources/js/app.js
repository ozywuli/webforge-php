
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './components/App';
import router from './router';
import store from './store';

// Vue config
Vue.config.productionTip = false;

// Use Element UI
Vue.use(Element);

// Initialize Vue
new Vue({
    router,
    store,
    el: '#vue-app',
    render: h => h(App)
});
