import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import CustomTypes from 'RootTypes';

import { loadUserAsync, createUserAsync } from './actions';

export const loadUserEpic: CustomTypes.RootEpic = (action$, state$, { api }) =>
    action$.pipe(
        filter(isActionOf(loadUserAsync.request)),
        switchMap(() =>
            from(api.user.loadUser()).pipe(
                map(loadUserAsync.success),
                catchError((message) => of(loadUserAsync.failure(message)))
            )
        )
    );

export const createUserEpic: CustomTypes.RootEpic = (action$, state$, { api }) =>
    action$.pipe(
        filter(isActionOf(createUserAsync.request)),
        switchMap((action) =>
            from(api.user.createUser(action.payload)).pipe(
                map(createUserAsync.success),
                catchError((message) => of(createUserAsync.failure(message)))
            )
        )
    );
