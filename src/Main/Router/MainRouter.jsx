import React from "react";
import { Routes, Route } from "react-router-dom";

import "../Style/Main.css";
import "../Style/Root.css";

import LogoWayFlayer from "../../Asset/Logo/Logo-Wayflyer.svg";

import { lazy, Suspense, useState, useEffect } from "react";
const Sidebar = lazy(() => import("../../Components/Layout/Sidebar/Sidebar.jsx"));
const Navbar = lazy(() => import("../../Components/Layout/Navbar/Navbar.jsx"));
const Pages = lazy(() => import("../../Components/Dashboard/Home/Home.jsx"));

function MainRouter() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main id="MainLayout">
      <Suspense
        fallback={
          <div className="LazyLoading">
            <img src={LogoWayFlayer}></img>
            <h5>Wayflayer</h5>
          </div>
        }
      >
        <section className="MainLayout">
          <div className="MainContent">
            <div className="Sidebar-LeftContent">
              <Routes>
                <Route path="/wayflyer" Component={Sidebar} />
              </Routes>
            </div>
            <div className="Pages-RightContent">
              <Routes>
                <Route path="/wayflyer" Component={Navbar} />
              </Routes>
              <Routes>
                <Route path="/wayflyer" Component={Pages} />
              </Routes>
            </div>
          </div>
          <div className="Footer-RightContent"></div>
        </section>
      </Suspense>
    </main>
  );
}

export default MainRouter;
