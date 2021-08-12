import './App.sass';
import {MessageList} from "./components/MessageList";

function App() {

    const [messageList, setMessageList] = useState([]);

    return (
        <div className="App">
            <MessageList messageList/>
        </div>
    );
}

export default App;
