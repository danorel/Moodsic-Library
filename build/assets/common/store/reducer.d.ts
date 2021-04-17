/// <reference path="../features/playlist/types.d.ts" />
/// <reference path="../features/user/types.d.ts" />
/// <reference types="connected-react-router" />
declare const rootReducer: () => import('redux').Reducer<
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
    | import('typesafe-actions').PayloadAction<'DELETE_PLAYLIST_FAILURE', import('MyModels').Playlist>
>;
export default rootReducer;
