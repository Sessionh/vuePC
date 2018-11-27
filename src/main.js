import Vue from 'vue';
import App from './App.vue';
import '@babel/polyfill';
import store from './store/index.js';
import router from './router/router';
import VueRouter from 'vue-router';
import Iview from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/iconfont.css';
import axios from 'axios';
import  'mockjs';
import './view/mock/index';
import util from './libs/util.js'

Vue.prototype.$http = axios
Vue.config.productionTip = false;
Vue.use(Iview);

new Vue({
	router,
    store,
	render: h => h(App),
	mounted () {
		const lockingType = sessionStorage.getItem('locking');
		this.$store.commit('setlocking', lockingType);
		let user = sessionStorage.getItem('jaxUserName');
	     if (user !== undefined && user !== null && user !== '') {
	      let menu = JSON.parse(sessionStorage.getItem('menu'));
	      this.$store.commit('setMenu', menu);
	      util.getRouterChildren(this);
	    }
       
    },
}).$mount('#app');
