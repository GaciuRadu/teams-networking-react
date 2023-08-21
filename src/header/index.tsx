import logo from "../images/network-team-icon.png";
import "./style.css";

export default function AppHeader() {
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
