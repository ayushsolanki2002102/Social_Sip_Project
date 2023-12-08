
import React, { useState } from 'react';
import "./Rateus.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RateUsForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  

  const[name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch(name){
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch(
      "https://socialsipproject-default-rtdb.firebaseio.com/ratings.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          rating
        }),
      }
    );

    if(res) {
      setName("");
      setEmail("");
      setMessage("");
      setRatingSubmitted(true);
      console.log("data stored successfully");
    } else {
      console.log("Data is not stored successfully");
    }
    setRatingSubmitted(false);
    
    
  };

  return (
    <>
    
    
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="message">Feedback:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
      <label>
        Rate us:
        {[1, 2, 3, 4, 5].map((star) => (
          <FontAwesomeIcon
            key={star}
            icon={faStar}
            className={star <= rating ? 'star-selected' : 'star-unselected'}
            onClick={() => handleRatingChange(star)}
          />
        ))}
      </label>
      <button type="submit">Submit</button>
      
    </form>
    {ratingSubmitted && (
            <div id="confirmationMessage">
              <p id="message">Thank you for your Feedback!</p>
            </div>
          )}

    </>
  );
};

export default RateUsForm;

