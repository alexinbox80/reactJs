import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {useSimpleForm} from "../../hooks/useSimpleForm";
import {messagesConnect} from "../../connects/messages";

import {TextField, Input, Button} from "@material-ui/core";

import faker from "faker";
import {useStyles} from "./styles";
import PropTypes from "prop-types";

const uuid = () => faker.datatype.uuid();

export const MessageFormRender = (props) => {
    const classes = useStyles();
    const {chatId} = useParams();

    useEffect(() => {
        props.inputFocus.current?.focus();
    }, [props.inputFocus]);

    const {setFieldValue, getFieldValue, resetForm} = useSimpleForm({});

    const handleSubmit = (event) => {
        event.preventDefault();

        const messagesItem = {
            chatId,
            id: uuid(),
            content: getFieldValue('message')
        }

        props.addMessage(messagesItem);

        console.log('messages ', props.messages);

        resetForm();
    }

    return (
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <TextField
                name="message"
                inputRef={props.inputFocus}
                value={getFieldValue('message')}
                onChange={(event) => {
                    setFieldValue('message', event.target.value);
                }}
                label="Content"/>
            <Button type="submit">Save</Button>
        </form>
        /*<div className={classes.footer}>
            <Input
                className={classes.input}
                id="input__message"
                placeholder="Input message and press Enter"
                type="text"
                autoFocus={true}
                inputRef={props.inputFocus}
                disableUnderline={true}
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
                value={props.value}
            />
            <Button
                className={classes.button}
                id="input__button"
                variant="outlined"
                onClick={props.onClick}>
                Send Message
            </Button>
        </div>
*/);
};

MessageFormRender.propTypes = {
    inputFocus: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export const MessageForm = messagesConnect(MessageFormRender);
