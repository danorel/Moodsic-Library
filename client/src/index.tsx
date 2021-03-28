import 'tslib';
import React from 'react';
import ReactDOM from 'react-dom';

import { hot } from 'react-hot-loader/root';

import './public/stylesheets/index.css';

import Main from './routes/Main';

const render = (Component: () => JSX.Element): any => ReactDOM.render(<Component />, document.getElementById('root'));

// render(hot(Main));
render(Main);
