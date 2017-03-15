import { combineReducers } from 'redux'
import initialState from '../store/initialState'
import { pageTypeReducer, SAVE_PAGETYPE, FETCH_PAGETYPELIST, DELETE_PAGETYPE} from './pageTypeReducer'
import { pageReducer, SAVE_PAGE, FETCH_PAGE_INFO } from './pageReducer';
import { apiReducer, SAVE_APITYPE, FETCH_APITYPE, DELETE_APITYPE } from './apiReducer'

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
        case DELETE_PAGETYPE:
            return Object.assign({}, state, {
                pageType: pageTypeReducer(state.pageType, action)
            })
        case FETCH_PAGE_INFO:
            return Object.assign({}, state, {
                pageList: pageReducer(state.pageList, action)
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