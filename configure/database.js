const mongoose = require("mongoose");

const configureDb = () => {
   mongoose
      .connect("mongodb://127.0.0.1:27017/memories")
      .then(() => {
         console.log("connected to db");
      })
      .catch((err) => {
         console.log(`error connecting to db ${err.message}`);
      });
};

module.exports = configureDb;
