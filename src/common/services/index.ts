import * as user from './api';
import * as playlists from './api';
import * as localStorage from './local-storage';
import * as logger from './logger';
import * as toast from './toast';

export default {
    logger,
    localStorage,
    toast,
    api: {
        user,
        playlists,
    },
};
