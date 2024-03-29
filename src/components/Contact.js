import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <span className="contactPageTitle">Contact Me</span>

      <span className="contactDesc">
        Please contact me through the below form or through{" "}
        <a href="tulasivullendula@gmail.com">email</a>
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" />
        <input type="email" className="email" placeholder="Your Email" />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>
        <div className="links">
          <img src="" alt="" className="link" />
          <img src="" alt="" className="link" />
          <img src="" alt="" className="link" />
          <img src="" alt="" className="link" />
        </div>
      </form>
    </section>
  );
}

export default Contact;
