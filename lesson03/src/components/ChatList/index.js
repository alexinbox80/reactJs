import PropTypes from "prop-types";
import {ChatItem} from "../ChatItem";
import {List, ListItem} from "@material-ui/core";
import styles from "./ChatList.module.sass";

export const ChatList = ({chatList}) => {
    return (
        <List className={styles.list}>
            <ListItem className={styles.item} key={'0'}>Chats :</ListItem>
            {
                chatList.map(({id, name}) => (
                    <ChatItem key={id} chatListName={name}/>
                ))
            }
        </List>
    );
};

ChatList.propTypes = {
    chatList: PropTypes.array.isRequired,
};
