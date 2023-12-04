import react, { Fragment } from "react";
function Cont()
{
    return(
        <Fragment>
    <header>
        <h1>Contact Us</h1>
    </header>
    <div class="contact-container">
        <form id="contact-form">
            <div class="input-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div class="input-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="input-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
        <div id="response" className="hidden"></div>
    </div>
    
        </Fragment>
    )
}

export default Cont;