import {connect} from "react-redux";
import {
    messagesSelectors,
    getMessagesLoadingStatusSelector,
    createActionAddMessageRequest,
    createActionRemoveMessageRequest,
    createActionRemoveMessagesRequest,
} from "../../store/messages";

//import {getChatsLoadingStatusSelector} from "../../store/chats";

const mapStateToProps = (state, {chatId}) => ({
    messages: messagesSelectors.getMessage(state, chatId),
    isLoading: getMessagesLoadingStatusSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    addMessage(message) {
        return dispatch(createActionAddMessageRequest(message));
    },
    removeMessage(chatId, messageId) {
        return dispatch(createActionRemoveMessageRequest(chatId, messageId));
    },
    removeMessages(id) {
        return dispatch(createActionRemoveMessagesRequest(id));
    }
});

export const messagesConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);
