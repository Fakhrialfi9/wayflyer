import "../../../../Main/Style/Framework.css";
import "../../../../Asset/Style/Dashboard/Home/Section/TableSessions.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import DataTable from "../../../../Storage/Database/DataTable";

function TableSessions() {
  return (
    <div className="TableSessions">
      <div className="TableSessionsContent">
        <div className="CardTableSessionsContent shadow-2xl">
          {/* Start Table Content Top */}
          <div className="CardTableSessionsContentTop">
            <div className="CardTableSessionsContentTop-Left">
              <a>
                <div className="BoxIconApps shadow-md">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                Session
              </a>
            </div>
            <div className="CardTableSessionsContentTop-Right">
              <button>This Month</button>
              <button>...</button>
            </div>
          </div>
          {/* End Table Content Top */}

          {/* Start Table Content Top */}
          <div className="CardTableSessionsContentBottom">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Session</th>
                  <th>New Users</th>
                  <th>Bounce Rate</th>
                  <th>Average</th>
                  <th>Page View</th>
                  <th>Conversion Rate</th>
                  <th>Goal 1</th>
                  <th>Goal 2</th>
                </tr>
              </thead>
              <tbody>
                {DataTable.map((row, index) => (
                  <tr key={index}>
                    <td>{row.period}</td>
                    <td>
                      <a>{row.session}</a> <FontAwesomeIcon icon={row.trend === "up" ? faAnglesUp : faAnglesDown} className={row.trend} />
                    </td>
                    <td>
                      <a>{row.newUsers}</a> <FontAwesomeIcon icon={row.trend === "up" ? faAnglesUp : faAnglesDown} className={row.trend} />
                    </td>
                    <td>
                      <a>{row.bounceRate}</a> <FontAwesomeIcon icon={row.trend === "up" ? faAnglesUp : faAnglesDown} className={row.trend} />
                    </td>
                    <td>
                      <a> {row.average} </a>
                      <FontAwesomeIcon icon={row.trend === "up" ? faAnglesUp : faAnglesDown} className={row.trend} />
                    </td>
                    <td>
                      <a> {row.pageview} </a>
                      <FontAwesomeIcon icon={row.trend === "up" ? faAnglesUp : faAnglesDown} className={row.trend} />
                    </td>
                    <td>
                      <a> {row.conversionrate} </a>
                      <FontAwesomeIcon icon={row.trend === "up" ? faAnglesUp : faAnglesDown} className={row.trend} />
                    </td>
                    <td>
                      <a> {row.goal1} </a>
                      <FontAwesomeIcon icon={row.trend === "up" ? faAnglesUp : faAnglesDown} className={row.trend} />
                    </td>
                    <td>
                      <a> {row.goal2}</a> <FontAwesomeIcon icon={row.trend === "up" ? faAnglesUp : faAnglesDown} className={row.trend} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* End Table Content Bottom */}
        </div>
      </div>
    </div>
  );
}

export default TableSessions;
