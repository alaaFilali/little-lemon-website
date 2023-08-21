import logo from "./assets/Logo.svg"
import "./App.css"

function Nav() {
    return <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href=""><img src={logo} /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#menu">Menu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#reservation">Reservation</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#order-online">Order Online</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#login">Login</a>
                </li>
            </ul>
        </div>
    </nav>
}

export default Nav;