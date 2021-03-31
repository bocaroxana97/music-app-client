import React, { useEffect } from 'react';
import Header from "./components/Header"
import Card from "./components/Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { initMusic } from './redux/musicReducer';
import { initSongs } from './redux/songsReducer';
import { useDispatch, useSelector } from 'react-redux';
import GenreSongs from './GenreSongs';
import { Redirect } from 'react-router';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "20px"
  },
});

function App() {
  const dispatch = useDispatch();
  const music = useSelector((state) => state.music);
  const openGenre = (genre) => {
    return <Redirect ><GenreSongs genreName={genre.name} grenreSongs={getGenreSongs(genre.id)}/></Redirect>
  };
  const songs = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(initMusic());
    dispatch(initSongs());
  }, [dispatch]);

  const getGenreSongs = (genreId) => {
    const genreSongs = songs.filter( song => song.genres.includes(genreId));
    return genreSongs;
  }

  const getGenreSongNumber = (genreId) => {
    const genreSongs = songs.filter( song => song.genres.includes(genreId));
    return genreSongs.length;
  }

  const classes = useStyles();
  return (
    <div>
      <Header text="Music App" />
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        {music.map(genre => 
          <Grid item xs={12} sm={6} md={4}>
            <button onClick={()=> openGenre(genre)}><Card genre={genre} numberOfSongs={getGenreSongNumber(genre.id)} /></button>
          </Grid>
        )}
      </Grid>
    </div>

  );
}
export default App;
