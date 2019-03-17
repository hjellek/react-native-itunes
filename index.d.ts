
export default class iTunes {
    static getArtists():Promise<string[]>;

    static getAlbums():Promise<iTunesTrackItem[]>;

    static getPlaylists(params:{fields?:string[], query?:object}):Promise<iTunesPlaylistItem[]>;

    static getCurrentTrack():Promise<iTunesTrackItem>;

    /**
     * @deprecated
     */
    static getCurrentPlayTime():Promise<number>;

    static getTracks(params:{fields?:string[], query?:object, type?:string}):Promise<iTunesTrackItem[]>;

    static pause():void;

    static play():void;

    static next():void;

    static previous():void;

    static seekTo(position):void;

    static playTrack(trackItem:iTunesTrackItem):Promise;

    static playTracks(trackItems:iTunesTrackItem[]):Promise;

    static setVolume(volume:number):Promise;

    static getVolume():Promise<number>;

    static addEventListener(event: string, func: Function):void;

    static removeEventListener(event: string, func: Function):void;

    static iTunesEvents:iTunesEvents;

    static iTunesPlaybackState:iTunesPlaybackState;

    static iTunesRepeatMode:iTunesRepeatMode;

    static iTunesShuffleMode:iTunesShuffleMode;

    static iTunesTrackType:iTunesTrackType;
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

declare interface iTunesTrackType
{
    SONG:string;
    AUDIOBOOK:string;
    PODCAST:string;
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