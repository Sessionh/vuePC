import addURL from './addTemplate.js';

let util = {

};

util.getRouterChildren = function(vm) {
    let str = [];
    let menu = [{
        path: '/',
        name: 'home',
        component: addURL('main'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'homeMain',
                component: addURL('mainComponents/homeMain')
            }
        ]
    }];
    let error = [{
        path: '/error404',
        name: 'error404',
        component: addURL('mainComponents/error/404')
    }];
    vm.$http.post('menu', {}).then(res => {
        console.log(res.data);
        let menuList = res.data;
        sessionStorage.setItem('menu', JSON.stringify(res.data));
        vm.$store.commit('setMenu', res.data);
        menuList.forEach(res => {
            if (res.children instanceof Array && res.children.length > 0) {
                res.children.forEach(menu => {
                    if (menu.children instanceof Array && res.children.length > 0) {
                        menu.children.forEach (menuSub => {
                             str.push(
                                {
                                    path: menuSub.path,
                                    name: menuSub.name,
                                    meta: {
                                        title: menuSub.title
                                    },
                                    component: addURL(menuSub.component)
                                }
                            )

                        })
                    } else {
                        str.push(
                            {
                                path: menu.path,
                                name: menu.name,
                                meta: {
                                    title: menu.title
                                },
                                component: addURL(menu.component)
                            }
                        )
                    }
                })
            }
           
        });
        console.log(str)
        menu[0].children.push(...str); // 添加首页
        console.log(menu)
        vm.$store.commit('updateDefaultRouter', menu); // 动态加入菜单
        vm.$store.commit('updateRouter', error); // 动态加入404页面
        vm.$router.push({ // 调转首页
            name: 'home'
        });
    });
};

// 日期转换
util.formatDate = function(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };

    // 遍历这个对象
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};
export default util;