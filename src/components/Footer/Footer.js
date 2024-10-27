import React from "react";

import "../Footer/Footer.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="left">
        <ul className="helpList">
          <li>Help Center</li>
          <li>FAQ</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="right">
        <div className="subscribtion">
          <form>
            <p>
              Sign up to be the first to know about our latest offers and new
              products!
            </p>
            <label for="email">
              <input
                required
                type="email"
                id="email"
                placeholder="Your Email Address"
              />
            </label>
            <input type="submit" value="Subscribe" />
          </form>
        </div>
        <div className="socialMedia">
          <a href="https://www.x.com/" target="_blank">
            <i class="fa-brands fa-x-twitter fa-2xl"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="insta"
          >
            <i class="fa-brands fa-instagram fa-2xl"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <i class="fa-brands fa-facebook fa-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
