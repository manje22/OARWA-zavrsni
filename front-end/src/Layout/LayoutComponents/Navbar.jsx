import { Link } from "react-router";

function NavBar() {
    return(
        <div className="border-b-1 border-gray-200">
            <nav className="sticky inset-x-0 flex flex-row top-0 justify-between  p-5">
                <Link to={'/information'}>Contact us</Link>
                <Link to={'/login'}>Log in</Link>
                <Link to={'/registration'}>Register</Link>
                <Link to={'/gallery'}>Gallery</Link>
                <Link to={'/new-reservation'}>Make your reservation</Link>
            </nav>
        </div>
    )
}

export default NavBar;