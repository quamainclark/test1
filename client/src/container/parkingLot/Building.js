import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const buildingNumber = ['A', 'B', 'C', 'D', 'E', 'F'];

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
        color: 'white',
        background: 'black'
    }
});

export default function Building(props) {
    const classes = useStyles();
    const { r_index, c_index } = props;

    const isFirstColumn = (c_index) => {
        return c_index ? '2' : '1';
    }

    return (
        <Grid item xs className={classes.root}>
            <Paper className={classes.paper}>
                {buildingNumber[r_index] + isFirstColumn(c_index)}
            </Paper>
        </Grid>
    );
}