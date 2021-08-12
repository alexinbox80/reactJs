import React, {useState} from 'react';


export const setMessageList = (props) => {

    const [messageList, setMessageList] = useState([]);

    const append = (...messageList) => {
        setMessageList((state) => {
            return [
                ...state,
                {text: props.text, author: props.author},
            ]
        })
    };

    return [
        messageList,
        {
            setMessageList,
        }
    ]
};