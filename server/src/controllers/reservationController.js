const reservation = require("../models/rezervation");
const normalizeUTCDateToNoon = require("../utils/normalizeUTCDateToNoon");

  

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

exports.newRes = async (req, res) => {
    const resData = req.body;
    try {
        if (!resData.user || !resData.checkIn || !resData.checkOut || !resData.numberOfAdults || !resData.numberOfChildren) {
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