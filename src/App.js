import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Projects from "./components/ProjectList/index";

const App = () => (
  <React.Fragment>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-sm-3 text-right">
          <Navbar />
        </div>
        <div className="col-sm-9">
          <div className="row">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default App;
