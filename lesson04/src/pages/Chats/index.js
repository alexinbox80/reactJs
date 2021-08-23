/*import React, {useState, useEffect} from "react";
import {Link as RouterLink, Route} from "react-router-dom";

import {Grid} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import styles from "./Chats.module.sass";

import faker from "faker";
import {Chat} from "../Chat";

const createChats = () => ({
    id: faker.datatype.uuid(),
    title: faker.lorem.word(),
    description: faker.lorem.words(),
    content: faker.lorem.paragraphs(),
});

export const Chats = (props) => {
    const [chats, setChats] = useState([]);

    useEffect(() => {

        const newChat = Array.from({
            length: 5,
        }).map(createChats);

        setChats(newChat);

    }, []);

    return (
        <div className={styles.content}>
            <Grid container>
                <Grid item xl={3}>
                    <List>
                        {
                            chats.map(({title, id}) =>
                                <ListItem key={id} component={RouterLink} to={`/chats/${id}`}>
                                    <ListItemText primary={title}/>
                                </ListItem>
                            )
                        }
                    </List>
                </Grid>
                <Grid item xl={9}>
                    <Route path='/chats/:chatId'>
                        <Chat chats={chats}/>
                    </Route>
                </Grid>
            </Grid>
        </div>
    );
};*/

import React, {useEffect, useState} from "react";
//import {useEffect} from "react";

import styles from "./Chats.module.sass";
import faker from "faker";
import {ListItem} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";
import {ChatItem} from "../../components/ChatItem";

const uuid = () => faker.datatype.uuid();

const createChats = () => ({
    id: uuid(),
    title: faker.lorem.word(),
    description: faker.lorem.words(),
    content: faker.lorem.paragraphs(),
});

// const initialList = [
//     {
//         id: 'a',
//         firstname: 'Robin',
//         lastname: 'Wieruch',
//         year: 1988,
//     },
//     {
//         id: 'b',
//         firstname: 'Dave',
//         lastname: 'Davidds',
//         year: 1990,
//     },
// ];

export const Chats = () => {
    const [chats, setChats] = useState({});

    useEffect(() => {

        if (!chats.length) {

            const newChat = Array.from({
                length: 1,
            }).map(createChats);

            setChats(newChat);
        }

    }, [chats]);

    // const handleRemove = (id) => {
    //     const newList = list.filter((item) => item.id !== id);
    //
    //     setList(newList);
    // }

    const handleAddButton = (value) => {
        console.log('Add ', value);

        // useEffect(() => {
        // const newList = list.push({
        //     id: 'c',
        //     firstname: 'Cave',
        //     lastname: 'Cavidds',
        //     year: 1999,
        // });

        // setList(newList);
        // },[list]);


        // console.log('list ', list);
    }


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

        const props = {
            setFieldValue,
            getFieldValue,
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

    const ChatsList = () => {
        if (chats.length) {
            chats.forEach(({id, title, description, content}) => {
                console.log(id);
                console.log(title);
                console.log(description);
                console.log(content);
            });
        }
        return (
            <div>
                Test
            </div>
        );
    }

    return (
        <>
            <div className={styles.content}>
                <ChatsList/>
                {
                    chats.length ? chats.forEach(({id, title}) =>
                        <div>
                            {id}
                            {title}
                        </div>
                    ) : null
                }
                RenderProps
                <ChatForm>
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
                                        props.setFieldValue('name', value);
                                    }}
                                    value={props.formValue['name'] || ''}
                                    name="name"
                                    type="text"
                                />
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
                                <button
                                    type="button"
                                    onClick={() => handleAddButton(props.formValue)}>
                                    AddChat
                                </button>
                            </div>
                        }
                    }
                </ChatForm>
            </div>


            {/*  <button type="button" onClick={() => handleAdd()}>
                Add
            </button>
            <ul className={styles.content}>
                {list.map((item) => (
                    <li key={item.id}>
                        <span>{item.firstname}</span>
                        <span>{item.lastname}</span>
                        <span>{item.year}</span>
                        <button type="button" onClick={() => handleRemove(item.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>*/}
        </>
    );
};