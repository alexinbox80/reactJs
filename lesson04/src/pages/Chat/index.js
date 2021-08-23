import React from "react";
import {useParams, Redirect} from "react-router-dom";

//import styles from "./Chat.module.sass";
import PropTypes from "prop-types";
import {MessageTitle} from "../../components/MessageTitle";
import {MessageList} from "../../components/MessageList";

export const Chat = (props) => {
    const {
        //title,
        ver,
        chats,
        messageList,
        nameBot,
    } = props;

    const {chatId} = useParams();

    //console.log('getChatId ', chatId);

    let messages = [];

    const currentChat = chats?.find(({id}) => id === chatId);

    if (!currentChat) {
        //console.log('here');
        //return <Redirect to="/chats"/>
        return <Redirect to="/NoMatch"/>
    }

    //console.log('messageList ', messageList);

/*    const currentMessages = messageList?.filter(({id}) => id === chatId)
        .forEach(({message}) => {
            console.log(message[0].text);
            messages.push({
                id: message[0].id,
                time: message[0].time,
                text: message[0].text,
                author: message[0].author,
            });
        });

    console.log(messages);*/

    const currentMessages = messageList?.filter(({id}) => id === chatId)
        .forEach(({message}) => {
            //console.log(message[0].text);
            messages.push({
                id: message[0].id,
                time: message[0].time,
                text: message[0].text,
                author: message[0].author,
            });
        });

    //console.log('currentMessages ', currentMessages);
    //        console.log('messages ', messages);

    return (
        <>
            <MessageTitle
                title={currentChat.title}
                ver={ver}/>

            <MessageList
                //messageList={messageList}
                messageList={messages}
                nameBot={nameBot}
            />

         {/*   <h1>{currentChat.title}</h1>
            <h2>{currentChat.description}</h2>
            <p>{currentChat.content}</p>*/}
        </>
    );
};


Chat.propTypes = {
    //title: PropTypes.string.isRequired,
    ver: PropTypes.string.isRequired,
    chats: PropTypes.array.isRequired,
    messageList: PropTypes.array.isRequired,
    nameBot: PropTypes.string.isRequired,
};
