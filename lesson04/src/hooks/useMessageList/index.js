import {useState} from 'react';

export const useMessageList = () => {
    const [messageList, setMessageList] = useState([]);

    const append = (id, ...message) => {
        setMessageList((messageList) => {
            return [
                ...messageList,
                {
                    id,
                    message: {...message}
                }
                /* {
                     chatId:id,
                     message:{...messages},
                 }*/
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
