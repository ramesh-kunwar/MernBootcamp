const express = require("express");
const { localFileUpload } = require("../controllers/fileUploadController");
const router = express.Router();

router.post("/loacalFileUpload", localFileUpload);

module.exports = router;
