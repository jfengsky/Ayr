/**
 * 所有Promise集合
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
