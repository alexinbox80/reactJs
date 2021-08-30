import {ADD_MESSAGE, REMOVE_MESSAGE} from "./actions";

const initialState = {
    messages: {},
};

/**
 * @param {object} state
 * @param {object} state.messages
 * @param {object} action
 * @param {string} action.type
 * @param {string} action.payload
 * @param {string} action.payload.id
 * @param {string} action.payload.chatId
 * @param {string} action.payload.content
 * */

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const {chatId} = action.payload;

            if (state.messages.hasOwnProperty(chatId)) {
                state.messages[chatId] = [
                    ...state.messages[chatId],
                    action.payload,
                ];
            } else {
                state.messages[chatId] = [action.payload];
            }

            return {
                messages: {
                    //?????
                    ...state.messages,
                }
            }
        }

        case REMOVE_MESSAGE: {
            let messages = [...state.messages];

            messages = messages.filter((item) => item.id !== action.payload.id);

            return {
                messages
            }
        }

        default: {
            return state;
        }
    }
};
