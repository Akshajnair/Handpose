import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Loader from "./components/Loader";
import Camera from "./components/Camera";
import "./components/assets/Home.css";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Home />;
            }}
          />
          <Route
            exact
            path="/loader"
            render={(props) => {
              return <Loader />;
            }}
          />
          <Route
            exact
            path="/camera"
            render={(props) => {
              return <Camera />;
            }}
          />
        </Router>
      </div>
    );
  }
}

export default App
