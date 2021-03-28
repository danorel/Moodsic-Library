import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import playlists from '../features/playlist/reducer';

const rootReducer = (history: History<any>) =>
    combineReducers({
        router: connectRouter(history),
        playlists,
    });

export default rootReducer;
