import { Song } from '../models/song';

export class SongsRepository {
    songs : Song[] = [
        {
            id : '1',
            title : 'Perfect',
            albumArt : 'assets/divide.jpg',
            mp3Source : 'assets/1.mp3',
            artistName : 'Ed Sheeran',
            duration : 262.2
        },
        {
            id : '2',
            title : 'وعدتك',
            mp3Source : 'assets/2.mp3',
            albumArt : 'assets/majda.jpg',
            artistName : 'ماجدة الرومي',
            duration : 313.0,
            description : [
                {
                    timestamp : 0.0,
                    text: 'موسيقى'
                },
                {
                    timestamp : 61.7,
                    text : 'وعدتك'
                },
                {
                    timestamp : 63.9,
                    text : "ألا احبك"
                },
                {
                    timestamp : 68.9,
                    text : "ثم أمام القرار الكبير"
                },
                {
                    timestamp : 74.2,
                    text : "جبنت"
                },
                {
                    timestamp : 76.1,
                    text : 'وعدتك'
                },
                {
                    timestamp : 78.3,
                    text : "ألا احبك"
                },
                {
                    timestamp : 82.9,
                    text : "ثم أمام القرار الكبير"
                },
                {
                    timestamp : 88.7,
                    text : "جبنت"
                },
                {
                    timestamp : 91.0,
                    text : "وعدتك الا اعود و عدت"
                },
                {
                    timestamp : 95.0,
                    text : "و الا أموت إشتياقاً و مُت"
                },
                {
                    timestamp : 99.4,
                    text : "وعدت بأشياءَ أكبَر مني"
                },
                {
                    timestamp : 103.2,
                    text : "فماذا بنفسي فعَلت"
                },
                {
                    timestamp : 107.4,
                    text : "لقد كُنت أكذبُ من شدةِ الصدقِ"
                },
                {
                    timestamp : 113.7,
                    text : "و الحمدُ لله"
                },
                {
                    timestamp : 115.7,
                    text : "الحمدُ لله"
                },
                {
                    timestamp : 122.5,
                    text : "أني كذبت"
                },
                {
                    timestamp : 143.0,
                    text : "وعدتك ألا أكون"
                },
                {
                    timestamp : 147.5,
                    text : "أسيراً لضعفي و كُنت"
                },
                {
                    timestamp : 153.5,
                    text : "و ألا أقول لعينيك شعراً و قلت"
                },
                {
                    timestamp : 161.2,
                    text : "وعدتك ألا أكون"
                },
                {
                    timestamp : 166.5,
                    text : "أسيراً لضعفي و كُنت"
                },
                {
                    timestamp : 171.2,
                    text : "و ألا أقول لعينيك شعراً و قلت"
                },
                {
                    timestamp : 180.1,
                    text : "وعدت بألا و الا و الا"
                },
                {
                    timestamp : 184.2,
                    text : "فكيف و أين"
                },
                {
                    timestamp : 188.2,
                    text : "و في أي يومٍ تراني وعدت"
                },
                {
                    timestamp : 192.3,
                    text : "لقد كُنت أكذبُ من شدةِ الصدقِ"
                },
                {
                    timestamp : 198.4,
                    text : "و الحمدُ لله"
                },
                {
                    timestamp : 201.0,
                    text : "الحمدُ لله"
                },
                {
                    timestamp : 207.6,
                    text : "أني كذبت"
                },
                {
                    timestamp : 236.2,
                    text : "وعدتك ألا أصيد المحار"
                },
                {
                    timestamp : 243.9,
                    text : "بشطئان عينيك طيلة عام"
                },
                {
                    timestamp : 251.7,
                    text : "فكيف أقول كلاماً غريباً"
                },
                {
                    timestamp : 259.65,
                    text : "كهذا الكلام"
                },
                {
                    timestamp : 263.9,
                    text : "و عيناك داري"
                },
                {
                    timestamp : 267.65,
                    text : "داري عيناك داري"
                },
                {
                    timestamp : 272.2,
                    text : "و عيناك داري"
                },
                {
                    timestamp : 275.8,
                    text : "و دار السلام"
                },
                {
                    timestamp : 283.7,
                    text : "و أنتِ البداية"
                },
                {
                    timestamp : 287.8,
                    text : "و أنتِ البداية في كل شيئ"
                },
                {
                    timestamp : 291.7,
                    text : "و مسكُ الخِتام"
                },
                {
                    timestamp : 320.0,
                    text : '.............'
                }
            ]
        },
        {
            id : '3',
            title : 'One and Only',
            mp3Source : 'assets/3.mp3',
            albumArt : 'assets/adele.jpg',
            artistName : 'Adele',
            duration : 353.0,
            description: [
                {
                    timestamp : -1.0,
                    text : "Instrumental"
                },
                {
                    timestamp : 7.5,
                    text : "You've been on my mind"
                },
                {
                    timestamp : 12.5,
                    text : "I grow fonder, every day"
                },
                {
                    timestamp : 16.9,
                    text : 'Lose myself in time'
                },
                {
                    timestamp : 21.9,
                    text : 'Just thinking of your face'
                },
                {
                    timestamp : 26.6,
                    text : 'God only knows'
                },
                {
                    timestamp : 31.2,
                    text : "Why it's taken me so long"
                },
                {
                    timestamp : 36.2,
                    text : "To let my doubts go"
                },
                {
                    timestamp : 41.9,
                    text : "You're the only one that I want"
                },
                {
                    timestamp : 46.2,
                    text : "I don't know why I'm scared"
                },
                {
                    timestamp : 48.4,
                    text : "I've been here before"
                },
                {
                    timestamp : 50.3,
                    text : "Every feeling, every word"
                },
                {
                    timestamp : 52.9,
                    text : "I've imagined it all"
                },
                {
                    timestamp : 55.4,
                    text : "You'll never know, if you never tried"
                },
                {
                    timestamp : 60.4,
                    text : "to forget your past"
                },
                {
                    timestamp : 62.6,
                    text : "and simply be mine"
                },
                {
                    timestamp : 68.5,
                    text : "I dare you to let me be your"
                },
                {
                    timestamp : 73.6,
                    text : "your one and only"
                },
                {
                    timestamp : 77.9,
                    text : "Promise I'm worthy"
                },
                {
                    timestamp : 82.1,
                    text : "To hold in your arms"
                },
                {
                    timestamp : 85.6,
                    text : "So come on and give me a chance"
                },
                {
                    timestamp : 91.75,
                    text : "To prove I'm the one who can"
                },
                {
                    timestamp : 97.2,
                    text : "Walk that mile"
                },
                {
                    timestamp : 101.1,
                    text : "Until the end starts"
                },
                {
                    timestamp : 105.72,
                    text : "Have I been on your mind?"
                },
                {
                    timestamp : 110.0,
                    text : "You hang on every word I say"
                },
                {
                    timestamp : 115.0,
                    text : "Lose yourself in time"
                },
                {
                    timestamp : 120.1,
                    text : "At the mention of my name"
                },
                {
                    timestamp : 124.2,
                    text : "Will I ever know"
                },
                {
                    timestamp : 129.4,
                    text : "How it feels to hold you close"
                },
                {
                    timestamp : 129.4,
                    text : "How it feels to hold you close"
                },
                {
                    timestamp : 133.57,
                    text : "And have you tell me"
                },
                {
                    timestamp : 139.05,
                    text : "Whichever road I choose, you'll go"
                }
                ,
                {
                    timestamp : 143.8, //46.2,
                    text : "I don't know why I'm scared"
                },
                {
                    timestamp : 146.0,//48.4,
                    text : "'Cause I've been here before"
                },
                {
                    timestamp : 148.0,
                    text : "Every feeling, every word"
                },
                {
                    timestamp : 150.4,
                    text : "I've imagined it all"
                },
                {
                    timestamp : 153.5,
                    text : "You'll never know, if you never tried"
                },
                {
                    timestamp : 157.7,
                    text : "to forget your past"
                },
                {
                    timestamp : 160.1,
                    text : "and simply be mine"
                },
                {
                    timestamp : 166.3,
                    text : "I dare you to let me be your"
                },
                {
                    timestamp : 171.1,
                    text : "your one and only"
                },
                {
                    timestamp : 175.5,
                    text : "Promise I'm worthy"
                },
                {
                    timestamp : 179.8,
                    text : "To hold in your arms"
                },
                {
                    timestamp : 183.2,
                    text : "So come on and give me a chance"
                },
                {
                    timestamp : 189.3,
                    text : "To prove I'm the one who can"
                },
                {
                    timestamp : 194.5,
                    text : "Walk that mile"
                },
                {
                    timestamp : 198.45,
                    text : "Until the end starts"
                },
                {
                    timestamp : 223.1,
                    text : "I know it ain't easy"
                },
                {
                    timestamp : 227.7,
                    text : "Giving up your heart"
                },
                {
                    timestamp: 279.4,
                    text : "So, I dare you to let me be your"
                },
                {
                    timestamp: 284.9,
                    text : "your one and only"
                },
                {
                    timestamp: 289.3,
                    text : "Promise I'm worthy"
                },
                {
                    timestamp: 293.6,
                    text : "to hold in your arms"
                },
                {
                    timestamp: 297.2,
                    text : "So come on and give me a chance"
                },
                {
                    timestamp : 303.3,
                    text : "To prove I'm the one who can"
                },
                {
                    timestamp : 308.6,
                    text : "Walk that mile"
                },
                {
                    timestamp : 312.0,
                    text : "Until the end starts"
                },
                {
                    timestamp : 316.1,
                    text : "Come on and give me a chance"
                },
                {
                    timestamp : 322.0,
                    text : "To prove I'm the one who can"
                },
                {
                    timestamp : 326.8,
                    text : "Walk that mile"
                },
                {
                    timestamp : 330.8,
                    text : "Until the end starts"
                },
                {
                    timestamp : 355.0,
                    text : "......."
                }
            ]
        },
        {
            id : '4',
            title : 'لو تعرف شو بحبك',
            mp3Source : 'assets/4.mp3',
            albumArt : 'assets/divide.jpg',
            artistName : 'ماجدة الرومي',
            duration : 291.0
        },
        {
            id : '5',
            title : "Can't Help Falling in Love",
            artistName: "André Rieu",
            duration : 177.0,
            mp3Source : "assets/5.mp3",
            albumArt: "assets/andre.jpg",
            description : [
                {
                    timestamp : 0.0,
                    text : "Instrumental"
                },
                {
                    timestamp : 8.5,
                    text : "Wise men say"
                },
                {
                    timestamp : 14.8,
                    text : "Only fools rush in"
                },
                {
                    timestamp : 22.2,
                    text : "But I Can't help"
                },
                {
                    timestamp : 29.8,
                    text : "Falling in love with you"
                },
                {
                    timestamp : 39.8,
                    text : "Shall I stay"
                },
                {
                    timestamp : 44.4,
                    text : "Would it be a sin?"
                },
                {
                    timestamp : 53.8,
                    text : "For I can't help"
                },
                {
                    timestamp : 60.2,
                    text : "Falling in love with you"
                },
                {
                    timestamp : 69.7,
                    text : "Like a river flows"
                },
                {
                    timestamp : 73.8,
                    text : "Surely to the sea"
                }, 
                {
                    timestamp : 76.8,
                    text : "Darling so it goes"
                },
                {
                    timestamp : 80.8,
                    text : "Somethings are meant to be"
                },
                {
                    timestamp : 88.8,
                    text : "Take my hand"
                },
                {
                    timestamp : 95.6,
                    text : "Take my whole life, too"
                },
                {
                    timestamp : 103.7,
                    text : "For I Can't help"
                },
                {
                    timestamp : 109.8,
                    text : "Falling in love with you"
                },
                {
                    timestamp : 119.4,
                    text : "Take my hand"
                },
                {
                    timestamp : 126.5,
                    text : "Take my whole life, too"
                },
                {
                    timestamp : 135.2,
                    text : "For I Can't help"
                },
                {
                    timestamp : 141.2,
                    text : "Falling in love with you"
                },
                {
                    timestamp : 150.5,
                    text : "For I Can't help"
                },
                {
                    timestamp : 156.5,
                    text : "Falling in love with you"
                },
                {
                    timestamp : 200,
                    text : "..."
                }
            ]
        }
    ];
    
    constructor() {
        
    }

    getSongBySongId(songId : string) : Song{
        return this.songs.find(s => s.id == songId);
    }
}