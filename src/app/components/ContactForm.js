"use client";
import { Mulish } from "next/font/google";
import { useState } from "react";
import styles from "../contact/contact.module.css";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  function handelChange(e) {
    // e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.contact_form} onSubmit={handelSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Name
          <input
            className={mulish.className}
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            value={user.username}
            onChange={handelChange}
            autoComplete="off"
            required
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Email
          <input
            className={mulish.className}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            autoComplete="off"
            onChange={handelChange}
            required
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Phone
          <input
            className={mulish.className}
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter your phone"
            value={user.phone}
            onChange={handelChange}
            autoComplete="off"
            required
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Message
          <textarea
            name="message"
            id="message"
            rows={5}
            className={mulish.className}
            placeholder="Enter Your Message"
            value={user.message}
            onChange={handelChange}
            autoComplete="off"
            required
          />
        </label>
      </div>
      <div>
        {status === "success" && (
          <p className={styles.success_msg}>Thank you for your message!</p>
        )}
        {status === "error" && (
          <p className={styles.error_msg}>
            There was an error submitting your message. Please try again.
          </p>
        )}
        <button type="submit" className={mulish.className}>
          Send Message
        </button>
      </div>
    </form>
  );
};
