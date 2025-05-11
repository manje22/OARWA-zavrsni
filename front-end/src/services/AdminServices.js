import axios from "axios";

export const GetReservations = async (currentUser) => {
    const res = await axios.post("http://localhost:3000/reservations/getReservationsAdmin", currentUser);
    console.log(res);
    return res
};

