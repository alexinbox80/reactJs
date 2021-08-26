import {CREATE_CHECKBOX, TOGGLE_CHECKBOX} from "./actions";

const initialState = {
    checkBox:[]
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_CHECKBOX: {

            return {
                checkBox:[
                    ...state.checkBox,
                    action.payload
                ]
            }
        }

        case TOGGLE_CHECKBOX: {
            const checkBox = [...state.checkBox];
            checkBox[0].status = action.payload.status;

            return {
                checkBox
            };
        }

        default: {
            return state;
        }
    }
};
