/**
 * 请求集合
 */

/**
 * 保存页面类型
 */

export const FETCH_PAGETYPE = data => {
    let setting = {
        url: '/pagetype',
        type: 'post',
        data,
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
 * 创建保存页面代码
 * @param {Object} data 
 */
export const FETCH_SAVE_CODE = data => {
    let setting = {
        url: '/pageCode',
        type: 'post',
        data,
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