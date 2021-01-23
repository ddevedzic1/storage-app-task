import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import BucketListPage from "../pages/BucketListPage"
import BucketFilesDetailsPage from "../pages/BucketFilesDetailsPage"
import ErrorPage from "../pages/ErrorPage";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact component={BucketListPage} />
                <Route path="/buckets/:bucketId" component={BucketFilesDetailsPage} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    )
}

export default Layout;