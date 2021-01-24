import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const DeleteWarningMessage = (props) => {
    return (
        <div>
            <Modal isOpen={props.isOpenModal} centered>
                <ModalBody>Do you really want to delete this {props.type}?</ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={props.delete}>
                        Delete
            </Button>
                    <Button color="secondary" onClick={props.closeModal}>
                        Cancel
            </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default DeleteWarningMessage;