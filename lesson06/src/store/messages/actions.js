
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

/**
 * @param {object} messages
 * @param {string} messages.id
 * @param {string} messages.content
 * @param {string} messages.chatsId
 * */

export const  createActionAddMessage = (messages) => ({
    type: ADD_MESSAGE,
    payload: messages
});

export const  createActionRemoveMessage = (id) => ({
    type: REMOVE_MESSAGE,
    payload: {id}
});

