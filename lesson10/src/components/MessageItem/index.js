import {ListItem, ListItemText} from "@material-ui/core";
import styles from "./MessageItem.module.sass";
import propTypes from "prop-types";

export const MessageItem = ({messageId, messageItemTime, messageItemText, messageItemAuthor, nameUser, removeMessage}) => {
    return (
        <ListItem className={messageItemAuthor === nameUser ? styles.message__user : styles.message__bot}>
            <ListItemText className={styles.message__close} primary="x" onClick={() => removeMessage(messageId)}/>
            <ListItemText className={styles.message__author} primary={messageItemAuthor}/>
            <ListItemText className={styles.message__text} primary={messageItemText}/>
            <ListItemText className={styles.message__time} primary={messageItemTime}/>
        </ListItem>
    );
};

MessageItem.propTypes = {
    nameUser: propTypes.string.isRequired,
    messageItemAuthor: propTypes.string.isRequired,
    messageItemText: propTypes.string.isRequired,
    messageItemTime: propTypes.string.isRequired,
    removeMessage: propTypes.func,
};
