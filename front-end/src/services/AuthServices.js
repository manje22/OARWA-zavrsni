import axios from "axios";

export const loginUser = async (data) => {
  const res = await axios.post(process.env.SERVER_URL+"/login", data);
  //console.log(res);
  return res;
};

export const registerUser = async (data) => {
  const res = await axios.post(process.env.SERVER_URL+"/register", data);
  //console.log(res);
  return res;
}