import React, { useEffect } from 'react';
import { initMusic } from './redux/musicReducer';
import { initSongs } from './redux/songsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import Header from "./components/Header";

function GenreSongs() {
    const dispatch = useDispatch();
    const music = useSelector((state) => state.music);
    const songs = useSelector((state) => state.songs);

    useEffect(() => {
      dispatch(initMusic());
      dispatch(initSongs());
    }, [dispatch]);

    const { id } = useParams();
    // TODO: display only selected genre songs 
    // const genreSongs = props.genreSongs;

    // const getSelectedGenreInfo = (id) => {
    //     const slectedGenre = music.find(item => item.id === id);
    //     return slectedGenre;
    // };
    // const getGenreSongs = (genreId) => {
    //     const genreSongs = songs.filter(song => song.genres.includes(genreId));
    //     return genreSongs;
    // };

    // console.log("------",getSelectedGenreInfo(id));
    // console.log("------",getGenreSongs(selectedGenre.id));

    // const selectedGenre = getSelectedGenreInfo(id);
    // const genreSongs = getGenreSongs(id);
    // console.log("------",getGenreSongs(genreSongs));

    return (<div>
        <Header text = "Music app"/>
        <hr/>
        {/* genre name */}
        <Header text ={`Genre: ${id}`}/> 
        <table style={{ width: "100%" }}>
            <thead style={{backgroundColor: "gray", borderWidth: "1px", borderColor: 'black'}}>
                <tr>
                    <th>Song Name</th>
                    <th>Artist</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {songs.map(song => {
                    const {id, name, artist, duration} = song;
                    return (
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{artist}</td>
                            <td>{duration}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <br></br>
        <button>Add song</button>
        </div>
    )
}

export default GenreSongs;