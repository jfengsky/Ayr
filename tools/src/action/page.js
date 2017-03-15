import { SAVE_PAGE , FETCH_PAGE_INFO} from '../reducers/pageReducer'

export const savePage = data => ({
    ...data,
    type: SAVE_PAGE
})

export const getPageInfo = data => ({
    data,
    type: FETCH_PAGE_INFO
})