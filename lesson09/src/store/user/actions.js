import {userApi} from "../../api/request/user";

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const  createActionLoginUser = (user) => ({
    type: LOGIN_USER,
    payload: user
});

export const  createActionLogoutUser = (user) => ({
    type: LOGOUT_USER,
    payload: user
});

export const initAuthAction = (dispatch) => {

    userApi.initAuth((user) => {
        if (user) {
             dispatch(createActionLoginUser(user));
        } else {
            dispatch(createActionLogoutUser( ));
        }
    });
};
