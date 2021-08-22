import React from "react";

import {MessageTitle} from "../../components/MessageTitle";
import {ChatList} from "../../components/ChatList";
import {MessageList} from "../../components/MessageList";
import {MessageForm} from "../../components/MessageForm";

import styles from "./Home.module.sass";
import PropTypes from "prop-types";
import {Redirect, Route, useParams} from "react-router-dom";

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

    const {chatId} = useParams();

    const currentChat = chatList?.find(({id}) => id === chatId);

    if (!currentChat) {
        //return <Redirect to="/NoMatch"/>
    }

    let messages = [];

    const currentMessages = messageList?.filter(({chatId}) => chatId === 1)
        .forEach((item) =>
        {
            for (let key in item.message) {
                messages.push({
                    id: item.message[key].id,
                    time: item.message[key].time,
                    text: item.message[key].text,
                    author: item.message[key].author,
                });
            }
        });

    return (
        <>
            <div className={styles.body}>
                <div className={styles.chats}>
                    <ChatList chatList={chatList}/>
                </div>
                {/*<Route path='/home/:chatId'>*/}
                <div className={styles.messages}>
                    <MessageTitle
                        title={chatList[0]?.title}
                        ver={projectVersion}/>
                    <MessageList
                        // messageList={messageList}
                        messageList={messages}
                        nameBot={nameBot}
                    />
                </div>
                {/*</Route>*/}
            </div>
            <MessageForm
                inputFocus={inputFocus}
                onChange={onChange}
                onClick={onClick}
                onKeyDown={onKeyDown}
                value={value}
            />
        </>
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
