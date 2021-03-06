import { combineEpics } from 'redux-observable';

import * as app from '../features/landing/epics';
import * as playlists from '../features/playlist/epics';
import * as user from '../features/user/epics';

export default combineEpics(...Object.values(app), ...Object.values(user), ...Object.values(playlists));
