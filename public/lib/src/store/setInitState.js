import initState from './initState'

export const SET_INITSTATE = (key, value) => {
    initState[key] = value
    // console.log(`set initState: ${key}`)
    // console.info(initState)
}

export const SET_PAGET_TYPE = data => {
    initState['pageType'] = data
}

export const SET_PAGE_INFO = data => {
    let {
        name,
        desc,
        type,
        code
    } = data

    name && (initState['mPageName'] = name);
    desc && (initState['mPageDesc'] = desc);
    (type >= 0) && (initState['mPageType'] = type);
    code && (initState['mPageCode'] = desc);
}

export const CLEAR_PAGE_INFO = () => {
    initState['mPageName'] = null
    initState['mPageDesc'] = null
    initState['mPageType'] = 0
    initState['mPageCode'] = null
}