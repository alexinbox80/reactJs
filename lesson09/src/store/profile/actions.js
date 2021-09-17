import {profileApi} from "../../api/request/profile";

export const ADD_PROFILE = 'ADD_PROFILE';

export const ADD_PROFILE_LOADING = 'ADD_CHATS_PROFILE';

export const createActionAddProfileLoading = (isLoading) => ({
    type: ADD_PROFILE_LOADING,
    payload: isLoading,
});

export const createActionAddProfile = (profile) => ({
    type: ADD_PROFILE,
    payload: profile,
});

export const initProfileTracking = (uid) => async (dispatch) => {

    profileApi.getList((profile) => {
        dispatch(createActionAddProfileLoading(true));
        dispatch(createActionAddProfile(profile));
        dispatch(createActionAddProfileLoading(false));
    }, uid);

};
