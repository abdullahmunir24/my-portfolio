import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import "./Footer.css";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

export default function Footer() {
  const form = useRef();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  // Animation on scroll
  const { ref: footerRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  // Current year for copyright
  const currentYear = new Date().getFullYear();
  
  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
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
          setSubmitting(false);
          
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 4000);
        } else {
          console.log("Error:", response.text);
          setSubmitting(false);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        setSubmitting(false);
      });
  };
  
  return (
    <Element name="contact" className="footer-section">
      <div className="footer-bg-gradient"></div>
      
      <div className="container footer-container" ref={footerRef}>
        <div className="section-header animate-in">
          <h2 className="section-title">
            <span className="highlight-text">Let's</span> Connect
          </h2>
          <p className="section-subtitle">
            Ready to collaborate on innovative projects? Reach out today!
          </p>
        </div>
        
        <div className="footer-content">
          <div className="contact-info-container animate-in">
            <div className="contact-info-card">
              <div className="contact-info-header">
                <div className="contact-info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3>Location</h3>
              </div>
              <p>Kelowna, British Columbia, Canada</p>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-header">
                <div className="contact-info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h3>Phone</h3>
              </div>
              <p className="phone-link">+1 236 457 3130</p>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-header">
                <div className="contact-info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Email</h3>
              </div>
              <a href="mailto:abdullahmunir2004@gmail.com" className="email-link">
                abdullahmunir2004@gmail.com
              </a>
            </div>
            
            <div className="social-links">
              <a
                href="https://www.instagram.com/_abdullahmunir_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://github.com/abdullahmunir24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/abdullahmunir24/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div className="contact-form-container card animate-in">
            <h3>Drop Me a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Your Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              
              {showSuccessMessage ? (
                <div className="success-message">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="success-text">
                    <p>Message sent successfully!</p>
                    <p>I'll get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <button 
                  type="submit" 
                  className="modern-button submit-button"
                  disabled={submitting}
                >
                  {submitting ? (
                    <span>
                      <i className="fas fa-spinner fa-spin"></i> Sending...
                    </span>
                  ) : (
                    <span>
                      <i className="fas fa-paper-plane"></i> Send Message
                    </span>
                  )}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Abdullah Munir. All rights reserved.</p>
          <p>
            Website hosted on{" "}
            <a
              href="https://www.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Netlify
            </a>
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="footer-decoration-1"></div>
      <div className="footer-decoration-2"></div>
    </Element>
  );
}
