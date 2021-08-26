import React from "react";
import {useDispatch, useSelector} from "react-redux"
import styles from "./Profile.module.sass"

//import {profileReducer} from "../../store/profile/reduce";

import {List, ListItem, ListItemText, Checkbox} from "@material-ui/core";

export const Profile = (props) => {
    //const initialState = useSelector((state) => state.initialState);
    //const dispatch = useDispatch();

    return (
        <List className={styles.content}>
            {
                //initialState.map(({id, status}) => (console.log(id, status)));
            }
            ProfilePage
            <ListItem>
                <ListItemText primary="checkbox"/>
                <Checkbox
                    checked={false}
                    onChange={() => {
                        //
                    }}
                    inputProps={{'aria-label': 'primary checkbox'}}
                />
            </ListItem>
        </List>
    );
};
