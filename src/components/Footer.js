import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import './Footer.css';

export default function Footer() {
  const form = useRef();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
  
    const formData = new FormData(form.current);
    formData.append("user_name",fullName); 
    formData.append("user_email",email); 
    const templateParams = Object.fromEntries(formData);
  
    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_USER_ID
    )
      .then((response) => {
        if (response.status === 200) {
          setFullName('');
          setEmail('');
          setMessage('');
          setShowSuccessMessage(true);
  
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 2000); 
        } else {
          console.log('Error:', response.text);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <section id="contact">
      <div className="social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
      </div>
      <div className="contact-box">
        <div className="c-heading">
          <h1>Get In Touch</h1>
          <p>Call Or Email Me</p>
        </div>
        <div className="c-inputs">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="fullName" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required />
            <textarea name="message" placeholder="Write Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            <div className="contact-info">
              <div>
                <i className="fas fa-phone"></i>
                <span className="phone-link">+1 250 864 8491</span>
              </div>
              <div>
              <i className="fas fa-envelope"></i>
<a href="mailto:abdullahmunir2004@gmail.com" className="email-link">abdullahmunir2004@gmail.com</a>



              </div>
            </div>
            {showSuccessMessage ? (
              <p className="success-message">Form submitted successfully!</p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.6630910800022!2d-119.39900602328466!3d49.942662671499626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537ded7e7d26f175%3A0x9d6ca9356178cbd9!2s1290%20International%20Mews%2C%20Kelowna%2C%20BC%20V1V%201V8%2C%20Canada!5e0!3m2!1sen!2s!4v1688746515161!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
