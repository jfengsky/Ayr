import { combineReducers } from 'redux'
import initialState from '../store/initialState'
import pageTypeReducer from './pageTypeReducer'

const reducers = (state = initialState, action) =>  {
    switch(action.type) {
        case 'INIT':
            return state
        default:
            return state
    }
}

const reducer = combineReducers({
    reducers,
    pageTypeReducer
})

export default reducer