import {useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import styles from "./App.module.sass";

import {Header} from "./components/Header";

import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Chats} from "./pages/Chats";
import {NoMatch} from "./pages/NoMatch";

const PROJECTVERSION = 'v0.6';
const NAMEBOT = 'bot';
const NAMEUSER = 'user';

function App() {
    useEffect(() => {
        document.title = 'Chat Bot ver: ' + PROJECTVERSION;
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Header/>
                <Switch>
                    <Route path="/chats" component={Chats}/>
                    <Route path="/profile" component={Profile}/>
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
