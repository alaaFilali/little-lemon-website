import logo from "./assets/Logo.svg"
import "./App.css"

function Footer() {
  return <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img src={logo} alt="Little Lemon Logo" />
        </div>
        <div class="col-md-4">
          <h4>Navigation</h4>
          <ul class="footer-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Contact Us</h4>
          <p>Email: info@littlelemon.com</p>
          <p>Phone: (123) 456-7890</p>
          <div class="social-icons">
            <a href="#">facebook</a>
            <a href="#">twitter</a>
            <a href="#">instagram</a>
          </div>
        </div>
      </div>
    </div>
  </footer>

}

export default Footer;