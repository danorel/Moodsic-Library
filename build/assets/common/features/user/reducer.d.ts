/// <reference path="../playlist/types.d.ts" />
/// <reference types="connected-react-router" />
import UserModels from 'UserModels';
declare const reducer: import('redux').Reducer<
    import('redux').CombinedState<{
        isLoadingUser: UserModels.User;
        user: UserModels.User;
    }>,
    | import('connected-react-router').CallHistoryMethodAction<[import('history').LocationDescriptorObject<unknown>]>
    | import('connected-react-router').CallHistoryMethodAction<[number]>
    | import('connected-react-router').CallHistoryMethodAction<[]>
    | import('typesafe-actions').PayloadAction<'LOAD_PLAYLIST_REQUEST', UserModels.User>
    | import('typesafe-actions').PayloadAction<'LOAD_USER_SUCCESS', UserModels.User>
    | import('typesafe-actions').PayloadAction<'LOAD_PLAYLIST_FAILURE', string>
    | import('typesafe-actions').PayloadAction<'CREATE_USER_REQUEST', UserModels.User>
    | import('typesafe-actions').PayloadAction<'CREATE_USER_SUCCESS', UserModels.User>
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
export default reducer;
