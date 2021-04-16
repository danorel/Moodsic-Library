import * as user from './api';
import * as localStorage from './local-storage';
import * as logger from './logger';
import * as toast from './toast';
declare const _default: {
    logger: typeof logger;
    localStorage: typeof localStorage;
    toast: typeof toast;
    api: {
        user: typeof user;
        playlists: typeof user;
    };
};
export default _default;
