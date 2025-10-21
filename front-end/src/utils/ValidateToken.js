import { jwtDecode } from "jwt-decode";



export default function isTokenValid() {
  const token = localStorage.getItem("token");
  if (!token) return { isValid: false, user: null };

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp > currentTime) return { isValid: true, user: decoded.user };
    else{
        localStorage.removeItem("token");
        return {isValid: false, user:null};
    }
  } catch (error) {
    //console.log("Invalid token: ", error);
    localStorage.removeItem("token");
    return { isValid: false, user: null };
  }
}
