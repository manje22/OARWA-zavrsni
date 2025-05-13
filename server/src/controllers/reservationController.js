const reservation = require("../models/rezervation");
const normalizeUTCDateToNoon = require("../utils/normalizeUTCDateToNoon");
const mongoose = require("mongoose");



exports.getReservations = async (req, res) => {
    try {
        const reservations = await reservation.find({}, "checkIn checkOut");

        const reservedDates = reservations.map(res=>({
            checkIn: res.checkIn.toISOString(),
            checkOut: res.checkOut.toISOString()
        }));

        res.json(reservedDates);
    } catch (error) {
        res.status(500).json({error: "Falied to get reservations :("});
    }
}


exports.deleteReservation = async (req, res) => {
  try {
    const { resID } = req.body;
    console.log("To be deleted:", resID);

    // Validate the ObjectId
    if (!mongoose.Types.ObjectId.isValid(resID)) {
      return res.status(400).json({ error: "Invalid reservation ID" });
    }

    const resDelete = await reservation.deleteOne({
      _id: new mongoose.Types.ObjectId(resID),
    });

    if (resDelete.deletedCount === 0) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    res.json({ message: "Reservation deleted successfully" });
  } catch (error) {
    console.error("Delete failed:", error);
    res.status(500).json({ error: "Server error during deletion" });
  }
};

exports.getAllReservationInformation = async (req, res) =>{
    try {
        const reservations = await reservation.find({}).populate('user', {name:1, surname: 1});
        console.log("Prva rezervacija: ", reservations[0]);
        res.json(reservations)
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error});
    }
}

exports.newRes = async (req, res) => {
    const resData = req.body;
    try {
        if (!resData.user||!resData.userName || !resData.checkIn || !resData.checkOut || !resData.numberOfAdults || !resData.numberOfChildren) {
            if (!resData.numberOfChildren === 0) {
                return res.status(400).json({error: "All fields must be filled"});   
            }    
        }

        if (resData.checkIn > resData.checkOut) {
            return res.status(400).json({error: "Date of check out must be after date of check in"});
        }

        if (resData.numberOfAdults > 8 || resData.numberOfAdults < 1) {
            return res.status(400).json({error: "Number of adult guests must be greater than one and no more than eight"});
        }

        const newRes = new reservation({
            user: resData.user,
            userName: resData.userName,
            checkIn: normalizeUTCDateToNoon(resData.checkIn),
            checkOut: normalizeUTCDateToNoon(resData.checkOut),
            numberOfAdults: resData.numberOfAdults,
            numberOfChildren: resData.numberOfChildren,
        });


        console.log("Created new reservation", newRes);

        await newRes.save();
        res.status(201).send("New registration successfully saved");
    } catch (error) {
        res.status(500).send(error.message);
    }
}