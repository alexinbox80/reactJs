import React, {useState} from "react";
import {useSelector} from "react-redux";
import propTypes from "prop-types";

import {getMessagesLoadingStatusSelector, messagesSelectors} from "../../store/messages/selectors";

import {MessageTitle} from "../../components/MessageTitle";
import {MessageList} from "../../components/MessageList";

import {messagesApi} from "../../api/request/messages";

export const Chat = (props) => {

    const {
        chats,
        ver,
        chatID,
        nameUser,
    } = props;

    const [error, setError] = useState('');

    const messages = useSelector((state) => messagesSelectors.getMessages(state));

    const isLoading = useSelector((state) => getMessagesLoadingStatusSelector(state));

    const handleRemoveMessage = async (messageId) => {
        setError(null);

        try {
            await messagesApi.delete(messageId);
        } catch (err) {
            setError(err);
        }
    };

    const currentMessages = messages?.filter((item) => item.chatId === chatID);
    const currentChat = chats?.find(({id}) => id === chatID);

    return (
        <>
            <MessageTitle
                title={currentChat?.title}
                ver={ver}
            />
            <MessageList
                messageList={currentMessages}
                nameUser={nameUser}
                removeMessage={handleRemoveMessage}
            />
            {
                isLoading && <div>
                    loading...
                </div>
            }
            {
                error && <div>
                    {error.toString()}
                </div>
            }
        </>
    );
};

Chat.propTypes = {
    ver: propTypes.string.isRequired,
    chats: propTypes.array.isRequired,
    chatID: propTypes.string,
    nameUser: propTypes.string.isRequired,
    isLoading: propTypes.bool,
    messages: propTypes.array,
};
