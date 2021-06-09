import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Building from './Building';
import Spot from './Spot';

const useStyles = makeStyles((theme) => ({
    park: {
        flexGrow: 1,
    },
    controller: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '15px 5px',
        fontSize: '1.2em',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'red',
    }
}));

export default function ParkingLot() {
    const classes = useStyles();
    const td_array = new Array(6).fill(false).map(() => new Array(7).fill(false));
    const [points, setPoints] = useState(td_array);
    
    return (
        <>
            <div className={classes.park}>
                {points && points.map((row, r_index) => {
                    return (
                        <Grid container spacing={1} key={r_index}>
                            {row.map((point, c_index) => {
                                if (c_index === 0 || c_index === 6) {
                                    return (
                                        <Building
                                            key={`${r_index}_${c_index}`}
                                            r_index={r_index}
                                            c_index={c_index}
                                        />
                                    );
                                } else {
                                    return (
                                        <Spot
                                            key={`${r_index}_${c_index}`}
                                            r_index={r_index}
                                            c_index={c_index}
                                        />
                                    );
                                }
                            })}
                        </Grid>
                    );
                })}
            </div>
        </>
    );
}