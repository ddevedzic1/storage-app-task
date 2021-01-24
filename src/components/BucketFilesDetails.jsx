import React, { useState } from "react";
import { Button, Nav, NavLink, NavItem, TabContent, TabPane, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import BucketFiles from "./BucketFiles";
import BucketDetails from "./BucketDetails";
import { useSelector, useDispatch } from "react-redux";
import { openCloseModalBucket, deleteBucket } from "../stores/actions/bucketsActions"
import DeleteWarningMessage from "./DeleteWarningMessage";


const BucketFilesDetails = (props) => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.buckets.isModalOpen);
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
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
                        ? <div>
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