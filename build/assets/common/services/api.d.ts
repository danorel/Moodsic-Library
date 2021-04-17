import { Playlist } from 'MyModels';
import { User } from 'UserModels';
export declare function loadPlaylists(): Promise<Playlist[]>;
export declare function createPlaylist(playlist: Playlist): Promise<Playlist[]>;
export declare function deletePlaylist(playlist: Playlist): Promise<Playlist[]>;
export declare function loadUser(): Promise<User>;
export declare function createUser(newUser: User): Promise<User>;
