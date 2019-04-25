import { BASE_URL } from "../Constants";
export const FETCH_USER_DETAILS = "FETCH_USER_DETAILS";
export const RECEIVE_USER_DETAILS = "RECEIVE_USER_DETAILS";
export const RECEIVE_USER_DETAILS_ERROR = "RECEIVE_USER_DETAILS_ERROR";

export const userLogin = (userDetails) => {
    const details = {
        email: userDetails.email,
        password: userDetails.password
    }
    let formBody = [];
    for (let property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return async (dispatch) => {
        dispatch(fetchUserDetails());
        try {
            const response = await fetch(`${BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ZXN0dWF0ZS1pZDpkZXZnbGFuLXNlY3JldA==',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody
            })
            const json = await response.json();
            dispatch(receiveUserDetails(json, userDetails));
        }
        catch (error) {
            dispatch(receiveUserDetailsError(error));
        }
    }
}

const fetchUserDetails = () => {
    return {
        type: FETCH_USER_DETAILS
    }
}
const receiveUserDetails = (response, userDetails) => {
    return {
        type: RECEIVE_USER_DETAILS,
        response,
        userDetails
    }
}

const receiveUserDetailsError = (error) => {
    return {
        type: RECEIVE_USER_DETAILS_ERROR,
        error
    }
}