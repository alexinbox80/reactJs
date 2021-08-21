import React from "react";
import {useParams, Redirect} from "react-router-dom";

import styles from "./Chat.module.sass";

export const Chat = ({chats}) => {
    const {chatId} = useParams();

    const currentChat = chats?.find(({id}) => id === chatId);

    if (!currentChat) {
        return <Redirect to="/chats"/>
    }

    return (
        <div className={styles.content}>
            <h1>{currentChat.title}</h1>
            <h2>{currentChat.description}</h2>
            <p>{currentChat.content}</p>
        </div>
    );
};
