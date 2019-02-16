import Vue from 'vue';
import Vuex from 'vuex';
import app from './moduls/app.js';
import user from './moduls/user.js';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        user,
    }

});

export default store;
