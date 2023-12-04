import react, { Fragment } from "react";
function Ab()
{
    return(
        <Fragment>
             <header>
        <h1>About Us</h1>
    </header>
    
    
    <section id="about" class="container">
        <div id="about-text">
            
            <p>
                <h4>1.Restaurant Reviews:</h4> 
                
                Detailed reviews of local restaurants, including information about their ambiance, menu, pricing, and must-try dishes. Include high-quality photos of the food and the restaurant's interior.

             </p>
             
             <p>
                <h4>2.Cuisine Guides: </h4>
                
                Provide guides to different cuisines, explaining the key ingredients, cooking methods, and the best places in your area to try them. For example, "The Ultimate Guide to Daal Bati" or "Exploring Indian Cuisine."
             </p>

                

            <p>
                <h4>3.Local Foodie Interviews:</h4> Interview local food enthusiasts, chefs, or restaurant owners to get insights into the local food scene, trends, and their favorite dishes.
            </p>    

            
            <p>
                <h4>4.Food Events and Festivals: </h4> 
                
                Upcoming food-related events, festivals, and food truck gatherings in your area. Include dates, locations, and what to expect!!.
            </p>



            <p>
                <h4>5.Healthy Eating Guides: </h4> 
                
                Provide information on healthy dining options, vegetarian or vegan restaurants, or tips for making healthier choices at restaurants.
            </p>

                
            <p>
                <h4>6.Hidden Gems: </h4>
                Underated cafes, food spots in your city or town. These could be small family-owned restaurants or food trucks.
            </p>

                
            <p>
                <h4>7.Local Food News: </h4>information about restaurant openings, closures, and other food-related news in your area.
            </p>



            

        </div>
        <div id="image-gallery">
            <div class="image-item">
                <img src="assets/images/streetfood.jpg" alt="Cafe Image 1"/>
            </div>
            <div class="image-item">
                <img src="assets/images/cafeee.jpg" alt="Cafe Image 2"/>
            </div>
            <div class="image-item">
                <img src="assets/images/libcafe.jpg" alt="Cafe Image 3"/>
            </div>

           
        </div>
        
    </section>

    <script src="script.js"></script>
        </Fragment>
    )
}

export default Ab;