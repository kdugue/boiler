const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const port = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../public/")));

app.use("/api", require("./api"));

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, () => {
  console.log(`Your server, listening on port ${port}`);
});
