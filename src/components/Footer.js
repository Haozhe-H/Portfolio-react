import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-div">
        <a
          href="https://github.com/Haozhe-H"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={{ marginRight: "30px" }} size={26}/>
        </a>
        <a
          href="https://www.linkedin.com/in/haozhe-huang-694254142/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ marginRight: "30px" }} size={26}/>
        </a>
        {/* will change this twitter contact to something else later */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={26}/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
