const app = require("./app");
const connection = require("./db/connection.db");

const port = process.env.PORT || 5000;

connection()
  .then(() => {
    app.on("error" , (error)=>{
      console.log("error in app listen: ", error);
      throw error;
    })
    app.listen(port, () => {
      console.log("app is running at: ", port);
    });
  }).catch((error) => {
    console.log("error in db connection index.js: ", error)
  })

