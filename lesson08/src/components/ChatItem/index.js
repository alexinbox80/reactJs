import React from "react";
import PropTypes from "prop-types";
import styles from "./ChatItem.module.sass";
import ListItemText from "@material-ui/core/ListItemText";

export const ChatItem = ({chatListName}) => {
    return (
        <ListItemText className={styles.item} primary={chatListName}/>
    );
};

ChatItem.propTypes = {
    chatListName: PropTypes.string.isRequired,
};
