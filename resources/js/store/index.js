import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

// Use Vuex
Vue.use(Vuex);

// Initialize and export Vuex instance
export default new Vuex.Store({
    state: {
        count: 0
    },
    actions,
    mutations
})