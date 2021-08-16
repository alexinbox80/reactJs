import {useRef, useEffect} from  "react";
import styles from "./MessageForm.module.sass";
import PropTypes from 'prop-types';

export const MessageForm = (props) => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className={styles.footer}>
            <input
                className={styles.footer__input}
                type="text"
                placeholder="Input message and press Enter"
                ref={inputRef}
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

MessageForm.propTypes = {
    value: PropTypes.string.isRequired
};
