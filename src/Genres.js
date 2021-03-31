import React, { useEffect } from 'react';
import Header from "./components/Header"
import Card from "./components/Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { initMusic } from './redux/musicReducer';
import { initSongs } from './redux/songsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "20px"
  },
});

function Genres() {
  const dispatch = useDispatch();
  const music = useSelector((state) => state.music);
  const songs = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(initMusic());
    dispatch(initSongs());
  }, [dispatch]);

  const getGenreSongNumber = (genreId) => {
    const genreSongs = songs.filter( song => song.genres.includes(genreId));
    return genreSongs.length;
  }

  const getGenreSongs = (genreId) => {
    const genreSongs = songs.filter(song => song.genres.includes(genreId));
    return genreSongs;
  };

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
            <Link to={"genre/" + genre.id} key={genre.id} genresSongs={getGenreSongs(genre.id)}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card genre={genre} numberOfSongs={getGenreSongNumber(genre.id)} />
                </Grid>
            </Link>
        )}
      </Grid>
    </div>

  );
}
export default Genres;
