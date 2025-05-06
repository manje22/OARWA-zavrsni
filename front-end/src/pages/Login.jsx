import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {HandleChange} from "../utils/forms";
import { loginUser } from "../services/AuthServices";
import {jwtDecode} from 'jwt-decode';
import { UserContext } from "../contexts/UserContext";

function Login(params) {
  const navigate = useNavigate();
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    "email":"",
    "password":""
  })



function HandleChangeLogin(event) {
  HandleChange(event, formData, setFormData);
}

async function handleSubmit(e) {
  e.preventDefault();

  try{
    const res = await loginUser(formData);
    if(res.status === 200)
    {
      const token = res.data.token;
      const decoded = jwtDecode(token);
      console.log(decoded.user);
      setCurrentUser(decoded.user);
      localStorage.setItem("token", token);
      navigate("/");
    }
      
  }catch(error){
    if(error.status === 401)
      setError("Incorrect username or password");
    else
      setError("Something went wrong");
    console.log(error);
  }
}

  return (
    <div className="flex flex-row border border-solid border-gray-400 justify-around w-3/4 m-auto mt-72 p-10 rounded-4xl">
      <div className="">
        <h1 className="mt-5 text-5xl">Log in</h1>

        <div className="mt-10">
          <Link to={"/registration"} className="hover:text-blue-700 underline">
            Don't have an account yet?
          </Link>
        </div>
      </div>

      <div>
        <div>
          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-7">
            <div>
              <label htmlFor="email" id="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={HandleChangeLogin}
              />
            </div>

            <div>
              <label htmlFor="password" id="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password..."
                value={formData.password}
                onChange={HandleChangeLogin}
              />
            </div>
            {error != null && <div className="text-red-500">{error}</div>}
            <button className="rounded-2xl bg-blue-400 font-bold hover:bg-blue-500 text-white w-fit p-3 pt-1 pb-1 m-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login