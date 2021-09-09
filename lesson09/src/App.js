import {useEffect} from "react";
import {createActionRemoveMessages} from "./store/messages";

import {store} from "./store";

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

import {PrivateRoute} from "./hocs/PrivateRoute";
import {PublicRoute} from "./hocs/PublicRoute";
import {initChatsTracking} from "./store/chats";

const PROJECTVERSION = 'v0.9';
const NAMEBOT = 'bot';
const NAMEUSER = 'user';

function App() {

    const isAuth = useSelector(getIsAuth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initAuthAction);
        dispatch(initChatsTracking);
    }, []);

    useEffect(() => {
        document.title = 'Chat Bot ver: ' + PROJECTVERSION;
    });

    const RemoveMessages = (id) => {
        store.dispatch(createActionRemoveMessages(id));
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Header/>
                <Switch>
                    <PrivateRoute auth={isAuth} path="/chats">
                        <Chats removeMessages={RemoveMessages}/>
                    </PrivateRoute>
                    <PrivateRoute auth={isAuth} path="/profile" component={Profile}/>
                    <Route path="/async" component={Async}/>
                    <PublicRoute auth={isAuth} path="/signup" component={SignUp}/>
                    <PublicRoute auth={isAuth} path="/login" component={Login}/>
                    <PrivateRoute auth={isAuth} path="/home/:chatId">
                        <Home
                            projectVersion={PROJECTVERSION}
                            nameBot={NAMEBOT}
                            nameUser={NAMEUSER}
                        />
                    </PrivateRoute>
                    <PrivateRoute auth={isAuth} exact path="/">
                        <Home
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
