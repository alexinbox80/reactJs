import React, {useState, useEffect} from "react";
import faker from "faker";

import PropTypes from "prop-types";
import {List, ListItem, ListItemText} from "@material-ui/core";
import styles from "./Chats.module.sass";

const uuid = () => faker.datatype.uuid();

export const Chats = (props) => {

    const handleRemove = (id) => {
        const newList = props.chatList.filter((item) => item.id !== id);

        props.setChats(newList);
    };

    const handleAddButton = (value) => {

            const item = {
                id: uuid(),
                title: value.title,
                description: value.description,
                content: faker.lorem.paragraphs(),

            };

            props.chatList.push(item);

//????????
      //  props.setChats(props.chatList);

     ///   console.log(props.chatList);
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
                props.chatList.length ? props.chatList.map(({id, title, description}) =>
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

        /*<ChatForm>

            {
                (props) => {
                    return <div>
                        {
                            JSON.stringify(props.formValue)
                        }
                        <br/>
                        <input
                            onChange={(event) => {
                                const value = event.target.value;
                                props.setFieldValue('title', value);
                            }}
                            value={props.formValue['title'] || ''}
                            name="title"
                            type="text"
                        />
                        <br/>
                        <input
                            onChange={(event) => {
                                const value = event.target.value;
                                props.setFieldValue('description', value);
                            }}
                            value={props.formValue['description'] || ''}
                            name="description"
                            type="text"
                        />
                        <br/>
                        <button
                            type="button"
                            onClick={() => handleAddButton(props.formValue)}>
                            AddChat
                        </button>
                    </div>
                }
            }
        </ChatForm>
*/

    );
};

Chats.propTypes = {
    chatList: PropTypes.array.isRequired,
    setChats: PropTypes.func.isRequired,
};
