const pathsMap = {
    home: () => '/',
    cards: (userName: string) => `/${userName}/cards`,
    playlist: (userName: string, playlistId: string) => `/${userName}/playlist/${playlistId}`,
    playground: (userName: string) => `/${userName}/playground`,
};
type PathsMap = typeof pathsMap;

export const getPath = <TRoute extends keyof PathsMap>(route: TRoute, ...params: Parameters<PathsMap[TRoute]>) => {
    const pathCb: (...args: any[]) => string = pathsMap[route];

    return pathCb(...params);
};
