import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-banner">
        <h2 className="hTwo">Contact Me</h2>
      </div>
      <div className="contact-info">
      <p>For enquiries, please email me at: <a href="mailto:OliveProWebDev@gmail.com">OliveProWebDev@gmail.com</a></p>
      <br></br>
        <a href="https://github.com/Olive-Provencio-Johnson" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        <br></br>
        <a href="https://www.linkedin.com/in/olivia-provencio-johnson/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
      </div>
    </div>
  );
};

export default Contact;
