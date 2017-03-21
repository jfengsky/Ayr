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
        kind: '',
        desc: '',
        code: ''
    }

    修改: {
        type: 'modify',
        name: '',
        kind: '',
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
        url: '/pageType',
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
 * 页面类型操作
 * @param {Object} data 
 * 传参说明
    添加: {
        type: 'save',
        name: '',
        kind: '',
        path: '',
        desc: ''
    }
 */

export const FETCH_APITYPE = data =>  {
    let setting = {
        url: '/apiType',
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
 * 接口信息操作接口
 * @param {Object} data
 * 传参说明
    添加: {
        type: 'save',
        name: '',
        depend: '', 属于apiType的哪条数据
        text: ''
    }
    修改: {
        type: 'modify',
        id: '',
        name: '',
        text: '',
    }
    查询: {
        type: 'search'
        id: '' // 无id标示查询所有
    }
    删除: {
        type: 'delete',
        id: ''
    }
 */

export const FETCH_APIINFO = data => {
    let setting = {
        url: '/apiInfo',
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