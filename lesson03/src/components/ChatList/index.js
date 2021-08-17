import PropTypes from "prop-types";
import {ChatItem} from "../ChatItem";
import {List} from "@material-ui/core";
import styles from "./ChatList.module.sass";

export const ChatList = (props) => {
    return (
            <List className={styles.list}>
                <ChatItem chatList={props.chatList}/>
            </List>
    );
};

ChatList.propTypes = {
    chatList: PropTypes.array.isRequired,
};
