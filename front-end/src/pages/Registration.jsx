import { useState } from "react";
import { HandleChange } from "../utils/forms";
import { registerUser } from "../services/AuthServices";
import { Link, useNavigate } from "react-router-dom";
function Registration(params) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
  });

  function HandleChangeRegistration(event) {
    HandleChange(event, formData, setFormData);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await registerUser(formData);
      if (res.status === 201 || 200)
        navigate("/login");
      else console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-row border border-solid border-gray-400 justify-around gap-7">
      <div className="">
        <h1>Registration</h1>
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
                onChange={HandleChangeRegistration}
              />
            </div>

            <div>
              <label htmlFor="name" id="name">
                Name
              </label>
              <input
                id="name"
                type="name"
                name="name"
                placeholder="name.."
                value={formData.name}
                onChange={HandleChangeRegistration}
              />
            </div>

            <div>
              <label htmlFor="surname" id="surname">
                surname
              </label>
              <input
                id="surname"
                type="surname"
                name="surname"
                placeholder="surname"
                value={formData.surname}
                onChange={HandleChangeRegistration}
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
                onChange={HandleChangeRegistration}
              />
            </div>
            <button className="border bg-blue-500 hover:text-white">
              Submit
            </button>
          </form>
        </div>

        <div>
          <Link to={"/login"} className="">
            imaš već profil?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;
