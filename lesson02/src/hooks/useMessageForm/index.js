import {useState} from "react";

export const useMessageForm = () => {

    const [message, setMessage] = useState('');

    return {
        message,
        setMessage
    };

};