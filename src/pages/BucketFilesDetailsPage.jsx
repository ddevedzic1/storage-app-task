import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "../stores/actions/filesActions"
import { fetchBuckets, setSelectedBucket } from "../stores/actions/bucketsActions"
import BucketFilesDetails from "../components/BucketFilesDetails";

const BucketFilesDetailsPage = ({ match }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.buckets.isLoadingFetchingData);
    const bucketName = useSelector((state) => state.buckets.selectedBucket.name);

    useEffect(() => {
        dispatch(fetchBuckets());
        dispatch(fetchFiles(match.params.bucketId));
    }, [])

    useEffect(() => {
        dispatch(setSelectedBucket((match.params.bucketId)));
    }, [(isLoading && bucketName)])

    return (
        <div>
            <h3 style={{ marginLeft: "1em", marginTop: "1em" }}>{bucketName}</h3>
            <BucketFilesDetails bucketId={match.params.bucketId} />
        </div>)
}

export default BucketFilesDetailsPage;