declare const rootReducer: () => import('redux').Reducer<
    import('redux').CombinedState<{
        playlists: import('redux').CombinedState<{
            isLoadingPlaylists: any;
            playlists: any;
        }>;
        user: import('redux').CombinedState<{
            isLoadingUser: any;
            user: any;
        }>;
    }>,
    import('redux').AnyAction
>;
export default rootReducer;
