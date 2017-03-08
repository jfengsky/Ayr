/**
 * 请求集合
 */

/**
 * 保存页面类型
 */
export const FETCH_SAVE_PAGETYPE = ({value}) => {
    let setting = {
        url: '/pagetype',
        type: 'post',
        data: {
            name: value,
            type: 'save'
        },
        dataType: 'json'
    }

    return new Promise((resolve, reject) => {
        $.ajax(setting).done(data => {
            resolve(data)
        }).fail(data => {
            reject(data)
        })
    })
}

/**
 * 查询 读取页面类型
 */
export const FETCH_SEARCH_PAGETYPE = () => {
    let setting = {
        url: '/pagetype',
        type: 'post',
        data: {
            type: 'search'
        },
        dataType: 'json'
    }

    return new Promise((resolve, reject) => {
        $.ajax(setting).done(data => {
            resolve(data)
        }).fail(data => {
            reject(data)
        })
    })
}


/**
 * 初始化数据库
 */
export const FETCH_CREATE_DB = () => {
    let setting = {
        url: '/createdb',
        type: 'post'
    }
    return new Promise((resolve, reject) => {
        $.ajax(setting).done(data => {
            resolve(data)
        }).fail(data => {
            reject(data)
        })
    })
}