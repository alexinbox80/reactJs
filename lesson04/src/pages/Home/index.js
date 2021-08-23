import React from "react";
import {Link as RouterLink, Route} from "react-router-dom";

import {MessageTitle} from "../../components/MessageTitle";
import {MessageList} from "../../components/MessageList";
import {MessageForm} from "../../components/MessageForm";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
        chatUuId
    } = props;

    return (
        <>
            <div className={styles.body}>
                <div className={styles.chats}>
                    {/*<ChatList chatList={chatList}/>*/}
                    {
                        chatList.map(({title, id}) =>
                            <ListItem key={id} component={RouterLink} to={`/home/${id}`}>
                                <ListItemText primary={title}/>
                            </ListItem>
                        )
                    }
                </div>
                <div className={styles.messages}>
                    <Route path='/home/:chatId'>
                        <MessageTitle
                            title={chatList[0]?.title}
                            ver={projectVersion}/>
                        <Chat chats={chatList}/>
                        <MessageList
                            messageList={messageList}
                            //messageList={messages}
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
