import { useState } from "react";
import "./Contact.css";

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a5d93b79-ef34-44d4-bb46-7e0e739b8d3a");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src="/images/email.png" alt=""></img></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src="images/mail.png" alt="" />contact@edusity.in</li>
                <li><img src="images/phone.png" alt="" />+91 9403914537</li>
                <li><img src="images/location.png" alt="" />Nalanda Univeresity, India<br/>Asia</li>

            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Tour Name</label>
                <input type="text" name="name" placeholder="Enter your name" required />

                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your phone number" required/>

                <label>Write your messages here</label>
                <textarea name="message" rows={6} placeholder="Enter your message" required/>

                <button type="submit" className="btn dark-btn">Submit<img src="/images/right_ar.png" alt=""></img></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact