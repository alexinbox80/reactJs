import PropTypes from "prop-types";
import {ListItem, ListItemText} from "@material-ui/core";
import styles from "./MessageItem.module.sass";
import {createTheme, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    ListItemText: {
        fontSize: 16,
    },
}));


export const MessageItem = ({messageItemTime, messageItemText, messageItemAuthor, nameBot}) => {
    const classes = useStyles();

    return (
        <ListItem className={messageItemAuthor === nameBot ? styles.message__bot : styles.message__user}>
            <ListItemText className={classes.ListItemText} className={styles.message__author} primary={messageItemAuthor}/>
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
