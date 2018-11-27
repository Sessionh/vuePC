const Mock = require('mockjs');
const menu = [{
        title: '系统管理',
        name: 'users',
        icon: '&#xe64c;',
        children: [{
            title: '基本资源',
            name: 'hosts',
            children: [{
                path: '/userMessage',
                name: 'userMessage',
                title: '基本资料',
                component: 'components/user/userMessage'

            }]
        }, {
            title: '用户管理',
            path: '/user',
            name: 'user',
            component: 'components/user/user'
        }, {
            title: '操作审计',
            path: '/action',
            name: 'action',
            component: 'components/user/action',
        }, {
            title: '角色管理',
            path: '/userRole',
            name: 'userRole',
            component: 'components/user/userRole',
        }]
    },

];
// 获取 mock.Random 对象
const Random = Mock.Random;
const demos = function(result) {
    console.log(result);
    let articles = [];
    for (let i = 0; i < 25; i++) {
        let newArticleObject = {
            id: i,
            name: Random.cname(),
            dep: Random.string(3),
            roles: Random.string(3),
            email: Random.string(3),
            phoneNumber: Random.natural(),
            weChat: Random.natural()
        };
        articles.push(newArticleObject);
    }
    return {
        data: articles
    };
};

Mock.mock('users', 'post', demos);
Mock.mock('menu', 'post', menu);