import { routerActions } from 'connected-react-router';
import * as playlistActions from '../features/playlist/actions';

export default {
    router: routerActions,
    playlists: playlistActions,
};
