import lemonDesert from "./assets/lemon dessert.jpg"
import bruchetta from "./assets/bruchetta.png"
import greekSalad from "./assets/greek salad.jpg"
import "./App.css"

function Specials() {
    return <>
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6">
                <h1>This Week specials!</h1>
            </div>
            <div class="col-12 col-lg-6">
                <button type="button" class="btn btn-primary btn-lg">Online Menu</button>
            </div>
        </div>
    </div>

    <section id="dishes">
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4">
                <div class="card rounded">
                    <img src={greekSalad} class="card-img-top" alt="Image 1"/>
                    <div class="card-body">
                        <h5 class="card-title">Greek Salad</h5>
                        <p class="card-text">A refreshing blend of crisp lettuce, tomatoes, cucumbers, feta cheese,
                            and Kalamata olives, topped with our signature Greek dressing. A taste of the
                            Mediterranean in every bite.</p>
                        <p class="card-text">$12.99</p>
                        <a href="#" class="btn btn-primary">Order Now</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card rounded">
                    <img src={bruchetta} class="card-img-top" alt="Image 2"/>
                    <div class="card-body">
                        <h5 class="card-title">Bruschetta</h5>
                        <p class="card-text">Slices of toasted artisan bread topped with diced tomatoes, basil, and
                            garlic, drizzled with olive oil and balsamic reduction. A harmonious explosion of
                            Italian flavors.</p>
                        <p class="card-text">$5.99</p>
                        <a href="#" class="btn btn-primary">Order Now</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card rounded">
                    <img src={lemonDesert} class="card-img-top" alt="Image 3"/>
                    <div class="card-body">
                        <h5 class="card-title">Lemon Dessert</h5>
                        <p class="card-text">Luscious lemon curd on a buttery crust, crowned with a dollop of
                            whipped cream. A tangy-sweet symphony that captivates with its layers of delight.</p>
                        <p class="card-text">$5.00</p>
                        <a href="#" class="btn btn-primary">Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    </>
}

export default Specials;