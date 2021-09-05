import {connect} from "react-redux";
import {
    chatsSelectors,
    createActionAddChat,
    createActionRemoveChat,
} from "../../store/chats";

const mapStateToProps = (state) => ({
    chats: chatsSelectors.getChats(state),
});

const mapDispatchToProps = (dispatch) => ({
    addChats(chats) {
        return dispatch(createActionAddChat(chats));
    },
    removeChats(id) {
        return dispatch(createActionRemoveChat(id));
    }
});

export const chatsConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);
