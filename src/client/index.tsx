import React from 'react';
import ReactDOM from 'react-dom';

import { hot } from 'react-hot-loader/root';

import './public/stylesheets/index.css';

import Main from '../common/routes/Main';

const hydrate = (Component: () => JSX.Element): any => ReactDOM.render(<Component />, document.getElementById('root'));

hydrate(hot(Main));
