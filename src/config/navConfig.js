const navConf = [
    {
        name: '首页',
        key: '/home',
        type: 'desktop'
    },
    {
        name: '公告',
        key: '/notice',
        type: 'notification'
    },
    {
        name: '百宝箱',
        key: '/tools',
        type: 'appstore',
        children: [
            {
                name: '考勤管理',
                key: '/tools/checkingIn',
                type: 'book'
            },
            {
                name: '员工列表',
                key: '/tools/employeeList',
                type: 'file-text'
            }
        ]
    },
    {
        name: '个人中心',
        key: '/personal',
        type: 'user'
    }
]

export default navConf;
