const express = require("express");

const fileupload = require("express-fileupload");

const port = 3000;

const app = express();
app.use(fileupload());

app.get("/", (req, res) => {
  console.log("root directory");
  //   res.end();
  res.sendFile(__dirname + "/index.html");
});
app.post("/upload", (req, res) => {
  if (req.files && Object.keys(req.files).length !== 0) {
    const uploadedFile = req.files.uploadFile;
    console.log(uploadedFile);
    const uploadPath = __dirname + "/uploads/" + uploadedFile.name;
    uploadedFile.mv(uploadPath, (err) => {
      if (err) res.send("File upload failure");
      else res.send("file upload successful");
    });
  } else res.send("file upload failed");
});
app.listen(port, (err) => {
  let starterText = err
    ? "Error in starting server"
    : `Server started at http://localhost:${port}`;
  console.log(starterText);
});
