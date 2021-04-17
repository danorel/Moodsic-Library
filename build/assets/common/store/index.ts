import { Action, AnyAction, applyMiddleware, createStore, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { RootAction, RootState, Services } from 'RootTypes';

import services from '../services';
import rootEpic from './epics';
import rootReducer from './reducer';
import { composeEnhancers } from './utils';

export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, Services>({
    dependencies: services,
});

// configure middlewares
const middlewares = [epicMiddleware];

// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const initialState = {};

// create store
const store: Store<unknown, AnyAction> & Store<any, Action> & { dispatch: unknown } = createStore(rootReducer(), initialState, enhancer);

epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;
