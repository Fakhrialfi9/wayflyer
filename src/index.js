import React from "react";
import ReactDOM from "react-dom/client";
import "./Main/Style/Root.css";
import "./Main/Style/Main.css";
import "./Main/Style/Framework.css";
import App from "./Main/App/App";
import reportWebVitals from "./Reports/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
