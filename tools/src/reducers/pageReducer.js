/**
 * 页面操作
 */

export const SAVE_PAGE = 'SAVE_PAGE'
export const FETCH_PAGE_INFO = 'FETCH_PAGE_INFO'


export const pageReducer = (state = {}, action) => {
    switch (action.type) {
        case SAVE_PAGE:
            return state
        case FETCH_PAGE_INFO:
            return action.data
        default:
            return state
    }
}