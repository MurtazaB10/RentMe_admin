import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

function LoginRoutes({ component: Component, layout: Layout, ...rest }) {
  const isLog = localStorage.getItem("user");
  return (
    <Route
      {...rest}
      render={(matchProps) =>
        isLog ? (
          <Redirect to="/" />
        ) : (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        )
      }
    />
  );
}

export default LoginRoutes;
