import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        position: 'relative',
    },
    paper: {
        width: 60,
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default function Spot(props) {
    const classes = useStyles();
    const { r_index, c_index } = props;

    return (
        <Grid item xs className={classes.root}>
            <Paper className={classes.paper}></Paper>
        </Grid>
    );
}