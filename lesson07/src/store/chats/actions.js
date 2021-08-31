
export const ADD_CHAT = 'ADD_CHAT';

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



/**
 *  @param {string} id
 *
 * */

export const createActionRemoveChat = (id) => ({
    type: REMOVE_CHAT,
    payload: {id},
});

