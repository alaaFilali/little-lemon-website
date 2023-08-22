import "./App.css"
import marioAdrian from "./assets/Mario and Adrian b.jpg"

function Chicago() {
    return <section id="about">
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
}

export default Chicago;