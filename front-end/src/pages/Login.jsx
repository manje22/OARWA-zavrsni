import { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {HandleChange} from "../utils/forms";
import { loginUser } from "../services/AuthServices";

function Login(params) {
  const navigate = useNavigate();
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
    const userData = await loginUser(formData);
    console.log(userData);
    navigate("/");
  }catch(error){
    console.log(error);
  }
}

  return (
    <div className="flex flex-row border border-solid border-gray-400 justify-around gap-7">
      <div className="">
        <h1>Log in</h1>
      </div>

      <div>
        <div>
          <form onSubmit={handleSubmit}>
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
            <button type="submit">Submit</button>
          </form>
        </div>

        <div>
          <Link to={"/registration"} className="">
            Nemaš profil?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login