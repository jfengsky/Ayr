import initState from './initState'

export const SET_INITSTATE = (key, value) => {
    initState[key] = value
    // console.log(`set initState: ${key}`)
    // console.info(initState)
}

export const SET_PAGET_TYPE = data => {
    initState['pageType'] = data
}