import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginScreen } from "../components/Login/LoginScreen";
import { MenuRouter } from "./MenuRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/login" component={LoginScreen} />
          <PrivateRoute path="/" component={MenuRouter} />
        </Switch>
      </div>
    </Router>
  );
};