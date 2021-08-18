import {useRef, useEffect} from "react";
import styles from "./App.module.sass";

import {useMessageForm} from "./hooks/useMessageForm";
import {useMessageList} from "./hooks/useMessageList";
import {useDidUpdate} from "./hooks/useDidUpdate";

import {MessageTitle} from "./components/MessageTitle";
import {MessageForm} from "./components/MessageForm";
import {MessageList} from "./components/MessageList";
import {ChatList} from "./components/ChatList";

const userMessage = (id, time, text, author) => ({
    id,
    time,
    text,
    author
});

const chatList = [
    {id: 1, name: '1st chat room'},
    {id: 2, name: '2nd chat room'},
    {id: 3, name: '3rd chat room'},
    {id: 4, name: '4th chat room'},
    {id: 5, name: '5th chat room'},
];

const PROJECTVERSION = 'v0.2';
const RECEIVEDELAY = 1500;
const NAMEBOT = 'bot';
const NAMEUSER = 'user';

function App() {

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
        if (message.length > 0) {
            append(userMessage(Date.now(), toHHMMSS(Date.now()), message, NAMEUSER));
            setMessage('');

            inputRef.current?.focus();
        }
    };

    const keyHandler = (event) => {
        if (event.key === 'Enter') {
            if (message.length) {
                append(userMessage(Date.now(), toHHMMSS(Date.now()), message, NAMEUSER));
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

    const botMessage = (message) => {
        append(userMessage(Date.now(), toHHMMSS(Date.now()), message, NAMEBOT));
    };

    useEffect(() => {
        if(messageList.length === 0) {
            messageDelay(() => {
                botMessage('Привет! я бот Петрович');
            });

            messageDelay(() => {
                botMessage('Как к Вам обращаться?');
            });
        }
    }, [messageList]);

    useDidUpdate(() => {
        const userName = messageList[messageList.length - 1].author;

        if (userName !== NAMEBOT) {
            const userText = messageList[messageList.length - 1].text;
            messageDelay(() => {
                botMessage('Здравствуйте, ' + userText + ' !')
            });

            messageDelay(() => {
                botMessage('Чем могу помочь?');
            });
        }
    }, [messageList]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div>
                    <MessageTitle ver={PROJECTVERSION}/>
                    <div className={styles.body}>
                        <ChatList className={styles.chat} chatList={chatList}/>
                        <MessageList className={styles.list}
                            messageList={messageList}
                            nameBot={NAMEBOT}
                        />
                    </div>
                </div>
                <MessageForm
                    inputFocus={inputRef}
                    onChange={inputHandler}
                    onClick={(event) => clickHandler(event)}
                    onKeyDown={(event) => keyHandler(event)}
                    value={message}
                />
            </div>
        </div>
    );
}

export default App;
