import ContactCard from "../components/ContactCard";
import { ContactForm } from "../components/ContactForm";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            We&#x2019;d love to hear <span> from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5252642462565!2d72.87331437618249!3d21.211009880484347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f83f64908b7%3A0xc8707512a02ab590!2sGree%20Web%20Solutions!5e0!3m2!1sen!2sin!4v1688536892891!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className={styles.mapping}
      ></iframe>
    </>
  );
};

export default Contact;
