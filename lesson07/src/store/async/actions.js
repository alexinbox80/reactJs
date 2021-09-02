import {amessagesApi} from "../../api/amessagesApi";

export const ADD_AMESSAGE = 'ADD_AMESSAGE';

export const ADD_AMESSAGE_LOADING = 'ADD_AMESSAGE_LOADING';
export const ADD_AMESSAGE_SUCCESS = 'ADD_AMESSAGE_SUCCESS';
export const ADD_AMESSAGE_ERROR = 'ADD_AMESSAGE_ERROR';

export const REMOVE_AMESSAGE = 'REMOVE_AMESSAGE';

export const createAddMessageLoading = (isLoading) => ({
    type: ADD_AMESSAGE_LOADING,
    payload: isLoading,
});

export const createAddMessageSuccess = ({message, id}) => ({
    type: ADD_AMESSAGE_SUCCESS,
    payload: {
        message, id
    }
});

export const createAddMessageError = (error) => ({
    type: ADD_AMESSAGE_ERROR,
    payload: error,
});

export const createRemoveMessage = (id) => ({
    type: REMOVE_AMESSAGE,
    payload: id
});

export const createAddMessageRequest = (message) => async (dispatch) => {

    dispatch(createAddMessageLoading(true));

    const [error, result] = await amessagesApi.addMessage();

    if (error) {
        dispatch(createAddMessageError(error));
    }

    if (result) {
        dispatch(createAddMessageSuccess(message));
    }

    dispatch(createAddMessageLoading(false));
};

export const createRemoveMessageRequest = (messageId) => async (dispatch) => {

    dispatch(createAddMessageLoading(true));

    const [error, result] = await amessagesApi.removeMessage();

    if (error) {
        dispatch(createAddMessageError(error));
    }

    if(result) {
        dispatch(createRemoveMessage(messageId));
    }

    dispatch(createAddMessageLoading(false));
};
