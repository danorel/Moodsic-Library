import * as toast from './toast';
import * as logger from './logger';
import * as playlists from './api';
import * as localStorage from './local-storage';

export default {
    logger,
    localStorage,
    toast,
    api: {
        playlists: playlists,
    },
};
