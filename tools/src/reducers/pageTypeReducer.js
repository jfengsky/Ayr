/**
 * 页面类型
 */

export const SAVE_PAGETYPE = 'SAVE_PAGETYPE'
export const FETCH_PAGETYPELIST = 'FETCH_PAGETYPELIST'
export const DELETE_PAGETYPE = 'DELETE_PAGETYPE'

export const pageTypeReducer = (state = [], action) =>  {
    switch(action.type) {
        case SAVE_PAGETYPE:
            state = [...state, action.data]
            return state
        case FETCH_PAGETYPELIST:
            state = action.data
            return state
        case DELETE_PAGETYPE:
            let delIndex = null
            state.some( (item, index) => {
                if(item.id === action.id){
                    delIndex = index
                    return true
                }
            })
            state.splice(delIndex,1)
            return [...state]
        default:
            return state
    }
}