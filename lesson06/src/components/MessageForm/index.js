import {useEffect, useRef} from "react";

import {useSimpleForm} from "../../hooks/useSimpleForm";
import {messagesConnect} from "../../connects/messages";

import {Input, Button} from "@material-ui/core";

import faker from "faker";
import {useStyles} from "./styles";
import propTypes from "prop-types";

const uuid = () => faker.datatype.uuid();

const toHHMMSS = (mseconds) => (
    new Date(mseconds)
        .toTimeString()
        .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
);

export const MessageFormRender = (props) => {
    const classes = useStyles();
    const inputFocus = useRef(null);

    useEffect(() => {
        inputFocus.current?.focus();
    }, [inputFocus]);

    const {setFieldValue, getFieldValue, resetForm} = useSimpleForm({});

    const handleSubmit = (event) => {
        event.preventDefault();

        //id, time, text, author
        const messagesItem = {
            chatId: props.chatId,
            id: uuid(),
            time: toHHMMSS(Date.now()),
            text: getFieldValue('message'),
            author: props.nameUser,
        };

        props.addMessage(messagesItem);

        inputFocus.current?.focus();

        resetForm();
    };

    return (
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
    );
};

MessageFormRender.propTypes = {
    chatId: propTypes.string.isRequired,
    nameUser: propTypes.string.isRequired,
};

export const MessageForm = messagesConnect(MessageFormRender);
