import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Cross from 'components/Cross';

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
    }
});

export default function Building(props) {
    const classes = useStyles();
    const { r_index, c_index, appState, updatePoints, point, buildingPosition, setBuildingPosition } = props;

    const isFirstColumn = (c_index) => {
        return c_index ? '2' : '1';
    }

    const handleCross = () => {
        updatePoints(r_index, c_index);
    }

    const handleBuildingPosition = () => {
        if (appState !== 2) return;
        setBuildingPosition([r_index, c_index]);
    }

    return (
        <Grid item xs className={classes.root}>
            <Paper
                className={classes.paper}
                style={{
                    visibility: `${point ? 'hidden' : 'visible'}`,
                    cursor: `${appState === 2 ? 'pointer' : 'normal'}`,
                    background: `${buildingPosition[0] === r_index && buildingPosition[1] === c_index ? 'red' : '#464545'}`
                }}
                onClick={handleBuildingPosition}
            >
                {buildingNumber[r_index] + isFirstColumn(c_index)}
            </Paper>
            {appState === 1 && <Cross onClick={handleCross} point={point} />}
        </Grid>
    );
}