import { Playlist } from 'MyModels';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { createPlaylistsAsync, deletePlaylistAsync, loadPlaylistsAsync } from './actions';

const reducer = combineReducers({
    isLoadingPlaylists: createReducer(false as boolean)
        .handleAction([loadPlaylistsAsync.request], (state, action) => true)
        .handleAction([loadPlaylistsAsync.success, loadPlaylistsAsync.failure], (state, action) => false),
    playlists: createReducer([] as Playlist[])
        .handleAction(
            [loadPlaylistsAsync.success, createPlaylistsAsync.success, deletePlaylistAsync.success],
            (state, action) => action.payload
        )
        .handleAction(createPlaylistsAsync.request, (state, action) => [...state, action.payload])
        .handleAction(deletePlaylistAsync.request, (state, action) => state.filter((i) => i.id !== action.payload.id))
        .handleAction(deletePlaylistAsync.failure, (state, action) => state.concat(action.payload)),
});

export default reducer;
