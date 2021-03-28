import { Playlist } from 'MyModels';

import * as localStorage from './local-storage';

let playlists: Playlist[] = localStorage.get<Playlist[]>('playlists') || [];

const TIMEOUT = 750;

export function loadPlaylists(): Promise<Playlist[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(playlists);
        }, TIMEOUT);
    });
}

export function createPlaylist(playlist: Playlist): Promise<Playlist[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            playlists = playlists.concat(playlist);
            resolve(playlists);
        }, TIMEOUT);
    });
}

export function deletePlaylist(playlist: Playlist): Promise<Playlist[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            playlists = playlists.filter((i) => i.id !== playlist.id);
            resolve(playlists);
        }, TIMEOUT);
    });
}
