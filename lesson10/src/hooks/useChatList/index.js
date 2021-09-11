import {useState} from 'react';

export const useChatList = () => {
    const [chatList, setChatList] = useState([]);

    const chatAdd = (...name) => {
        setChatList((chatList) => {
            return [
                ...chatList,
                ...name
            ];
        });
    };

    return [
        chatList,
        {
            chatAdd
        }
    ]
};
