import React from "react";
import { Outlet, NavLink } from "react-router";
import AuthConsumer from "../assets/hooks/auth";

const Home = () => {
  const [,dispatch]= AuthConsumer();
  return (
    <>
      <h2>Home component</h2>
      <button
        onClick={()=>{
          dispatch({type:"logout"})
        }

        }
        >Cerrar sesión</button>
    </>
  );
};

export default Home;
