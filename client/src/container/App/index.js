import React from 'react';
import ParkingLot from '../parkingLot';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#9c9c5e',
    },
    title: {
        color: '#151209',
        fontSize: '3em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    }
});

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <div className={classes.title}>
                    <span>Parking Lot</span>
                </div>
                <ParkingLot />
            </div>
        </div>
    );
}