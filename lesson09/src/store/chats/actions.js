import {chatsApi} from "../../api/request/chats";

export const ADD_CHATS = 'ADD_CHATS';

export const ADD_CHATS_LOADING = 'ADD_CHATS_LOADING';


export const createActionAddChatsLoading = (isLoading) => ({
    type: ADD_CHATS_LOADING,
    payload: isLoading,
});

export const createActionAddChats = (chats) => ({
    type: ADD_CHATS,
    payload: chats,
});

export const initChatsTracking = (dispatch) => {

    chatsApi.getList((chats) => {
        dispatch(createActionAddChatsLoading(true));
        dispatch(createActionAddChats(chats));
        dispatch(createActionAddChatsLoading(false));
    });

};
