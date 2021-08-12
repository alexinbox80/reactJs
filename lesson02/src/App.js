import './App.sass';
import {Message} from './components/Message';

function App(props) {
    return (
        <div className="App">
            <Message text={ props.text }/>
        </div>
    );
}

export default App;
