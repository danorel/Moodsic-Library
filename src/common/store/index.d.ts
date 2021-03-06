/// <reference path="../features/user/types.d.ts" />
/// <reference path="../features/playlist/types.d.ts" />
/// <reference types="connected-react-router" />
import { Action, AnyAction, Store } from 'redux';
export declare const epicMiddleware: import('redux-observable').EpicMiddleware<
    | import('connected-react-router').CallHistoryMethodAction<[import('history').LocationDescriptorObject<unknown>]>
    | import('connected-react-router').CallHistoryMethodAction<[number]>
    | import('connected-react-router').CallHistoryMethodAction<[]>
    | import('typesafe-actions').PayloadAction<'LOAD_PLAYLIST_REQUEST', import('UserModels').User>
    | import('typesafe-actions').PayloadAction<'LOAD_USER_SUCCESS', import('UserModels').User>
    | import('typesafe-actions').PayloadAction<'LOAD_PLAYLIST_FAILURE', string>
    | import('typesafe-actions').PayloadAction<'CREATE_USER_REQUEST', import('UserModels').User>
    | import('typesafe-actions').PayloadAction<'CREATE_USER_SUCCESS', import('UserModels').User>
    | import('typesafe-actions').PayloadAction<'CREATE_USER_FAILURE', string>
    | import('typesafe-actions').EmptyAction<'LOAD_PLAYLIST_REQUEST'>
    | import('typesafe-actions').PayloadAction<'LOAD_PLAYLIST_SUCCESS', import('MyModels').Playlist[]>
    | import('typesafe-actions').PayloadAction<'CREATE_PLAYLIST_REQUEST', import('MyModels').Playlist>
    | import('typesafe-actions').PayloadAction<'CREATE_PLAYLIST_SUCCESS', import('MyModels').Playlist[]>
    | import('typesafe-actions').PayloadAction<'CREATE_PLAYLIST_FAILURE', string>
    | import('typesafe-actions').PayloadAction<'DELETE_PLAYLIST_REQUEST', import('MyModels').Playlist>
    | import('typesafe-actions').PayloadAction<'DELETE_PLAYLIST_SUCCESS', import('MyModels').Playlist[]>
    | import('typesafe-actions').PayloadAction<'DELETE_PLAYLIST_FAILURE', import('MyModels').Playlist>,
    | import('connected-react-router').CallHistoryMethodAction<[import('history').LocationDescriptorObject<unknown>]>
    | import('connected-react-router').CallHistoryMethodAction<[number]>
    | import('connected-react-router').CallHistoryMethodAction<[]>
    | import('typesafe-actions').PayloadAction<'LOAD_PLAYLIST_REQUEST', import('UserModels').User>
    | import('typesafe-actions').PayloadAction<'LOAD_USER_SUCCESS', import('UserModels').User>
    | import('typesafe-actions').PayloadAction<'LOAD_PLAYLIST_FAILURE', string>
    | import('typesafe-actions').PayloadAction<'CREATE_USER_REQUEST', import('UserModels').User>
    | import('typesafe-actions').PayloadAction<'CREATE_USER_SUCCESS', import('UserModels').User>
    | import('typesafe-actions').PayloadAction<'CREATE_USER_FAILURE', string>
    | import('typesafe-actions').EmptyAction<'LOAD_PLAYLIST_REQUEST'>
    | import('typesafe-actions').PayloadAction<'LOAD_PLAYLIST_SUCCESS', import('MyModels').Playlist[]>
    | import('typesafe-actions').PayloadAction<'CREATE_PLAYLIST_REQUEST', import('MyModels').Playlist>
    | import('typesafe-actions').PayloadAction<'CREATE_PLAYLIST_SUCCESS', import('MyModels').Playlist[]>
    | import('typesafe-actions').PayloadAction<'CREATE_PLAYLIST_FAILURE', string>
    | import('typesafe-actions').PayloadAction<'DELETE_PLAYLIST_REQUEST', import('MyModels').Playlist>
    | import('typesafe-actions').PayloadAction<'DELETE_PLAYLIST_SUCCESS', import('MyModels').Playlist[]>
    | import('typesafe-actions').PayloadAction<'DELETE_PLAYLIST_FAILURE', import('MyModels').Playlist>,
    import('redux').CombinedState<{
        playlists: import('redux').CombinedState<{
            isLoadingPlaylists: boolean;
            playlists: import('MyModels').Playlist[];
        }>;
        user: import('redux').CombinedState<{
            isLoadingUser: import('UserModels').User;
            user: import('UserModels').User;
        }>;
    }>,
    {
        logger: typeof import('../services/logger');
        localStorage: typeof import('../services/local-storage');
        toast: typeof import('../services/toast');
        api: {
            user: typeof import('../services/api');
            playlists: typeof import('../services/api');
        };
    }
>;
declare const store: Store<unknown, AnyAction> &
    Store<any, Action> & {
        dispatch: unknown;
    };
export default store;
