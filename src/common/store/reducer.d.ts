/// <reference types="connected-react-router" />
import { History } from 'history';
declare const rootReducer: (history: History<any>) => import("redux").Reducer<import("redux").CombinedState<{
    router: import("connected-react-router").RouterState<any>;
    playlists: import("redux").CombinedState<{
        isLoadingPlaylists: any;
        playlists: any;
    }>;
    user: import("redux").CombinedState<{
        isLoadingUser: any;
        user: any;
    }>;
}>, import("redux").AnyAction>;
export default rootReducer;
