import {
    FETCH_USER_DETAILS,
    RECEIVE_USER_DETAILS,
    RECEIVE_USER_DETAILS_ERROR
} from '../actions/LoginAction';

const INITIAL_STATE = {
    userDetails: {}
}
const login = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_DETAILS: {
            return { ...state }
        }
        case RECEIVE_USER_DETAILS: {
            return { ...state, response: action.response, userDetails: action.userDetails }
        }
        case RECEIVE_USER_DETAILS_ERROR: {
            return { ...state, error: action.error }
        }
        default:
            return state;
    }
}

export default login;