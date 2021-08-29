
export const CREATE_CHECKBOX = 'CREATE_CHECKBOX';

export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';

export const  createActionCreateCheckbox = (payload) => ({
    type: CREATE_CHECKBOX,
    payload
});

export const  createActionToggleCheckbox = (status) => ({
    type: TOGGLE_CHECKBOX,
    payload: {status}
});
