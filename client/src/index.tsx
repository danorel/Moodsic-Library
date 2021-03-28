import React from "react";
import ReactDOM from "react-dom";

import { hot } from "react-hot-loader/root";

import './public/stylesheets/index.css';

import App from './App';

const render = (Component: () => JSX.Element) : any => ReactDOM.render(<Component />, document.getElementById('root'));

render(hot(App));