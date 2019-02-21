const Mock = require('mockjs');
const menu = [{
    title: '系统管理',
    name: 'users',
    icon: '&#xe64c;',
    children: [{
        title: '基本资源',
        name: 'hosts',
        icon: '&#xe634;',
        children: [{
            path: '/userMessage',
            name: 'userMessage',
            title: '基本资料',
            component: 'ui/user/userMessage'

        }]
    }, {
        title: '用户管理',
        path: '/user',
        name: 'user',
        component: 'ui/user/user'
    }, {
        title: '操作审计',
        path: '/action',
        name: 'action',
        component: 'ui/user/action',
    }, {
        title: '角色管理',
        path: '/userRole',
        name: 'userRole',
        component: 'ui/user/userRole',
    }]
},
{
    title: '工具类',
    name: 'toolKit',
    icon: '&#xe64f;',
    children: [
        {
            title: '流程图',
            path: '/workflow',
            name: 'workflow',
            component: 'ui/workflow/workflow'
        },
        {
            title: '流程图2',
            path: '/newWorkflow',
            name: 'newWorkflow',
            component: 'ui/workflow/new_workflow'
        },
        
    ]
},

];

const treeDatas = {
    edges: [
        {
            anchor: 'AutoDefault',
            labelText: '',
            source: 'start',
            target: 'node-1',
        },
        {
            anchor: 'AutoDefault',
            labelText: '分支',
            source: 'node-1',
            target: 'node-2',
        },
        {
            anchor: 'AutoDefault',
            labelText: '分支',
            source: 'node-2',
            target: 'node-3',
        },
        {
            anchor: 'AutoDefault',
            labelText: '',
            source: 'node-3',
            target: 'node-5',
        },
        {
            anchor: 'AutoDefault',
            labelText: '',
            source: 'node-4',
            target: 'node-5',
        },
        {
            anchor: 'AutoDefault',
            labelText: '',
            source: 'node-3',
            target: 'endsDefalut',
        },
        {
            anchor: 'AutoDefault',
            labelText: '',
            source: 'node-5',
            target: 'node-7',
        }

    ],
    nodes: [
        {
            id: 'start',
            className: 'start',
            text: 'start',
            style: {
                left: '50px',
                top: '150px',
            },

        },
        {
            id: 'endsDefalut',
            className: 'endsDefalut',
            text: 'end',
            style: {
                left: '800px',
                top: '150px',
            },
        },
        {
            id: 'node-1',
            className: 'rect',
            text: '测试',
            style: {
                left: '200px',
                top: '150px',
            },
        },
        {
            id: 'node-2',
            className: 'rect',
            style: {
                left: '400px',
                top: '150px',
            },
            text: '快速',
        },
        {
            id: 'node-3',
            className: 'rect',
            text: '立即配置',
            style: {
                left: '600px',
                top: '150px',
            },
        },
        {
            id: 'node-4',
            className: 'rect',
            text: '分支1',
            style: {
                left: '400px',
                top: '300px',
            },
        },
        {
            id: 'node-5',
            className: 'rect',
            text: '分支2',
            style: {
                left: '600px',
                top: '300px',
            },
        },
        {
            id: 'node-7',
            className: 'rect',
            text: '分支3',
            style: {
                left: '800px',
                top: '300px',
            },
        },
        

    ]
}

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
Mock.mock('treeData', 'post', treeDatas);