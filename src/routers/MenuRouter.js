import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Hero } from "../components/Hero"; 
import { HomeScreen } from "../components/Home/HomeScreen";

export const MenuRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/hero/:heroId" component={Hero } />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
