const mongoose = require("mongoose");


mongoose.connect(process.env.ADRESA_BAZE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;


db.on("error", (error) => {
  console.error("Greška pri spajanju:", error);
});
db.once("open", function () {
  console.log("Spojeni smo na MongoDB bazu");
});

module.exports = connectDB;
