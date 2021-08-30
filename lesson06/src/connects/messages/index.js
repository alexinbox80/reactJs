import {connect} from "react-redux";
import {
    messagesSelectors,
    createActionCreateMessage,
    createActionRemoveMessage,
} from "../../store/messages";

const mapStateToProps = (state) => ({
    messages: messagesSelectors.getMessages(state),
});

const mapDispatchToProps = (dispatch) => ({
   /* createMessage(messages) {
        return dispatch(createActionCreateMessage(messages));
    },*/

    createMessage: (message) => {dispatch(createActionCreateMessage(message))},
    removeMessage(id) {
        return dispatch(createActionRemoveMessage(id));
    }
});

export const messagesConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);
