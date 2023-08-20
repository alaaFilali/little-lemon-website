import logo from "./logo.svg"

function Footer() {
    return <footer>
        <img src={logo}/>
        <h6>Doormat Navigation</h6>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Reservation</a></li>
            <li><a href="">Order online</a></li>
            <li><a href="">Login</a></li>
        </ul>
        <h6>Contact</h6>
        <ul>
            <li><a href="">Adress</a></li>
            <li><a href="">Phone Number</a></li>
            <li><a href="">Emain</a></li>
        </ul>
        <h6>Social Media Links</h6>
        <ul>
            <li><a href="">Facebook</a></li>
            <li><a href="">Instagram</a></li>
            <li><a href="">Twitter</a></li>
        </ul>
    </footer>
}

export default Footer;