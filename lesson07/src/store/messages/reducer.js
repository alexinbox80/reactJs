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
 * @param {string} action.payload.content
 * */

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_MESSAGE: {
        //     const {chatId} = action.payload;
        //
        //     if (state.messages.hasOwnProperty(chatId)) {
        //         state.messages[chatId] = [
        //             ...state.messages[chatId],
        //             action.payload,
        //         ];
        //     } else {
        //         state.messages[chatId] = [action.payload];
        //     }
        //
        //     return {
        //         messages: {
        //             ...state.messages,
        //         }
        //     }
        // }
        //
        // case REMOVE_MESSAGE: {
        //     let messages = [...state.messages];
        //
        //     messages = messages.filter((item) => item.id !== action.payload.id);
        //
        //     return {
        //         messages
        //     }
        // }
        //
        // case REMOVE_MESSAGES: {
        //     const chatId = action.payload.id
        //     let messages = {...state.messages};
        //
        //     //const removeProperty = prop => ({ [prop]: _, ...rest }) => rest;
        //     const removeProperty = (prop) => {
        //         return ({[prop]: _, ...rest}) => {
        //             return rest;
        //         };
        //     };
        //
        //     if (messages.hasOwnProperty(chatId)) {
        //         const removeChat = removeProperty(chatId);
        //         messages = removeChat(messages);
        //     }
        //
        //     /*   const messagesOld = {...state.messages};
        //        if (state.messages.hasOwnProperty(chatId)) {
        //            // delete messages[action.payload.id];
        //            for (let key in messagesOld) {
        //                if (key !== chatId) {
        //                    messages = {
        //                        ...messages,
        //                        [key]: messagesOld[key]
        //                    }
        //                }
        //            }
        //        }*/
        // return {
        //     messages
        // }

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
            // return {
            //     ...state,
            //     messages: [
            //         ...state.messages,
            //         action.payload,
            //     ]
            // }
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
            const chatId= action.payload.chatId;
            const messageId = action.payload.messageId;

            let messages = {...state.messages};

            console.log('action.payload ', action.payload);

            //messages.filter ((message) => {console.log('messageId ', message.id)});

            console.log('messageId ', messageId);
            console.log('chatId ', chatId);
            console.log('messages ', messages);
            console.log('messages,chatId ', messages[chatId]);

            messages = {[chatId]:messages[chatId].filter ((message) => message.id !== messageId)};

            console.log('messages ', messages);

            // return {
            //     ...state,
            //     messages: [
            //         ...state.messages.filter((message) => message.id !== action.payload.id),
            //     ]
            // }

            //return messages;
            return state;
        }
        case REMOVE_MESSAGES: {
            const chatId = action.payload.id
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
