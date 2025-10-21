const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.CONNECTION_STRING);

    const db = mongoose.connection;

    db.on('error', (error) => {
      //console.error('Error while connecting: ', error);
    });

    db.once('open', function () {
      //console.log('Connected to MongoDB base');
    });
    
  } catch (error) {
    //console.error("Greška pri spajanju:", error);
  }
};

module.exports = connectDB;
