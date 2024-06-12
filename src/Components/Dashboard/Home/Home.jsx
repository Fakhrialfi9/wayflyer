import "../../../Main/Style/Framework.css";
import "../../../Asset/Style/Dashboard/Home/Home.css";
import "../../../Asset/Style/Dashboard/Home/Section/GreetingUser.css";
import "../../../Asset/Style/Dashboard/Home/Section/TableSessions.css";
import "../../../Asset/Style/Dashboard/Home/Section/ChartSessions.css";

import GreetingUser from "./Section/GreetingUser.jsx";
import TableSessions from "./Section/TableSessions.jsx";
import ChartSessions from "./Section/ChartSessions.jsx";

function Sidebar() {
  return (
    <main id="">
      <section className="MainHome">
        <div className="Container">
          <div className="HomeContent">
            {/* Start Greeting User */}
            <section className="MainGreetingUser">
              <GreetingUser />
            </section>
            {/* End Greeting User */}

            {/* Start Greeting User */}
            <section className="MainTableSessions">
              <TableSessions />
            </section>
            {/* End Greeting User */}

            {/* Start Greeting User */}
            <section className="MainChartSessions">
              <ChartSessions />
            </section>
            {/* End Greeting User */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sidebar;
