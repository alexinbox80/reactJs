import {chatApi} from "../../api/v1/chatApi";

export const ADD_CHAT = 'ADD_CHAT';
export const ADD_CHAT_LOADING = 'ADD_CHAT_LOADING';
export const ADD_CHAT_SUCCESS = 'ADD_CHAT_SUCCESS';
export const ADD_CHAT_ERROR = 'ADD_CHAT_ERROR';
export const REMOVE_CHAT = 'REMOVE_CHAT';

/**
 *  @param {object} chat
 *  @param {string} chat.id
 *  @param {string} chat.title
 *  @param {string} chat.description
 *  @param {string} chat.content
 *
 * */

export const createActionAddChat = (chat) => ({
    type: ADD_CHAT,
    payload: chat,
});

export const createActionAddChatLoading = (isLoading) => ({
    type: ADD_CHAT_LOADING,
    payload: isLoading,
});

export const createActionAddChatSuccess = (chat) => ({
    type: ADD_CHAT_SUCCESS,
    payload: chat,
});

export const createActionAddChatError = (error) => ({
    type: ADD_CHAT_ERROR,
    payload: error,
});

/**
 *  @param {string} id
 *
 * */

export const createActionRemoveChat = (id) => ({
    type: REMOVE_CHAT,
    payload: {id}
});

export const createActionAddChatRequest = (chat) => async (dispatch) => {

    dispatch(createActionAddChatLoading(true));

    const [error, result] = await chatApi.addChat();

    if (error) {
        dispatch(createActionAddChatError(error));
    }

    if (result) {
        dispatch(createActionAddChatSuccess(chat));
    }

    dispatch(createActionAddChatLoading(false));
};

export const createActionRemoveChatRequest = (chatId) => async (dispatch) => {

    dispatch(createActionAddChatLoading(true));

    const [error, result] = await chatApi.removeChat();

    if (error) {
        dispatch(createActionAddChatError(error));
    }

    if (result) {
        dispatch(createActionRemoveChat(chatId));
    }

    dispatch(createActionAddChatLoading(false));
};
