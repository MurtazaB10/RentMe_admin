import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

const LoginLayoutRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  const isLog = localStorage.getItem("user");
  return (
    <Route
      {...rest}
      render={(matchProps) =>
        isLog ? (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        ) : (
          <Redirect to="/Login" />
        )
      }
    />
  );
};

export default LoginLayoutRoute;
