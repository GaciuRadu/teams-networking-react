import React from "react";
import logo from "./images/network-team-icon.png";
import "./style.css";

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
    <>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </>
  );
}

export default App;
