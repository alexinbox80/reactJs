import React  from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            <Link
                component={RouterLink}
                color="inherit"
                noWrap
                key="home"
                varint="body2"
                to="/"
                className={classes.toolbarLink}
            >
                home
            </Link>
            <Link
                component={RouterLink}
                color="inherit"
                noWrap
                key="profile"
                varint="body2"
                to="/profile"
                className={classes.toolbarLink}
            >
                profile
            </Link>
            <Link
                component={RouterLink}
                color="inherit"
                noWrap
                key="chats"
                varint="body2"
                to="/chats"
                className={classes.toolbarLink}
            >
                chats
            </Link>
        </Toolbar>
    );
};
