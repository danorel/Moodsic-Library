import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Redux from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './public/stylesheets/index.css';

import Main from '../common/routes/Main';

const preloadedState = (window as any)['__PRELOADED_STATE__'];
delete (window as any)['__PRELOADED_STATE__'];

const store = Redux.createStore(preloadedState);

ReactDOM.hydrate(
    <ReduxProvider store={store}>
        <Router>
            <Main />
        </Router>
    </ReduxProvider>,
    document.getElementById('root')
);
