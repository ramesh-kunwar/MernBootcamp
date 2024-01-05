const File = require("../models/fileSchema");

// localFileupload
exports.localFileUpload = async (req, res) => {
  try {
    // fetch file
    const file = req.files.file;
    console.log(file, " ... FILE");

    // parth in server where I want to store file

    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    console.log(path, " PATH");

    file.mv(path, (err) => {
      console.log(err);
    });

    res.json({
      success: true,
      msg: "Local File Uploaded Successfully",
    });
  } catch (error) {
    console.log(error, "error in local file upload");
  }
};
