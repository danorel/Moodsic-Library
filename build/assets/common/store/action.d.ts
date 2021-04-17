/// <reference types="connected-react-router" />
import * as playlistActions from '../features/playlist/actions';
import * as userActions from '../features/user/actions';
declare const _default: {
    router: {
        push: typeof import('connected-react-router').push;
        replace: typeof import('connected-react-router').replace;
        go: typeof import('connected-react-router').go;
        goBack: typeof import('connected-react-router').goBack;
        goForward: typeof import('connected-react-router').goForward;
    };
    user: typeof userActions;
    playlists: typeof playlistActions;
};
export default _default;
