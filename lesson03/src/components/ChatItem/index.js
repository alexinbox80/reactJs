import PropTypes from "prop-types";
import {ListItem} from "@material-ui/core";
import styles from "./ChatItem.module.sass";

export const ChatItem = ({chatList}) => {
    return (
        <>
            <ListItem className={styles.item} key={'0'}>Chats :</ListItem>
            {
                chatList.map(({id, name}) => (
                    <ListItem className={styles.item} key={id}>{name}</ListItem>
                ))
            }
        </>
    );
};

ChatItem.propTypes = {
    chatList: PropTypes.array.isRequired,
};
