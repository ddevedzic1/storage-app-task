import React, { useEffect } from "react";
import { Container, Row, Col, Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import "./ComponentStyle.css";
import { setSelectedFile } from "../stores/actions/filesActions"
import filesize from "filesize";
import DeleteFile from "./DeleteFile";
import UploadFile from "./UploadFile";

const BucketFiles = (props) => {
    const dispatch = useDispatch();
    const numberOfFiles = useSelector((state) => state.files.numberOfFiles);
    const filesData = useSelector((state) => state.files.data);
    const isLoading = useSelector((state) => state.files.isLoadingFetchingData);
    useEffect(() => {
        dispatch(setSelectedFile(""))
    }, [])
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
                                <UploadFile bucketId={props.bucketId} />
                                <DeleteFile bucketId={props.bucketId} />
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
                                                        <Button
                                                            color="link"
                                                            onClick={() => { dispatch(setSelectedFile(file.name)) }}
                                                        >
                                                            {file.name}
                                                        </Button>
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