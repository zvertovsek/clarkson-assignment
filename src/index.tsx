import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Navigation, Router } from './Utilities';

import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Navigation />
        <Router />
    </BrowserRouter>, 
    document.getElementById('root')
);

serviceWorker.unregister();
