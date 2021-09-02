import React, {useEffect} from "react";
import {messagesConnect} from "../../connects/messages";
import faker from "faker";
import propTypes from "prop-types";

import {MessageTitle} from "../../components/MessageTitle";
import {MessageList} from "../../components/MessageList";

import {useDidUpdate} from "../../hooks/useDidUpdate";

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
        chats,
        messages,
        isLoading,
        removeMessage,
        addMessage,
        ver,
        chatId,
        nameBot,
    } = props;

    const handleRemoveMessage = (messageId) => {
        //console.log('handler chatId ', chatId);
        //console.log('handler messageId ', messageId);
        removeMessage(chatId, messageId);
    };

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
                title={currentChat?.title}
                ver={ver}
            />
            <MessageList
                messageList={messages}
                nameBot={nameBot}
                removeMessage={handleRemoveMessage}
            />
            {
                isLoading && <div>
                    loading...
                </div>
            }
        </>
    );
};

ChatRender.propTypes = {
    ver: propTypes.string.isRequired,
    chats: propTypes.array.isRequired,
    chatId: propTypes.string.isRequired,
    nameBot: propTypes.string.isRequired,
    isLoading: propTypes.bool,
    removeMessage: propTypes.func.isRequired,
    messages: propTypes.array,
    addMessage: propTypes.func.isRequired,
};

export const Chat = messagesConnect(ChatRender);
