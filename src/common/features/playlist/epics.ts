import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import CustomTypes from 'RootTypes';

import { loadPlaylistsAsync, createPlaylistsAsync, deletePlaylistAsync } from './actions';

export const loadPlaylistsEpic: CustomTypes.RootEpic = (action$, state$, { api }) =>
    action$.pipe(
        filter(isActionOf(loadPlaylistsAsync.request)),
        switchMap(() =>
            from(api.playlists.loadPlaylists()).pipe(
                map(loadPlaylistsAsync.success),
                catchError((message) => of(loadPlaylistsAsync.failure(message)))
            )
        )
    );

export const createPlaylistEpic: CustomTypes.RootEpic = (action$, state$, { api }) =>
    action$.pipe(
        filter(isActionOf(createPlaylistsAsync.request)),
        switchMap((action) =>
            from(api.playlists.createPlaylist(action.payload)).pipe(
                map(createPlaylistsAsync.success),
                catchError((message) => of(createPlaylistsAsync.failure(message)))
            )
        )
    );

export const deletePlaylistEpic: CustomTypes.RootEpic = (action$, state$, { api, toast }) =>
    action$.pipe(
        filter(isActionOf(deletePlaylistAsync.request)),
        switchMap((action) =>
            from(api.playlists.deletePlaylist(action.payload)).pipe(
                map(deletePlaylistAsync.success),
                catchError((message) => {
                    toast.error(message);
                    return of(deletePlaylistAsync.failure(action.payload));
                })
            )
        )
    );
