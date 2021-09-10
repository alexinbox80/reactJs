import {messagesApi} from "../../api/request/messages";

export const ADD_MESSAGE = 'ADD_MESSAGE';

export const ADD_MESSAGE_LOADING = 'ADD_MESSAGE_LOADING';


export const createActionAddMessageLoading = (isLoading) => ({
    type: ADD_MESSAGE_LOADING,
    payload: isLoading,
});

export const createActionAddMessage = (messages) => ({
    type: ADD_MESSAGE,
    payload: messages,
});

export const initMessagesTracking = (dispatch) => {

    messagesApi.getList((messages) => {
        dispatch(createActionAddMessageLoading(true));
        dispatch(createActionAddMessage(messages));
        dispatch(createActionAddMessageLoading(false));
    });

};