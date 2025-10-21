const mongoose = require("mongoose");

const { Schema } = mongoose;
const rezervationSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userName: String,
    checkIn: Date,
    checkOut: Date,
    numberOfAdults: Number,
    numberOfChildren: Number,
});

// Prevent duplicate reservations for the same user and exact dates
rezervationSchema.index({ user: 1, checkIn: 1, checkOut: 1 }, { unique: true });


module.exports = mongoose.model('rezervation', rezervationSchema);