import {useState, useEffect, useRef} from "react";

import {messagesApi} from "../../api/request/messages";

import {useSimpleForm} from "../../hooks/useSimpleForm";
import {Button, Input} from "@material-ui/core";

import {useStyles} from "./styles";
import propTypes from "prop-types";

const toHHMMSS = (mseconds) => (
    new Date(mseconds)
        .toTimeString()
        .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
);

export const MessageForm = (props) => {

    const [error, setError] = useState('');

    const classes = useStyles();
    const inputFocus = useRef(null);

    useEffect(() => {
        inputFocus.current?.focus();
    }, [inputFocus]);

    const {setFieldValue, getFieldValue, resetForm} = useSimpleForm({});

    const handleSubmit = async (event) => {
        event.preventDefault();

        //time, text, author
        const messagesItem = {
            chatId: props.chatId,
            time: toHHMMSS(Date.now()),
            text: getFieldValue('message'),
            author: props.nameUser,
        };

        // const messagesItem = {
        //     [props.chatId]: {
        //         time: toHHMMSS(Date.now()),
        //         text: getFieldValue('message'),
        //         author: props.nameUser,
        //     }
        // };

        inputFocus.current?.focus();

        setError(null);

        try {
            await messagesApi.create(messagesItem);
        } catch (error) {
            setError(error);
        }

        resetForm();
    };

    return (
        <>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                <Input
                    id="input__message"
                    className={classes.input}
                    placeholder="Input message and press Enter"
                    name="message"
                    type="text"
                    disableUnderline={true}
                    autoFocus={true}
                    inputRef={inputFocus}
                    value={getFieldValue('message')}
                    onChange={(event) => {
                        setFieldValue('message', event.target.value);
                    }}
                    label="Content"/>
                <Button
                    className={classes.button}
                    type="submit">
                    Send Message
                </Button>
            </form>
        </>
    );
};

MessageForm.propTypes = {
    chatId: propTypes.string,
    nameUser: propTypes.string.isRequired,
};
