const mongoose = require("mongoose");
//Spajanje na bazu
mongoose.connect("mongodb://127.0.0.1:27017/villaDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Instanca konekcije na bazu
const db = mongoose.connection;

// Upravljanje događajima
db.on("error", (error) => {
  console.error("Greška pri spajanju:", error);
});
db.once("open", function () {
  console.log("Spojeni smo na MongoDB bazu");
});

module.exports = connectDB;
