import React, {useState, useEffect} from 'react';
import { initSongs } from './redux/songsReducer';
import { initMusic } from './redux/musicReducer';

import Header from "./components/Header"
import { useDispatch, useSelector } from 'react-redux';
;
function AddSongForm() {
    const dispatch = useDispatch();
    const songs = useSelector((state) => state.songs);
    console.log('=====>>>>', songs);
    useEffect(() => {
        dispatch(initMusic());
      }, [dispatch]);
    const initSong = {id: null, name: '', artist: '', duration: '', genres: []};

    const [song, setSong] = useState(initSong);

    const handleChange = e => {
        const {name, value} = e.target;
        setSong({...song, [name]: value});
        console.log(song);

    }

    function addSong(song) {
        song.id = songs.length;
        setSong([...songs, song]);
      };

    const handleSubmit = e => {
        e.preventDefault();
        if (song.name && song.artist && song.duration && song.genres) {
            handleChange(e, addSong(song));
        }
    }

    return (
        <div>
            <Header text="Music App" />
            <div style={{margin: "10px", width: "90%", borderColor: "black", borderWidth: "1px", borderStyle: "solid", padding: "10px"}}> 
            <h3> ADD A NEW SONG</h3>
            <form >
                <label>Name</label>
                <br/>
                <input className="u-full-width" type="text" value={song.name} name="name" onChange={handleChange} />
                <br /><br />
                <label>Artist name</label>
                <br/>
                <input className="u-full-width" type="text" value={song.artist} name="artist" onChange={handleChange} />
                <br /><br />            <label>Duration</label>
                <br/> 
                <input className="u-full-width" type="text" value={song.duration} name="duration" onChange={handleChange} />
                <br /><br />            
                <label>Genres</label>
                <br/>
                <input className="u-full-width" type="text" value={song.genres} name="genres" onChange={handleChange} />
                <br/>
                <br/>
                <button className="button-primary" type="submit" onClick={handleSubmit} >Add song</button>
            </form>
            </div>
        </div>
    )
}

export default AddSongForm;
