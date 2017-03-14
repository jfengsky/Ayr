/**
 * 页面类型
 */

export const SAVE_PAGETYPE = 'SAVE_PAGETYPE'
export const FETCH_PAGETYPELIST = 'FETCH_PAGETYPELIST'

export const pageTypeReducer = (state = [], action) =>  {
    switch(action.type) {
        case SAVE_PAGETYPE:
            state = [...state, action.data]
            return state
        case FETCH_PAGETYPELIST:
            state = action.data
            return state
        default:
            return state
    }
}