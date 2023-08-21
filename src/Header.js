import chefImage from "./assets/restaurant chef B.jpg";
import "./App.css";

function Header() {
    return <header>
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6 centered-contianer">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned
                        Mediterranean restaurant.
                        focused on traditional
                        receipies served with modern
                        twist.
                    </p>
                    <button type="button" class="btn btn-primary">Reserve a Table</button>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="text-center">
                        <img src={chefImage} class="img-fluid" style={{borderRadius: "16px"}} />
                    </div>
                </div>
            </div>
        </div>
    </header>
}

export default Header;