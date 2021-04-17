import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import UserModels from 'UserModels';

import { createUserAsync, loadUserAsync } from './actions';

const reducer = combineReducers({
    isLoadingUser: createReducer(false as boolean)
        .handleAction([loadUserAsync.request], (_state) => true)
        .handleAction([loadUserAsync.success, loadUserAsync.failure], (_state, _action) => false),
    user: createReducer({} as UserModels.User)
        .handleAction(createUserAsync.request, (state, _action) => ({ ...state, isLoading: true }))
        .handleAction([loadUserAsync.success, createUserAsync.success], (state, action) => ({ ...state, ...action.payload }))
        .handleAction(createUserAsync.failure, (state, _action) => ({ ...state, email: '', isLoading: false })),
});

export default reducer;
