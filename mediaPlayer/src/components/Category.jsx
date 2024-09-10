import { React, useState } from 'react'
import { Modal, FloatingLabel, Form, Button } from 'react-bootstrap';

const Category = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="d-flex justify-content-around">
                <h5>All Categories</h5>
                <button style={{ width: '50px', height: '50px' }} onClick={handleShow} className='btn btn-info rounded circle fw-bolder fd-5'>+</button>
            </div>

            <div className="container-fluid mt-3">
                <div className="border rounded p-3 mb-2">
                    <div className="d-flex justify-content-between">
                        <h5>CategoryName</h5>
                        <button className='btn'> <i className='fa-solid  fa-trash text-danger'></i></button>
                    </div>
                    <div className="row mt-2">
                        <div className="col-lg-6">
                            
                        </div>

                    </div>
                </div>
            </div>


            <Modal centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Categories Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        controlId="floatingInputCaption"
                        label="Video Caption"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Video Caption" />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Category