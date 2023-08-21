function TeamRow(team) {
  const { id, url } = team;
  const displayUrl = url.startsWith("https://github.com/") ? url.substring(19) : url;

  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <input type="checkbox" name="selected" value="${id}" />
      </td>
      <td>{team.promotion}</td>
      <td>{team.members}</td>
      <td>{team.name}</td>
      <td>
        <a href="${url}" target="_blank">
          {" "}
          {displayUrl}{" "}
        </a>
      </td>
      <td>
        <button data-id="${id}" type="button" className="action-btn edit-btn" title="edit">
          ✎
        </button>
        <button data-id="${id}" type="button" className="action-btn delete-btn" title="delete">
          🗑️
        </button>
      </td>
    </tr>
  );
}

export function TeamsTable() {
  const teams = [
    {
      id: "f5rvqm1689178295237",
      promotion: "Html",
      members: "Gaciu Radu",
      name: "Teams",
      url: "https://github.com/GaciuRadu/teams-networking"
    },
    {
      id: "fcrsi71691171132868",
      promotion: "---REACT",
      members: "Gaciu Radu",
      name: "Teams",
      url: "https://github.com/GaciuRadu/teams-networking"
    },
    {
      id: "4cvef1691171145666",
      promotion: "js",
      members: "FastTrackIT",
      name: "Web",
      url: "https://github.com/nmatei/teams-networking-react"
    },
    {
      id: "r74q2q1691588184869",
      promotion: "☺️☺️css",
      members: "Gaciu Radu",
      name: "Teams",
      url: "https://github.com/nmatei/teams-networking-react"
    },
    {
      id: "5w6n4m1691588197285",
      promotion: "REACT",
      members: "Gaciu Radu",
      name: "Teams",
      url: "https://github.com/GaciuRadu/teams-networking"
    },
    {
      id: "6ivdo1691588209551",
      promotion: "js1",
      members: "FastTrackIT",
      name: "Web",
      url: "https://github.com/nmatei/teams-networking-react"
    },
    {
      id: "2epjvt1691593956038",
      promotion: "html",
      members: "Gaciu Radu",
      name: "Web",
      url: "https://github.com/nmatei/teams-networking-react"
    }
  ];

  console.info("render table", teams);

  return (
    <form id="teamsForm" action="" method="get">
      <table id="teamsTable">
        <colgroup>
          <col className="select-all-col" />
          <col style={{ width: "20%" }} />
          <col style={{ width: "40%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "15%" }} />
          <col className="table-actions" />
        </colgroup>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="selectAll" id="selectAll" />
            </th>
            <th>Promotion</th>
            <th>Members</th>
            <th>Project Name</th>
            <th>Project URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{teams.map(team => TeamRow(team))}</tbody>
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
              <button title="add" className="action-btn" type="submit">
                ➕
              </button>
              <button title="reset" className="action-btn" type="reset">
                ✖
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}
