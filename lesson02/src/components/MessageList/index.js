import {useEffect, useRef} from "react";
import styles from "./MessageList.module.sass";

export const MessageList = ({messageList, nameBot}) => {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
    };

    useEffect(() => {
        scrollToBottom()
    }, [messageList]);

    return (
        <div className={styles.message__list}>
            <ul>
                {
                    messageList.map(({id, time, text, author}) => (
                        <li className={
                            author === nameBot? styles.message__bot: styles.message__user
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
