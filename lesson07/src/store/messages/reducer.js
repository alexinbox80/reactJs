import {ADD_MESSAGE_ERROR, ADD_MESSAGE_LOADING, ADD_MESSAGE_SUCCESS, REMOVE_MESSAGE, REMOVE_MESSAGES} from "./actions";

export const initialState = {
    messages: [],
    isLoading: false,
    error: null,
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
        case ADD_MESSAGE_ERROR: {
            return {
                ...state,
                error: action.payload,
            }
        }
        case ADD_MESSAGE_SUCCESS: {
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
                    ...state.messages,
                }
            }
        }
        case REMOVE_MESSAGE: {
            const chatId = action.payload.chatId;
            const messageId = action.payload.messageId;

            let messages = {...state.messages};

            messages = {
                ...messages,
                [chatId]: messages[chatId].filter((message) => message.id !== messageId)
            };

            return {
                messages
            }
        }
        case REMOVE_MESSAGES: {
            const chatId = action.payload.id;
            let messages = {...state.messages};

            //const removeProperty = prop => ({ [prop]: _, ...rest }) => rest;
            const removeProperty = (prop) => {
                return ({[prop]: _, ...rest}) => {
                    return rest;
                };
            };

            if (messages.hasOwnProperty(chatId)) {
                const removeChat = removeProperty(chatId);
                messages = removeChat(messages);
            }

            return {
                messages
            }
        }
        default: {
            return state;
        }
    }
};
