import { combineReducers } from 'redux';
import login from '../reducers/LoginReducer';
import employeeDetails from '../reducers/EmployeeDetailsReducer';
export default combineReducers({
    login,
    employeeDetails
});