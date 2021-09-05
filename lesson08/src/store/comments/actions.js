import {ENDPOINT, ENDPOINTS} from "../../api/v1/endpoints";

export const CHANGE_COMMENTS_LOADING = "CHANGE_COMMENTS_LOADING";

export const CHANGE_COMMENTS_ERROR = "CHANGE_COMMENTS_ERROR";

export const CHANGE_COMMENTS_DATA = "CHANGE_COMMENTS_DATA";

export const changeCommentsLoading = (isLoading) => ({
    type: CHANGE_COMMENTS_LOADING,
    payload: isLoading,
});

export const changeCommentsError = (error) => ({
    type: CHANGE_COMMENTS_ERROR,
    payload: error,
});

export const changeCommentsData = (data) => ({
    type: CHANGE_COMMENTS_DATA,
    payload: data
});

export const getCommentsActionReguest = (postId) => async (dispatch) => {
    dispatch(changeCommentsError(null));
    dispatch(changeCommentsData(null));
    dispatch(changeCommentsLoading(true));

    try {
        const url = [
            ENDPOINT,
            ENDPOINTS.comments.replace(
                ':postId',
                postId
            )
        ].join('');

        const response = await fetch(url);
        const result = await response.json();

        dispatch(changeCommentsData(result));
    } catch (e) {
        console.dir(e);
        dispatch(changeCommentsError(e));
    }

    dispatch(changeCommentsLoading(false));
};