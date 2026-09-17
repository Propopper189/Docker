const express = require("express");
const os = require("os");

const app = express();

app.get("/", (req, res) => {
  res.send(`Backend container: ${os.hostname()}`);
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});