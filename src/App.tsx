import React from "react";
import logo from "./logo.svg";
import "./App.css";

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
          <img src="network-team-icon.png" width="100" alt="" />
        </div>

        <div id="header-info">
          <h1>Teams Networking</h1>
          <h2 id="job-title">CRUD operations example (Create, Read, Update, Delete)</h2>
        </div>
      </div>
    </header>
  );
}
function ContentWrapper() {
  return <section id="main">...</section>;
}

function AppFooter() {
  return (
    <tfoot>
      <tr>
        <td></td>
        <td>
          <input type="text" name="promotion" placeholder="Enter promotion" required />
        </td>
        <td>
          <input type="text" name="members" placeholder="Enter members" required />
        </td>

        <td>
          <input type="text" name="name" placeholder="Enter project name" required />
        </td>
        <td>
          <input type="text" name="url" placeholder="Project URL" required />
        </td>
        <td>
          <button title="add" type="submit">
            ➕
          </button>
          <button title="reset" type="reset">
            ✖
          </button>
        </td>
      </tr>
    </tfoot>
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
