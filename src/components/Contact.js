import React from "react";
import "../styles/Styles.css";
import { FaPhone, FaEnvelope, FaGithub } from "react-icons/fa";

function Contact() {

  var modal = document.getElementById("myModal");

  var span = document.getElementsByClassName("close")[0];

  // span.onclick = function () {
  //   modal.style.display = "none";
  // };

  // const showModal = () => {
  //   modal.style.display = 'block'
  // };

  // const validateForm = () => {
  //   const nameInput = document.getElementById("name");
  //   const emailInput = document.getElementById("email");

  //   if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
  //     showModal();
  //     return false;
  //   }

  //   return true;
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (validateForm()) {
  //     const form = document.querySelector("form");
  //     form.submit();
  //   }
  // };

  return (
    <div className="container">
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>Invalid input!</p>
        </div>
      </div>

      <div className="card-body">
        <form
          // onSubmit={handleSubmit}
          action="mailto:haozhehuang@outlook.com"
          method="post"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="_replyto"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea
              type="submit"
              name="Send"
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Message"
              rows="3"
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="card">
        <div className="card-header">Contact Info</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <FaEnvelope className="contact-info" />
            haozhehuang@outlook.com
          </li>
          <li className="list-group-item">
            <FaPhone className="contact-info" />
            xxx-xxx-xxxx
          </li>
          <li className="list-group-item">
            <FaGithub className="contact-info" />
            https://github.com/Haozhe-H
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
