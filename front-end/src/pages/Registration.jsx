import { useState } from "react";
import { HandleChange} from "../utils/forms";
import { registerUser } from "../services/AuthServices";
import { Link, useNavigate } from "react-router-dom";
import isRegistrationFormValid from "../utils/isRegistrationFormValid";

function Registration(params) {
  const navigate = useNavigate();
  const [error, setError] = useState(); 
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

    const isOk = isRegistrationFormValid(formData);

    if (isOk.error){
      setError(isOk.message);
      return;
    }

    try {
      const res = await registerUser(formData);
      if (res.status === 201 || 200)
        navigate("/login");
    } catch (error) {
      setError(error.response.data);
      //console.log(error);
    }
  }

  return (
    <div className="flex flex-row border border-solid border-gray-400 justify-around w-3/4 m-auto mt-72 p-10 rounded-4xl">
      <div className="">
        <h1 className="mt-12 text-5xl">Registration</h1>
        <h2 className="mt-5 text-2xl">Create your new account here</h2>
        <div className="mt-10">
          <Link to={"/login"} className="hover:text-blue-700 underline">
            Already have an account?
          </Link>
        </div>
      </div>

      <div>
        <div>
          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-7">
            <div className="">
              <label htmlFor="email" id="email" className="">
                Email: 
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={HandleChangeRegistration}
                required
              />
            </div>

            <div>
              <label htmlFor="name" id="name">
                Name: 
              </label>
              <input
                id="name"
                type="name"
                name="name"
                placeholder="name.."
                value={formData.name}
                onChange={HandleChangeRegistration}
                required
              />
            </div>

            <div>
              <label htmlFor="surname" id="surname">
                Surname: 
              </label>
              <input
                id="surname"
                type="surname"
                name="surname"
                placeholder="surname"
                value={formData.surname}
                onChange={HandleChangeRegistration}
                required
              />
            </div>

            <div>
              <label htmlFor="password" id="password">
                Password: 
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password..."
                value={formData.password}
                onChange={HandleChangeRegistration}
                required
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

export default Registration;
