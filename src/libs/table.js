
let table = {}

table.user =  (vm) => {
    return [
        {
            title: 'Name',
            key: 'name',
        },
        {
            title: 'Age',
            key: 'age',
        },
        {
            title: 'Address',
            key: 'address'
        }
    ]
}

table.userRole = (vm) => {
    return [
        {
            title: '名称',
            key: 'name',
        },
        {
            title: '年轻',
            key: 'age',
        },
        {
            title: '权限',
            key: 'address'
        },
        {
            title: '操作',
            key: 'action',
            align: 'center',
            width: 140,
            render: (h, params) => {
                let but = [
                    {
                        id: 1,
                        name: '修改',
                        color: 'blue'
                    },
                    {
                        id: 2,
                        name: '删除',
                        color: 'red'
                    },
                   
                ]
              
                let result = but.map(res => {
                    return  h('Button', {
                        props: {
                            type: 'default',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px',
                            color: res.color
                        },
                        on: {
                            click: () => {
                                vm.edit(res.id, params.row);
                            }
                        }
                    }, res.name);
                })
                
                return h('div',result);
            }
        }
    ];
};

table.action = (vm) => {
    return [
        {
            title: '凯撒的',
            key: 'name'
        },
        {
            title: 'e脸上',
            key: 'age'
        },
        {
            title: '临时道路',
            key: 'address'
        }
    ];
};


export default table;