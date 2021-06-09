import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Building from "./Building";
import Spot from "./Spot";
import { getParkData, setParkData } from "../../api/api";

const useStyles = makeStyles((theme) => ({
  controller: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 5px",
    fontSize: "1.2em",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "red",
  },
}));

const ALERT = [
  "",
  "Design your parking lot",
  "Click a building & Find a closest spot",
  "Click button to reset",
];
const BUTTON = ["START", "ACCEPT", "Park", "RESET"];

export default function ParkingLot() {
  const classes = useStyles();
  const td_array = new Array(6).fill(false).map(() => new Array(7).fill(false));
  const [points, setPoints] = useState(null);
  const [appState, setAppState] = useState(0);
  const [buildingPosition, setBuildingPosition] = useState([-1, -1]);
  const [closestPoint, setClosestPoint] = useState(null);
  const [isPark, setIsPark] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await getParkData();
      setPoints(JSON.parse(res));
    }

    fetchData();
  }, []);

  useEffect(() => {
    const res = points && findClosestSpot(buildingPosition, points);
    appState >= 2 &&
      setClosestPoint({
        r: res.r,
        c: res.c,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buildingPosition]);

  const findClosestSpot = (buildingPosition, points) => {
    let y = buildingPosition[0];
    let x = buildingPosition[1];

    let min = 1000;
    let min_r = -1;
    let min_c = -1;
    for (let r = 0; r < 6; r++) {
      for (let c = 1; c <= 5; c++) {
        if (points[r][c]) continue;

        const distance = (r - y) * (r - y) + (c - x) * (c - x);
        if (min > distance) {
          min = distance;
          min_r = r;
          min_c = c;
        }
      }
    }

    return { r: min_r, c: min_c };
  };

  const handleButton = () => {
    if (appState === 1) {
      // Accept park design
      setParkData(points);
    }
    if (
      appState === 2 &&
      buildingPosition[0] === -1 &&
      buildingPosition[1] === -1
    ) {
      // if you don't choose a building, you can't go to the next step
      alert("You should choose a building.");
      return;
    }
    if (appState === 2 && closestPoint) {
      // clicked Park button
      setIsPark(true);
    }
    if (appState === 3) {
      reset();
      return;
    }
    setAppState(appState + 1);
  };

  const reset = () => {
    setAppState(0);
    setBuildingPosition([-1, -1]);
    setClosestPoint(null);
    setIsPark(null);
    setPoints(td_array);
    setParkData(td_array);
  };

  const updatePoints = (r_index, c_index) => {
    const temp = [...points];
    temp[r_index][c_index] = !points[r_index][c_index];
    setPoints(temp);
  };

  return (
    <div>
      {points &&
        points.map((row, r_index) => (
          <Grid container spacing={1} key={r_index}>
            {row.map((point, c_index) => {
              if (c_index === 0 || c_index === 6) {
                return (
                  <Building
                    key={`${r_index}_${c_index}`}
                    r_index={r_index}
                    c_index={c_index}
                    appState={appState}
                    updatePoints={updatePoints}
                    point={point}
                    buildingPosition={buildingPosition}
                    setBuildingPosition={setBuildingPosition}
                  />
                );
              }
              return (
                <Spot
                  key={`${r_index}_${c_index}`}
                  r_index={r_index}
                  c_index={c_index}
                  appState={appState}
                  updatePoints={updatePoints}
                  point={point}
                  closestPoint={closestPoint}
                  isPark={isPark}
                />
              );
            })}
          </Grid>
        ))}
      <div className={classes.controller}>
        <span>{ALERT[appState]}</span>
        <Button variant="contained" onClick={handleButton}>
          {BUTTON[appState]}
        </Button>
      </div>
    </div>
  );
}
