const genresList = [
    {
        id: 1,
        name: "Rock ",
        image: "rock.jpg"
    },
    {
        id: 2,
        name: "Pop",
        image: "pop.jpg"
    },
    {
        id: 3,
        name: "Electronic",
        image: "electronic.jpeg"
    },
    {
        id: 4,
        name: "Country",
        image: "country.jpg"
    },
    {
        id: 5,
        name: "Latin",
        image: "latin.png"
    },
    {
        id: 6,
        name: "Reggae",
        image: "raggae.jpg"
    },
    {
        id: 7,
        name: "Hip hop",
        image: "hip-hop.jpg"
    }
];
const getAllGenres = () => {
    return genresList;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllGenres,
};
    