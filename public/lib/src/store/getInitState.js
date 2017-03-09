import initState from './initState'

/**
 * 修改保存页面接口参数
 */
export const getPageCode = () => {
    let {
        mPageName,
        mPageType,
        mPageDesc,
        mPageCode
    } = initState
    return {
        pageName: mPageName,
        pageType: mPageType,
        pageDesc: mPageDesc,
        pageCode: mPageCode
    }
}

export const getPageType = () => {
    return initState.pageType
}