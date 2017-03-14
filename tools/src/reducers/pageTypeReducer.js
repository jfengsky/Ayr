/**
 * 页面类型
 */
import initialState from '../store/initialState'

const pageTypeReducer = (state = initialState, action) =>  {
    switch(action.type) {
        case 'SAVE_PAGETYPE':
            console.log('SAVE_PAGETYPE')
            return state
        case 'FETCH_PAGETYPELIST':
            return state
        default:
            return state
    }
}

export default pageTypeReducer