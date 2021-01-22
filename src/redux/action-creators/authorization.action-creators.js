import actionTypes from "../action-types";
import apiMethods from "../../http-client/api-methods"
import { createActionCreators } from "./utilities";

const setIsAuthenticated = (value) =>
	createActionCreators(actionTypes.authorization.SET_IS_AUTHENTICATED, value);

const setToken = (value) => 
	createActionCreators(actionTypes.authorization.SET_TOKEN, value);

const setUserInfo = (value) => 
	createActionCreators(actionTypes.authorization.SET_USER_INFO, value);

const setIsLoading = () => 
	createActionCreators(actionTypes.authorization.SET_IS_LOADING);

const userLoginSuccess = () => createActionCreators(actionTypes.authorization.HTTP_LOGIN_SUCCESS);

const userLoginFailure = (errorMessage) => createActionCreators(actionTypes.authorization.HTTP_LOGIN_FAILURE, null, errorMessage);

const userLogin = (email, password) => async (dispatch) => {
	dispatch({ type: actionTypes.authorization.HTTP_LOGIN });
	dispatch(setIsLoading());

	await apiMethods.authorization
		.userLogin(email, password)
		.then(result => result.data)
		.then(result => {
			dispatch(userLoginSuccess())
			dispatch(setIsAuthenticated(true));
			dispatch(setToken(result?.accessToken));
			dispatch(setUserInfo(result?.user));
			localStorage.setItem("token", result?.accessToken);
		})
		.catch(error => {
			dispatch(userLoginFailure(error?.response?.data?.message || "Something's wrong, please try again!"));
		});
}

const getUserAndVerifyTokenSuccess = () => createActionCreators(actionTypes.authorization.HTTP_GET_USER_VERIFY_TOKEN_SUCCESS);

const getUserAndVerifyTokenFailure = (errorMessage) => createActionCreators(actionTypes.authorization.HTTP_GET_USER_VERIFY_TOKEN_FAILURE, null, errorMessage);

const getUserAndVerifyToken = (token) => async (dispatch) => {
	dispatch({ type: actionTypes.authorization.HTTP_GET_USER_VERIFY_TOKEN });
	dispatch(setIsLoading());

	await apiMethods.authorization
		.getUserAndVerifyToken(token)
		.then(result => {
			dispatch(getUserAndVerifyTokenSuccess())
			dispatch(setIsAuthenticated(true));
			dispatch(setToken(token));
			dispatch(setUserInfo(result?.data?.payload));
		})
		.catch(error => {
			dispatch(getUserAndVerifyTokenFailure(error?.response?.data?.message || "Something's wrong, please try again!"));
			dispatch(userLogout());
		});
}

const userLogout = () => (dispatch) => {
	dispatch(setIsLoading());
	dispatch(setIsAuthenticated(false));
	dispatch(setToken(""));
	dispatch(setUserInfo({}));	
	localStorage.removeItem("token");
}

export default {
	setIsAuthenticated,
	setToken,
	setUserInfo,
	setIsLoading,
	userLogin,
	userLogout,
	getUserAndVerifyToken
};
