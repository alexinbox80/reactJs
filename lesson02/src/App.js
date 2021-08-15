import {useEffect, useRef} from "react";
import styles from "./App.module.sass";
import {useMessageForm} from "./hooks/useMessageForm";
import {useMessageList} from "./hooks/useMessageList";
//import {useMessageList} from "./hooks/useMessageList";

const userMessage = (id, time, text, author) => ({
        id,
        time,
        text,
        author
    }
);

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

    const MessageTitle = () => {
        return (
            <h1 className={styles.header__title}>Chat Bot ver:0.1</h1>
        );
    };

    const MessageDesk = (props) => {

        const messagesEndRef = useRef(null);
        const scrollToBottom = () => {
            messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
        };

        useEffect(() => {
            scrollToBottom()
        }, [props.messageList]);


        if (props.messageList.length > 0) {
            console.dir(props.messageList);
            //scrollToRef("last");
        }

        return (
            <div className={styles.message__list}>
                <ul>
                    {
                       /* props.messageList.map(({id, time, text, author}) => (
                            <li className={styles.message__user} key={id}>
                                <h3>name: {author}</h3>
                                <p>message: {text}</p>
                                <p>time: {time}</p>
                                <p>id: {id}</p>
                            </li>
                        ))*/


                        props.messageList.map(({id, time, text, author}) => (
                            <li className={styles.message__user} key={id}>
                                <p className={styles.message__text}>{text}</p>
                                <span className={styles.message__time} >{time}</span>
                            </li>
                        ))
                    }
                </ul>
                <div ref={messagesEndRef}/>
            </div>
        );

    };

    const MessageForm = (props) => {
        return (
            <div className={styles.footer}>
                <input
                    className={styles.footer__input}
                    type="text"
                    placeholder="Input message"
                    onChange={props.onChange}
                    onKeyDown={props.onKeyDown}
                    value={props.value}
                />
                <button
                    className={styles.footer__button}
                    type="button"
                    onClick={props.onClick}>
                    Send Message
                </button>
            </div>
        );
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <MessageTitle/>
                    <MessageDesk
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
