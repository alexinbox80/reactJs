import {connect} from "react-redux";
import {commentsSelectors, getCommentsAction} from "../../store/comments";

const mapStateToProps = (state) => ({
    comments: commentsSelectors.getComments(state),
    isLoading: commentsSelectors.getCommentsLoading(state),
    error: commentsSelectors.getCommentsError(state),
    data: commentsSelectors.getCommentsData(state),
});

const mapDispatchToProps = (dispatch) => ({
    commentsAction(postId) {
        return dispatch(getCommentsAction(postId));
    }
});

export const commentsConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);