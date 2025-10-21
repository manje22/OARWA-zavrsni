import axios from "axios";

export const makeNewRes = async (data) => {
  const response = await axios.post(
    "http://localhost:3000/reservations/newRes",
    data,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return response;
};

