import React, {useState} from "react";
import {chatsConnect} from "../../connects/chats";

import faker from "faker";

import propTypes from "prop-types";

import {List, ListItem, ListItemText} from "@material-ui/core";
import styles from "./Chats.module.sass";

const uuid = () => faker.datatype.uuid();

export const ChatsRender = ({chats, addChats, removeChats, removeMessages}) => {

    const handleRemove = (id) => {
        removeChats(id);
        removeMessages(id);
    };

    const handleAddButton = (value) => {
        const item = {
            id: uuid(),
            title: value.title,
            description: value.description,
            content: faker.lorem.paragraphs(),
        };

        if (value.title) {
            addChats(item);
        }
    };

    const ChatForm = ({render, children}) => {
        const [formValue, setFormValue] = useState({});

        const setFieldValue = (name, value) => {
            setFormValue(
                {
                    ...formValue,
                    [name]: value,
                }
            );
        };

        const getFieldValue = (name) => formValue[name];

        const resetForm = () => {
            setFormValue({})
        };

        const props = {
            getFieldValue,
            setFieldValue,
            resetForm,
            formValue,
        };

        if (render && typeof render === 'function') {
            return render(props);
        }

        if (children && typeof children === 'function') {
            return children(props);
        }

        return null;
    };

    return (
        <List className={styles.content}>
            {
                chats.length ? chats.map(({id, title, description}) =>
                    <ListItem key={id}>
                        <ListItemText primary={id}/>
                        <ListItemText primary={title}/>
                        <ListItemText primary={description}/>
                        <button type="button" onClick={() => handleRemove(id)}>
                            Remove Chat
                        </button>
                    </ListItem>
                ) : null
            }
            <ChatForm>
                {
                    (props) => {
                        return <div>
                            <input
                                onChange={(event) => {
                                    const value = event.target.value;
                                    props.setFieldValue('title', value);
                                }}
                                value={props.formValue['title'] || ''}
                                name="title"
                                type="text"
                            />
                            &nbsp;
                            <input
                                onChange={(event) => {
                                    const value = event.target.value;
                                    props.setFieldValue('description', value);
                                }}
                                value={props.formValue['description'] || ''}
                                name="description"
                                type="text"
                            />
                            &nbsp;
                            <button
                                type="button"
                                onClick={() => {
                                    handleAddButton(props.formValue);
                                    props.resetForm();
                                }}>
                                AddChat
                            </button>
                        </div>
                    }
                }
            </ChatForm>
        </List>
    );
};

ChatsRender.propTypes = {
    chats: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        title: propTypes.string,
        description: propTypes.string,
        content: propTypes.string,
    }))
};

export const Chats = chatsConnect(ChatsRender);
