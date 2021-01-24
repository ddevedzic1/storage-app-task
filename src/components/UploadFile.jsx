import React from "react";
import { Label, Input } from 'reactstrap';
import { useDispatch } from "react-redux";
import { addFile } from "../stores/actions/filesActions"

const UploadFile = (props) => {
    const dispatch = useDispatch();
    return (
        <div>
            <Label
                className="btn btn-outline-secondary float-right"
                style={{ margin: "0.5em" }}
            >
                Upload Object
                                <Input
                    type="file"
                    onChange={(e) => { dispatch(addFile(e.target.files[0], props.bucketId)) }}
                    hidden
                />
            </Label>
        </div>
    )
}

export default UploadFile;