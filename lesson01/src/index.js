import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const text = 'Hello world!';

ReactDOM.render(
  <React.StrictMode>
    <App text={text} />
  </React.StrictMode>,
  document.getElementById('root')
);


