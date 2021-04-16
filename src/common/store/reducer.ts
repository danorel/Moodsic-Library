import { combineReducers } from 'redux';
import { History } from 'history';

import user from '../features/user/reducer';
import playlists from '../features/playlist/reducer';

const rootReducer = () =>
    combineReducers({
        playlists,
        user,
    });

export default rootReducer;
