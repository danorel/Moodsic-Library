import { createStore, applyMiddleware, Store, AnyAction, Action } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { composeEnhancers } from './utils';
import rootReducer from './reducer';
import rootEpic from './epics';
import services from '../services';

import { RootAction, RootState, Services } from 'RootTypes';

export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, Services>({
    dependencies: services,
});

// configure middlewares
const middlewares = [epicMiddleware];

// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const initialState = {};

// create store
let store: Store<unknown, AnyAction> & Store<any, Action> & { dispatch: unknown } = createStore(
    rootReducer(),
    initialState,
    enhancer
);

epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;
