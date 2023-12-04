import react, { Fragment } from "react";
function Boo()
{
    return(
        <Fragment>




<div className="container">
    <div className="overlay"></div>
    <div className="content">
      <h1>Reserve a Table</h1>

      <form id="reservationForm">
        <label for="hotel">Hotel Name:</label>
        <input type="text" id="hotel" name="hotel" required/>

        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name" required/>

        <label for="people">Number of People:</label>
        <input type="number" id="people" name="people" min="1" required/>

        <label for="date">Preferred Date:</label>
        <input type="date" id="date" name="date" required/>

        <label for="time">Preferred Time:</label>
        <input type="time" id="time" name="time" required/>


        <button type="submit" id="bookButton" disabled>Reserve Now</button>
      </form>

      <div id="confirmationMessage" >
        <p>Thank you, your reservation is confirmed!</p>
      </div>

      <section id="suggestedPlaces">
        <h2>Suggested Places</h2>

        <div className="placeCard1">

          <h3>Cozy Cafe</h3>
          <p>Enjoy a warm and inviting atmosphere with a variety of delicious treats.</p>
        </div>

        <div className="placeCard2">

          <h3>Urban Bistro</h3>
          <p>Experience the vibrancy of city life while savoring gourmet dishes.</p>
        </div>

        <div className="placeCard3">

          <h3>Green Oasis</h3>
          <p>Relax in a tranquil setting surrounded by nature, offering fresh and healthy options.</p>
        </div>
      </section>
    </div>
  </div>




    
    
    


        </Fragment>
    )
}

export default Boo;