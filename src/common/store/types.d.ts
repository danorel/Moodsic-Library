import { Epic } from 'redux-observable';
import { ActionType, StateType } from 'typesafe-actions';

declare module 'RootTypes' {
    export type Store = StateType<typeof import('./index').default>;
    export type RootState = StateType<ReturnType<typeof import('./reducer').default>>;
    export type RootAction = ActionType<typeof import('./action').default>;
    export type RootEpic = Epic<RootAction, RootAction, RootState, Services>;
}

declare module 'typesafe-actions' {
    interface Types {
        RootAction: ActionType<typeof import('./action').default>;
    }
}
