import React from "react";
import logo from "./Find A Word.png";

import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Jeanne C. Edwards and is Open-Sourced on
            Github and hosted on Netlify
          </small>
        </footer>
      </div>
    </div>
  );
}
