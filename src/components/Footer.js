import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./Footer.css";

export default function Footer() {
  const form = useRef();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    formData.append("user_name", fullName);
    formData.append("user_email", email);
    const templateParams = Object.fromEntries(formData);

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      )
      .then((response) => {
        if (response.status === 200) {
          setFullName("");
          setEmail("");
          setMessage("");
          setShowSuccessMessage(true);

          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 4000);
        } else {
          console.log("Error:", response.text);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <section id="contact">
      <div className="social">
        <a
          href="https://www.instagram.com/_abdullahmunir_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://github.com/abdullahmunir24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/abdullah-munir-b06a17250/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="contact-box">
        <div className="c-heading">
          <h1>Get In Touch</h1>
          <p>Call Or Email Me</p>
        </div>
        <div className="c-inputs">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
            />
            <textarea
              name="message"
              placeholder="Write Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <div className="contact-info">
              <div>
                <i className="fas fa-phone"></i>
                <span className="phone-link">+1 236 457 3130</span>
              </div>
              <div>
                <i className="fas fa-envelope"></i>
                <a
                  href="mailto:abdullahmunir2004@gmail.com"
                  className="email-link"
                >
                  abdullahmunir2004@gmail.com
                </a>
              </div>
            </div>
            {showSuccessMessage ? (
              <div>
                <p className="success-message">
                  Thank you for your submission!
                </p>
                <p className="success-message">
                  A confirmation email has been sent to your email address.
                </p>
              </div>
            ) : (
              <button type="submit" className="custom-button">
                Send Message
              </button>
            )}
          </form>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164477.36692580467!2d-119.61958508788803!3d49.89957571728325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8cb6e3c730b3%3A0x4ef8e53ddab4c4f7!2sKelowna%2C%20BC!5e0!3m2!1sen!2sca!4v1698862475364!5m2!1sen!2sca"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
