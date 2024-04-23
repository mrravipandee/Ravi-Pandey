import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_amiekt7",
        "template_xs1tvs1",
        form.current,
        "FK5nSfT0eTM26auTi"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear input fields after successful submission
          form.current.reset();
          // Show a success notification
          notifySuccess();
        },
        (error) => {
          console.log(error.text);
          // Show an error notification
          notifyError();
        }
      );
  };

  const notifySuccess = () => toast.success("Message sent successfully!");
  const notifyError = () => toast.error("Error sending message, please try again.");

  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get In Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything!</h3>
          <p className="contact_details">Don't like forms? Send me an email.</p>
        </div>
        <form className="contact_form" ref={form} onSubmit={sendEmail}>
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input
                type="text"
                name="user_name"
                className="contact_form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact_form-div">
              <input
                type="email"
                name="user_email"
                className="contact_form-input"
                placeholder="Insert your email"
              />
            </div>
          </div>

          <div className="contact_form-div contact_form-area">
            <textarea
              id=""
              cols="30"
              rows="10"
              name="message"
              className="contact_form-input"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className="btn">Send Message</button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default Contact;
