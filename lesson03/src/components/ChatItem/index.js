import PropTypes from "prop-types";
import {ListItem} from "@material-ui/core";
import styles from "./ChatItem.module.sass";

export const ChatItem = ({chatListName}) => {
    return (
        <ListItem className={styles.item}>{chatListName}</ListItem>
    );
};

ChatItem.propTypes = {
    chatListName: PropTypes.string.isRequired,
};
