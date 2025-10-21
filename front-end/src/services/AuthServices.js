import axios from "axios";

export const loginUser = async (data) => {
  const res = await axios.post("http://localhost:3000/login", data);
  //console.log(res);
  return res;
};

export const registerUser = async (data) => {
  const res = await axios.post("http://localhost:3000/register", data);
  //console.log(res);
  return res;
}