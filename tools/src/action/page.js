import { SAVE_PAGE } from '../reducers/pageReducer'

export const savePage = data => ({
    ...data,
    type: SAVE_PAGE
})
