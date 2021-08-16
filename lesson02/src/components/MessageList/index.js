import {useEffect, useRef} from "react";
import styles from "./MessageList.module.sass";

export const MessageList = (props) => {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
    };

    useEffect(() => {
        scrollToBottom()
    }, [props.messageList]);

    return (
        <div className={styles.message__list}>
            <ul>
                {
                    props.messageList.map(({id, time, text, author}) => (
                        <li className={
                            author === 'user'? styles.message__user: styles.message__bot
                        } key={id}>
                            <p className={styles.message__text}>{text}</p>
                            <span className={styles.message__time}>{time}</span>
                        </li>
                    ))
                }
            </ul>
            <div ref={messagesEndRef}/>
        </div>
    );
};
