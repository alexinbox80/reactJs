import {createStore, combineReducers} from "redux";
import {chatsReducer} from "./chats";
import {messagesReducer} from "./messages";
import {profileReducer} from "./profile";

const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
