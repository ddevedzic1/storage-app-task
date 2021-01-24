import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from 'reactstrap';
import { openCloseModalBucket, deleteBucket } from "../stores/actions/bucketsActions"
import DeleteWarningMessage from "./DeleteWarningMessage";

const DeleteBucket = (props) => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.buckets.isModalOpen);
    return (
        <div>
            <Button
                color="danger"
                className="float-right"
                style={{ position: "absolute", right: "0", marginBottom: "0.25em" }}
                onClick={() => { dispatch(openCloseModalBucket()) }}
            >
                Delete Bucket
            </Button>
            <DeleteWarningMessage
                type="bucket"
                isOpenModal={isModalOpen}
                closeModal={() => { dispatch(openCloseModalBucket()) }}
                delete={() => {
                    dispatch(deleteBucket(props.bucketId))
                    dispatch(openCloseModalBucket())
                }}
            />
        </div>
    )
}

export default DeleteBucket;