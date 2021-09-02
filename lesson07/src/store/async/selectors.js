export const getMessagesSelector = (state) => state.async?.amessages || [];

export const getMessagesLoadingStatusSelector = (state) => state.async?.isLoading;
