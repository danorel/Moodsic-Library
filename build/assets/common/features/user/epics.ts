import CustomTypes from 'RootTypes';
import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import { createUserAsync, loadUserAsync } from './actions';

export const loadUserEpic: CustomTypes.RootEpic = (action$, _state$, { api }) =>
    action$.pipe(
        filter(isActionOf(loadUserAsync.request)),
        switchMap(() =>
            from(api.user.loadUser()).pipe(
                map(loadUserAsync.success),
                catchError((message) => of(loadUserAsync.failure(message)))
            )
        )
    );

export const createUserEpic: CustomTypes.RootEpic = (action$, _state$, { api }) =>
    action$.pipe(
        filter(isActionOf(createUserAsync.request)),
        switchMap((action) =>
            from(api.user.createUser(action.payload)).pipe(
                map(createUserAsync.success),
                catchError((message) => of(createUserAsync.failure(message)))
            )
        )
    );
