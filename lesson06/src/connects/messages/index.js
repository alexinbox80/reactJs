import {connect} from "react-redux";
import {
    messagesSelectors,
    createActionAddMessage,
    createActionRemoveMessage,
} from "../../store/messages";

const mapStateToProps = (state, {chatId}) => ({
    messages: messagesSelectors.getMessage(state, chatId),
});

const mapDispatchToProps = (dispatch) => ({
   /* addMessage(messages) {
        return dispatch(createActionAddMessage(messages));
    },*/

    addMessage: (message) => {dispatch(createActionAddMessage(message))},
    removeMessage(id) {
        return dispatch(createActionRemoveMessage(id));
    }
});

export const messagesConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);
