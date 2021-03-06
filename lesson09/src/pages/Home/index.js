import React from "react";
import {Route, useParams} from "react-router-dom";

import {MessageForm} from "../../components/MessageForm";
import {ChatList} from "../../components/ChatList";

import {Chat} from "../Chat";

import styles from "./Home.module.sass";

import propTypes from "prop-types";

export const Home = (props) => {
    const {chatId} = useParams();

    const {
        chats,
        projectVersion,
        nameUser,
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
                            chatID={chatId}
                            ver={projectVersion}
                            chats={chats}
                            nameUser={nameUser}
                        />
                    </Route>
                </div>
            </div>
            <Route path='/home/:chatId'>
                <MessageForm
                    chatId={chatId}
                    nameUser={nameUser}
                />
            </Route>
        </>
    );
};

Home.propTypes = {
    projectVersion: propTypes.string.isRequired,
    chats: propTypes.array.isRequired,
    nameUser: propTypes.string.isRequired,
};
