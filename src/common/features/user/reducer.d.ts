import UserModels from 'UserModels';
declare const reducer: import('redux').Reducer<
    import('redux').CombinedState<{
        isLoadingUser: boolean;
        user: UserModels.User;
    }>,
    import('redux').AnyAction
>;
export default reducer;
