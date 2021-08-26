import {CREATE_CHECKBOX, TOGGLE_CHECKBOX} from "./actions";

const initialState = {

    checkBoxState:'false'

};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case CREATE_CHECKBOX: {

            return state;
        }

        case TOGGLE_CHECKBOX:  {

            return state.checkBoxState;

        }

        default: {
            return state;
        }
    }
};
