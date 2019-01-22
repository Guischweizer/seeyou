import React from "react";
import {
    Dashboard,
    DashboardMenu,
    DashboardButton
} from "../components/index";

const HomePage = () => (
    <Dashboard>
        <DashboardMenu title="See You">
            <DashboardButton to="/seeyou">See You</DashboardButton>
        </DashboardMenu>
    </Dashboard>
);

export default HomePage;
