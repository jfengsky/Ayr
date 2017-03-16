/**
 * 接口配置
 */

import { INSCRE_APITYPE, SEARCH_APITYPE, DELETE_APITYPE, MOIDFY_APITYPE } from '../action/api'

export const apiReducer = (state=[], action) =>  {
    switch (action.type) {
        case INSCRE_APITYPE:
            return [...state, action.data]
        case SEARCH_APITYPE:
            return [...action.data]
        case DELETE_APITYPE:
            return state.filter(item => {
                if(item.id !== action.id){
                    return item
                }
            })
        default:
            return state
    }
}