const GenreSongs = [
    {
        id: 27,
        name: "Paint It, Black ",
        duration: "03:46",
        artist : "The Rolling Stones",
        genres: [1]
    },
    {
        id: 28,
        name: "(I Can't Get No) Satisfaction",
        duration: "03:54",
        artist: "The Rolling Stones",
        genres: [1]
    },
    {
        id: 29,
        name: "Anybody Seen My Baby ",
        duration: "04:28",
        artist: "The Rolling Stones",
        genres: [1]
    },
    {
        id: 30,
        name: "Whole Lotta Love ",
        duration: "04:48",
        artist: "Led Zeppelin",
        genres: [1]
    },
    {
        id: 31,
        name: "Immigrant Song",
        duration: "04:07",
        artist: "Led Zeppelin",
        genres: [1]
    },
    {
        id: 32,
        name: "Another Brick In The Wall ",
        duration: "06:00",
        artist: "Pink Floyd",
        genres: [1]
    },
    {
        id: 33,
        name: "Learning To Fly",
        duration: "04:30",
        artist: "Pink Floyd",
        genres: [1]
    },
    {
        id: 34,
        name: "no tears left to cry",
        duration: "03:58",
        artist: "Ariana Grande",
        genres: [2]
    },
    {
        id: 35,
        name: "7 rings",
        duration: "03:04",
        artist: "Ariana Grande",
        genres: [2]
    },
    {
        id: 36,
            name: "Side to Side",
        duration: "03:42",
        artist: "Ariana Grande",
        genres: [2]
    },
    {
        id: 37,
        name: "Therefore I Am ",
        duration: "04:58",
        artist: "Billie Eilish",
        genres: [2]
    },
    {
        id: 38,
        name: "lovely",
        duration: "03:20",
        artist: "Billie Eilish",
        genres: [2]
    },
    {
        id: 39,
        name: "when the party's over",
        duration: "03:13",
        artist: "Billie Eilish",
        genres: [2]
    },
    {
        id: 40,
        name: "bad guy",
        duration: "03:11",
        artist: "Billie Eilish",
        genres: [2]
    },
    {
        id: 41,
        name: "Bellyache",
        duration: "03:30",
        artist: "Billie Eilish",
        genres: [2]
    },
    {
        id: 42,
        name: "Fever",
        duration: "04:04",
        artist: "Dua Lipa",
        genres: [2]
    },
    {
        id: 43,
        name: "Levitating ",
        duration: "03:50",
        artist: "Dua Lipa",
        genres: [2]
    },
    {
        id: 48,
        name: "Feeling Me",
        duration: "02:00:00",
        artist: "Dua Lipa",
        genres: [2,3]
    },
    {
        id: 45,
        name: "New Rules ",
        duration: "03:47",
        artist: "Dua Lipa",
        genres: [2]
    },
    {
        id: 47,
        name: "Not the End of the World",
        duration: "03:53",
        artist: "Katy Perry",
        genres: [2]
    },
    {
        id: 44,
        name: "Chained To The Rhythm",
        duration: "04:00",
        artist: "Katy Perry",
        genres: [2]
    },
    {
        id: 49,
        name: "Wide Awake ",
        duration: "04:36",
        artist: "Katy Perry",
        genres: [2]
    },
    {
        id: 1,
        name: "I Took A Pill in Ibiza",
        duration: "03:58",
        artist: "Mike Posner",
        genres: [3]
    },
    {
        id: 46,
        name: "Dark Horse ",
        duration: "03:45",
        artist: "Mike Posner",
        genres: [2]
    },
    {
        id: 50,
        name: "Momma Always Told Me ",
        duration: "03:09",
        artist: "Mike Posner",
        genres: [2]
    },
    {
        id: 51,
        name: "Please Don't Go",
        duration: "03:15",
        artist: "Mike Posner",
        genres: [2]
    },
    {
        id: 2,
        name: "Day ‘N’ Nite",
        duration: "04:45",
        artist: "Kid Cudi",
        genres: [3]
    },
    {
        id: 3,
        name: "Scary Monsters and Nice Sprites",
        duration: "03:15",
        artist: "Skrillex",
        genres: [3]
    },
    {
        id: 4,
        name: "#SELFIE",
        duration: "03:44",
        artist: "Chainsmokers",
        genres: [3]
    },
    {
        id: 5,
        name: "Wake Me Up",
        duration: "04:34",
        artist: "Avicii",
        genres: [3]
    },
    {
        id: 6,
        name: "Levels",
        duration: "05:35",
        artist: "Avicii",
        genres: [3]
    },
    {
        id: 7,
        name: "Take Me Home, Country Roads",
        duration: "03:19",
        artist: "John Denver",
        genres: [4]
    },
    {
        id: 8,
        name: "Rhinestone Cowboy",
        duration: "03:11",
        artist: "Glen Campbell",
        genres: [4]
    },
    {
        id: 9,
        name: "Always on My Mind",
        duration: "03:37",
        artist: "Willie Nelson",
        genres: [4]
    },
    {
        id: 10,
        name: "Amigo",
        duration: "03:27",
        artist: "Roberto Carlos",
        genres: [5]
    },
    {
        id: 11,
        name: "Bailando",
        duration: "02:51",
        artist: "Enrique Iglesias",
        genres: [5]
    },
    {
        id: 12,
        name: "Subeme La Radio",
        duration: "03:52",
        artist: "Enrique Iglesias",
        genres: [5]
    },
    {
        id: 13,
        name: "One Love",
        duration: "02:46",
        artist: "Bob Marley",
        genres: [6]
    },
    {
        id: 14,
        name: "No Women No Cry",
        duration: "03:36",
        artist: "Bob Marley",
        genres: [6]
    },
    {
        id: 15,
        name: "No Guns Allowed",
        duration: "03:32",
        artist: "Snoop Lion ",
        genres: [6]
    },
    {
        id: 16,
        name: "Smoke The Weed ",
        duration: "03:42",
        artist: "Snoop Lion ",
        genres: [6]
    },
    {
        id: 17,
        name: "Here Comes the King",
        duration: "03:29",
        artist: "Snoop Lion ",
        genres: [6]
    },
    {
        id: 18,
        name: "La La La",
        duration: "03:28",
        artist: "Snoop Lion ",
        genres: [6]
    },
    {
       id: 19,
        name: "Fruit Juice",
        duration: "02:37",
        artist: "Snoop Lion ",
        genres: [6]
    },
    {
        id: 20,
        name: "Talk To Me",
        duration: "02:47",
        artist: "Drakeo the Ruler & Drake",
        genres: [7]
    },
    {
        id: 21,
        name: "Still Wiz",
        duration: "02:57",
        artist: "Wiz Khalifa",
        genres: [7]
    },
    {
        id: 22,
        name: "So High",
        duration: "04:09",
        artist: "Wiz Khalifa",
        genres: [7]
    },
    {
        id: 23,
        name: "Roll Up",
        duration: "03:57",
        artist: "Wiz Khalifa",
        genres: [7]
    },
    {
        id: 24,
        name: "Bodak Yellow ",
        duration: "03:53",
        artist: "Cardi B",
        genres: [7]
    },
    {
        id: 25,
        name: "Up",
        duration: "02:37",
        artist: "Cardi B",
        genres: [7]
    },
    {
        id: 26,
        name: "BOP on Broadway",
        duration: "03:03",
        artist: "DaBaby",
        genres: [7]
    }
];

const getAllSongs = () => {
    return GenreSongs;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllSongs,
};
    