import CustomTypes from 'CustomTypes';
import { createStore, applyMiddleware, Store, AnyAction, Action } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { composeEnhancers } from './utils';
import rootReducer from './reducer';
import rootEpic from './epics';
import services from '../services';

export const epicMiddleware = createEpicMiddleware<
    CustomTypes.RootAction,
    CustomTypes.RootAction,
    CustomTypes.RootState,
    CustomTypes.Services
>({
    dependencies: services,
});

// configure middlewares
export const history = createBrowserHistory();
const middlewares = [routerMiddleware(history), epicMiddleware];
// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// rehydrate state on app start
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
