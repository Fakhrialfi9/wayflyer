import React, { PureComponent } from "react";
import { ComposedChart, LineChart, Line, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

import "../../../../Main/Style/Framework.css";
import "../../../../Asset/Style/Dashboard/Home/Section/ChartSessions.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

import Insights from "../../../../Asset/Icon/DashBoard.svg";
import DataChart from "../../../../Storage/Database/DataChart.jsx";

function ChartSessions() {
  return (
    <div className="ChartSessions">
      <div className="ChartSessionsContent">
        <div className="CardChartSessionsContent shadow-2xl">
          <div className="CardChartSessionsContentTop">
            <div className="CardChartSessionsContentTop-Left">
              <a>
                <div className="BoxIconApps shadow-md">
                  <FontAwesomeIcon icon={faBarsStaggered} />
                </div>
                Sessions & Bounce Rate - Top 5 Countries
              </a>
            </div>
            <div className="CardChartSessionsContentTop-Right">
              <button>This Week</button>
              <button>...</button>
            </div>
          </div>
          <div className="CardChartSessionsContentCenter">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart layout="vertical" width={300} height={300} data={DataChart} margin={{ top: 0, right: 0, left: 0, bottom: -30 }}>
                <XAxis type="number" axisLine={false} tickLine={false} tick={false} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="pv" barSize={12.5} fill="#4fddb0" />
                <Bar dataKey="uv" barSize={12.5} fill="#ffc060" background={{ fill: "#f0f1f4" }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="diver"></div>
          <div className="CardChartSessionsContentBottom">
            <div className="BarSessions">
              <span> </span>
              <h5>Sessions</h5>
            </div>
            <div className="BarBounceRate">
              <span> </span>
              <h5>Bounce Rate</h5>
            </div>
          </div>
        </div>
        <div className="CardChartSessionsContent shadow-2xl">
          <div className="CardChartSessionsContentTop">
            <div className="CardChartSessionsContentTop-Left">
              <a>
                <div className="BoxIconApps shadow-md">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                Sessions & Bounce Rate by Channel
              </a>
            </div>
            <div className="CardChartSessionsContentTop-Right">
              <button>Last 2 Week</button>
              <button>...</button>
            </div>
          </div>
          <div className="CardChartSessionsContentCenter">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart width={300} height={300} data={DataChart} margin={{ top: 0, right: 30, left: -45, bottom: -10 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} tick={false} />
                <Tooltip />

                <Line dataKey="pv" stroke="#4fddb0" activeDot={{ r: 8 }} />
                <Line dataKey="uv" stroke="#ffc060" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="diver"></div>
          <div className="CardChartSessionsContentBottom">
            <div className="BarSessions">
              <span> </span>
              <h5>Sessions</h5>
            </div>
            <div className="BarBounceRate">
              <span> </span>
              <h5>Bounce Rate</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartSessions;
