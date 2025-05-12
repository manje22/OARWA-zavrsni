import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function LogOutButton() {
  const { setCurrentUser } = useContext(UserContext);

  function LogOut() {
    setCurrentUser(null);
    localStorage.removeItem("token");
  }

  return (
    <>
      <button
        className="bg-blue-200 text-white rounded-2xl p-3 hover:bg-blue-400"
        onClick={LogOut}
      >
        Log out
      </button>
    </>
  );
}

export default LogOutButton;
