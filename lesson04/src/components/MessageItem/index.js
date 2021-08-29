import PropTypes from "prop-types";
import {ListItem, ListItemText} from "@material-ui/core";
import styles from "./MessageItem.module.sass";

export const MessageItem = ({messageItemTime, messageItemText, messageItemAuthor, nameBot}) => {
    return (
        <ListItem className={messageItemAuthor === nameBot ? styles.message__bot : styles.message__user}>
            <ListItemText className={styles.message__author} primary={messageItemAuthor}/>
            <ListItemText className={styles.message__text} primary={messageItemText}/>
            <ListItemText className={styles.message__time} primary={messageItemTime}/>
        </ListItem>
    );
};

MessageItem.propTypes = {
    nameBot: PropTypes.string.isRequired,
    messageItemAuthor: PropTypes.string.isRequired,
    messageItemText: PropTypes.string.isRequired,
    messageItemTime: PropTypes.string.isRequired,
};
