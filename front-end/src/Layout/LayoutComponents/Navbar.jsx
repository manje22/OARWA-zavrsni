import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import LogOutButton from "../../components/LogOutButton";

function NavBar() {
  const { currentUser } = useContext(UserContext);
  return (
    <header className="w-full px-8 py-3 shadow-sm shadow-neutral-50 flex items-center">
      <nav className='flex justify-between items-center w-full'>
        <Link to={"/"}>Home</Link>
        <ul  className='flex items-center gap-8'>
          <li>
            <Link to={"/gallery"}>Gallery</Link>
          </li>
          <li>
            <Link to={"/information"}>Information</Link>
          </li>
          <li>
            <Link to={"/newreservation"}>Make new reservation</Link>
          </li>
          {currentUser === null ? (
            <Link to={"/login"} className="bg-blue-200 text-white rounded-2xl p-3 hover:bg-blue-400">Log in</Link>
          ) : (
            <LogOutButton></LogOutButton>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
