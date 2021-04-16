import { Playlist } from 'MyModels';
import { createAsyncAction } from 'typesafe-actions';

export const loadPlaylistsAsync = createAsyncAction('LOAD_PLAYLIST_REQUEST', 'LOAD_PLAYLIST_SUCCESS', 'LOAD_PLAYLIST_FAILURE')<
    undefined,
    Playlist[],
    string
>();

export const createPlaylistsAsync = createAsyncAction('CREATE_PLAYLIST_REQUEST', 'CREATE_PLAYLIST_SUCCESS', 'CREATE_PLAYLIST_FAILURE')<
    Playlist,
    Playlist[],
    string
>();

export const deletePlaylistAsync = createAsyncAction('DELETE_PLAYLIST_REQUEST', 'DELETE_PLAYLIST_SUCCESS', 'DELETE_PLAYLIST_FAILURE')<
    Playlist,
    Playlist[],
    Playlist
>();
