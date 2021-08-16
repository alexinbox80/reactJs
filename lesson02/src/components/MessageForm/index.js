import styles from "./MessageForm.module.sass";

export const MessageForm = (props) => {
    return (
        <div className={styles.footer}>
            <input
                className={styles.footer__input}
                type="text"
                placeholder="Input message and press Enter"
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
