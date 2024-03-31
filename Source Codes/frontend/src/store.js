import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    jobDetailReducer,
    jobListReducer,
    jobDeleteReducer,
    jobCreateReducer,
    jobUpdateReducer,
    createApplicantReducer,
    getApplicantsReducer,
} from './reducers/jobReducers'
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
} from './reducers/userReducers'

const reducer = combineReducers({
    jobList: jobListReducer,
    jobDetail: jobDetailReducer,
    jobDelete: jobDeleteReducer,
    jobCreate: jobCreateReducer,
    jobUpdate: jobUpdateReducer,
    createApplicant: createApplicantReducer,
    getApplicant: getApplicantsReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetail: userDetailReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
