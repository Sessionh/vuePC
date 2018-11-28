import Vue from "vue";
import Router from "vue-router";
import addURL from '../libs/addTemplate.js';
import iView from 'iview';


Vue.use(Router);
const routerList = {
    // mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/login",
            name: "login",
            component: addURL('login')
        }
    ]

}

const router = new Router(routerList);

router.beforeEach((to, from, next) => {
     iView.LoadingBar.start();
    let user = sessionStorage.getItem('jaxUserName')
    if (to.name !== 'login' && user === null) {
        next({
            name: 'login'
        })
    } else if (to.name === 'login' && user !== null){
        // router.replace({name: 'homeMain'})
        next({
            name: 'homeMain'
        })
    } else if (to.name === null){
        next({
            replace: true,
            name: 'error404'
        })
    } else {
        next()
    }
    
})

router.afterEach(route => {
  iView.LoadingBar.finish();
});

export default router;

