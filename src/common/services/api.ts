import { Playlist } from 'MyModels';
import { User } from 'UserModels';

import * as localStorage from './local-storage';

let user: User = localStorage.get<User>('user') || ({ email: '' } as User);
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

export function loadUser(): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user);
        }, TIMEOUT);
    });
}

export function createUser(newUser: User): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(newUser);
        }, TIMEOUT);
    });
}
