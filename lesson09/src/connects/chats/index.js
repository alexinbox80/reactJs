import {connect} from "react-redux";
import {
    chatsSelectors,
    getChatsLoadingStatusSelector,
    createActionAddChatRequest,
    createActionRemoveChatRequest,
} from "../../store/chats";

const mapStateToProps = (state) => ({
    chats: chatsSelectors.getChats(state),
    isLoading: getChatsLoadingStatusSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    addChats(chats) {
        return dispatch(createActionAddChatRequest(chats));
    },
    removeChats(id) {
        return dispatch(createActionRemoveChatRequest(id));
    }
});

export const chatsConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);
