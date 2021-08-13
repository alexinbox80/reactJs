import styles from './App.module.sass';
import {MessageForm} from './components/MessageForm';
import {MessageList} from './components/MessageList';
function App() {

    return (
        <div className={styles.position}>
            <MessageForm />
            <MessageList />
        </div>
    );
}

export default App;
