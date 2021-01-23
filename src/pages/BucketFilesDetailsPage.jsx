import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "../stores/actions/filesActions"
import { setSelectedBucket } from "../stores/actions/bucketsActions"

const BucketFilesDetailsPage = ({ match }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFiles(match.params.bucketId));
        dispatch(setSelectedBucket(match.params.bucketId));
    }, [])

    const bucketName = useSelector((state) => state.buckets.selectedBucket.name);

    return (
        <div>
            <h3 style={{ marginLeft: "1em", marginTop: "1em" }}>{bucketName}</h3>
        </div>)
}

export default BucketFilesDetailsPage;