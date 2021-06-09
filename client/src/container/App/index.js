import React from "react";
import ParkingLot from "../ParkingLot";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#9c9c5e",
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Parking Lot</h1>
      <ParkingLot />
    </div>
  );
}
