import React from "react";
import {Route, useParams} from "react-router-dom";

import {chatsConnect} from "../../connects/chats";

import {MessageForm} from "../../components/MessageForm";
import {ChatList} from "../../components/ChatList";

import {Chat} from "../Chat";
import styles from "./Home.module.sass";

import propTypes from "prop-types";

export const HomeRender = (props) => {
    const {chatId} = useParams();

    const {
        projectVersion,
        didHello,
        chats,
        setCurrentChat,
        messageList,
        nameBot,
        inputFocus,
        onChange,
        onClick,
        onKeyDown,
        value
    } = props;

    return (
        <>
            <div className={styles.body}>
                <div className={styles.chats}>
                    <ChatList chatList={chats}/>
                </div>
                <div className={styles.messages}>
                    <Route path='/home/:chatId'>
                        <Chat
                            chatId={chatId}
                            ver={projectVersion}
                            didHello={didHello}
                            chats={chats}
                            setCurrentChat={setCurrentChat}
                            messageList={messageList}
                            nameBot={nameBot}
                        />
                    </Route>
                </div>
            </div>
            <Route path='/home/:chatId'>
                <MessageForm
                    chatId={chatId}
                    inputFocus={inputFocus}
                    onChange={onChange}
                    onClick={onClick}
                    onKeyDown={onKeyDown}
                    value={value}
                />
            </Route>
        </>
    );
};

HomeRender.propTypes = {
    projectVersion: propTypes.string.isRequired,
    chats: propTypes.array.isRequired,
    setCurrentChat: propTypes.func.isRequired,
    messageList: propTypes.array.isRequired,
    nameBot: propTypes.string.isRequired,
    inputFocus: propTypes.object.isRequired,
    onChange: propTypes.func.isRequired,
    onKeyDown: propTypes.func.isRequired,
    onClick: propTypes.func.isRequired,
    value: propTypes.string.isRequired,
};

export const Home = chatsConnect(HomeRender);
