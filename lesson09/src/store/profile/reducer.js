import {ADD_PROFILE, ADD_PROFILE_LOADING} from "./actions";

export const initialState = {
    profile: [],
    isLoading: false,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROFILE_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }
        case ADD_PROFILE: {
            return {
                profile: action.payload
            };
        }
        default: {
            return state;
        }
    }
};
