
export const CREATE_CHECKBOX = 'CREATE_CHECKBOX';

export const DELETE_CHECKBOX = 'DELETE_CHECKBOX';

export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';

export const DELETE_CHOOSECHECKBOX = 'DELETE_CHOOSECHECKBOX ';

/**
 * @param
 *
 * */

export const  createActionCreateCheckbox = (payload) => ({
    type: CREATE_CHECKBOX,
    payload
});

export const  createActionDeleteCheckbox = (id) => ({
    type: DELETE_CHECKBOX,
    payload: {id}
});

export const  createActionToggleCheckbox = (id, status) => ({
    type: TOGGLE_CHECKBOX,
    payload: {id, status}
});

export const  createActionDeleteChooseCheckbox = (status) => ({
    type: DELETE_CHOOSECHECKBOX,
    payload: {status}
});
