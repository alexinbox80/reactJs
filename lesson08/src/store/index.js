import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import {persistReducer, persistStore} from "redux-persist";
//import {persistReducer} from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import {chatsReducer} from "./chats";
import {messagesReducer} from "./messages";
import {profileReducer} from "./profile";
import {asyncReducer} from "./async";

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer,
    async: asyncReducer,
});

/**
 * либо берем функцию compose из redux devtools либо из библиотеки redux
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistReducer(persistConfig, rootReducer), composeEnhancers(
    applyMiddleware(thunk),
));

export const persistor = persistStore(store);
