import React from "react";
import { Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import OrderList from "../pages/Order/OrderList";
import Feedback from "../pages/Feedback/Feedback";
import Query from "../pages/Query/Query";
import ProductList from "../pages/Product/ProductList";
import Login from "../components/Auth/Login";
import LoginLayoutRoute from "./LoginLayoutRoutes";
import BasicLayout from "../layout/BasicLayout";
import LoginLayout from "../layout/LoginLayout";
import LoginRoutes from "./LoginRoutes";

const BasicRoutes = () => {
  return (
    <Switch>
      <LoginLayoutRoute
        exact
        path="/"
        component={Dashboard}
        layout={BasicLayout}
      />

      <LoginLayoutRoute
        path="/order"
        component={OrderList}
        layout={BasicLayout}
      />
      <LoginLayoutRoute
        path="/Productlist"
        component={ProductList}
        layout={BasicLayout}
      />
      <LoginLayoutRoute
        path="/feedback"
        component={Feedback}
        layout={BasicLayout}
      />

      <LoginLayoutRoute path="/query" component={Query} layout={BasicLayout} />
      <LoginRoutes path="/Login" component={Login} layout={LoginLayout} />
    </Switch>
  );
};

export default BasicRoutes;
