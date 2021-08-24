import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {Input, Button} from "@material-ui/core";
import {useStyles} from "./styles";

import PropTypes from "prop-types";

export const MessageForm = (props) => {
    const classes = useStyles();
    const {chatId} = useParams();

    //console.log('MessageForm chatId ', chatId);

    useEffect(() => {
        props.inputFocus.current?.focus();
    }, [ props.inputFocus]);

    return (
        <div className={classes.footer}>
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
    );
};

MessageForm.propTypes = {
    inputFocus: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};
