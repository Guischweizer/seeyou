import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import WebCam from "./functions/WebCam/WebCam";

const Routes = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/seeyou" exact component={WebCam} />

    </Switch>
);
export default Routes;