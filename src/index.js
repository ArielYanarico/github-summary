import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/app/App';

ReactDOM.render(
  <BrowserRouter basename='/home'>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);

serviceWorker.unregister();
