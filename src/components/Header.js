import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import "../styles.css";

const useStyles = makeStyles({
    header: {
        backgroundColor: "black",
        width: "100%",
        height: "50px",
        color: "white",
        fontSize: "36px",
        textAlign: "center",
      }
});

export default function Header(props) {
    const classes = useStyles();
    return (<header className={classes.header}>{props.text}</header>)
};