
const getChats = (state) => state.chats?.chats || [];

export const chatsSelectors = {
    getChats
};

export const getChatsLoadingStatusSelector = (state) => state.chats.isLoading;
