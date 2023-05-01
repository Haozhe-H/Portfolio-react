import React from "react";
import "../styles/Styles.css";

function Contact() {
  return (
    <section className="contact-me" id="contact-me">
      <h2>Contact Me</h2>
      <section className="contact-m">
        <ul>
          <li>
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a href="#">Email</a>
            {/* mailto:youremail@example.com */}
          </li>
          <li>
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a href="#">Phone</a>
            {/* tel:+1234567890 */}
          </li>
          <li>
            <a href="https://github.com/Haozhe-H">Github</a>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Contact;
