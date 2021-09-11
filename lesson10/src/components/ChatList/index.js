import React from "react";
import {Link as RouterLink} from "react-router-dom";

import {ChatItem} from "../ChatItem";
import styles from "./ChatList.module.sass";
import {List, ListItem} from "@material-ui/core";

import PropTypes from "prop-types";

export const ChatList = ({chatList}) => {
    return (
        <List className={styles.list}>
            <ListItem className={styles.item} key={'0'}>Chats&nbsp;:</ListItem>
            {
                chatList?.map(({id, title}) => (
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
