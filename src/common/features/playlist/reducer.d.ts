import { Playlist } from 'MyModels';
declare const reducer: import('redux').Reducer<
    import('redux').CombinedState<{
        isLoadingPlaylists: boolean;
        playlists: Playlist[];
    }>,
    import('redux').AnyAction
>;
export default reducer;
