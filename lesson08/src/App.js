import {useEffect} from "react";
import {createActionRemoveMessages} from "./store/messages";

import {store} from "./store";

import {Route, Switch} from "react-router-dom";
import styles from "./App.module.sass";

import {Header} from "./components/Header";

import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Async} from "./pages/Async";
import {Gists} from "./pages/Gists";
import {Chats} from "./pages/Chats";
import {NoMatch} from "./pages/NoMatch";

const PROJECTVERSION = 'v0.8';
const NAMEBOT = 'bot';
const NAMEUSER = 'user';

function App() {
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
                    <Route path="/chats">
                        <Chats removeMessages={RemoveMessages}/>
                    </Route>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/async" component={Async}/>
                    <Route path="/gists" component={Gists}/>
                    <Route path="/home/:chatId">
                        <Home
                            projectVersion={PROJECTVERSION}
                            nameBot={NAMEBOT}
                            nameUser={NAMEUSER}
                        />
                    </Route>
                    <Route exact path="/">
                        <Home
                            projectVersion={PROJECTVERSION}
                            nameBot={NAMEBOT}
                            nameUser={NAMEUSER}
                        />
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
