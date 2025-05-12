import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import LogOutButton from "../../components/LogOutButton";

function NavBar() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <div className="border-b-1 border-gray-200">
      <nav className="sticky inset-x-0 flex flex-row top-0 justify-between  p-5">
        <Link to={"/information"}>Information</Link>
        {currentUser === null ? (
          <Link to={"/login"}>Log in</Link>
        ) : (
          <div>
            <p>Hi {currentUser.name}</p>
            <LogOutButton></LogOutButton>
            <Link to={"/newreservation"}>Make your reservation</Link>
          </div>
        )}
        <Link to={"/gallery"}>Gallery</Link>
      </nav>
    </div>
  );
}

export default NavBar;
