import React from "react";
import { Outlet } from "react-router";
import AuthConsumer from "../assets/hooks/auth";

const Home = () => {
  const auth= AuthConsumer();
  return (
    <>
      <h2>Home component</h2>
    </>
  );
};

export default Home;
