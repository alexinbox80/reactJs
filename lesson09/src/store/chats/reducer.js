import {ADD_CHATS, ADD_CHATS_LOADING} from "./actions";

export const initialState = {
    chats: [],
    isLoading: false,
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHATS_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }
        case ADD_CHATS: {
            return {
                chats: action.payload
            };
        }
        default: {
            return state;
        }
    }
};
