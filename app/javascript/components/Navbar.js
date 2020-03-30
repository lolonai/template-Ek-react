import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Home from "../containers/Home";
import Blog from "../containers/Blog";
import Apropos from "../containers/Apropos";
import Contact from "../containers/Contact";

const Navbar = () => {
  return (
    <BrowserRouter>
      <header>
        <nav className="navbar">
          <div className="navbar-top"></div>

          <div className="navbar-container">
            <div className="navbar-right">
              <div className="navbar-logo">
                <i className="far fa-smile-wink"></i>
              </div>
              <div className="navbar-menu">
                <p>
                  <NavLink exact to="/" activeClassName="selected">
                    Accueil
                  </NavLink>
                </p>

                <p>
                  <NavLink to="/Blog" activeClassName="selected">
                    Blog
                  </NavLink>
                </p>

                <p>
                  <NavLink to="/Apropos" activeClassName="selected">
                    A propos
                  </NavLink>
                </p>

                <p>
                  <NavLink to="/Contact" activeClassName="selected">
                    Contact
                  </NavLink>
                </p>
              </div>

              <div className="navbar-social">
                <p>
                  <i className="fab fa-facebook-square"></i>
                </p>

                <p>
                  <i className="fab fa-instagram"></i>
                </p>

                <p>
                  <i className="fab fa-linkedin"></i>
                </p>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/blog" component={Blog} />

        <Route path="/apropos" component={Apropos} />

        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};
export default Navbar;
