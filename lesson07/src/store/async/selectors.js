export const getMessagesSelector = (state) => {

    console.log('getMessagesSelector ', state.amessages.amessages);

    return state.amessages?.messages || [];
};

export const getMessagesLoadingStatusSelector = (state) => state.amessages?.isLoading;
