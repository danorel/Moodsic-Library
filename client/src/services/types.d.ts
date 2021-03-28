declare module 'CustomTypes' {
    export type Services = typeof import('./index').default;
}
