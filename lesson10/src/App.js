import {useEffect, useRef} from "react";
import {initChatsTracking} from "./store/chats";
import {initMessagesTracking} from "./store/messages";
import {initProfileTracking, profileSelectors} from "./store/profile";

import {Switch} from "react-router-dom";
import styles from "./App.module.sass";

import {Header} from "./components/Header";

import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Chats} from "./pages/Chats";
import {NoMatch} from "./pages/NoMatch";
import {SignUp} from "./pages/SignUp";
import {Login} from "./pages/Login";

import {useDispatch, useSelector} from "react-redux";
import {getIsAuth, getUser, initAuthAction} from "./store/user";
import {getChats} from "./store/chats/selectors";

import {PrivateRoute} from "./hocs/PrivateRoute";
import {PublicRoute} from "./hocs/PublicRoute";

const PROJECTVERSION = 'v0.10';
let NAMEUSER = 'user';

function App() {

    const isAuth = useSelector(getIsAuth);

    const prevIsAuth = useRef(isAuth);

    const chats = useSelector((state) => getChats(state).chats);

    const dispatch = useDispatch();

    const currentUser = useSelector((state) => getUser(state));

    const profile = useSelector((state) => profileSelectors.getProfile(state));

    const profileExist = profile.find((item) => item.uid === currentUser.uid);

    if (profileExist?.userName) {
        NAMEUSER = profileExist.userName;
    }

    useEffect(() => {
        if (isAuth !== prevIsAuth.current) {
            dispatch(initChatsTracking);
            dispatch(initMessagesTracking);
            if(currentUser.uid) {
                dispatch(initProfileTracking(currentUser.uid));
            }
        }
    }, [isAuth]);

    useEffect(() => {
        dispatch(initAuthAction);
    }, []);

    useEffect(() => {
        document.title = 'Chat Bot ver: ' + PROJECTVERSION;
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Header/>
                <Switch>
                    <PrivateRoute auth={isAuth} path="/chats">
                        <Chats chats={chats}/>
                    </PrivateRoute>
                    <PrivateRoute auth={isAuth} path="/profile" component={Profile}/>
                    <PublicRoute auth={isAuth} path="/signup" component={SignUp}/>
                    <PublicRoute auth={isAuth} path="/login" component={Login}/>
                    <PrivateRoute auth={isAuth} path="/home/:chatId">
                        <Home
                            chats={chats}
                            projectVersion={PROJECTVERSION}
                            nameUser={NAMEUSER}
                        />
                    </PrivateRoute>
                    <PrivateRoute auth={isAuth} exact path="/">
                        <Home
                            chats={chats}
                            projectVersion={PROJECTVERSION}
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
