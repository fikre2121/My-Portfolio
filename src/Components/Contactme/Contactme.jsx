import React from "react";
import styles from "./Contactme.module.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserCircle,
} from "react-icons/fa";
import Animatedline from "../Globalcomponents/Animatedline/Animatedline"
const Contactme = () => {
  return (
    <section className={styles.contact} id="contact">
      <Animatedline
        title={"Get in Touch"}
        subtitle={"Feel free to contact me anytimes"}
      />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2 className={styles.title}>Message Me</h2>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" rows="5" required />
            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>
        </div>

        <div className={styles.right}>
          <h3>Contact Info</h3>
          <p className={styles.description}>
            Always available for freelance work if the right project comes
            along, feel free to contact me!
          </p>

          <div className={styles.info}>
            <div className={styles.item}>
              <FaUserCircle className={styles.icon} />
              
              <div>
                <h4>Name</h4>
                <p>Fikre Kindeya</p>
              </div>
            </div>
            <div className={styles.item}>
              <FaMapMarkerAlt className={styles.icon} />
              <div>
                <h4>Location</h4>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <div className={styles.item}>
              <FaPhoneAlt className={styles.icon} />
              <div>
                <h4>Call Me</h4>
                <p>+251 912345678</p>
              </div>
            </div>
            <div className={styles.item}>
              <FaEnvelope className={styles.icon} />
              <div>
                <h4>Email Me</h4>
                <p>fikre.gebremariam2121@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactme;
