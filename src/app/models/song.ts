export interface Song {
    id : string,
    title : string,
    artistName : string,
    mp3Source : string,
    albumArt : string,
    duration : number,
    description? : DescriptionItem[]
}

export interface DescriptionItem {
    timestamp : number,
    text : string
}