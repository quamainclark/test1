import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Cross from "components/Cross";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";

const useStyles = makeStyles({
  root: {
    position: "relative",
  },
  paper: {
    width: 60,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  car: {
    color: "black",
  },
  carLoading: {
    animationName: "$carLoading",
    animationDuration: "1s",
    animationIterationCount: "infinite",
  },

  "@keyframes carLoading": {
    "0%": { color: "red" },
    "50%": { color: "white" },
    "100%": { color: "red" },
  },
});

export default function Spot(props) {
  const classes = useStyles();
  const {
    r_index,
    c_index,
    appState,
    updatePoints,
    point,
    closestPoint,
    isPark,
  } = props;

  const handleCross = () => {
    updatePoints(r_index, c_index);
  };

  return (
    <Grid item xs className={classes.root}>
      <Paper
        className={classes.paper}
        style={{ visibility: point ? "hidden" : "visible" }}
      >
        {closestPoint &&
          closestPoint.r === r_index &&
          closestPoint.c === c_index && (
            <AirportShuttleIcon
              className={isPark ? classes.car : classes.carLoading}
            />
          )}
      </Paper>
      {appState === 1 && <Cross onClick={handleCross} point={point} />}
    </Grid>
  );
}
