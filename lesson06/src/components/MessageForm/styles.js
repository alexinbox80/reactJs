import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    footer: {
        display: 'flex',
        marginTop: 20,
        height: 25,
    },
    input: {
        width: '80%',
        height: 36,
        boxSizing: 'border-box',
        padding: '0 22px',
        borderTopLeftRadius: 23,
        borderBottomLeftRadius: 23,
        border: '1px solid rgb(0 0 0 / 10%)',
        color: 'rgb(0 0 0 / 60%)',
    },
    button: {
        width: '20%',
        height: 36,
        borderTopRightRadius: 23,
        borderBottomRightRadius: 23,
        border: '1px solid rgb(0 0 0 / 10%)',
        cursor: 'pointer',
        color: 'rgba(0 0 0 / 60%)',
    },
});
