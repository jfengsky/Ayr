export const INSCRE_APITYPE = 'INSCRE_APITYPE'
export const SEARCH_APITYPE = 'SEARCH_APITYPE'
export const DELETE_APITYPE = 'DELETE_APITYPE'
export const MOIDFY_APITYPE = 'MOIDFY_APITYPE'

export const addApiType = data => ({
    data,
    type: INSCRE_APITYPE
})

export const searchApiType = data => ({
    data,
    type: SEARCH_APITYPE
})

export const deleteApiType = data =>  ({
    id: data.id,
    type: DELETE_APITYPE
})
