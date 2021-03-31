import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import rock  from '../assets/rock.jpeg';

const useStyles = makeStyles({
  root: {
    minWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const genre = props.genre;
  const numberOfSongs= props.numberOfSongs;
  return (
    <Card className={classes.root} variant="outlined" >
      <CardContent key={genre.id}>
        <Typography variant="h5" component="h2">
          {genre.name}
        </Typography>
        <Typography component="h6">  
          {numberOfSongs} songs
        </Typography>
        <img
          src={rock}
          style={{ width: "100%", height: "200px" }}
        />
      </CardContent>
    </Card>
  );
}
