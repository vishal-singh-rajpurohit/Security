const multer = require("multer");
const fs = require("fs");
const path = require("path");

const savingDir = path.resolve(__dirname, "../../public/temp");
if (!fs.existsSync(savingDir)) {
  fs.mkdirSync(savingDir, { recursive: true });
}

console.log("hii by multer")


const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    console.log("Cd :, cd");
    cd(null, savingDir);
    console.log("file bfore is :", file)
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

    console.log("file is :", file)
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
