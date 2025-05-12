import axios from "axios";

export const GetReservations = async (currentUser) => {
  const res = await axios.post(
    "http://localhost:3000/reservations/getReservationsAdmin",
    currentUser
  );
  console.log(res);
  return res.data;
};

export const DeleteReservation = async (resID) => {
  const res = await axios.delete(
    "http://localhost:3000/reservations/deleteReservationsAdmin",
    currentUser
  );
  console.log(res);
  return res.data;
};