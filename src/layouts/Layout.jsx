import React from "react";
import Navbar from "../components/Navbar";
import ErrorPage from "../pages/ErrorPage";
import { Switch, Route } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route component={ErrorPage} />
            </Switch>
        </div>
    )
}

export default Layout;