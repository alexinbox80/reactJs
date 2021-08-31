import {ADD_CHAT, REMOVE_CHAT} from "./actions";

const initialState = {
    chats: [],
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
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

        default: {
            return state;
        }
    }
};
