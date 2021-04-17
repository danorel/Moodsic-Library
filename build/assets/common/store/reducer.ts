import { combineReducers } from 'redux';

import playlists from '../features/playlist/reducer';
import user from '../features/user/reducer';

const rootReducer = () =>
    combineReducers({
        playlists,
        user,
    });

export default rootReducer;
