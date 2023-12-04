import react, { Fragment } from "react";
import { Link } from "react-router-dom";
function Home()
{
    return(
        <Fragment>
    <div className="header" >
        <nav>
            <a href="index.html"><img src="assets/images/logonew.PNG" /></a>
            <div className="nav-links" id="navlinks">
                <i className="fa fa-times" onclick="hideMenu()"></i>
                <ul>
                    
                    <Link to="/" className="li">HOME</Link>
                    <Link to="/Ab" className="li">ABOUT</Link>
                    <Link to="/Cont" className="li">CONTACT</Link>

                </ul>

            </div>
            <i className="fa fa-bars" onclick="showMenu()"></i>
        </nav>

        <div className="text-box">
            <h1><span>S</span>ocial <span>S</span>ip</h1>
            <p> Lets talk about food </p>  <p> all the day!!</p>

            <Link to="/Boo" className="hero-btn">Book your table right now!!</Link>

        </div>

    </div>


<div className="joinus">
    <h1>LETS EXPLORE TOGETHER</h1>
   
    <div className="row">
        <div className="join-col">
            <h3>Restaurant Reviews</h3>
            <p>
                Detailed reviews of local restaurants, including information about their ambiance, menu, pricing, and must-try dishes. Include high-quality photos of the food and the restaurant's interior.
            </p>
        </div>
        <div className="join-col">
            <h3>Food Events and Festivals</h3>
            <p>
                Upcoming food-related events, festivals, and food truck gatherings in your area. Include dates, locations, and what to expect!!.
            </p>

        </div>
        <div className="join-col">
            <h3>Hidden Gems</h3>
            <p>
                Underated cafes, food spots in your city or town. These could be small family-owned restaurants or food trucks.
            </p>

        </div>
    </div>



</div>
<div className="about">
    <h1>Taste Is Priority</h1>
    <p className="pp">We embark on a mouthwatering journey through the culinary delights of your local food scene. We explore the art of flavor, showcasing the most delectable dishes and the stories behind the chefs and eateries that create them.</p>

    <div className="row">
            <div className="about-col">
                <img src="assets/images/indiancusine.jpg"/>
                <div className="layer">
                    <h3 className="hh">India</h3>
                </div>
            </div>

            <div className="about-col">
                <img src="assets/images/newyotkcu.jpg"/>
                <div className="layer">
                    <h3 className="hh">New York</h3>
                </div>
            </div>
            
            <div className="about-col">
                <img src="assets/images/chinesefood.jpg"/>
                <div className="layer">
                    <h3 className="hh">Chinese</h3>
                </div>
            </div>



    </div>





</div>
<div className="facilities">
    <h1>Our Facilities</h1>
    <p>
    
        Our facilities are a testament to the commitment we have in creating a welcoming and enjoyable dining experience, Our friendly and interactive page is dedicated to making your visit memorable.
    
    </p>

    <div className="row">
        <div className="facilities-col">
            <img src="assets/images/background2.jpg" alt=""/>
            <h3>Street Food Guide</h3>
            <p>
                
                To uncover the hidden gems and sizzling sensations that local streets have to offer, From bustling food carts to quaint roadside stalls.
            
            </p>
        </div>

        <div className="facilities-col">
            <img src="assets/images/background1.jpg" alt=""/>
            <h3>Cuisine Guides</h3>
            <p>
                
                Provide guides to different cuisines, explaining the key ingredients, cooking methods, and the best places in your area to try them. For example, "The Ultimate Guide to Daal Bati" or "Exploring Indian Cuisine."
            
            </p>
        </div>

        <div className="facilities-col">
            <img src="assets/images/healthyfood.jpg" alt=""/>
            <h3>Healthy Eating Guides</h3>
            <p>
                
                Provide information on healthy dining options, vegetarian or vegan restaurants, or tips for making healthier choices at restaurants.
            
            </p>
        </div>

    </div>






</div>
<div className="testimonials">
    <h1>What our customer says?</h1>
    

    <div className="row">
        <div className="testimonials-col">
            <img src="assets/images/user1.jpg"/>
            <div>
                <p>

                    I stumbled upon Social Sip recently, and it's been a game-changer in how I explore and experience food in my city. The site is a treasure trove of culinary gems, offering everything from restaurant reviews to mouthwatering recipes and the latest food trends. The in-depth restaurant profiles and dish recommendations have become my go-to source when I'm looking for the perfect dining spot.
                </p>
                <h3>
                    Guatam Pandey
                </h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
            </div>


        </div>

        <div className="testimonials-col">
            <img src="assets/images/user2.jpg"/>
            <div>
                <p>

                    I've discovered hidden foodie havens and experienced flavors I never knew existed, thanks to Social Sip. If you're a fellow food enthusiast, this is the ultimate foodie haven that will elevate your culinary adventures. It's the website that leaves you hungry for more, in the best way possible!"
                </p>
                <h3>
                    Juhi Yadav
                </h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
            </div>


        </div>


    </div>




</div>



<div className="cta">
    <h1>Enroll For Our Help</h1>


    <Link to="/Cont" className="hero-btn">Book your table right now!!</Link>

</div>


        </Fragment>
    )
}

export default Home;