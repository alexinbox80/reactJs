import {useEffect, useRef, useState} from "react";
import {Route, Switch} from "react-router-dom";
import faker from "faker";
import styles from "./App.module.sass";

import {useMessageForm} from "./hooks/useMessageForm";
import {useMessageList} from "./hooks/useMessageList";
import {useDidUpdate} from "./hooks/useDidUpdate";

import {Header} from "./components/Header";

import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Chats} from "./pages/Chats";
import {NoMatch} from "./pages/NoMatch";

const userMessage = (id, time, text, author) => ({
    id,
    time,
    text,
    author
});

const uuid = () => faker.datatype.uuid();

const chatUuId = uuid();

const createChats = () => ({
    id: uuid(),
    title: faker.lorem.word(),
    description: faker.lorem.words(),
    content: faker.lorem.paragraphs(),
});

const PROJECTVERSION = 'v0.6';
const RECEIVEDELAY = 1500;
const NAMEBOT = 'bot';
const NAMEUSER = 'user';

function App() {
    const [currentChat, setCurrentChat] = useState('');
    const [chatList, setChats] = useState([]);
    const {message, setMessage} = useMessageForm();
    const [messageList, {append}] = useMessageList([]);
    const inputRef = useRef(null);

    const inputHandler = (event) => {
        setMessage(event.target.value);
    };

    const toHHMMSS = (mseconds) => (
        new Date(mseconds)
            .toTimeString()
            .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
    );

    const clickHandler = () => {
        if (message.length) {
            append(currentChat, userMessage(Date.now(), toHHMMSS(Date.now()), message, NAMEUSER));
            setMessage('');
            inputRef.current?.focus();
        }
    };

    const keyHandler = (event) => {
        if (event.key === 'Enter') {
            if (message.length) {
                append(currentChat, userMessage(Date.now(), toHHMMSS(Date.now()), message, NAMEUSER));
                setMessage('');
            }
        }
    };

    const messageDelay = (fn) => {
        if (typeof fn !== 'function') {
            throw new Error('Argument must be a function!');
        }

        const id = setTimeout(() => {
                fn();
            }
            , RECEIVEDELAY);

        return () => {
            clearTimeout(id);
        }
    };

    const botMessage = (id, message) => {
        append(id, userMessage(Date.now(), toHHMMSS(Date.now()), message, NAMEBOT));
    };

    useEffect(() => {
        document.title = 'Chat Bot ver: ' + PROJECTVERSION;
    });

    useEffect(() => {

        const newChat = Array.from({
            length: 2,
        }).map(createChats);

        newChat[0].id = chatUuId;
        setChats(newChat);
        setCurrentChat(chatUuId);

    }, []);

    useEffect(() => {
        if (!messageList.length) {
            chatList.forEach(({id}) => {

                messageDelay(() => {
                    botMessage(id, 'Привет! я бот Петрович');
                });

                messageDelay(() => {
                    botMessage(id, 'Как к Вам обращаться?');
                });

            });
        }
    }, [chatList]);

    const didHello = (currentId) => {
        //const currentMessageList = messageList?.filter(({id}) => id === currentId);
        //console.log('currentMessageList ', currentMessageList);

        const currentMessageListLength = messageList?.filter(({id}) => id === currentId).length
        //console.log('currentMessageListLength ', currentMessageListLength);

        if (currentMessageListLength === 0) {

            messageDelay(() => {
                botMessage(currentId, 'Привет! я бот Петрович');
            });

            messageDelay(() => {
                botMessage(currentId, 'Как к Вам обращаться?');
            });

        }
    };

    useDidUpdate(() => {
        const messageListLength = messageList?.filter(({id}) => id === currentChat).length;

        if (messageListLength) {
            const userName = messageList?.filter(({id}) => id === currentChat)[messageListLength - 1].message[0].author;
            const userText = messageList?.filter(({id}) => id === currentChat)[messageListLength - 1].message[0].text;

            if (userName !== NAMEBOT) {
                messageDelay(() => {
                    botMessage(currentChat, 'Здравствуйте, ' + userText + '!')
                });

                messageDelay(() => {
                    botMessage(currentChat, 'Чем могу помочь?');
                });
            }
        }

    }, [messageList]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Header/>
                <Switch>
                    <Route path="/chats">
                        <Chats
                           /* chatList={chatList}
                            setChats={setChats}*/
                        />
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path='/home'>
                        <Home
                            projectVersion={PROJECTVERSION}
                            didHello={didHello}
                            // chatList={chatList}
                            setCurrentChat={setCurrentChat}
                            messageList={messageList}
                            nameBot={NAMEBOT}
                            inputFocus={inputRef}
                            onChange={inputHandler}
                            onClick={(event) => clickHandler(event)}
                            onKeyDown={(event) => keyHandler(event)}
                            value={message}
                        />
                    </Route>
                    <Route exact path="/">
                        <Home
                            projectVersion={PROJECTVERSION}
                            didHello={didHello}
                            // chatList={chatList}
                            setCurrentChat={setCurrentChat}
                            messageList={messageList}
                            nameBot={NAMEBOT}
                            inputFocus={inputRef}
                            onChange={inputHandler}
                            onClick={(event) => clickHandler(event)}
                            onKeyDown={(event) => keyHandler(event)}
                            value={message}
                        />
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
