const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/villaDB");


const connectDB = mongoose.connection;


connectDB.on("error", (error) => {
  console.error("Greška pri spajanju:", error);
});
connectDB.once("open", function () {
  console.log("Spojeni smo na MongoDB bazu");
});

module.exports = connectDB;
