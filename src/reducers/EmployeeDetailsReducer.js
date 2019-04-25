import {
    FETCH_EMPLOYEE_DETAILS,
    RECEIVE_EMPLOYEE_DETAILS,
    RECEIVE_EMPLOYEE_DETAILS_ERROR
} from '../actions/EmployeeDetailsAction';

const INITIAL_STATE = {
    employees: { user: [] }
}
const employeeDetails = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEE_DETAILS: {
            return { ...state }
        }
        case RECEIVE_EMPLOYEE_DETAILS: {
            return { ...state, employees: action.response }
        }
        case RECEIVE_EMPLOYEE_DETAILS_ERROR: {
            return { ...state, error: action.error }
        }
        default:
            return state;
    }
}

export default employeeDetails;