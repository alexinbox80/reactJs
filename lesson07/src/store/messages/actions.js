import {messageApi} from "../../api/v1/messageApi";

export const ADD_MESSAGE = 'ADD_MESSAGE';

export const ADD_MESSAGE_LOADING = 'ADD_MESSAGE_LOADING';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const ADD_MESSAGE_ERROR = 'ADD_MESSAGE_ERROR';

export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const REMOVE_MESSAGES = 'REMOVE_MESSAGES';

export const createActionAddMessageLoading = (isLoading) => ({
    type: ADD_MESSAGE_LOADING,
    payload: isLoading,
});

export const createActionAddMessageSuccess = (message) => ({
    type: ADD_MESSAGE_SUCCESS,
    payload: message
});

export const createActionAddMessageError = (error) => ({
    type: ADD_MESSAGE_ERROR,
    payload: error,
});

export const createActionRemoveMessage = (chatId, messageId) => ({
    type: REMOVE_MESSAGE,
    payload: {chatId, messageId}
});

export const createActionRemoveMessages = (id) => ({
    type: REMOVE_MESSAGES,
    payload: {id}
});

export const createActionAddMessageRequest = (message) => async (dispatch) => {

    dispatch(createActionAddMessageLoading(true));

    const [error, result] = await messageApi.addMessage();

    if (error) {
        dispatch(createActionAddMessageError(error));
    }

    if (result) {
        dispatch(createActionAddMessageSuccess(message));
    }

    dispatch(createActionAddMessageLoading(false));
};

export const createActionRemoveMessageRequest = (chatId, messageId) => async (dispatch) => {

    dispatch(createActionAddMessageLoading(true));

    const [error, result] = await messageApi.removeMessage();

    if (error) {
        dispatch(createActionAddMessageError(error));
    }

    if(result) {
        dispatch(createActionRemoveMessage(chatId, messageId));
    }

    dispatch(createActionAddMessageLoading(false));
};

export const createActionRemoveMessagesRequest = (messageId) => async (dispatch) => {

    dispatch(createActionAddMessageLoading(true));

    const [error, result] = await messageApi.removeMessage();

    if (error) {
        dispatch(createActionAddMessageError(error));
    }

    if(result) {
        dispatch(createActionRemoveMessages(messageId));
    }

    dispatch(createActionAddMessageLoading(false));
};
