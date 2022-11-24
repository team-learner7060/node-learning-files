const express = require("express");

const port = 3000;
const app = express();

app.use(express.static("public"));

app.listen(port, (err) => {
  if (err) console.log("error in starting server");
  else console.log(`Server started at port ${port}`);
});
