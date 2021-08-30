import React, {useEffect} from "react";
import {messagesConnect} from "../../connects/messages";
import faker from "faker";
// import PropTypes from "prop-types";
import {MessageTitle} from "../../components/MessageTitle";
import {MessageList} from "../../components/MessageList";

import {useDidUpdate} from "../../hooks/useDidUpdate";

// import {useParams, Redirect} from "react-router-dom";
//import {chatsConnect} from "../../connects/chats";
//import {ChatsRender} from "../Chats";

const uuid = () => faker.datatype.uuid();

const toHHMMSS = (mseconds) => (
    new Date(mseconds)
        .toTimeString()
        .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
);

const SendMessage = (fn, message, chatId, nameBot) => {
    useEffect(() => {
        let messagesItem = {
            chatId,
            id: uuid(),
            time: toHHMMSS(Date.now()),
            text: message,
            author: nameBot,
        };
        fn(messagesItem);
    }, []);
};

export const ChatRender = (props) => {

    const {
        ver,
        //didHello,
        chats,
        setCurrentChat,
        addMessage,
        messages,
        chatId,
        //messageList,
        nameBot,
    } = props;

    console.log('ChatRender ', messages);

    const currentChat = chats?.find(({id}) => id === chatId);

    const DidHello = (chatId) => {

        SendMessage(addMessage, 'Привет! я бот Петрович', chatId, nameBot);
        SendMessage(addMessage, 'Как к Вам обращаться?', chatId, nameBot);

    };

    if (chatId) {
        DidHello(chatId);
    }

    useDidUpdate(() => {
        const messageListLength = messages?.length;

        if (messageListLength) {

            if (messages[messageListLength - 1].author !== nameBot) {
                const userText = messages[messageListLength - 1].text;

                let messagesItem = {
                    chatId,
                    id: uuid(),
                    time: toHHMMSS(Date.now()),
                    text: 'Здравствуйте, ' + userText + '!',
                    author: nameBot,
                };

                addMessage(messagesItem);

                messagesItem = {
                    chatId,
                    id: uuid(),
                    time: toHHMMSS(Date.now()),
                    text: 'Чем могу помочь?',
                    author: nameBot,
                };

                addMessage(messagesItem);
            }
        }
    }, [messages]);

    return (
        <>
            <MessageTitle
                title={currentChat.title}
                ver={ver}
            />

            <MessageList
                messageList={messages}
                nameBot={nameBot}
            />

        </>
    );
};

/*
export const ChatRender = (props) => {
    const {chatId} = useParams();

    console.log('ChatRender ', chatId);

    console.log('ChatRender ', props);

    console.log('ChatRender messages ', props.messages);

    const {
        ver,
        didHello,
        chats,
        setCurrentChat,
        //messages,
        messageList,
        nameBot,
    } = props;

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
                //messageList={messageList}
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
*/

export const Chat = messagesConnect(ChatRender);
