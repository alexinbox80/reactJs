const getMessages = (state) => state.messages.messages || {};
const getMessage = (state, chatId) => getMessages(state)[chatId];

export const messagesSelectors = {
    getMessages,
    getMessage
};

export const getMessagesLoadingStatusSelector = (state) => state.messages.isLoading;
