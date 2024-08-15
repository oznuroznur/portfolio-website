"use client";
import { Fragment, useState } from "react";
import emailjs from "emailjs-com"; // Import the EmailJS library

const SideBar = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleSidebar = () => {
    document.querySelector("body").classList.remove("side-content-visible");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData?.name === "" ||
      formData?.email === "" ||
      formData?.message === ""
    ) {
      alert("Please fill in all fields.");
    }

    // Initialize EmailJS with your User ID (Public Key)
    emailjs?.init("oY1yjgKPZ2yR_0PDQ");

    // Define the parameters to send to the email template
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    // Send email using EmailJS with your Service ID and Template ID
    emailjs.send("service_z8doq2a", "template_qklhu5a", templateParams).then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Your message has been sent!");
        toggleSidebar(); // Close the sidebar after submission
      },
      (error) => {
        console.error("Failed to send email.", error);
        alert("An error occurred. Please try again.");
      }
    );
  };

  return (
    <Fragment>
      {/*Form Back Drop*/}
      <div className="form-back-drop" onClick={() => toggleSidebar()} />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon" onClick={() => toggleSidebar()}>
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get In Touch With Me !</h4>
          </div>
          {/* Contact Form */}
          <div className="appointment-form">
            <form method="post" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Submit now
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
          <a
                    href="https://www.linkedin.com/in/oznuroznur/"
                    target="blank"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="https://github.com/oznuroznur" target="blank">
            <i class="fab fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </section>
      {/*End Hidden Sidebar */}
    </Fragment>
  );
};

export default SideBar;
