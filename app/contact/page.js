"use client";
import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import the EmailJS library

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    } else {
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
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          alert("Your message has been sent!");
        },
        (error) => {
          console.error("Failed to send email.", error);
          alert("An error occurred. Please try again.");
        }
      );
    }
  };

  return (
    <NoxfolioLayout>
      <PageBanner pageName={"Contact Me"} />
      <title>Öznur | Contact</title>
      {/* Contact Page Area start */}
      <section className="contact-page pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="contact-page-content rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>
                    Let’s Talk For your <span>Next Projects</span>
                  </h2>
                  <p>
                    Do not hesitate to contact me ! If you have any questions or
                    if you want to work together, I will get back to you as soon
                    as possible.
                  </p>
                </div>
                <h6>Address</h6>
                <div className="widget_contact_info mb-35">
                  <ul>
                    <li>
                      <i className="far fa-map-marker-alt" /> Istanbul, Turkey
                    </li>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="mailto:oznurcontact@gmail.com">
                        oznurcontact@gmail.com
                      </a>
                    </li>
                    {/* <li>
                      <i className="far fa-phone" />{" "}
                      <a href="callto:+880(123)45688">+880 (123) 456 88</a>
                    </li> */}
                  </ul>
                </div>
                <h5>Follow Me</h5>
                <div className="social-style-one mt-10">
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
            </div>
            <div className="col-lg-8">
              <div className="contact-page-form contact-form form-style-one wow fadeInUp delay-0-2s">
                <form
                  id="contactForm"
                  className="contactForm"
                  name="contactForm"
                  method="post"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                          defaultValue=""
                          placeholder="Name Surname"
                          required=""
                          data-error="Please enter your Name"
                        />
                        <label htmlFor="name" className="for-icon">
                          <i className="far fa-user" />
                        </label>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                          defaultValue=""
                          placeholder="example@gmail.com"
                          required=""
                          data-error="Please enter your Email"
                        />
                        <label htmlFor="email" className="for-icon">
                          <i className="far fa-envelope" />
                        </label>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    {/*  <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          className="form-control"
                          defaultValue=""
                          placeholder="+880 (123) 456 88"
                          required=""
                          data-error="Phone is not required"
                        />
                        <label htmlFor="phone_number" className="for-icon">
                          <i className="far fa-phone" />
                        </label>
                        <div className="help-block with-errors" />
                      </div>
                    </div> */}
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control w-full"
                          defaultValue=""
                          placeholder="Subject"
                          required=""
                          data-error="Please enter your Subject"
                        />
                        <label htmlFor="subject" className="for-icon">
                          <i className="far fa-text" />
                        </label>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Write message.."
                          required=""
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">
                          Send Me Message <i className="far fa-angle-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Contact Page Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map pb-120 rpb-90 wow fadeInUp delay-0-2s">
        <div className="container">
          <div className="our-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7570.4541490890315!2d28.96261465007222!3d41.01322488685581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1723756599128!5m2!1str!2str"
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </NoxfolioLayout>
  );
};
export default Page;
