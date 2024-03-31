import {
    USER_DELETE_FAIL,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DETAIL_FAIL,
    USER_DETAIL_REQUEST,
    USER_DETAIL_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {}
        case USER_LOGIN_SUCCESS:
            return {
                userInfo: action.payload,
            }
        case USER_LOGIN_FAIL:
            return {
                error: action.payload,
            }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {}
        case USER_REGISTER_SUCCESS:
            return {
                userInfo: action.payload,
            }
        case USER_REGISTER_FAIL:
            return {
                error: action.payload,
            }
        default:
            return state
    }
}

export const userDetailReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAIL_REQUEST:
            return {
                ...state,
            }
        case USER_DETAIL_SUCCESS:
            return {
                user: action.payload,
            }
        case USER_DETAIL_FAIL:
            return {
                error: action.payload,
            }
        default:
            return state
    }
}

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return {}
        case USER_UPDATE_PROFILE_SUCCESS:
            return {
                userInfo: action.payload,
                success: true,
            }
        case USER_UPDATE_PROFILE_FAIL:
            return {
                error: action.payload,
            }
        default:
            return state
    }
}

export const userListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return {}
        case USER_LIST_SUCCESS:
            return {
                users: action.payload,
            }
        case USER_LIST_FAIL:
            return {
                error: action.payload,
            }
        default:
            return state
    }
}

export const userDeleteReducer = (state = { }, action) => {
    switch (action.type) {
        case USER_DELETE_REQUEST:
            return {}
        case USER_DELETE_SUCCESS:
            return {
                success : true
            }
        case USER_DELETE_FAIL:
            return {
                error: action.payload,
            }
        default:
            return state
    }
}

