import { BASE_URL } from "../Constants";
export const FETCH_EMPLOYEE_DETAILS = "FETCH_EMPLOYEE_DETAILS";
export const RECEIVE_EMPLOYEE_DETAILS = "RECEIVE_EMPLOYEE_DETAILS";
export const RECEIVE_EMPLOYEE_DETAILS_ERROR = "RECEIVE_EMPLOYEE_DETAILS_ERROR";

export const employeeDetails = () => {
    return async (dispatch) => {
        dispatch(fetchEmployeeDetails());
        try {
            const response = await fetch(`${BASE_URL}/getUsers`)
            const json = await response.json();
            dispatch(receiveEmployeeDetails(json));
        }
        catch (error) {
            dispatch(receiveEmployeeDetailsError(error));
        }
    }
}

const fetchEmployeeDetails = () => {
    return {
        type: FETCH_EMPLOYEE_DETAILS
    }
}
const receiveEmployeeDetails = (response) => {
    return {
        type: RECEIVE_EMPLOYEE_DETAILS,
        response
    }
}

const receiveEmployeeDetailsError = (error) => {
    return {
        type: RECEIVE_EMPLOYEE_DETAILS_ERROR,
        error
    }
}