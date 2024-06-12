import React from "react";
import { Routes, Route } from "react-router-dom";

import "../Style/Main.css";
import "../Style/Root.css";

import { lazy, Suspense } from "react";
const Sidebar = lazy(() => import("../../Components/Layout/Sidebar/Sidebar.jsx"));
const Navbar = lazy(() => import("../../Components/Layout/Navbar/Navbar.jsx"));
const Pages = lazy(() => import("../../Components/Dashboard/Home/Home.jsx"));

function MainRouter() {
  return (
    <main id="MainLayout">
      <Suspense
        fallback={
          <div className="LazyLoading">
            <h5>Loading...</h5>
          </div>
        }
      >
        <section className="MainLayout">
          <div className="MainContent">
            <div className="Sidebar-LeftContent">
              <Routes>
                <Route path="wayflayer/" Component={Sidebar} />
              </Routes>
            </div>
            <div className="Pages-RightContent">
              <Routes>
                <Route path="wayflayer/" Component={Navbar} />
              </Routes>
              <Routes>
                <Route path="wayflayer/" Component={Pages} />
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
