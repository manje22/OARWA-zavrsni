const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/villaDB");

    console.log("Spojeni smo na MongoDB bazu");
  } catch (error) {
    console.error("Greška pri spajanju:", error);
  }
};

module.exports = connectDB;
