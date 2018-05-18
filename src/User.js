import {database} from './firebaseData'

const SET_USER = 'auth/SET_USER'

const setUser = (user) => ({
    type: SET_USER,
    userData: user
})

const initialState = {
    user: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.userData
            }
        case SET_LOGIN_LOGS:
            return {
                ...state,
                loginLogs: action.logsData
            }
        default:
            return state
    }
}