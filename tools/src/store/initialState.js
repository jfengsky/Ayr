

const initialState = {

    /**
     * 页面类型
     * 目前只设置团队游详情页，团队游填写页，团队游可选项页，融合填写页 等页面类型
     */
    pageType: [],

    /**
     * 所有保存的页面列表
     */
    pageList: [],

    // 主导航
    nav: [
        {
            name: '页面',
            tag: '',
            select: true
        }, {
            name: '接口',
            tag: 'api',
            select: false
        }, {
            name: '操作',
            tag: 'edit',
            select: false
        }
    ]
}

export default initialState
