/**
 * 页面操作
 */

export const SAVE_PAGE = 'SAVE_PAGE'

export const pageReducer = (store = {}, action) => {
    switch (action.type) {
        case SAVE_PAGE:
            return store
        default:
            return store
    }
}