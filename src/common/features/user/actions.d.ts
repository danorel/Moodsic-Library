import { User } from 'UserModels';
export declare const loadUserAsync: {
    request: import("typesafe-actions").PayloadActionCreator<"LOAD_PLAYLIST_REQUEST", User>;
    success: import("typesafe-actions").PayloadActionCreator<"LOAD_USER_SUCCESS", User>;
    failure: import("typesafe-actions").PayloadActionCreator<"LOAD_PLAYLIST_FAILURE", string>;
};
export declare const createUserAsync: {
    request: import("typesafe-actions").PayloadActionCreator<"CREATE_USER_REQUEST", User>;
    success: import("typesafe-actions").PayloadActionCreator<"CREATE_USER_SUCCESS", User>;
    failure: import("typesafe-actions").PayloadActionCreator<"CREATE_USER_FAILURE", string>;
};
