import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./Profile.module.sass";

import {List, ListItem, ListItemText, Checkbox} from "@material-ui/core";
import {createActionCreateCheckbox, createActionToggleCheckbox} from "../../store/profile/actions";

export const Profile = (props) => {
    const checkBox = useSelector((state) => state.checkBox);

    const dispatch = useDispatch();

    const AddCheckbox = () => {

        useEffect(() => {
            if (!checkBox.length) {
                dispatch(createActionCreateCheckbox({status: false}));
            }
        });

        return (
            <>
                ProfilePage
            </>
        );
    };

    return (
        <List className={styles.content}>
            <AddCheckbox />
            {
                checkBox.map(({status}) => <ListItem key="0">
                    <ListItemText primary="checkbox"/>
                    <Checkbox
                        checked={status}
                        onChange={() => {
                            dispatch(createActionToggleCheckbox(!status))
                        }}
                        inputProps={{'aria-label': 'primary checkbox'}}
                    />
                </ListItem>)
            }
        </List>
    );
};
