import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";

function NavBar() {
  const { currentUser, setCurrentUser } = useContext(UserContext);


  function LogOut(){
    setCurrentUser(null);
    localStorage.removeItem("token");
  } 

  return (
    <div className="border-b-1 border-gray-200">
      <nav className="sticky inset-x-0 flex flex-row top-0 justify-between  p-5">
        <Link to={"/information"}>Contact us</Link>
        {currentUser === null ? (
          <Link to={"/login"}>Log in</Link>
        ) : (
          <div>
            <p>Hi {currentUser.name}</p>
            <button onClick={LogOut}>Log out</button>
            <Link to={"/newreservation"}>Make your reservation</Link>
          </div>
        )}
        <Link to={"/gallery"}>Gallery</Link>
      </nav>
    </div>
  );
}

export default NavBar;
