import { Playlist } from 'MyModels';
export declare const loadPlaylistsAsync: {
    request: import('typesafe-actions').EmptyActionCreator<'LOAD_PLAYLIST_REQUEST'>;
    success: import('typesafe-actions').PayloadActionCreator<'LOAD_PLAYLIST_SUCCESS', Playlist[]>;
    failure: import('typesafe-actions').PayloadActionCreator<'LOAD_PLAYLIST_FAILURE', string>;
};
export declare const createPlaylistsAsync: {
    request: import('typesafe-actions').PayloadActionCreator<'CREATE_PLAYLIST_REQUEST', Playlist>;
    success: import('typesafe-actions').PayloadActionCreator<'CREATE_PLAYLIST_SUCCESS', Playlist[]>;
    failure: import('typesafe-actions').PayloadActionCreator<'CREATE_PLAYLIST_FAILURE', string>;
};
export declare const deletePlaylistAsync: {
    request: import('typesafe-actions').PayloadActionCreator<'DELETE_PLAYLIST_REQUEST', Playlist>;
    success: import('typesafe-actions').PayloadActionCreator<'DELETE_PLAYLIST_SUCCESS', Playlist[]>;
    failure: import('typesafe-actions').PayloadActionCreator<'DELETE_PLAYLIST_FAILURE', Playlist>;
};
