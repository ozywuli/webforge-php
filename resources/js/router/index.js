import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/views/Home';
import Social from '../components/views/Social';
import Questionnaire from '../components/views/Questionnaire';

// Use Vue-Router in Vue
Vue.use(VueRouter)

const routes = [
    {
        path: '/dashboard',
        component: Home
    },
    {
        path: '/dashboard/social',
        component: Social
    },
    {
        path: '/dashboard/questionnaire/:id',
        component: Questionnaire
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;