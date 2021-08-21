import React from "react";

import {MessageTitle} from "../../components/MessageTitle";
import {ChatList} from "../../components/ChatList";
import {MessageList} from "../../components/MessageList";
import {MessageForm} from "../../components/MessageForm";

import styles from "./Home.module.sass";
import PropTypes from "prop-types";

export const Home = (props) => {
    const {
        projectVersion,
        chatList,
        messageList,
        nameBot,
        inputFocus,
        onChange,
        onClick,
        onKeyDown,
        value
    } = props;

    return (
        <div>
            <MessageTitle ver={projectVersion}/>
            <div className={styles.body}>
                <ChatList className={styles.chat} chatList={chatList}/>
                <MessageList className={styles.list}
                             messageList={messageList}
                             nameBot={nameBot}
                />
            </div>
            <MessageForm
                inputFocus={inputFocus}
                onChange={onChange}
                onClick={onClick}
                onKeyDown={onKeyDown}
                value={value}
            />
        </div>
    );
};

Home.propTypes = {
    projectVersion: PropTypes.string.isRequired,
    chatList: PropTypes.array.isRequired,
    messageList: PropTypes.array.isRequired,
    nameBot: PropTypes.string.isRequired,
    inputFocus: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

