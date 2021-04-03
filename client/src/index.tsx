import 'tslib';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { hot } from 'react-hot-loader/root';

import './public/stylesheets/index.css';

import Main from './routes/Main';

// const hydrate = (Component: () => JSX.Element): any => ReactDOM.render(<Component />, document.getElementById('root'));
//
// hydrate(hot(Main));

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
