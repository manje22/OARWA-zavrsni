import { useNavigate } from "react-router";

function LoginRedirect(params) {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center m-50 gap-10">
      <div>
        <h1 className="text-5xl mb-10">You need an account to continue...</h1>
        <h2 className="text-3xl">Log in to reserve your stay and more!</h2>
      </div>
      <div>
        <button className="bg-blue-400 text-white rounded-3xl p-3 text-2xl hover:bg-blue-600" onClick={()=> {navigate("/login")}}>Go to login</button>
      </div>
    </div>
  );
}

export default LoginRedirect;
