import React, {useState, useEffect} from "react";
import {Link as RouterLink, Route} from "react-router-dom";

import {Grid, Padding} from "@material-ui/core";
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
};
