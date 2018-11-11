import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/views/Home';

// Use Vue-Router in Vue
Vue.use(VueRouter)

const routes = [
    {
        path: '/dashboard',
        component: Home
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;