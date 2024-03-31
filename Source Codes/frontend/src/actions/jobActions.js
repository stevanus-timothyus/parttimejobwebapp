import {
    APPLICANT_CREATE_FAIL,
    APPLICANT_CREATE_REQUEST,
    APPLICANT_CREATE_SUCCESS,
    APPLICANT_LIST_FAIL,
    APPLICANT_LIST_REQUEST,
    APPLICANT_LIST_SUCCESS,
    JOB_DELETE_FAIL,
    JOB_DELETE_REQUEST,
    JOB_DELETE_SUCCESS,
    JOB_DETAIL_FAIL,
    JOB_CREATE_REQUEST,
    JOB_CREATE_SUCCESS,
    JOB_CREATE_FAIL,
    JOB_UPDATE_REQUEST,
    JOB_UPDATE_SUCCESS,
    JOB_UPDATE_FAIL,
    JOB_UPDATE_RESET,
    JOB_DETAIL_REQUEST,
    JOB_DETAIL_SUCCESS,
    JOB_LIST_FAIL,
    JOB_LIST_REQUEST,
    JOB_LIST_SUCCESS,
} from '../constants/jobConstants.js'
import thunk from 'redux-thunk'
import axios from 'axios'

export const listJobs = () => async (dispatch) => {
    try {
        dispatch({ type: JOB_LIST_REQUEST })

        const { data } = await axios.get('/api/jobs')

        dispatch({ type: JOB_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: JOB_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const listJobDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: JOB_DETAIL_REQUEST })

        const { data } = await axios.get(`/api/jobs/${id}`)

        dispatch({ type: JOB_DETAIL_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: JOB_DETAIL_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const deleteJob = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: JOB_DELETE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`/api/jobs/${id}`, config)

        dispatch({
            type: JOB_DELETE_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: JOB_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const createJob = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: JOB_CREATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(`/api/jobs`, {}, config)

        dispatch({
            type: JOB_CREATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: JOB_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const updateJob = (job) => async (dispatch, getState) => {
    try {
        dispatch({
            type: JOB_UPDATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.put(`/api/jobs/${job._id}`, job, config)

        dispatch({
            type: JOB_UPDATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: JOB_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const createApplicant =
    (id, title, name, email, introduction) => async (dispatch, getState) => {
        try {
            dispatch({
                type: APPLICANT_CREATE_REQUEST,
            })

            const {
                userLogin: { userInfo },
            } = getState()

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            }

            const { data } = await axios.post(
                `/api/jobs/${id}/apply`,
                { title, name, email, introduction },
                config
            )

            dispatch({
                type: APPLICANT_CREATE_SUCCESS,
                payload: data,
            })
        } catch (error) {
            dispatch({
                type: APPLICANT_CREATE_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            })
        }
    }

export const listApplicants = () => async (dispatch, getState) => {
    try {
        dispatch({ type: APPLICANT_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get('/api/applicants', config)

        dispatch({ type: APPLICANT_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: APPLICANT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
