import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';          //Import Bootstrap before custom CSS

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.Fragment>
        <App />
    </React.Fragment>,
  document.getElementById('root')
);

reportWebVitals();
