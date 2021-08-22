import {useState} from 'react';

export const useMessageList = () => {
    const [messageList, setMessageList] = useState([]);

    const append = (id,...messages) => {
        setMessageList((messageList) => {
            return [
                ...messageList,
                {
                    chatId:id,
                    message:{...messages},
                }
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
