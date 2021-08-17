import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

export const useStyles = makeStyles({
    title: {
        color: 'rgb(0 0 0 / 20%)',
        textAlign: 'center',
    },
});

export const MessageTitle = (props) => {
    const classes = useStyles();
    return (
        <h1 className={classes.title}>
            Chat Bot ver: {props.ver}
        </h1>
    );
};

MessageTitle.propTypes = {
    ver: PropTypes.string.isRequired,
};
