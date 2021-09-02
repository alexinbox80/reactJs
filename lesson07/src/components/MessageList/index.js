import React, {useEffect, useRef} from "react";
import propTypes from "prop-types";
import {MessageItem} from "../MessageItem";
import {List} from "@material-ui/core";
import styles from "./MessageList.module.sass";

export const MessageList = ({messageList, nameBot, removeMessage}) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
    };

    useEffect(() => {
        scrollToBottom()
    }, [messageList]);

    return (
        <div className={styles.message__list}>
            <List>
                {
                    messageList?.map(({id, time, text, author}) => (
                        <MessageItem
                            key={id}
                            messageId={id}
                            removeMessage={removeMessage}
                            messageItemTime={time}
                            messageItemText={text}
                            messageItemAuthor={author}
                            nameBot={nameBot}/>
                    ))
                }
            </List>
            <div ref={messagesEndRef}/>
        </div>
    );
};

MessageList.propTypes = {
    messageList: propTypes.array,
    nameBot: propTypes.string.isRequired,
    removeMessage: propTypes.func
};
