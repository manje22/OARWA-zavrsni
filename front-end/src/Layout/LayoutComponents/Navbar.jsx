import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";

function NavBar() {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    return(
        <div className="border-b-1 border-gray-200">
            <nav className="sticky inset-x-0 flex flex-row top-0 justify-between  p-5">
                <Link to={'/information'}>Contact us</Link>
                {
                    currentUser === null ? <Link to={'/login'}>Log in</Link>: <div>Log out</div>
                }
                
                <Link to={'/registration'}>Register</Link>
                <Link to={'/gallery'}>Gallery</Link>
                <Link to={'/new-reservation'}>Make your reservation</Link>
            </nav>
        </div>
    )
}

export default NavBar;