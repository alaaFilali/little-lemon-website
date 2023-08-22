import logo from "./assets/Logo.svg"
import "./App.css"
import { Link } from 'react-router-dom';

function Nav() {
    return <nav class="navbar navbar-expand-lg">
        <Link class="navbar-brand" to="/"><img src={logo} /></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#menu">Menu</a>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/booking">Reservation</Link>
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