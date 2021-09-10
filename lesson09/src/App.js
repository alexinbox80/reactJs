import {useEffect, useRef} from "react";
import {initChatsTracking} from "./store/chats";
import {initMessagesTracking} from "./store/messages";

//import {store} from "./store";

import {Route, Switch} from "react-router-dom";
import styles from "./App.module.sass";

import {Header} from "./components/Header";

import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Async} from "./pages/Async";
import {Chats} from "./pages/Chats";
import {NoMatch} from "./pages/NoMatch";
import {SignUp} from "./pages/SignUp";
import {Login} from "./pages/Login";

import {useDispatch, useSelector} from "react-redux";
import {getIsAuth, initAuthAction} from "./store/user";
import {getChats} from "./store/chats/selectors";

import {PrivateRoute} from "./hocs/PrivateRoute";
import {PublicRoute} from "./hocs/PublicRoute";

const PROJECTVERSION = 'v0.9';
const NAMEBOT = 'bot';
const NAMEUSER = 'user';

function App() {

    const isAuth = useSelector(getIsAuth);

    const prevIsAuth = useRef(isAuth);

    const chats = useSelector((state) => getChats(state).chats);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuth !== prevIsAuth) {
            dispatch(initChatsTracking);
            dispatch(initMessagesTracking);
        }
    }, [isAuth]);

    useEffect(() => {
        dispatch(initAuthAction);
    }, []);

    useEffect(() => {
        document.title = 'Chat Bot ver: ' + PROJECTVERSION;
    });

    const RemoveMessages = (id) => {
        //store.dispatch(createActionRemoveMessages(id));
        console.log('RemoveMessages ', id);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Header/>
                <Switch>
                    <PrivateRoute auth={isAuth} path="/chats">
                        <Chats chats={chats} removeMessages={RemoveMessages}/>
                    </PrivateRoute>
                    <PrivateRoute auth={isAuth} path="/profile" component={Profile}/>
                    <Route path="/async" component={Async}/>
                    <PublicRoute auth={isAuth} path="/signup" component={SignUp}/>
                    <PublicRoute auth={isAuth} path="/login" component={Login}/>
                    <PrivateRoute auth={isAuth} path="/home/:chatId">
                        <Home
                            chats={chats}
                            projectVersion={PROJECTVERSION}
                            nameBot={NAMEBOT}
                            nameUser={NAMEUSER}
                        />
                    </PrivateRoute>
                    <PrivateRoute auth={isAuth} exact path="/">
                        <Home
                            chats={chats}
                            projectVersion={PROJECTVERSION}
                            nameBot={NAMEBOT}
                            nameUser={NAMEUSER}
                        />
                    </PrivateRoute>
                    <PublicRoute auth={isAuth} path="*">
                        <NoMatch/>
                    </PublicRoute>
                </Switch>
            </div>
        </div>
    );
}

export default App;
