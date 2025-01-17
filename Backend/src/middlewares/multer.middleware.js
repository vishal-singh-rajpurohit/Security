const multer = require("multer");
const fs = require("fs");
const path = require("path");

const savingDir = path.resolve(__dirname, "../../public/temp");
if (!fs.existsSync(savingDir)) {
  fs.mkdirSync(savingDir, { recursive: true });
}


const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, savingDir);
  },
  filename: function (req, file, cd) {
    const existingFileName = path.extname(file.originalname);
    const newFileName =
      "Dealer-" +
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      existingFileName;
    cd(null, newFileName);
  },
});

const upload = multer({ storage: storage });

console.log("multer executed successfully");

module.exports = upload;
