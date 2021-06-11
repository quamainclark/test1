const cors = require("cors");
const express = require("express");
const router = require("./app/routes");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(bodyParser.json({ limit: "100mb" }));

app.use(cors());

app.use("/api", router);

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(
    `App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`
  );
});
