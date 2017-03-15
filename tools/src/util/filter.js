/**
 * 根据类型id获取页面类型的中文名
 * @param {Array} pageType 类型列表
 * @param {Number} type 
 * @return {String} 
 */
export const getPageTypeName = (pageType,type) => (
    pageType.map( ({name, id}) => {
        if(id === type) {
            return name
        }
    })
)

