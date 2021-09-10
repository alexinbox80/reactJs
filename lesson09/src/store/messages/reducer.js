import {ADD_MESSAGE_LOADING, ADD_MESSAGE} from "./actions";

export const initialState = {
    messages: [],
    isLoading: false,
};

/**
 * @param {object} state
 * @param {object} state.messages
 * @param {object} action
 * @param {string} action.type
 * @param {string} action.payload
 * @param {string} action.payload.id
 * @param {string} action.payload.chatId
 * @param {string} action.payload.messageId
 * @param {string} action.payload.content
 * */

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }
        case ADD_MESSAGE: {
            // const {chatId} = action.payload;
            //
            // if (state.messages.hasOwnProperty(chatId)) {
            //     state.messages[chatId] = [
            //         ...state.messages[chatId],
            //         action.payload,
            //     ];
            // } else {
            //     state.messages[chatId] = [action.payload];
            // }
            // return {
            //     messages: {
            //         ...state.messages,
            //     }
            // }
            return {
                messages: action.payload
            };
        }
        default: {
            return state;
        }
    }
};
