import React from "react";
import logo from "./images/network-team-icon.png";
import "./App.css";
import "./style.css";

function App_old() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <div id="my-picture">
          <img src={logo} width="100" alt="" />
        </div>

        <div id="header-info">
          <h1>Teams Networking</h1>
          <h2 id="job-title">CRUD operations example (Create, Read, Update, Delete)</h2>
        </div>
      </div>
    </header>
  );
}

function Toolbar() {
  return (
    <div className="tbar">
      <div>
        <button id="removeSelected">❌ Remove selected</button>
      </div>
      <div className="tfill"></div>
      <div>
        <input placeholder="Search" type="search" name="search" id="search" />
        <label htmlFor="search"> 🔎 </label>
      </div>
    </div>
  );
}

function ContentWrapper() {
  return (
    <section id="main">
      <Toolbar />
      TODO table...
    </section>
  );
}

function AppFooter() {
  return (
    <footer>
      <a href="https://github.com/GaciuRadu/teams-networking" target="_blank">
        📃 API Docs{" "}
      </a>
      |<a href="">👨‍💻 Source Code</a>
    </footer>
  );
}

function App() {
  return (
    <div>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </div>
  );
}

export default App;
