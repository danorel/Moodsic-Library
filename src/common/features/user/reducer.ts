import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import UserModels from 'UserModels';

import { loadUserAsync, createUserAsync } from './actions';

const reducer = combineReducers({
    isLoadingUser: createReducer(false as boolean)
        .handleAction([loadUserAsync.request], (state, action) => true)
        .handleAction([loadUserAsync.success, loadUserAsync.failure], (state, action) => false),
    user: createReducer({} as UserModels.User)
        .handleAction([loadUserAsync.success, createUserAsync.success], (state, action) => action.payload)
        .handleAction(createUserAsync.request, (state, action) => (state = action.payload))
        .handleAction(createUserAsync.failure, (state, action) => (state = { email: '' } as UserModels.User)),
});

export default reducer;
