
export default class iTunes {
    static getPlaylists(params):Promise;

    static getTracks(params):Promise;

    static pause():void;

    static play():void;

    static seekTo(position):void;

    static playTrack(trackItem, offset = 0):Promise;

    static getAudioBooks(params):Promise;

    static setVolume(volume):Promise;

    static getVolume():Promise;

    static addEventListener(event: string, func: Function):void;

    static removeEventListener(event: string, func: Function):void;

    static iTunesEvents:iTunesEvents;

    static iTunesPlaybackState:iTunesPlaybackState;

    static iTunesRepeatMode:iTunesRepeatMode;

    static iTunesShuffleMode:iTunesShuffleMode;
}

declare interface iTunesEvents
{
    playbackStateChanged:string;
    itemPlayingChanged:string;
    volumeChanged:string;
    positionChanged:string;
}

declare interface iTunesPlaybackState {
    MPMusicPlaybackStateStopped:number;
    MPMusicPlaybackStatePlaying:number;
    MPMusicPlaybackStatePaused:number;
    MPMusicPlaybackStateInterrupted:number;
    MPMusicPlaybackStateSeekingForward:number;
    MPMusicPlaybackStateSeekingBackward:number;
}

declare interface iTunesRepeatMode {
    MPMusicRepeatModeDefault:number
    MPMusicRepeatModeNone:number
    MPMusicRepeatModeOne:number
    MPMusicRepeatModeAll:number
}

declare interface iTunesShuffleMode {
    MPMusicShuffleModeDefault:number;
    MPMusicShuffleModeOff:number;
    MPMusicShuffleModeSongs:number;
    MPMusicShuffleModeAlbums:number;
}

type iTunesTrackItem = {
    albumArtist:string;
    albumTitle:string;
    duration:number;
    genre:string;
    playCount:number;
    title:string;
}

type iTunesPlaylistItem = {
    name:string;
    playCount:number;
    tracks: iTunesTrackItem[];
}