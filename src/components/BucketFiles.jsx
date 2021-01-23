import React from "react";
import {
    Container,
    Row,
    Col,
    Table,
    Button,
    Label,
    Input,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import "./ComponentStyle.css";

const BucketFiles = () => {
    const numberOfFiles = useSelector((state) => state.files.numberOfFiles);
    const filesData = useSelector((state) => state.files.data);
    const isLoading = useSelector((state) => state.files.isLoadingFetchingData);

    return (
        <div
            className="componentBackground"
            style={{ marginTop: "0" }}
        >
            {
                isLoading ?
                    <h5>Loading...</h5> :
                    <Container>
                        <Row>
                            <Col xs="6">
                                <p>All files ({numberOfFiles})</p>
                            </Col>
                            <Col xs="6">
                                <Label
                                    className="btn btn-outline-secondary float-right"
                                    style={{ margin: "0.5em" }}
                                >
                                    Upload Object
                    <Input type="file"
                                        hidden />
                                </Label>
                                <Button
                                    outline
                                    color="danger"
                                    className="float-right"
                                    style={{ margin: "0.5em" }}
                                >
                                    Delete Object
                                </Button>
                            </Col>
                            <Col xs="12">
                                <Table
                                    style={{ borderStyle: "solid", borderWidth: "2px" }}>
                                    <thead className="thead-light">
                                        <tr>
                                            <th>Name</th>
                                            <th>Last modified</th>
                                            <th>Size</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filesData.map(file => {
                                            return (
                                                <tr key={file.last_modified}>
                                                    <td>
                                                        <FontAwesomeIcon
                                                            icon={faFileAlt}
                                                            style={{ marginRight: "0.75em", fontSize: "1.5em" }}
                                                        />
                                                        <p>{file.name}</p>
                                                    </td>
                                                    <td>{new Date(file.last_modified).toLocaleDateString()}</td>
                                                    <td>{filesize(file.size)}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
            }
        </div>)
}

export default BucketFiles;