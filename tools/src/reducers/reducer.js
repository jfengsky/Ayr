import { combineReducers } from 'redux'
import initialState from '../store/initialState'
import { pageTypeReducer, SAVE_PAGETYPE, FETCH_PAGETYPELIST } from './pageTypeReducer'

const reducer = (state = initialState, action) =>  {
    switch(action.type) {
        case SAVE_PAGETYPE:
            return Object.assign({}, state, {
                pageType: pageTypeReducer(state.pageType, action)
            })
        case FETCH_PAGETYPELIST:
            return Object.assign({}, state, {
                pageType: pageTypeReducer(state.pageType, action)
            })
        default:
            return state
    }
}

// const reducer = combineReducers({
//     reducers,
//     pageTypeReducer
// })



export default reducer