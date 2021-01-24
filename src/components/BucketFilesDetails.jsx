import React, { useState } from "react";
import { Nav, NavLink, NavItem, TabContent, TabPane, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import BucketFiles from "./BucketFiles";
import BucketDetails from "./BucketDetails";
import DeleteBucket from "./DeleteBucket";
import { useSelector } from "react-redux";

const BucketFilesDetails = (props) => {
    const isLoadingDeleteFile = useSelector((state) => state.files.isLoadingDeleteFile);
    const isLoadingDeleteBucket = useSelector((state) => state.buckets.isLoadingDeleteBucket);
    const isLoadingUploadFile = useSelector((state) => state.files.isLoadingAddFile);
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div>
            { isLoadingDeleteFile || isLoadingDeleteBucket || isLoadingUploadFile ?
                <p style={{ textAlign: "center" }}>Loading...</p>
                : null
            }
            <Nav tabs style={{ position: "relative", margin: "2em", marginBottom: "0" }}>
                <NavItem>
                    <NavLink
                        style={{ cursor: "pointer", color: "#111" }}
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Files
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        style={{ cursor: "pointer", color: "#111" }}
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Bucket details
                    </NavLink>
                </NavItem>
                {
                    activeTab === '2'
                        ?
                        <div>
                            <DeleteBucket bucketId={props.bucketId} />
                        </div>
                        : null
                }
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <BucketFiles bucketId={props.bucketId} />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <BucketDetails bucketId={props.bucketId} />
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>)
}

export default BucketFilesDetails;