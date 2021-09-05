import React from "react";
import {chatsConnect} from "../../connects/chats";

import {ChatForm} from "../../components/ChatForm";

import propTypes from "prop-types";

import {List, ListItem, ListItemText} from "@material-ui/core";
import styles from "./Chats.module.sass";

export const ChatsRender = ({isLoading, chats, addChats, removeChats, removeMessages}) => {
    const handleRemove = (id) => {
        removeChats(id);
        removeMessages(id);
    };

    return (
        <List className={styles.content}>
            {
                chats.length ? chats.map(({id, title, description}) =>
                    <ListItem key={id}>
                        <ListItemText primary={id}/>
                        <ListItemText primary={title}/>
                        <ListItemText primary={description}/>
                        <button type="button" onClick={() => handleRemove(id)}>
                            Remove Chat
                        </button>
                    </ListItem>
                ) : null
            }
            <ChatForm addChats={addChats} isLoading={isLoading}/>
        </List>
    );
};

ChatsRender.propTypes = {
    chats: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        title: propTypes.string,
        description: propTypes.string,
        content: propTypes.string,
    }))
};

export const Chats = chatsConnect(ChatsRender);
