import React from "react";
import {Route} from "react-router-dom";

import {MessageForm} from "../../components/MessageForm";
import {ChatList} from "../../components/ChatList";

import {Chat} from "../Chat";
import styles from "./Home.module.sass";

import PropTypes from "prop-types";

/*

    //const currentChat = messageList?.find(({id}) => id === chatId);

    let messages = [];

    const currentMessages = messageList?.filter(({chatId}) => chatId === chatUuId)
        .forEach((item) => {
            for (let key in item.message) {
                messages.push({
                    id: item.message[key].id,
                    time: item.message[key].time,
                    text: item.message[key].text,
                    author: item.message[key].author,
                });
            }
        });

*/

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
        value,
//        chatUuId
    } = props;

    return (
        <>
            <div className={styles.body}>
                <div className={styles.chats}>
                    <ChatList chatList={chatList}/>
                </div>
                <div className={styles.messages}>
                    <Route path='/home/:chatId'>
                        <Chat
                            ver={projectVersion}
                            chats={chatList}
                            messageList={messageList}
                            nameBot={nameBot}
                        />
                    </Route>
                </div>
            </div>
            <Route path='/home/:chatId'>
                <MessageForm
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
