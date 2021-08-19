import {useState} from 'react';

export const useMessageList = () => {
    const [messageList, setMessageList] = useState([]);

    const append = (...messages) => {
        setMessageList((messageList) => {
            return [
                ...messageList,
                ...messages
            ];
        });
    };

    return [
        messageList,
        {
            append
        }
    ]
};
