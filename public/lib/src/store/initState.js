const initState = {
    
    pageType: null,

    // 创建修改页面时的全局变量
    mPageName: null,
    mPageType: 0,
    mPageDesc: null,
    mPageCode: null,

    // 主导航
    nav: [
        {
            name: '页面',
            tag: 'home',
            select: true
        }, {
            name: '接口',
            tag: 'api',
            select: false
        }, {
            name: '操作',
            tag: 'control',
            select: false
        }
    ]
}

export default initState