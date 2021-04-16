import { User } from 'UserModels';
import { createAsyncAction } from 'typesafe-actions';

export const loadUserAsync = createAsyncAction('LOAD_PLAYLIST_REQUEST', 'LOAD_USER_SUCCESS', 'LOAD_PLAYLIST_FAILURE')<User, User, string>();

export const createUserAsync = createAsyncAction('CREATE_USER_REQUEST', 'CREATE_USER_SUCCESS', 'CREATE_USER_FAILURE')<User, User, string>();
