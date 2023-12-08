import { Fragment, useState } from "react";
import "../pages/book.css";
function Boo() {
  const [hotel, setHotel] = useState("");
  const [name, setName] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reservationSubmitted, setReservationSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(
      "https://socialsipproject-default-rtdb.firebaseio.com/userRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hotel,
          name,
          people,
          date,
          time,
        }),
      }
    );
    if(res) {
      setHotel("");
      setName("");
      setPeople("");
      setDate("");
      setTime("");
      setReservationSubmitted(true);
      console.log("data stored successfully");
    } else {
      console.log("Data is not stored successfully");
    }
    setReservationSubmitted(false);
    
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "hotel":
        setHotel(value);
        break;
      case "name":
        setName(value);
        break;
      case "people":
        setPeople(value);
        break;
      case "date":
        setDate(value);
        break;
      case "time":
        setTime(value);
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <div className="container">
        <div className="overlay"></div>
        <div className="content">
          <h1>Reserve a Table</h1>

          <form method="POST" id="reservationForm" onSubmit={handleSubmit}>
            <label htmlFor="hotel">Hotel Name:</label>
            <input
              type="text"
              id="hotel"
              name="hotel"
              value={hotel}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="people">Number of People:</label>
            <input
              type="number"
              id="people"
              name="people"
              value={people}
              onChange={handleInputChange}
              min={1}
              required
            />

            <label htmlFor="date">Preferred Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="time">Preferred Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={time}
              onChange={handleInputChange}
              required
            />

            <button type="submit" id="bookButton">
              Reserve Now
            </button>
          </form>

          {reservationSubmitted && (
            <div id="confirmationMessage">
              <p id="message">Thank you, your reservation is confirmed!</p>
            </div>
          )}

          <section id="suggestedPlaces">
            <h2>Suggested Places</h2>

            <div className="placeCard1">
              <h3>Cozy Cafe</h3>
              <p>
                Enjoy a warm and inviting atmosphere with a variety of delicious
                treats.
              </p>
            </div>

            <div className="placeCard2">
              <h3>Urban Bistro</h3>
              <p>
                Experience the vibrancy of city life while savoring gourmet
                dishes.
              </p>
            </div>

            <div className="placeCard3">
              <h3>Green Oasis</h3>
              <p>
                Relax in a tranquil setting surrounded by nature, offering fresh
                and healthy options.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
}

export default Boo;


// https://socialsipproject-default-rtdb.firebaseio.com/