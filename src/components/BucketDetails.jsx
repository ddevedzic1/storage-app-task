import React from "react";
import { Row, Col } from 'reactstrap';
import { useSelector } from "react-redux";
import filesize from "filesize";

const BucketDetails = () => {
    const bucket = useSelector((state) => state.buckets.selectedBucket);
    const storageSize = useSelector((state) => state.files.storageSize);

    return (
        <div
            className="componentBackground"
            style={{ marginTop: "0" }}
        >
            {
                !(bucket.name && bucket.location.name) ?
                    <p>Loading...</p> :
                    <Row>
                        <Col xs="6" sm="4" md="3">
                            <p className="float-right">Bucket name:</p>
                        </Col>
                        <Col xs="6" sm="8" md="9">
                            <p>{bucket.name}</p>
                        </Col>

                        <Col xs="6" sm="4" md="3">
                            <p className="float-right">Location:</p>
                        </Col>
                        <Col xs="6" sm="8" md="9">
                            <p>{bucket.location.name}</p>
                        </Col>
                    </Row>
            }
            <Row>
                <Col xs="6" sm="4" md="3">
                    <p className="float-right">Storage size:</p>
                </Col>
                <Col xs="6" sm="8" md="9">
                    <p>{filesize(storageSize)}</p>
                </Col>
            </Row>
        </div>
    );
}

export default BucketDetails;