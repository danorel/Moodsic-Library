import { routerActions } from 'connected-react-router';
import * as playlistActions from '../features/playlist/actions';
import * as userActions from '../features/user/actions';

export default {
    router: routerActions,
    user: userActions,
    playlists: playlistActions,
};
