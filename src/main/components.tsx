import { TeamsTable } from "../teams/TeamsTable";

const Toolbar = () => (
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

export function ContentWrapper() {
  return (
    <section id="main">
      <Toolbar />
      <TeamsTable />
    </section>
  );
}
