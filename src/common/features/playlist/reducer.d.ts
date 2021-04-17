/// <reference path="../user/types.d.ts" />
/// <reference types="connected-react-router" />
import { Playlist } from 'MyModels';
declare const reducer: import('redux').Reducer<
    import('redux').CombinedState<{
        isLoadingPlaylists: boolean;
        playlists: Playlist[];
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
    | import('typesafe-actions').PayloadAction<'LOAD_PLAYLIST_SUCCESS', Playlist[]>
    | import('typesafe-actions').PayloadAction<'CREATE_PLAYLIST_REQUEST', Playlist>
    | import('typesafe-actions').PayloadAction<'CREATE_PLAYLIST_SUCCESS', Playlist[]>
    | import('typesafe-actions').PayloadAction<'CREATE_PLAYLIST_FAILURE', string>
    | import('typesafe-actions').PayloadAction<'DELETE_PLAYLIST_REQUEST', Playlist>
    | import('typesafe-actions').PayloadAction<'DELETE_PLAYLIST_SUCCESS', Playlist[]>
    | import('typesafe-actions').PayloadAction<'DELETE_PLAYLIST_FAILURE', Playlist>
>;
export default reducer;
