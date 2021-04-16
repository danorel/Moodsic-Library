import { createStore, applyMiddleware, Store, AnyAction, Action } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { composeEnhancers } from './utils';
import rootReducer from './reducer';
import rootEpic from './epics';
import services from '../services';

import { RootAction, RootState, Services } from 'RootTypes';

export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, Services>({
    dependencies: services,
});

export const history = createBrowserHistory();

// configure middlewares
const middlewares = [routerMiddleware(history), epicMiddleware];

// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const initialState = {};

// create store
let store: Store<unknown, AnyAction> & Store<any, Action> & { dispatch: unknown } = createStore(
    rootReducer(history),
    initialState,
    enhancer
);

epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;
