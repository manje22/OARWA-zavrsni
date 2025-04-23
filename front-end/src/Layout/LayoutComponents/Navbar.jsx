import { Link } from "react-router";

function NavBar() {
    return(
        <div className="w-full">
            <nav className="flex flex-row w-full justify-around">
                <p>Contact us</p>
                <Link to={'/login'}>Log in</Link>
                <Link to={'/registration'}>Register</Link>
                <Link to={'/gallery'}>Gallery</Link>
                <Link to={'/new-reservation'}>Make your reservation</Link>
            </nav>
        </div>
    )
}

export default NavBar;