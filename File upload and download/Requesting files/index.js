const express = require("express");
const port = 8080;
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, (err) => {
  const starterText = err
    ? "Error occurred in starting server"
    : `Server started at http://localhost:${port}`;
  console.log(starterText);
});
