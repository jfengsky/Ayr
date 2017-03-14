/**
 * 所有Promise集合
 */

/*
通用接口返回:
    成功 { ok: 1, data:...}
    失败 { ok: 0, message: ....}
*/

/**
 * 页面类型接口
 * @param {Object} data 
 *  传参说明:
 *      添加: {
 *               type: 'save',
 *               name: '产品详情页'
 *            }
 *      查找: {
 *              type: 'search'
 *            }
 *      删除: {
 *              type: 'delete',
 *              id: 1
 *            }
 * @return PromiseObject
 * 
 *      
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
 * 增删改查页面接口
 * @param {Object} data 
 * 传参说明:
    添加: {
        type: 'save',
        name: '',
        type: '',
        desc: '',
        code: ''
    }

    修改: {
        type: 'modify',
        name: '',
        type: '',
        desc: '',
        code: '',
        id
    }

    删除: {
        type: 'delete'
        id
    }

    查找: {
        type: 'search'
        id
    }
 */
export const FETCH_PAGEINFO = data => {
    let setting = {
        url: '/pageinfo',
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