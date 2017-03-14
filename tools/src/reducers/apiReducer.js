/**
 * 接口配置
 */

export const SAVE_APITYPE = 'SAVE_APITYPE'
export const FETCH_APITYPE = 'FETCH_APITYPE'
export const DELETE_APITYPE = 'DELETE_APITYPE'

export const apiReducer = (state=[], action) =>  {
    switch (action.type) {
        case SAVE_APITYPE:
            return state
        case FETCH_APITYPE:
            return state
        case DELETE_APITYPE:
            return state
        default:
            return state
    }
}