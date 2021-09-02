import {ADD_CHAT_ERROR, ADD_CHAT_LOADING, ADD_CHAT_SUCCESS, REMOVE_CHAT} from "./actions";

export const initialState = {
    chats: [],
    isLoading: false,
    error: null,
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        /*case ADD_CHAT: {
            return {
               chats: [
                   ...state.chats,
                   action.payload
               ]
            }
        }

        case REMOVE_CHAT: {
            let chats = [...state.chats];

            chats = chats.filter((item) => item.id !== action.payload.id);

            return {
                chats
            }
        }
*/
        case ADD_CHAT_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }
        case ADD_CHAT_ERROR: {
            return {
                ...state,
                error: action.payload,
            }
        }
        case ADD_CHAT_SUCCESS: {
            return {
                ...state,
                chats: [
                    ...state.chats,
                    action.payload,
                ]
            }
        }
        case REMOVE_CHAT: {
            return {
                ...state,
                chats: [
                    ...state.chats.filter((chat) => chat.id !== action.payload.id),
                ]
            }
        }
        default: {
            return state;
        }
    }
};
