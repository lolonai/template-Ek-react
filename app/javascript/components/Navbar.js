import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
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
                  <Link to="/">Accueil</Link>
                </p>

                <p>
                  <Link to="/Blog">Blog</Link>
                </p>

                <p>
                  <Link to="/Apropos">A propos</Link>
                </p>

                <p>
                  <Link to="/Contact">Contact</Link>
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
