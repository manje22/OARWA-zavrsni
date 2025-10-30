import axios from "axios";

export const loginUser = async (data) => {
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}/login`,
    data,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return res;
};

export const registerUser = async (data) => {
  const res = await axios.post(
    `${import.meta.env.SERVER_URL}/register`,
    data,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return res;
};
