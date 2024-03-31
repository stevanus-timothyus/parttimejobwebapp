import {
    APPLICANT_CREATE_FAIL,
    APPLICANT_CREATE_REQUEST,
    APPLICANT_CREATE_SUCCESS,
    APPLICANT_LIST_FAIL,
    APPLICANT_LIST_REQUEST,
    APPLICANT_LIST_SUCCESS,
    JOB_CREATE_FAIL,
    JOB_CREATE_REQUEST,
    JOB_CREATE_RESET,
    JOB_CREATE_SUCCESS,
    JOB_DELETE_FAIL,
    JOB_DELETE_REQUEST,
    JOB_DELETE_SUCCESS,
    JOB_DETAIL_FAIL,
    JOB_DETAIL_REQUEST,
    JOB_DETAIL_SUCCESS,
    JOB_LIST_FAIL,
    JOB_LIST_REQUEST,
    JOB_LIST_SUCCESS,
    JOB_UPDATE_FAIL,
    JOB_UPDATE_REQUEST,
    JOB_UPDATE_RESET,
    JOB_UPDATE_SUCCESS,
} from '../constants/jobConstants.js'

export const jobListReducer = (state = { jobs: [] }, action) => {
    switch (action.type) {
        case JOB_LIST_REQUEST:
            return {
                jobs: [],
            }
        case JOB_LIST_SUCCESS:
            return {
                jobs: action.payload,
            }
        case JOB_LIST_FAIL:
            return {
                error: action.payload,
            }
        default:
            return state
    }
}

export const jobDetailReducer = (state = { job: {} }, action) => {
    switch (action.type) {
        case JOB_DETAIL_REQUEST:
            return {
                job: {},
            }
        case JOB_DETAIL_SUCCESS:
            return {
                job: action.payload,
            }
        case JOB_DETAIL_FAIL:
            return {
                error: action.payload,
            }
        default:
            return state
    }
}

export const jobDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case JOB_DELETE_REQUEST:
            return {}
        case JOB_DELETE_SUCCESS:
            return {
                success: true,
            }
        case JOB_DELETE_FAIL:
            return {
                error: action.payload,
            }
        default:
            return state
    }
}

export const jobCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case JOB_CREATE_REQUEST:
            return {}
        case JOB_CREATE_SUCCESS:
            return {
                success: true,
                job: action.payload
            }
        case JOB_CREATE_FAIL:
            return {
                error: action.payload,
            }
        case JOB_CREATE_RESET:
            return {

            }
        default:
            return state
    }
}

export const jobUpdateReducer = (state = { job: {}}, action) => {
    switch (action.type) {
        case JOB_UPDATE_REQUEST:
            return {}
        case JOB_UPDATE_SUCCESS:
            return {
                success: true,
                job: action.payload
            }
        case JOB_UPDATE_FAIL:
            return {
                error: action.payload,
            }
        case JOB_UPDATE_RESET:
            return {
                job: {}
            }
        default:
            return state
    }
}

export const createApplicantReducer = (state = {}, action) => {
    switch (action.type) {
        case APPLICANT_CREATE_REQUEST:
            return {}
        case APPLICANT_CREATE_SUCCESS:
            return {
                applicant: action.payload,
            }
        case APPLICANT_CREATE_FAIL:
            return {
                error: action.payload,
            }
        default:
            return state
    }
}

export const getApplicantsReducer = ( state = { applicants: [] }, action ) => {
    switch (action.type) {
        case APPLICANT_LIST_REQUEST:
            return {
                applicants: []
            }
        case APPLICANT_LIST_SUCCESS:
            return {
                applicants: action.payload
            }
        case APPLICANT_LIST_FAIL:
            return {
                error: action.payload
            }
        default:
            return state
    }
}
