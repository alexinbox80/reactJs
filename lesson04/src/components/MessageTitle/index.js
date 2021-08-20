import {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const TITLE = 'Chat Bot ver: ';

export const useStyles = makeStyles({
    title: {
        color: 'rgb(0 0 0 / 20%)',
        textAlign: 'center',
    },
});

export const MessageTitle = (props) => {
    const classes = useStyles();

    useEffect(() => {
        document.title = TITLE + props.ver;
    }, []);

    return (
        <h1 className={classes.title}>
            {TITLE + props.ver}
        </h1>
    );
};

MessageTitle.propTypes = {
    ver: PropTypes.string.isRequired,
};
