import React, { useEffect } from "react";
import { Container, Row, Col, Button, Table } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchBuckets } from "../stores/actions/bucketsActions"
import { Link } from "react-router-dom";
import "./ComponentStyle.css";

const BucketList = () => {
    const dispatch = useDispatch();
    const buckets = useSelector((state) => state.buckets);

    useEffect(() => {
        dispatch(fetchBuckets());
    }, [])

    return <div className="componentBackground">
        {buckets.isLoadingFetchingData ?
            <p>Loading...</p> :
            buckets.errorFetchingData ?
                <p>{buckets.errorFetchingData}</p> :
                <Container>
                    <Row>
                        <Col xs="6">
                            <p>All buckets ({buckets.numberOfBuckets})</p>
                        </Col>
                        <Col xs="6"><Button
                            color="dark"
                            className="float-right"
                        >
                            Create New Bucket
                    </Button>
                        </Col>
                        <Col xs="12">
                            <Table style={{ borderStyle: "solid", borderWidth: "2px" }}>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {buckets.data.map(bucket => {
                                        return (
                                            <tr key={bucket.id}>
                                                <td>
                                                    <Link to={`/buckets/${bucket.id}`}>
                                                        {bucket.name}
                                                    </Link>
                                                </td>
                                                <td>{bucket.location.name}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
        }
    </div>
}

export default BucketList;