import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import styles from "./Async.module.sass";

import {
    createAddMessageRequest,
    createRemoveMessageRequest,
    getMessagesLoadingStatusSelector,
    getMessagesSelector
} from "../../store/async";

const SendMessageForm = ({value, isLoading, onSubmit, onChange}) => {

    return (<div>
        <input value={value} onChange={onChange} type="text"/>
        <button onClick={onSubmit}>send</button>
        {
            isLoading && <div>
                loading...
            </div>
        }
    </div>)
};

const SendMessageFormHOC = (Component) => {

    return ({onSend, ...rest}) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [value, setValue] = useState('');

        const resetValue = () => setValue('');

        const onChange = (event) => setValue(event.target.value);

        const onSubmit = () => {
            onSend(value);
            resetValue()
        };

        return <Component value={value} onChange={onChange} onSubmit={onSubmit} {...rest}/>
    }
};

const SendMessageFormWithHOC = SendMessageFormHOC(SendMessageForm);

const MessageItem = ({message, onRemove}) => (<div
    className={styles.messageItem}
>{message}
    <button onClick={onRemove}>x</button>
</div>);

const MessageList = ({messages, onRemove}) => (<div className={styles.messageList}>
    {
        messages.map(({message, id}) => <MessageItem key={id} message={message} onRemove={onRemove(id)}/>)
    }
</div>);

export const Async = () => {

    const messages = useSelector(getMessagesSelector);
    const isLoading = useSelector(getMessagesLoadingStatusSelector);
    const dispatch = useDispatch();

    const onRemove = (id) => () => dispatch(createRemoveMessageRequest(id));
    const onAddMessage = (message) => {
        const fn = createAddMessageRequest({message, id: Date.now()});
        dispatch(fn);
    };

    return (
        <div className={styles.content}>
            <SendMessageFormWithHOC isLoading={isLoading} onSend={onAddMessage}/>
            <MessageList messages={messages} onRemove={onRemove}/>
        </div>
    );
};
