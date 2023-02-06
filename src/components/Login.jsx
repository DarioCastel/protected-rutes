import React from "react";
import AuthConsumer from "../assets/hooks/auth";

const login = () => {
  const [authed,dispatch] = AuthConsumer();

  return (
    <>
      <div>
        <h2>Login</h2>
      </div>
      <section>
        <button
        onClick={()=>{
          dispatch({type:"login"})
        }

        }
        >Iniciar sesion</button>
      </section>
    </>
  );
};

export default login;
