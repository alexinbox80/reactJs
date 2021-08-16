import {useEffect} from "react";
import styles from "./App.module.sass";
import {MessageTitle} from "./components/MessageTitle";
import {useMessageForm} from "./hooks/useMessageForm";
import {MessageForm} from "./components/MessageForm";
import {useMessageList} from "./hooks/useMessageList";
import {MessageList} from "./components/MessageList";
import {useDidUpdate} from "./hooks/useDidUpdate";

const userMessage = (id, time, text, author) => ({
        id,
        time,
        text,
        author
    }
);

const RECEIVEDELAY = 1500;

function App() {

    const {message, setMessage} = useMessageForm();
    const [messageList, {append}] = useMessageList([]);

    const inputHandler = (event) => {
        setMessage(event.target.value);
    };

    const toHHMMSS = (mseconds) => (new Date(mseconds).toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1"));

    const clickHandler = () => {
        if (message.length > 0) {
            append(userMessage(Date.now(), toHHMMSS(Date.now()), message, 'user'));
            setMessage('');
        }
    };

    const keyHandler = (event) => {
        if (event.key === 'Enter') {
            if (message.length > 0) {
                append(userMessage(Date.now(), toHHMMSS(Date.now()), message, 'user'));
                setMessage('');
            }
        }
    };

    const messageDelay = (fn) => {
        const id = setTimeout(() => {
                if (typeof (fn) !== 'function') {
                    console.warn('fn is not a function!');
                    return undefined;
                }
                fn();
            }
            , RECEIVEDELAY);

        return () => {
            clearTimeout(id);
        }
    }

    const botMessage = (message) => {
        append(userMessage(Date.now(), toHHMMSS(Date.now()), message, 'bot'));
    }

    useEffect(() => {
        messageDelay(() => {
            botMessage('Привет! я бот Петрович')
        });
        messageDelay(() => {
            botMessage('Как к Вам обращаться?')
        });
    }, []);

    useDidUpdate(() => {
        const userName = messageList[messageList.length - 1].author;

        if (userName !== 'bot') {
            const userText = messageList[messageList.length - 1].text;
            messageDelay(() => {
                botMessage('Здравствуйте, ' +  userText +' !')
            });

            messageDelay(() => {
                botMessage('Чем могу помочь?');
            });
        }
    }, [messageList]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <MessageTitle/>
                    <MessageList
                        messageList={messageList}
                    />
                </div>
                <MessageForm
                    onChange={inputHandler}
                    onClick={(e) => clickHandler(e)}
                    onKeyDown={(e) => keyHandler(e)}
                    value={message}
                />
            </div>
        </div>
    );
}

export default App;
