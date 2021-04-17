import React from 'react';
import ReactDOM from 'react-dom';
import Redux from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

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
