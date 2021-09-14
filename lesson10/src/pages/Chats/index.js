import React, {useState} from "react";
import {useSelector} from "react-redux";

import {chatsApi} from "../../api/request/chats";
import {getChatLoading} from "../../store/chats/selectors";

import faker from "faker";

import propTypes from "prop-types";

import {List, ListItem, ListItemText} from "@material-ui/core";
import styles from "./Chats.module.sass";
import {messagesApi} from "../../api/request/messages";

export const ChatsTextIDs = {
    title: 'Chats_title',
    titleField: 'Chats_titleField',
    descriptionField: 'Chats_descriptionField',
    clickButton: 'Chats_clickButton'
};

export const Chats = ({chats}) => {

    const [error, setError] = useState('');

    const isLoading = useSelector(getChatLoading);

    const handleRemove = async (id) => {
        setError(null);

        try {
            await chatsApi.delete(id);
            await messagesApi.delete(id);
        } catch (err) {
            setError(err);
        }

    };

    const handleAddButton = async (value) => {
        const item = {
            title: value.title,
            description: value.description,
            content: faker.lorem.paragraphs(),
        };

        if (value.title) {

            setError(null);

            try {
                await chatsApi.create(item);
            } catch (err) {
                setError(err);
            }
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
        <>
            <h1 data-testid={ChatsTextIDs.title}>
                Page For Add Chat.
            </h1>
            <List className={styles.content}>
                {
                    chats.length ? chats?.map(({id, title, description}) =>
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
                                    data-testid={ChatsTextIDs.titleField}
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
                                    data-testid={ChatsTextIDs.descriptionField}
                                    onChange={(event) => {
                                        const value = event.target.value;
                                        props.setFieldValue('description', value);
                                    }}
                                    value={props.formValue['description'] || ''}
                                    name="description"
                                    type="text"
                                />
                                &nbsp;
                                {error && <p>{error}</p>}
                                <button
                                    data-testid={ChatsTextIDs.clickButton}
                                    type="button"
                                    onClick={() => {
                                        handleAddButton(props.formValue);
                                        props.resetForm();
                                    }}>
                                    AddChat
                                </button>
                                {
                                    isLoading && <div>
                                        loading...
                                    </div>
                                }
                            </div>
                        }
                    }
                </ChatForm>
            </List>
        </>
    );
};

Chats.propTypes = {
    chats: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        title: propTypes.string,
        description: propTypes.string,
        content: propTypes.string,
    }))
};

