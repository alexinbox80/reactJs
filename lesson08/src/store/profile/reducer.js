import {CREATE_CHECKBOX, DELETE_CHECKBOX, DELETE_CHOOSECHECKBOX, TOGGLE_CHECKBOX} from "./actions";

const initialState = {
    checkBox:[]
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_CHECKBOX: {

            return {
                checkBox: [
                    ...state.checkBox,
                    action.payload
                ]
            }
        }

        case DELETE_CHECKBOX: {
            let checkBox = [...state.checkBox];

            checkBox = checkBox.filter((item) => item.id !== action.payload.id);

            return {
                checkBox
            };
        }

        case DELETE_CHOOSECHECKBOX: {

            let checkBox = [...state.checkBox];

            checkBox = checkBox.filter((item) => item.status !== action.payload.status);

            return {
                checkBox
                
            };
        }

        case TOGGLE_CHECKBOX: {
            let checkBox = [...state.checkBox];

            const currentCheckBoxIndex = checkBox.findIndex((item) => item.id === action.payload.id);

            checkBox[currentCheckBoxIndex] = {
                ...checkBox[currentCheckBoxIndex],
                status: action.payload.status
            };

            return {
                checkBox
            };
        }

        default: {
            return state;
        }
    }
};
