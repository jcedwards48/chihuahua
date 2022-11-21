import logo from "./logo.svg";

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
        <footer>
          <small>Coded by Jeanne C. Edwards</small>
        </footer>
      </div>
    </div>
  );
}
