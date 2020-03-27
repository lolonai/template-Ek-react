import React from "react";

const Navbar = () => {
  return (
    <div class="navbar">
      <div class="navbar-top"></div>
      <div class="navbar-container">
        <div class="navbar-right">
          <div class="navbar-logo">
            <i class="far fa-smile-wink"></i>
          </div>
          <div class="navbar-menu">
            <p>Accueil</p>
            <p>Blog</p>
            <p>A Propos</p>
            <p>Contact</p>
          </div>
          <div class="navbar-social">
            <p>
              <i class="fab fa-facebook-square"></i>
            </p>
            <p>
              <i class="fab fa-instagram"></i>
            </p>
            <p>
              <i class="fab fa-linkedin"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
