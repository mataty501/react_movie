import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

function Popup_container(props) {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}>
                Watch
        </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {props.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {props.description}
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Popup_container;