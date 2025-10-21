import axios from "axios";


export const GetReservations = async () => {
  try {
    const response = await axios.get(
      process.env.SERVER_URL+"/reservations/getReservationsAdmin",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );

    //console.log("Fetched reservations:", response.data);
    return response.data;
  } catch (error) {
    //console.error("Failed to fetch reservations:", error);
  }
};

export const DeleteReservation = async (resID) => {
  const res = await axios.delete(
    process.env.SERVER_URL+"/reservations/deleteReservationsAdmin",
    {
      data: { resID: resID },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  //console.log(res);
  return res.data;
};

export const DeleteAndGetNew = async (resID, currentUser) => {
  const deletionRes = await DeleteReservation(resID);
  const updatedReservations = await GetReservations(currentUser);

  return { deletion: deletionRes, updatedReservations: updatedReservations };
};
