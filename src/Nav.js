import logo from "./logo.svg"

function Nav() {
    return <nav>
        <img src={logo} alt="little lemon logo"/>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Reservation</a></li>
            <li><a href="">Order online</a></li>
            <li><a href="">Login</a></li>
        </ul>
    </nav>
}

export default Nav;