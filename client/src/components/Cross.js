import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  root: {
    width: 15,
    height: 15,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 8,
    right: 8,
    cursor: "pointer",
    color: "white",
  },
});

export default function Cross({ onClick, point }) {
  const classes = useStyles();

  return (
    <div
      onClick={onClick}
      className={classes.root}
      style={{ background: point ? "#28bf28" : "#e24c4c" }}
    >
      {point ? <CheckIcon fontSize="small" /> : <CloseIcon fontSize="small" />}
    </div>
  );
}
