import axios from "axios";

export const makeNewRes = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/reservations/newRes`,
    data,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return response;
};

