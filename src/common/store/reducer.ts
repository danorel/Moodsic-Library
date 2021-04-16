import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import user from '../features/user/reducer';
import playlists from '../features/playlist/reducer';

const rootReducer = (history: History<any>) =>
    combineReducers({
        router: connectRouter(history),
        playlists,
        user,
    });

export default rootReducer;
