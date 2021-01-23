import React from "react";
import Navbar from "../components/Navbar";
import ErrorPage from "../pages/ErrorPage";
import { Switch, Route } from "react-router-dom";
import BucketListPage from "../pages/BucketListPage"

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact component={BucketListPage} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    )
}

export default Layout;