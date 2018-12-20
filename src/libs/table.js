export default {
    user: [
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
    ],
    userRole: [
        {
            title: '名称',
            key: 'name',
            renderHeader: (h, params) => {
                return h('div',{
                    style: {
                        background: '#ffffff',
                        width: '100%',
                        
                    }

                },'名称1')
            }
        },
        {
            title: '年轻',
            key: 'age',
        },
        {
            title: '权限',
            key: 'address'
        }
    ],
    action: [
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
    ]
}