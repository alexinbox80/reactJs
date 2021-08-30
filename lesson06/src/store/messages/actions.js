
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export const REMOVE_MESSAGE = 'Remove_MESSAGE';

/**
 * @param {object} message
 * @param {string} message.id
 * @param {string} message.content
 * @param {string} message.chatsId
 * */

export const  createActionCreateMessage = (message) => ({
    type: CREATE_MESSAGE,
    payload: message
});

export const  createActionRemoveMessage = (id) => ({
    type: REMOVE_MESSAGE,
    payload: {id}
});

