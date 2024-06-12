import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainRouter from "../Router/MainRouter";

function App() {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export default App;
