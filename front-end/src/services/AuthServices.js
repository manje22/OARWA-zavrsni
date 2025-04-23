import axios from "axios";

export const loginUser = async (data) => {
  console.log(data);
  const res = await axios.post("http://localhost:3000/login", data);
  console.log(res);
  return res.data;
};