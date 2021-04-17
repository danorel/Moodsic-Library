import CustomTypes from 'RootTypes';
import { filter, first, ignoreElements, map, tap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import { createPlaylistsAsync, deletePlaylistAsync, loadPlaylistsAsync } from '../playlist/actions';

export const persistPlaylistsInLocalStorage: CustomTypes.RootEpic = (action$, store, { localStorage }) =>
    action$.pipe(
        filter(isActionOf([loadPlaylistsAsync.success, createPlaylistsAsync.success, deletePlaylistAsync.success])),
        tap((_) => {
            // handle side-effects
            localStorage.set('playlists', store.value.playlists.playlists);
        }),
        ignoreElements()
    );

export const loadDataOnAppStart: CustomTypes.RootEpic = (action$, _store) => action$.pipe(first(), map(loadPlaylistsAsync.request));
