import { validateEmail } from "./forms";

export default function isRegistrationFormValid(formData){
    const res = {error: false, message: "ok"};

    if(!formData.name || !formData.password || !formData.surname){
      res.error = true;
      res.message = "please fill out all fields";
      return res;
    }

    if(!formData.email || !validateEmail(formData.email))
    {
      res.error = true,
      res.message = "please enter valid email";
      return res;
    }

    if(formData.password.length < 5)
    {
      res.error = true,
      res.message = "password must be at least 5 characters";
      return res;
    }

    return res;
  };