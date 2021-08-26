
export const CREATE_CHECKBOX = 'CREATE_CHECKBOX';

export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';

export const  createActionCreateCheckbox = (payload) => ({
    type: TOGGLE_CHECKBOX,
    payload
});

export const  createActionToggleCheckbox = (id, status) => ({
    type: TOGGLE_CHECKBOX,
    payload: {id, status}
});
