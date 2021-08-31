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
        chats,
        projectVersion,
        nameBot,
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
                            chatId={chatId}
                            ver={projectVersion}
                            chats={chats}
                            nameBot={nameBot}
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

HomeRender.propTypes = {
    projectVersion: propTypes.string.isRequired,
    chats: propTypes.array.isRequired,
    nameBot: propTypes.string.isRequired,
    nameUser: propTypes.string.isRequired,
};

export const Home = chatsConnect(HomeRender);
