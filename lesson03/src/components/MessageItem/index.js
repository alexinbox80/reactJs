import PropTypes from "prop-types";
import {ListItem, ListItemText} from "@material-ui/core";
import styles from "./MessageItem.module.sass";
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    typography: {
        ListItemText: {
            fontSize: '16px',
        },
    },
});

export const MessageItem = ({messageList, nameBot}) => {
    return (
        messageList.map(({id, time, text, author}) => (
            <ListItem className={author === nameBot ? styles.message__bot : styles.message__user}
                      key={id}>
                <ListItemText theme={theme} className={styles.message__author} primary={author}/>
                <ListItemText className={styles.message__text} primary={text}/>
                <ListItemText className={styles.message__time} primary={time}/>
            </ListItem>
        ))
    );
};

MessageItem.propTypes = {
    messageList: PropTypes.array.isRequired,
    nameBot: PropTypes.string.isRequired,
};
