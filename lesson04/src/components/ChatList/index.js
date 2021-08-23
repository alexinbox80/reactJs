import PropTypes from "prop-types";
import {ChatItem} from "../ChatItem";
import {List, ListItem} from "@material-ui/core";
import styles from "./ChatList.module.sass";
import {Link as RouterLink} from "react-router-dom";
//import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

export const ChatList = ({chatList}) => {
    return (
        <List className={styles.list}>
            <ListItem className={styles.item} key={'0'}>Chats&nbsp;:</ListItem>
            {
                chatList.map(({id, title}) => (
                    <ListItem key={id} component={RouterLink} to={`/home/${id}`}>
                        <ChatItem key={id} chatListName={title}/>
                    </ListItem>
                ))
            }
        </List>
    );
};

ChatList.propTypes = {
    chatList: PropTypes.array.isRequired,
};
