import CustomTypes from 'CustomTypes';
import { tap, ignoreElements, filter, first, map } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import { loadPlaylistsAsync, createPlaylistsAsync, deletePlaylistAsync } from '../playlist/actions';

export const persistPlaylistsInLocalStorage: CustomTypes.RootEpic = (action$, store, { localStorage }) =>
    action$.pipe(
        filter(isActionOf([loadPlaylistsAsync.success, createPlaylistsAsync.success, deletePlaylistAsync.success])),
        tap((_) => {
            // handle side-effects
            localStorage.set('playlists', store.value.playlists.playlists);
        }),
        ignoreElements()
    );

export const loadDataOnAppStart: CustomTypes.RootEpic = (action$, store, { api }) => action$.pipe(first(), map(loadPlaylistsAsync.request));
