import "./App.css"
import lemonDesert from "./assets/lemon dessert.jpg"
import marioAdrian from "./assets/Mario and Adrian b.jpg"
import bruchetta from "./assets/bruchetta.svg"
import greekSalad from "./assets/greek salad.jpg"

function Main() {
    return <main>
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

    <section id="testimonials">
    <div class="container mt-5">
        <h2 class="text-center mb-4">Testimonials</h2>
        <div class="row">
            <div class="col-md-6 col-lg-3">
                <div class="testimonial-card">
                    <span class="testimonial-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    {/* <!-- <img src="avatar1.jpg" alt="Testimonial 1" class="img-fluid rounded-circle mt-3"> --> */}
                    <h4>John Doe</h4>
                    <p>"Fantastic experience! The flavors are unparalleled and the service is top-notch. Highly
                        recommend!"</p>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="testimonial-card">
                    <span class="testimonial-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    {/* <!-- <img src="avatar1.jpg" alt="Testimonial 1" class="img-fluid rounded-circle mt-3"> --> */}
                    <h4>Emily Davis</h4>
                    <p>"Absolutely delectable! The attention to detail in every dish was remarkable. Will definitely
                        be back for more!"</p>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="testimonial-card">
                    <span class="testimonial-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    {/* <!-- <img src="avatar1.jpg" alt="Testimonial 1" class="img-fluid rounded-circle mt-3"> --> */}
                    <h4>Jane Smith</h4>
                    <p>"The Lemon Dessert was a burst of sunshine, and the Greek Salad was refreshingly authentic."
                    </p>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="testimonial-card">
                    <span class="testimonial-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    {/* <img src="avatar1.jpg" alt="Testimonial 1" class="img-fluid rounded-circle mt-3"/>  */}
                    <h4>Michael Johnson</h4>
                    <p>"The flavor combinations were superb, and the ambiance was as wonderful as the food."</p>
                </div>
            </div>
        </div>
    </div>
</section>
    
    <section id="about">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Welcome to Little Lemon, a family-owned Mediterranean
                     restaurant where tradition meets modern innovation.
                      Nestled in the heart of town, we're your go-to spot
                       for flavorful culinary experiences.

                    Our cherished recipes, passed down through generations,
                     take center stage. With a contemporary twist,
                      we offer dishes that honor tradition while
                       embracing fresh perspectives.

                    Discover our signature Lemon Dessert—a
                     tangy-sweet delight that embodies our
                      philosophy. Join us in a cozy haven where
                       every bite, every sip, and every moment is
                        a celebration of flavors and community.
                </p>
             </div>
            <div class="col-12 col-lg-6">
                <div class="text-center">
                    <img src={marioAdrian} class="img-fluid"/>
                </div>
            </div>
        </div>
    </div>
</section>

</main>
}

export default Main;