import {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import {MessageItem} from "../MessageItem";
import {List} from "@material-ui/core";
import styles from "./MessageList.module.sass";

export const MessageList = ({messageList, nameBot}) => {
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
                <MessageItem
                    messageList={messageList}
                    nameBot={nameBot}/>
            </List>
            <div ref={messagesEndRef}/>
        </div>
    );
};

MessageList.propTypes = {
    messageList: PropTypes.array.isRequired,
    nameBot: PropTypes.string.isRequired,
};
