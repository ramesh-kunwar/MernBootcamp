// app create
const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

// add middleware
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload());

// db connect
const db = require("./config/database");
db.connect();

// cloud connect
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// api route mount
const Upload = require("./routes/fileUploadRoutes");
app.use("/api/v1/upload", Upload);

// activate server

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to app",
  });
});

app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
