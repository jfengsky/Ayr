import initialState from '../store/initialState'

const reducer = (state = initialState, action) =>  {
    switch(action.type) {
        case 'INIT':
            return state
        default:
            return state
    }
}

export default reducer