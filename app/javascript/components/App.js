import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default App;
