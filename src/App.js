import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Users from "./components/user/Users";

class App extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
