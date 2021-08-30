import React from "react";
import {useParams, Redirect} from "react-router-dom";

import {messagesConnect} from "../../connects/messages";

import PropTypes from "prop-types";
import {MessageTitle} from "../../components/MessageTitle";
import {MessageList} from "../../components/MessageList";
//import {chatsConnect} from "../../connects/chats";
//import {ChatsRender} from "../Chats";

export const ChatRender = (props) => {
    console.log('Chat ', props);

    const {
        ver,
        didHello,
        chats,
        setCurrentChat,
        //messages,
        messageList,
        nameBot,
    } = props;

    const {chatId} = useParams();

    if (chatId) {
        setCurrentChat(chatId);
        didHello(chatId);
    }

    let messages = [];

    const currentChat = chats?.find(({id}) => id === chatId);

    if (!currentChat) {
        return <Redirect to="/NoMatch"/>
    }

    messageList?.filter(({id}) => id === chatId)
        .forEach(({message}) => {
            messages.push({
                id: message[0].id,
                time: message[0].time,
                text: message[0].text,
                author: message[0].author,
            });
        });

    return (
        <>
            <MessageTitle
                title={currentChat.title}
                ver={ver}/>

            <MessageList
                messageList={messages}
                nameBot={nameBot}
            />
        </>
    );
};

ChatRender.propTypes = {
    ver: PropTypes.string.isRequired,
    chats: PropTypes.array.isRequired,
    setCurrentChat: PropTypes.func.isRequired,
    messageList: PropTypes.array.isRequired,
    nameBot: PropTypes.string.isRequired,
};

export const Chat = messagesConnect(ChatRender);
