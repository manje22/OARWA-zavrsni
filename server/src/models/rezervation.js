const mongoose = require("mongoose");

const { Schema } = mongoose;
const rezervationSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    checkIn: Date,
    checkOut: Date,
    numberOfAdults: Number,
    numberOfChildren: Number,
});


module.exports = mongoose.model('rezervation', rezervationSchema);