import React from "react";
import { Button } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { openCloseModalFile, setSelectedFile, deleteFile } from "../stores/actions/filesActions"
import DeleteWarningMessage from "./DeleteWarningMessage";

const DeleteFile = (props) => {
    const dispatch = useDispatch();
    const isModalFileOpen = useSelector((state) => state.files.isModalOpen);
    const selectedFile = useSelector((state) => state.files.selectedFile);
    return (
        <div>
            <Button
                outline
                color="danger"
                className="float-right"
                style={{ margin: "0.5em" }}
                onClick={() => { dispatch(openCloseModalFile()) }}
            >
                Delete Object
            </Button>
            <DeleteWarningMessage
                type="object"
                isOpenModal={isModalFileOpen}
                closeModal={() => { dispatch(openCloseModalFile()) }}
                delete={() => {
                    if (!!selectedFile)
                        dispatch(deleteFile(props.bucketId, selectedFile))
                    else alert("Click on the name of the file you want to delete")
                    dispatch(openCloseModalFile())
                    dispatch(setSelectedFile(""))
                }}
            />
        </div>
    )
}

export default DeleteFile;