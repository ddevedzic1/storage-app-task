import React, { useState, useEffect } from "react";
import { Form, Col, Label, FormGroup, Input, Button, Row, Container } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { fetchLocations } from "../stores/actions/locationsActions"
import { createBucket, closeNewBucketForm } from "../stores/actions/bucketsActions"
import "./ComponentStyle.css";

const NewBucketForm = () => {
    const dispatch = useDispatch();
    const locations = useSelector((state) => state.locations);
    const [newBucketName, setNewBucketName] = useState("");
    const [newBucketLocation, setNewBucketLocation] = useState("");

    useEffect(() => {
        dispatch(fetchLocations());
    }, [])

    const submitData = (e) => {
        if (!!(newBucketName && newBucketLocation)) {
            let newBucket = {
                "name": newBucketName,
                "location": newBucketLocation
            }
            dispatch(createBucket(newBucket));
            setNewBucketName("");
            setNewBucketLocation("");
            e.preventDefault();
            dispatch(closeNewBucketForm());
        }
    }
    return (
        <div style={{ margin: "2em" }}>
            <p>Create New Bucket</p>
            {locations.isLoading ?
                <p>Loading...</p> :
                locations.error ?
                    <p>Error...</p> :
                    <Form
                        className="form"
                        style={{ background: "#ffffff", padding: "2em" }}
                        onSubmit={e => submitData(e)}
                    >
                        <Container>
                            <Row>
                                <Col xs="6">
                                    <FormGroup>
                                        <Label for="bucketName">Bucket name*</Label>
                                        <Input
                                            type="text"
                                            name="bucket"
                                            id="bucketName"
                                            required
                                            placeholder="Enter bucket name"
                                            onChange={e => { setNewBucketName(e.target.value) }}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col xs="6">
                                    <FormGroup>
                                        <Label for="locations">Bucket Location*</Label>
                                        <Input
                                            type="select"
                                            id="locations"
                                            name="locations"
                                            defaultValue=""
                                            onChange={e => { setNewBucketLocation(e.target.value) }}
                                            required
                                        >
                                            <option value="" disabled>
                                                Select location
                                            </option>
                                            {locations.data.map(location => {
                                                return (
                                                    <option key={location.id} value={location.id}>
                                                        {location.name}
                                                    </option>
                                                );
                                            })
                                            }
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="12">
                                    <Button color="dark">Create Bucket</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Form>}
        </div>
    )
}

export default NewBucketForm;