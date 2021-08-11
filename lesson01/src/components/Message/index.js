import React from 'react';
import styles from './Message.module.sass'; // Import css modules stylesheet as styles

export const Message = (props) => {
    return (
        <div className={styles.position}>
            Received message is <span className={styles.color}> {props.text}</span>
        </div>
    );
};
