declare const pathsMap: {
    home: () => string;
    cards: (userName: string) => string;
    playlist: (userName: string, playlistId: string) => string;
    playground: (userName: string) => string;
    authentication: () => string;
};
declare type PathsMap = typeof pathsMap;
export declare const getPath: <TRoute extends "home" | "cards" | "playlist" | "playground" | "authentication">(route: TRoute, ...params: Parameters<{
    home: () => string;
    cards: (userName: string) => string;
    playlist: (userName: string, playlistId: string) => string;
    playground: (userName: string) => string;
    authentication: () => string;
}[TRoute]>) => string;
export {};
