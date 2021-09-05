import React from "react";

import {profileConnect} from "../../connects/profile";

import styles from "./Profile.module.sass";

import faker from "faker";

import {Button, Checkbox, List, ListItem, ListItemText} from "@material-ui/core";

export const ProfileRender = ({profile, createCheckbox, toggleCheckbox, deleteCheckbox, deleteChooseCheckbox}) => {
    //console.log(profile);

    const addCheckboxHandler = () => {
        const uuid = () => faker.datatype.uuid();

        createCheckbox({
            id: uuid(),
            status: false,
        });

    };

    const deleteCheckboxHandler = (id) => {
        deleteCheckbox(id);
    };

    const deleteChooseCheckboxHandler = () => {
        deleteChooseCheckbox(true);
    };

    return (
        <List className={styles.content}>

            {
                profile.map(({id, status}) => <ListItem key={id}>
                        <ListItemText primary={`checkbox ${id}`} secondary={id}/>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                deleteCheckboxHandler(id)
                            }}
                        >
                            delete Checkbox
                        </Button>
                        <Checkbox
                            checked={status}
                            onChange={() => {
                                toggleCheckbox(id, !status);
                            }}
                            inputProps={{'aria-label': 'primary checkbox'}}
                        />
                    </ListItem>
                )
            }

            <ListItem key='0'>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        addCheckboxHandler()
                    }}
                >
                    add Checkbox
                </Button>
                &nbsp;
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        deleteChooseCheckboxHandler()
                    }}
                >
                    Delete Choose Checkbox
                </Button>
            </ListItem>
        </List>
    );
};

export const Profile  = profileConnect(ProfileRender);
