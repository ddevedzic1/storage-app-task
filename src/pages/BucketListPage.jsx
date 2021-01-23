import React from "react";
import BucketList from "../components/BucketList";
import NewBucketForm from "../components/NewBucketForm";
import { useSelector } from "react-redux";

const BucketListPage = () => {
    const isNewBucketFormOpen = useSelector((state) => state.buckets.isNewBucketFormOpen);
    return (
        <div>
            <h3 style={{ marginLeft: "1em", marginTop: "1em" }}>Bucket list</h3>
            {isNewBucketFormOpen ? <NewBucketForm /> : null}
            <BucketList />
        </div>)

}

export default BucketListPage;