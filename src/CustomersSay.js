import "./App.css"

function CustomersSay() {
    return <section id="testimonials">
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
}

export default CustomersSay;