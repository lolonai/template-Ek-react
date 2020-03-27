import React from "react";
import Home from "../containers/home";
import Navbar from "./navbar";
import Footer from "./footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
