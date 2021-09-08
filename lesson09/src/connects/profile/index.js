import {connect} from "react-redux";
import {
    profileSelectors,
    createActionCreateCheckbox,
    createActionToggleCheckbox,
    createActionDeleteCheckbox,
    createActionDeleteChooseCheckbox
} from "../../store/profile";


const mapStateToProps = (state) => ({
    profile: profileSelectors.getProfile(state),
});

const mapDispatchToProps = (dispatch) => ({
    createCheckbox(profile) {
        return dispatch(createActionCreateCheckbox(profile));
    },
    toggleCheckbox(id, status) {
        return dispatch(createActionToggleCheckbox(id, status));
    },
    deleteCheckbox(id) {
        return dispatch(createActionDeleteCheckbox(id));
    },
    deleteChooseCheckbox(status) {
        return dispatch(createActionDeleteChooseCheckbox(status));
    }
});

export const profileConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);