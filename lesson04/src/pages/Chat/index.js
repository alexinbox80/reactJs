import React from "react";
import {useParams, Redirect} from "react-router-dom";

import PropTypes from "prop-types";
import {MessageTitle} from "../../components/MessageTitle";
import {MessageList} from "../../components/MessageList";

export const Chat = (props) => {
    const {
        ver,
        chats,
        messageList,
        nameBot,
    } = props;

    const {chatId} = useParams();

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

Chat.propTypes = {
    ver: PropTypes.string.isRequired,
    chats: PropTypes.array.isRequired,
    messageList: PropTypes.array.isRequired,
    nameBot: PropTypes.string.isRequired,
};
