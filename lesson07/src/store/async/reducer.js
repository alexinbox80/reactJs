import {REMOVE_AMESSAGE, ADD_AMESSAGE_ERROR, ADD_AMESSAGE_LOADING, ADD_AMESSAGE_SUCCESS} from "./actions";

export const initialState = {
    amessages: [],
    isLoading: false,
    error: null,
};

export const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AMESSAGE_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }
        case ADD_AMESSAGE_ERROR: {
            return {
                ...state,
                error: action.payload,
            }
        }
        case ADD_AMESSAGE_SUCCESS: {
            return {
                ...state,
                amessages: [
                    ...state.amessages,
                    action.payload,
                ]
            }
        }
        case REMOVE_AMESSAGE: {
            return {
                ...state,
                amessages: [
                    ...state.amessages.filter((message) => message.id !== action.payload),
                ]
            }
        }
        default: {
            return state;
        }
    }
};
