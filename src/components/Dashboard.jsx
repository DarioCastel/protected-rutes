import React from "react";
import { Outlet } from "react-router";
import Nav from "./Nav";
const Dashboard = () => {
  return (
    <>
      <div>
        <h1>Pagina Principal</h1>
        <Nav />
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Dashboard;
